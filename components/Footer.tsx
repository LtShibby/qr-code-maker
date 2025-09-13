import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand-border bg-brand-panel text-brand-sub">
      <div className="mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image src="/WizeQrLogo.png" alt="WozWize Owl" width={22} height={22} />
          <span className="text-sm">WizeQR is a <Link href="https://wozwize.com" target="_blank" className="underline hover:text-white">WozWize</Link> product.</span>
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <Link href="/privacy-policy" className="hover:text-white">Privacy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <Link href="/about" className="hover:text-white">About</Link>
          <span className="text-xs text-brand-sub/70">© 2025 WozWize Solutions LLC</span>
        </nav>
      </div>
    </footer>
  );
}
