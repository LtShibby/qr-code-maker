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
      <div className="flex items-center justify-center h-64 bg-brand-panel/50 rounded-xl border-2 border-dashed border-brand-border">
        <div className="text-center">
          <div className="text-brand-sub text-4xl mb-2">📱</div>
          <p className="text-brand-sub">Enter text or URL to generate QR code</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-center p-6 bg-white rounded-xl border border-brand-border shadow-soft max-w-full overflow-hidden">
        <div 
          ref={qrRef} 
          className="qr-code-container flex items-center justify-center max-w-full"
          style={{ 
            maxWidth: '100%',
            maxHeight: '400px',
            overflow: 'hidden'
          }}
        />
      </div>
      
      <div className="text-center text-sm text-brand-sub space-y-1">
        <p>Size: {settings.size}px × {settings.size}px</p>
        <p>Error Correction: {settings.errorCorrectionLevel}</p>
        <p>Dot Style: {settings.dotType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
        <p>Corners: {settings.cornerSquareType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} / {settings.cornerDotType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</p>
        {settings.logo && <p className="text-brand-blue">With Logo</p>}
      </div>
    </div>
  )
}
