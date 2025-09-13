'use client'

import { useEffect, useRef } from 'react'
import QRCodeStyling from 'qr-code-styling'
import { QRCodeSettings } from '@/hooks/useQRCode'

interface QRCodePreviewProps {
  qrCode: QRCodeStyling | null
  settings: QRCodeSettings
}

export default function QRCodePreview({ qrCode, settings }: QRCodePreviewProps) {
  const qrRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (qrCode && qrRef.current) {
      qrRef.current.innerHTML = ''
      qrCode.append(qrRef.current)
    }
  }, [qrCode])

  if (!settings.data.trim()) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 dark:bg-gray-800 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600">
        <div className="text-center">
          <div className="text-gray-400 dark:text-gray-500 text-4xl mb-2">📱</div>
          <p className="text-gray-500 dark:text-gray-400">Enter text or URL to generate QR code</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center p-4 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
        <div ref={qrRef} className="flex items-center justify-center" />
      </div>
      
      <div className="text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Size: {settings.size}px × {settings.size}px</p>
        <p>Error Correction: {settings.errorCorrectionLevel}</p>
        <p>Dot Style: {settings.dotType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
        <p>Corners: {settings.cornerSquareType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} / {settings.cornerDotType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
        {settings.logo && <p>With Logo</p>}
      </div>
    </div>
  )
}
