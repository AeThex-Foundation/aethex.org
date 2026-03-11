'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Mission', href: '/mission' },
  { label: 'Programs', href: '/programs' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'News', href: '/news' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-900/95 backdrop-blur-md border-b border-surface-800">
      <div className="container-wide mx-auto flex items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div
            className="w-9 h-9 bg-foundation-500 group-hover:bg-foundation-600 transition-colors flex items-center justify-center"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          >
            <span className="text-white font-display font-bold text-xs">Ae</span>
          </div>
          <div className="font-display leading-none">
            <span className="font-extrabold text-white tracking-widest uppercase text-sm block">AETHEX</span>
            <span className="text-foundation-400 font-medium tracking-wider uppercase text-[10px] block">Foundation</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-surface-300 hover:text-white transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/get-involved" className="btn-primary text-xs py-2.5 px-5">
            Support Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-surface-300"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-surface-800 bg-surface-900 px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-3 text-sm font-medium text-surface-300 hover:text-white border-b border-surface-800"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/get-involved"
            className="btn-primary mt-4 w-full justify-center text-xs"
            onClick={() => setMobileOpen(false)}
          >
            Support Us
          </Link>
        </div>
      )}
    </nav>
  );
}
