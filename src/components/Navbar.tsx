"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Cpu, 
  FileText,
  Calendar
} from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "/", isHome: true },
  { label: "About", href: "/#about" },
  { label: "Expertise", href: "/#expertise" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "What I Can Build", href: "/#solutions" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm py-3"
          : "bg-white/85 backdrop-blur-md border-b border-slate-200/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Sulisumen Peter Brand Identity */}
          <div className="flex items-center gap-6 sm:gap-10">
            <Link
              href="/"
              className="flex items-center gap-3 group transition-opacity hover:opacity-90"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1a73e8] group-hover:border-blue-400 transition-colors">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 tracking-tight text-sm sm:text-base">
                    {PERSONAL_INFO.name}
                  </span>
                  <span className="text-[11px] font-mono text-[#1a73e8] font-semibold px-1.5 py-0.5 rounded bg-blue-50 border border-blue-200">
                    {PERSONAL_INFO.brand}
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono tracking-tight hidden sm:block">
                  AI Systems &amp; Automation Engineer
                </span>
              </div>
            </Link>

            {/* Desktop Navigation with crisp active underline indicator */}
            <nav className="hidden md:flex items-center gap-7">
              <Link
                href="/"
                className="relative py-1 text-sm font-semibold text-slate-900 transition-colors"
              >
                <span>Home</span>
                <span className="absolute bottom-[-16px] left-0 right-0 h-[2.5px] bg-[#1a73e8] rounded-full" />
              </Link>

              {NAV_ITEMS.slice(1).map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="py-1 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Sulisumen's Avatar, CV, and Let's Talk CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/resume"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-lg transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-[#1a73e8]" />
              <span>CV</span>
            </Link>

            <Link
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] rounded-lg shadow-sm shadow-blue-500/20 transition-all hover:scale-[1.02]"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Circular Avatar of Sulisumen Peter with active radar status */}
            <Link
              href="/#about"
              className="relative group p-0.5 rounded-full border-2 border-slate-200 hover:border-[#1a73e8] transition-all"
              title="Sulisumen Peter — Click to View Bio"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden bg-slate-100">
                <Image
                  src="/profile.jpg"
                  alt="Sulisumen Peter"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="36px"
                />
              </div>
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-white" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-slate-700 bg-slate-100 border border-slate-200 md:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 backdrop-blur-xl shadow-lg animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                  item.isHome
                    ? "text-[#1a73e8] bg-blue-50"
                    : "text-slate-700 hover:text-[#1a73e8] hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <Link
              href="/resume"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-medium text-slate-700 bg-slate-100 border border-slate-200 rounded-lg"
            >
              <FileText className="w-4 h-4 text-[#1a73e8]" />
              Download &amp; View CV
            </Link>

            <Link
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-semibold text-white bg-[#1a73e8] rounded-lg shadow-md shadow-blue-500/20"
            >
              <Calendar className="w-4 h-4 text-white" />
              Schedule 30-min Consultation
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
