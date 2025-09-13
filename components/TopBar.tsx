"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <div className="w-full bg-black/60 backdrop-blur-md border-b border-brand-border text-sm text-center relative z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-2">
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/generate"
            className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-blue to-brand-blue2 text-white font-bold shadow hover:shadow-lg transition"
          >
            TL;DR: Click here to generate a QR code for free!
          </Link>
        </motion.div>

        <span className="hidden sm:inline text-brand-sub">
          No tracking. No watermarks. No BS.
        </span>
      </div>
    </div>
  );
}
