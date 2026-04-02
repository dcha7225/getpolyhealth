"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/polyhealthLogo.svg"
      alt="PolyHealth logo"
      width={216}
      height={64}
      className={`block object-contain ${className}`}
    />
  );
}

export { Logo };

const links = [
  { label: "Workflow", href: "#workflow" },
  { label: "Agent Library", href: "#platform" },
  { label: "Testimonials", href: "#proof" },
  { label: "Security", href: "#security" },
  { label: "Team", href: "#team" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[rgba(5,7,11,0.82)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#" className="flex items-center">
          <Logo className="h-12 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/64 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a href="#demo" className="btn-primary">
            Request Demo
          </a>
        </div>

        <button
          className="text-white/72 transition-colors hover:text-white md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-b border-white/8 bg-[rgba(5,7,11,0.96)] px-6 pb-6 pt-1 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#demo" onClick={() => setMenuOpen(false)} className="btn-primary">
              Request Demo
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
