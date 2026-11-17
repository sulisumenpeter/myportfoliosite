"use client";

import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Cpu, 
  ArrowUp, 
  Calendar, 
  Mail, 
  ShieldCheck 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-16 text-slate-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200">
          {/* Brand Col (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1a73e8]">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-900 text-base">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[11px] font-mono text-[#1a73e8] px-1.5 py-0.5 rounded bg-blue-50 border border-blue-200 font-semibold">
                {PERSONAL_INFO.brand}
              </span>
            </Link>

            <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
              AI Intelligent Systems &amp; Automation Engineer. Engineering autonomous multi-agent pipelines, intelligent business workflows, and production-grade software.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-black shadow-sm transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </Link>

              <Link
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#1a73e8] shadow-sm transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </Link>

              <Link
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#1a73e8] shadow-sm transition-colors"
                aria-label="Calendly Booking"
              >
                <Calendar className="w-4 h-4" />
              </Link>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="w-8 h-8 rounded-lg bg-white hover:bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 hover:text-[#1a73e8] shadow-sm transition-colors"
                aria-label="Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Site Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/#about" className="hover:text-[#1a73e8] transition-colors">
                  01 // Professional Narrative
                </Link>
              </li>
              <li>
                <Link href="/#expertise" className="hover:text-[#1a73e8] transition-colors">
                  02 // Technical Competence Matrix
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="hover:text-[#1a73e8] transition-colors">
                  03 // Featured Deployments
                </Link>
              </li>
              <li>
                <Link href="/#solutions" className="hover:text-[#1a73e8] transition-colors">
                  04 // What I Can Build
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="hover:text-[#1a73e8] transition-colors">
                  05 // Experience &amp; Track Record
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-[#1a73e8] transition-colors">
                  06 // Direct Channel
                </Link>
              </li>
            </ul>
          </div>

          {/* Systems & Case Studies (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold">
              Featured Case Studies
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <Link href="/projects/redteam-ai-labs" className="hover:text-[#1a73e8] transition-colors">
                  RedTeam AI Labs (AI Governance)
                </Link>
              </li>
              <li>
                <Link href="/projects/ledgersync" className="hover:text-[#1a73e8] transition-colors">
                  LedgerSync (Financial Automation)
                </Link>
              </li>
              <li>
                <Link href="/projects/autonomous-job-hunting-agent" className="hover:text-[#1a73e8] transition-colors">
                  Autonomous Job Hunting Agent (n8n + Groq)
                </Link>
              </li>
              <li>
                <Link href="/projects/homeops-ai" className="hover:text-[#1a73e8] transition-colors">
                  HomeOps AI (MCP + Gemini 1.5)
                </Link>
              </li>
              <li>
                <Link href="/projects/ai-crm-integration-assistant" className="hover:text-[#1a73e8] transition-colors">
                  AI CRM Integration Assistant
                </Link>
              </li>
              <li>
                <Link href="/projects/markflow" className="hover:text-[#1a73e8] transition-colors">
                  MarkFlow PWA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>&copy; 2026 Sulisumen Peter. All rights reserved.</span>
            <span className="text-slate-300">•</span>
            <span className="text-[#1a73e8] font-mono font-semibold">#IT_Preacher</span>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/resume" className="hover:text-[#1a73e8] font-medium transition-colors">
              CV / Resume
            </Link>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
