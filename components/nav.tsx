"use client";

import { useState, useEffect } from "react";

function Logo({ className = "h-12 w-auto" }: { className?: string }) {
  return (
    <img
      src="/polyhealthLogo.svg"
      alt="PolyHealth logo"
      className={`block object-contain ${className}`}
    />
  );
}

export { Logo };

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0C1220]/85 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center group">
          <Logo className="h-20 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Agents", href: "#agents" },
            { label: "How It Works", href: "#how-it-works" },
            { label: "Pricing", href: "#pricing" },
            { label: "Team", href: "#team" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-slate-muted hover:text-white transition-colors duration-200 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a href="#demo" className="btn-primary text-sm px-5 py-2.5 text-white">
            Request Demo
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-muted hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0C1220]/95 backdrop-blur-xl border-b border-white/[0.06] px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-4">
            {[
              { label: "Agents", href: "#agents" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Pricing", href: "#pricing" },
              { label: "Team", href: "#team" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm text-slate-muted hover:text-white transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-sm text-center text-white"
            >
              Request Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
