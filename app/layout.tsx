import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "WizeQR — Free Custom QR Code Generator (PNG & SVG, Local, No Tracking)",
  description: "Generate and customize QR codes locally in your browser. Free, private, no watermarks. Export PNG or SVG instantly.",
  openGraph: {
    title: "WizeQR — Free Custom QR Code Generator",
    description: "Local, private QR generator with logos, colors, PNG & SVG export.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WizeQR — Free Custom QR Codes",
    description: "Local, private, no tracking.",
  },
  metadataBase: new URL("https://your-domain.com"), // update after you buy the domain
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col body-bg">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
