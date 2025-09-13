'use client'

import { useQRCode } from '@/hooks/useQRCode'
import QRCodeForm from '@/components/QRCodeForm'
import QRCodePreview from '@/components/QRCodePreview'

export default function Home() {
  const { settings, updateSettings, qrCode, downloadQRCode, isLoading } = useQRCode()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            QR Code Maker
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Generate and customize beautiful QR codes with advanced styling options
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">6 Dot Styles</span>
            <span className="px-3 py-1 bg-green-100 dark:bg-green-900 rounded-full">3 Corner Types</span>
            <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 rounded-full">Logo Support</span>
            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 rounded-full">PNG & SVG Export</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Customize Your QR Code
              </h2>
              <QRCodeForm settings={settings} onSettingsChange={updateSettings} />
            </div>

            {/* Preview Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                Preview
              </h2>
              <QRCodePreview qrCode={qrCode} settings={settings} />
              
              {/* Download Buttons */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => downloadQRCode('png')}
                  disabled={isLoading || !settings.data.trim()}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
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
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
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

        {/* Footer */}
        <footer className="text-center mt-12 text-gray-500 dark:text-gray-400">
          <p>Built with Cursor 🦉 WozWize Edition</p>
        </footer>
      </div>
    </div>
  )
}
