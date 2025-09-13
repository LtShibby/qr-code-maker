import Link from "next/link";

export default function About() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-heading font-extrabold mb-4">About WizeQR</h1>
      <p className="text-brand-sub max-w-prose">
        WizeQR is a free, privacy-first QR generator from <Link href="https://wozwize.com" target="_blank" className="underline">WozWize</Link>.
        All codes are created locally in your browser. Customize colors, add a logo, and export PNG or SVG—no accounts, no tracking, no watermarks.
      </p>
    </section>
  );
}
