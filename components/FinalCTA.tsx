"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue/10 to-brand-blue2/10 border-t border-brand-border">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-heading font-extrabold mb-6">
          Ship it in seconds.
        </h2>
        <p className="text-brand-sub mb-10 text-lg">
          Generate private, branded QR codes instantly — no signups, no strings.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto sm:max-w-none">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="/generate"
              className="block w-full px-8 py-4 rounded-2xl font-bold text-white text-lg shadow-lg text-center
                         bg-gradient-to-r from-brand-blue to-brand-blue2 hover:shadow-xl transition"
            >
              Generate Free QR Now
            </Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
            <Link
              href="/about"
              className="block w-full px-8 py-4 rounded-2xl font-bold text-brand-sub text-lg border border-brand-border hover:border-brand-blue hover:text-white transition text-center"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
