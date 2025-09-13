# QR Code Maker

A beautiful, customizable QR code generator built with Next.js, TypeScript, and TailwindCSS.

## Features

- 🎨 **Customizable Design**: Choose foreground and background colors
- 📱 **Logo Support**: Upload and embed logos in your QR codes
- 🔧 **Error Correction**: Select from L, M, Q, H error correction levels
- 📏 **Size Control**: Adjustable size from 256px to 1024px
- 💾 **Export Options**: Download as PNG or SVG
- 💾 **Settings Persistence**: Your preferences are saved in localStorage
- 📱 **Mobile Friendly**: Responsive design that works on all devices
- ⚡ **Live Preview**: See changes in real-time as you customize

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Usage

1. **Enter your data**: Type any text or URL in the input field
2. **Customize colors**: Use the color pickers to choose foreground and background colors
3. **Add a logo** (optional): Upload an image file to embed in the center of the QR code
4. **Adjust settings**: Choose error correction level and size using the controls
5. **Download**: Click the download buttons to save your QR code as PNG or SVG

## Technology Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **TailwindCSS** - Utility-first CSS framework
- **qr-code-styling** - Advanced QR code generation library

## Project Structure

```
qr-code-maker/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── QRCodeForm.tsx
│   └── QRCodePreview.tsx
├── hooks/
│   └── useQRCode.ts
└── ...config files
```

## Features in Detail

### QR Code Customization
- **Text/URL Input**: Enter any text or URL to encode
- **Color Customization**: Full control over foreground and background colors
- **Logo Embedding**: Upload images to place in the center of QR codes
- **Error Correction**: Choose from 4 levels (L, M, Q, H) based on your needs
- **Size Control**: Adjustable from 256px to 1024px in 32px increments

### User Experience
- **Live Preview**: See your QR code update in real-time
- **Settings Persistence**: Your preferences are automatically saved
- **Mobile Responsive**: Works perfectly on all screen sizes
- **Download Options**: Export as PNG or SVG format

## Browser Support

This application works in all modern browsers that support:
- ES6+ features
- Canvas API
- File API
- LocalStorage

## License

MIT License - feel free to use this project for personal or commercial purposes.
