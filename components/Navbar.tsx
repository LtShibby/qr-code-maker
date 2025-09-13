"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import type { Route } from "next";

type NavLinkProps = { href: Route; label: string; isActive: boolean; onClick?: () => void; };

function NavLink({ href, label, isActive, onClick }: NavLinkProps) {
  return (
    <Link href={href} onClick={onClick}
      className="relative px-3 py-2 text-sm text-brand-sub hover:text-white transition-colors group"
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="navbar-underline"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}
        />
      )}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue/30"
        initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.2 }} style={{ transformOrigin: "left" }}
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();
  const navbarHeight = useTransform(scrollY, [0, 120], [64, 54]);
  const navbarOpacity = useTransform(scrollY, [0, 80], [0.95, 0.98]);
  const logoScale = useTransform(scrollY, [0, 120], [1, 0.9]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // Focus trap lite
  useEffect(() => {
    if (!open) return;
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = menuRef.current?.querySelectorAll<HTMLElement>("a, button");
      if (!nodes?.length) return;
      const first = nodes[0], last = nodes[nodes.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey && active === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && active === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [open]);

  useEffect(() => { setOpen(false); }, [pathname]);

  const links = [
    { href: "/" as Route, label: "Home" },
    { href: "/about" as Route, label: "About" },
    { href: "/privacy-policy" as Route, label: "Privacy" },
    { href: "/terms" as Route, label: "Terms" },
  ] as const;

  return (
    <motion.header
      style={{ height: navbarHeight, opacity: navbarOpacity }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-black/25 border-b border-brand-border shadow-2xl"
    >
      <div className="mx-auto max-w-6xl h-full px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-brand-blue rounded">
          <motion.div style={{ scale: logoScale }} className="flex items-center gap-3">
            <Image src="/WizeQrLogo.png" alt="WozWize Owl" width={40} height={40} />
            <span className="font-heading font-extrabold tracking-wide text-lg bg-gradient-to-r from-white to-brand-blue bg-clip-text text-transparent">
              WizeQR
            </span>
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
          {links.map(l => (
            <NavLink key={l.href} href={l.href} label={l.label} isActive={pathname === l.href} />
          ))}
          <motion.div className="ml-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/generate"
              className="px-4 py-2 rounded-lg font-medium text-white shadow-lg
                         bg-gradient-to-r from-brand-blue to-brand-blue2 hover:from-brand-blue/90 hover:to-brand-blue2/90"
            >
              Generate
            </Link>
          </motion.div>
        </nav>

        <button
          className="md:hidden inline-flex items-center justify-center rounded p-2 focus:outline-none focus:ring-2 focus:ring-brand-blue hover:bg-white/10"
          aria-label="Toggle menu" aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <motion.div animate={open ? "open" : "closed"} className="w-5 h-5 relative">
            <motion.span className="absolute inset-x-0 top-1.5 h-0.5 bg-current"
              variants={{ closed:{rotate:0,y:0}, open:{rotate:45,y:6} }} />
            <motion.span className="absolute inset-x-0 top-2.5 h-0.5 bg-current"
              variants={{ closed:{opacity:1}, open:{opacity:0} }} />
            <motion.span className="absolute inset-x-0 top-3.5 h-0.5 bg-current"
              variants={{ closed:{rotate:0,y:0}, open:{rotate:-45,y:-6} }} />
          </motion.div>
        </button>
      </div>

      <motion.div
        ref={menuRef}
        className="md:hidden border-t border-brand-border bg-brand-panel overflow-hidden"
        initial={{ height: 0 }} animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.25, ease: "easeInOut" }} aria-hidden={!open}
      >
        <div className="px-4 py-2 flex flex-col">
          {links.map(l => (
            <NavLink key={l.href} href={l.href} label={l.label} isActive={pathname === l.href} onClick={() => setOpen(false)} />
          ))}
          <div className="pt-2">
            <Link
              href="/generate"
              className="block w-full px-4 py-3 text-center text-white rounded-lg shadow-lg
                         bg-gradient-to-r from-brand-blue to-brand-blue2"
              onClick={() => setOpen(false)}
            >
              Generate
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.header>
  );
}
