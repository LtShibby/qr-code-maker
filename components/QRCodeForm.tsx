'use client'

import { QRCodeSettings } from '@/hooks/useQRCode'

interface QRCodeFormProps {
  settings: QRCodeSettings
  onSettingsChange: (settings: Partial<QRCodeSettings>) => void
}

export default function QRCodeForm({ settings, onSettingsChange }: QRCodeFormProps) {
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        const result = e.target?.result as string
        onSettingsChange({ logo: result })
      }
      reader.readAsDataURL(file)
    }
  }

  const removeLogo = () => {
    onSettingsChange({ logo: undefined })
  }

  return (
    <div className="space-y-6">
      {/* Text/URL Input */}
      <div>
        <label htmlFor="data" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Text or URL
        </label>
        <input
          id="data"
          type="text"
          value={settings.data}
          onChange={(e) => onSettingsChange({ data: e.target.value })}
          placeholder="Enter text or URL..."
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* Color Pickers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="foreground" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Foreground Color
          </label>
          <div className="flex items-center space-x-2">
            <input
              id="foreground"
              type="color"
              value={settings.foregroundColor}
              onChange={(e) => onSettingsChange({ foregroundColor: e.target.value })}
              className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
            />
            <input
              type="text"
              value={settings.foregroundColor}
              onChange={(e) => onSettingsChange({ foregroundColor: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="background" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Background Color
          </label>
          <div className="flex items-center space-x-2">
            <input
              id="background"
              type="color"
              value={settings.backgroundColor}
              onChange={(e) => onSettingsChange({ backgroundColor: e.target.value })}
              className="w-12 h-10 border border-gray-300 dark:border-gray-600 rounded cursor-pointer"
            />
            <input
              type="text"
              value={settings.backgroundColor}
              onChange={(e) => onSettingsChange({ backgroundColor: e.target.value })}
              className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* Logo Upload */}
      <div>
        <label htmlFor="logo" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Logo (Optional)
        </label>
        <div className="space-y-2">
          <input
            id="logo"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="block w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-300"
          />
          {settings.logo && (
            <div className="flex items-center space-x-2">
              <img
                src={settings.logo}
                alt="Logo preview"
                className="w-8 h-8 object-contain rounded"
              />
              <button
                type="button"
                onClick={removeLogo}
                className="text-sm text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
              >
                Remove logo
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Error Correction Level */}
      <div>
        <label htmlFor="errorCorrection" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Error Correction Level
        </label>
        <select
          id="errorCorrection"
          value={settings.errorCorrectionLevel}
          onChange={(e) => onSettingsChange({ errorCorrectionLevel: e.target.value as 'L' | 'M' | 'Q' | 'H' })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="L">L (Low - ~7%)</option>
          <option value="M">M (Medium - ~15%)</option>
          <option value="Q">Q (Quartile - ~25%)</option>
          <option value="H">H (High - ~30%)</option>
        </select>
      </div>

      {/* Dot Type */}
      <div>
        <label htmlFor="dotType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Dot Style
        </label>
        <select
          id="dotType"
          value={settings.dotType}
          onChange={(e) => onSettingsChange({ dotType: e.target.value as any })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="rounded">Rounded</option>
          <option value="dots">Dots</option>
          <option value="classy">Classy (Lines)</option>
          <option value="classy-rounded">Classy Rounded</option>
          <option value="square">Square</option>
          <option value="extra-rounded">Extra Rounded</option>
        </select>
      </div>

      {/* Corner Square Type */}
      <div>
        <label htmlFor="cornerSquareType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Corner Square Style
        </label>
        <select
          id="cornerSquareType"
          value={settings.cornerSquareType}
          onChange={(e) => onSettingsChange({ cornerSquareType: e.target.value as any })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="square">Square</option>
          <option value="extra-rounded">Extra Rounded</option>
          <option value="dot">Dot</option>
        </select>
      </div>

      {/* Corner Dot Type */}
      <div>
        <label htmlFor="cornerDotType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Corner Dot Style
        </label>
        <select
          id="cornerDotType"
          value={settings.cornerDotType}
          onChange={(e) => onSettingsChange({ cornerDotType: e.target.value as any })}
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
        >
          <option value="square">Square</option>
          <option value="dot">Dot</option>
        </select>
      </div>

      {/* Size Slider */}
      <div>
        <label htmlFor="size" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Size: {settings.size}px
        </label>
        <input
          id="size"
          type="range"
          min="256"
          max="1024"
          step="32"
          value={settings.size}
          onChange={(e) => onSettingsChange({ size: parseInt(e.target.value) })}
          className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
          <span>256px</span>
          <span>1024px</span>
        </div>
      </div>
    </div>
  )
}
