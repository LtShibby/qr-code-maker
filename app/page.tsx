"use client";
import TopBar from "@/components/TopBar";
import AnimatedQROwl from "@/components/AnimatedQROwl";
import FeatureCard from "@/components/FeatureCard";
import FinalCTA from "@/components/FinalCTA";
import Link from "next/link";

import { Globe, BadgeCheck, QrCode } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-[90vh] px-6 gap-10">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">
            Custom QR Codes, Zero Nonsense.
          </h1>
          <p className="mt-4 text-lg text-brand-sub">
            Private, watermark-free QR codes you can brand, export, and ship in
            seconds.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/generate"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-blue2 shadow-lg hover:shadow-xl transition"
            >
              Generate Free QR Now
            </Link>
            <a
              href="#features"
              className="px-6 py-3 rounded-xl font-semibold text-brand-sub border border-brand-border hover:border-brand-blue hover:text-white transition"
            >
              How It Works
            </a>
          </div>
        </div>

        <AnimatedQROwl size={360} />
      </section>

      {/* Features */}
      <section id="features" className="py-20 bg-brand-panel/50 border-t border-brand-border">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Globe}
            title="Local Only"
            description="All generation happens in your browser. We literally can't see your data."
          />
          <FeatureCard
            icon={BadgeCheck}
            title="Free Forever"
            description="Unlimited static QR. No paywall. No email. No guilt."
          />
          <FeatureCard
            icon={QrCode}
            title="Pixel-Perfect"
            description="PNG for quick use, SVG for print and scale."
          />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}