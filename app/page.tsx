'use client'

import { useQRCode } from '@/hooks/useQRCode'
import QRCodeForm from '@/components/QRCodeForm'
import QRCodePreview from '@/components/QRCodePreview'

export default function Home() {
  const { settings, updateSettings, qrCode, downloadQRCode, isLoading } = useQRCode()

  return (
    <div className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-heading font-extrabold mb-4 bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">
            WizeQR
          </h1>
          <p className="text-brand-sub text-lg mb-6 max-w-2xl mx-auto">
            Generate and customize beautiful QR codes locally in your browser. Free, private, no watermarks.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <span className="px-4 py-2 bg-brand-blue/20 text-brand-blue rounded-full border border-brand-blue/30">6 Dot Styles</span>
            <span className="px-4 py-2 bg-brand-blue/20 text-brand-blue rounded-full border border-brand-blue/30">3 Corner Types</span>
            <span className="px-4 py-2 bg-brand-blue/20 text-brand-blue rounded-full border border-brand-blue/30">Logo Support</span>
            <span className="px-4 py-2 bg-brand-blue/20 text-brand-blue rounded-full border border-brand-blue/30">PNG & SVG Export</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="rounded-2xl bg-brand-panel/70 border border-brand-border p-8 shadow-soft">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              Customize Your QR Code
            </h2>
            <QRCodeForm settings={settings} onSettingsChange={updateSettings} />
          </div>

          {/* Preview Section */}
          <div className="rounded-2xl bg-brand-panel/70 border border-brand-border p-8 shadow-soft">
            <h2 className="text-2xl font-heading font-bold text-white mb-6">
              Preview
            </h2>
            <div className="max-w-full overflow-hidden">
              <QRCodePreview qrCode={qrCode} settings={settings} />
            </div>
            
            {/* Download Buttons */}
            <div className="mt-8 space-y-4">
              <button
                onClick={() => downloadQRCode('png')}
                disabled={isLoading || !settings.data.trim()}
                className="w-full bg-gradient-to-r from-brand-blue to-brand-blue2 hover:from-brand-blue/90 hover:to-brand-blue2/90 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-white font-medium py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download PNG</span>
                  </>
                )}
              </button>
              
              <button
                onClick={() => downloadQRCode('svg')}
                disabled={isLoading || !settings.data.trim()}
                className="w-full bg-gradient-to-r from-brand-yellow to-brand-yellow/80 hover:from-brand-yellow/90 hover:to-brand-yellow/70 disabled:from-gray-600 disabled:to-gray-700 disabled:cursor-not-allowed text-black font-medium py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    <span>Generating...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Download SVG</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
