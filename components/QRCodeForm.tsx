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
        <label htmlFor="data" className="block text-sm font-medium text-brand-text mb-2">
          Text or URL
        </label>
        <input
          id="data"
          type="text"
          value={settings.data}
          onChange={(e) => onSettingsChange({ data: e.target.value })}
          placeholder="Enter text or URL..."
          className="w-full px-4 py-3 border border-brand-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-brand-panel text-brand-text placeholder-brand-sub"
        />
      </div>

      {/* Color Pickers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="foreground" className="block text-sm font-medium text-brand-text mb-2">
            Foreground Color
          </label>
          <div className="flex items-center space-x-3">
            <input
              id="foreground"
              type="color"
              value={settings.foregroundColor}
              onChange={(e) => onSettingsChange({ foregroundColor: e.target.value })}
              className="w-12 h-12 border border-brand-border rounded-lg cursor-pointer"
            />
            <input
              type="text"
              value={settings.foregroundColor}
              onChange={(e) => onSettingsChange({ foregroundColor: e.target.value })}
              className="flex-1 px-4 py-3 border border-brand-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-brand-panel text-brand-text"
            />
          </div>
        </div>

        <div>
          <label htmlFor="background" className="block text-sm font-medium text-brand-text mb-2">
            Background Color
          </label>
          <div className="flex items-center space-x-3">
            <input
              id="background"
              type="color"
              value={settings.backgroundColor}
              onChange={(e) => onSettingsChange({ backgroundColor: e.target.value })}
              className="w-12 h-12 border border-brand-border rounded-lg cursor-pointer"
            />
            <input
              type="text"
              value={settings.backgroundColor}
              onChange={(e) => onSettingsChange({ backgroundColor: e.target.value })}
              className="flex-1 px-4 py-3 border border-brand-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-brand-panel text-brand-text"
            />
          </div>
        </div>
      </div>

      {/* Logo Upload */}
      <div>
        <label htmlFor="logo" className="block text-sm font-medium text-brand-text mb-2">
          Logo (Optional)
        </label>
        <div className="space-y-3">
          <input
            id="logo"
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            className="block w-full text-sm text-brand-sub file:mr-4 file:py-3 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-brand-blue/20 file:text-brand-blue hover:file:bg-brand-blue/30"
          />
          {settings.logo && (
            <div className="flex items-center space-x-3">
              <img
                src={settings.logo}
                alt="Logo preview"
                className="w-10 h-10 object-contain rounded-lg border border-brand-border"
              />
              <button
                type="button"
                onClick={removeLogo}
                className="text-sm text-red-400 hover:text-red-300 transition-colors"
              >
                Remove logo
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Error Correction Level */}
      <div>
        <label htmlFor="errorCorrection" className="block text-sm font-medium text-brand-text mb-2">
          Error Correction Level
        </label>
        <select
          id="errorCorrection"
          value={settings.errorCorrectionLevel}
          onChange={(e) => onSettingsChange({ errorCorrectionLevel: e.target.value as 'L' | 'M' | 'Q' | 'H' })}
          className="w-full px-4 py-3 border border-brand-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-brand-panel text-brand-text"
        >
          <option value="L">L (Low - ~7%)</option>
          <option value="M">M (Medium - ~15%)</option>
          <option value="Q">Q (Quartile - ~25%)</option>
          <option value="H">H (High - ~30%)</option>
        </select>
      </div>

      {/* Dot Type */}
      <div>
        <label htmlFor="dotType" className="block text-sm font-medium text-brand-text mb-2">
          Dot Style
        </label>
        <select
          id="dotType"
          value={settings.dotType}
          onChange={(e) => onSettingsChange({ dotType: e.target.value as any })}
          className="w-full px-4 py-3 border border-brand-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-brand-panel text-brand-text"
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
        <label htmlFor="cornerSquareType" className="block text-sm font-medium text-brand-text mb-2">
          Corner Square Style
        </label>
        <select
          id="cornerSquareType"
          value={settings.cornerSquareType}
          onChange={(e) => onSettingsChange({ cornerSquareType: e.target.value as any })}
          className="w-full px-4 py-3 border border-brand-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-brand-panel text-brand-text"
        >
          <option value="square">Square</option>
          <option value="extra-rounded">Extra Rounded</option>
          <option value="dot">Dot</option>
        </select>
      </div>

      {/* Corner Dot Type */}
      <div>
        <label htmlFor="cornerDotType" className="block text-sm font-medium text-brand-text mb-2">
          Corner Dot Style
        </label>
        <select
          id="cornerDotType"
          value={settings.cornerDotType}
          onChange={(e) => onSettingsChange({ cornerDotType: e.target.value as any })}
          className="w-full px-4 py-3 border border-brand-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue bg-brand-panel text-brand-text"
        >
          <option value="square">Square</option>
          <option value="dot">Dot</option>
        </select>
      </div>

      {/* Size Slider */}
      <div>
        <label htmlFor="size" className="block text-sm font-medium text-brand-text mb-2">
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
          className="w-full h-2 bg-brand-border rounded-lg appearance-none cursor-pointer slider"
        />
        <div className="flex justify-between text-xs text-brand-sub mt-2">
          <span>256px</span>
          <span>1024px</span>
        </div>
      </div>
    </div>
  )
}
