import Link from "next/link";
import { Logo } from "@/components/nav";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center">
          <Logo className="h-12 w-auto" />
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-slate-muted">
          <a href="#agents" className="hover:text-white transition-colors">Agents</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#team" className="hover:text-white transition-colors">Team</a>
          <a href="#demo" className="hover:text-white transition-colors">Request Demo</a>
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <a href="mailto:founder@telemd.app" className="hover:text-white transition-colors">
            founder@telemd.app
          </a>
        </div>

        <p className="text-xs text-slate-subtle">
          © {new Date().getFullYear()} PolyHealth Inc. · HIPAA Compliant
        </p>
      </div>
    </footer>
  );
}
