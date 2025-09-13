'use client'

import { useState, useEffect, useCallback } from 'react'
import QRCodeStyling from 'qr-code-styling'

export interface QRCodeSettings {
  data: string
  foregroundColor: string
  backgroundColor: string
  errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H'
  size: number
  logo?: string
  dotType: 'rounded' | 'dots' | 'classy' | 'classy-rounded' | 'square' | 'extra-rounded'
  cornerSquareType: 'square' | 'extra-rounded' | 'dot'
  cornerDotType: 'square' | 'dot'
}

const defaultSettings: QRCodeSettings = {
  data: 'https://example.com',
  foregroundColor: '#000000',
  backgroundColor: '#ffffff',
  errorCorrectionLevel: 'M',
  size: 256,
  logo: undefined,
  dotType: 'rounded',
  cornerSquareType: 'extra-rounded',
  cornerDotType: 'dot'
}

export const useQRCode = () => {
  const [settings, setSettings] = useState<QRCodeSettings>(defaultSettings)
  const [qrCode, setQrCode] = useState<QRCodeStyling | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Load settings from localStorage on mount
  useEffect(() => {
    const savedSettings = localStorage.getItem('qr-code-settings')
    if (savedSettings) {
      try {
        const parsed = JSON.parse(savedSettings)
        setSettings({ ...defaultSettings, ...parsed })
      } catch (error) {
        console.error('Failed to parse saved settings:', error)
      }
    }
  }, [])

  // Save settings to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('qr-code-settings', JSON.stringify(settings))
  }, [settings])

  // Create QR code instance
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const qr = new QRCodeStyling({
        width: settings.size,
        height: settings.size,
        type: 'svg',
        data: settings.data,
        image: settings.logo,
        dotsOptions: {
          color: settings.foregroundColor,
          type: settings.dotType
        },
        backgroundOptions: {
          color: settings.backgroundColor,
        },
        cornersSquareOptions: {
          color: settings.foregroundColor,
          type: settings.cornerSquareType
        },
        cornersDotOptions: {
          color: settings.foregroundColor,
          type: settings.cornerDotType
        },
        imageOptions: {
          crossOrigin: 'anonymous',
          margin: 20
        }
      })
      setQrCode(qr)
    }
  }, [settings])

  const updateSettings = useCallback((newSettings: Partial<QRCodeSettings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }))
  }, [])

  const downloadQRCode = useCallback(async (format: 'png' | 'svg') => {
    if (!qrCode) return

    setIsLoading(true)
    try {
      if (format === 'png') {
        const canvas = await qrCode.getRawData('png')
        if (canvas) {
          let arrayBuffer: ArrayBuffer
          if (canvas instanceof Blob) {
            arrayBuffer = await canvas.arrayBuffer()
          } else {
            // Handle Buffer case - ensure we get a proper ArrayBuffer
            const buffer = canvas.buffer.slice(canvas.byteOffset, canvas.byteOffset + canvas.byteLength)
            arrayBuffer = buffer instanceof ArrayBuffer ? buffer : new ArrayBuffer(buffer.byteLength)
            if (!(buffer instanceof ArrayBuffer)) {
              new Uint8Array(arrayBuffer).set(new Uint8Array(buffer))
            }
          }
          const blob = new Blob([arrayBuffer], { type: 'image/png' })
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `qr-code-${Date.now()}.png`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
        }
      } else {
        const svg = await qrCode.getRawData('svg')
        if (svg) {
          let arrayBuffer: ArrayBuffer
          if (svg instanceof Blob) {
            arrayBuffer = await svg.arrayBuffer()
          } else {
            // Handle Buffer case - ensure we get a proper ArrayBuffer
            const buffer = svg.buffer.slice(svg.byteOffset, svg.byteOffset + svg.byteLength)
            arrayBuffer = buffer instanceof ArrayBuffer ? buffer : new ArrayBuffer(buffer.byteLength)
            if (!(buffer instanceof ArrayBuffer)) {
              new Uint8Array(arrayBuffer).set(new Uint8Array(buffer))
            }
          }
          const blob = new Blob([arrayBuffer], { type: 'image/svg+xml' })
          const url = URL.createObjectURL(blob)
          const link = document.createElement('a')
          link.href = url
          link.download = `qr-code-${Date.now()}.svg`
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          URL.revokeObjectURL(url)
        }
      }
    } catch (error) {
      console.error('Failed to download QR code:', error)
    } finally {
      setIsLoading(false)
    }
  }, [qrCode])

  return {
    settings,
    updateSettings,
    qrCode,
    downloadQRCode,
    isLoading
  }
}
