"use client";

import Link from "next/link";
import { PERSONAL_INFO, EXPERIENCE_ITEMS, PROJECTS, SKILL_CATEGORIES } from "@/data/portfolioData";
import { 
  Printer, 
  ArrowLeft, 
  Mail, 
  Calendar, 
  MapPin, 
  Download,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Building2
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 print:bg-white print:text-black py-12 px-4 sm:px-6 lg:px-8 bg-topographic-contour">
      {/* Top Navigation Bar - Hidden during printing */}
      <div className="max-w-4xl mx-auto mb-8 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-600 hover:text-[#1a73e8] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Portfolio</span>
        </Link>

        <div className="flex items-center gap-3">
          <a
            href="/api/download-cv?format=markdown"
            download="sulisumen-peter-cv.md"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5 text-[#1a73e8]" />
            <span>Download .MD</span>
          </a>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] transition-all shadow-sm shadow-blue-500/20"
          >
            <Printer className="w-3.5 h-3.5 text-white" />
            <span>Print / Save as PDF</span>
          </button>
        </div>
      </div>

      {/* Main Resume Sheet */}
      <main className="max-w-4xl mx-auto p-8 sm:p-12 rounded-2xl bg-white border border-slate-200 print:border-none print:bg-white print:p-0 shadow-xl space-y-10">
        {/* Header */}
        <header className="border-b border-slate-200 pb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 print:text-black">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-sm font-mono text-[#1a73e8] font-bold mt-1">
                {PERSONAL_INFO.title} • {PERSONAL_INFO.brand}
              </p>
            </div>
            <div className="text-xs font-mono text-slate-500 sm:text-right space-y-1">
              <div className="flex items-center sm:justify-end gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#1a73e8]" />
                <span>Global Remote (US / UK / Europe / Global)</span>
              </div>
              <div>Available for Turnkey Engagements &amp; Advisory</div>
            </div>
          </div>

          {/* Contact Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600 pt-2">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#1a73e8]" />
              {PERSONAL_INFO.email}
            </span>
            <span>•</span>
            <Link
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              className="flex items-center gap-1.5 hover:text-[#1a73e8] underline print:no-underline"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-[#1a73e8]" />
              LinkedIn Profile
            </Link>
            <span>•</span>
            <Link
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              className="flex items-center gap-1.5 hover:text-[#1a73e8] underline print:no-underline"
            >
              <GithubIcon className="w-3.5 h-3.5 text-[#1a73e8]" />
              github.com/sulisumenpeter
            </Link>
          </div>
        </header>

        {/* Executive Summary */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#1a73e8] font-bold">
            Executive Summary
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
            AI Intelligent Systems &amp; Automation Engineer with over 10 years of commercial IT experience, systems consulting, and hands-on technical architecture. Founder of Lisumen Innovative Hub with a proven track record delivering 100+ technology solutions, training 500+ professionals, and facilitating 200+ regulatory enterprise registrations. Combines deep foundations in computer science and cybersecurity with cutting-edge engineering across autonomous AI agents (LangGraph, CrewAI, MCP), enterprise workflow automation (n8n, Make), full-stack Python/FastAPI/Next.js systems, and rigorous AI governance frameworks.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#1a73e8] font-bold">
            Core Technical Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200"
              >
                <h3 className="font-bold text-slate-900 mb-1.5">
                  {cat.title}
                </h3>
                <p className="text-slate-600 leading-relaxed font-mono text-[11px]">
                  {cat.skills.map((s) => s.name).join(" • ")}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="space-y-6">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#1a73e8] font-bold">
            Professional Experience &amp; Leadership
          </h2>

          <div className="space-y-8">
            {EXPERIENCE_ITEMS.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">
                      {item.role}
                    </h3>
                    <p className="text-xs text-[#1a73e8] font-semibold">
                      {item.organization} • {item.location}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  {item.summary}
                </p>

                <ul className="space-y-1.5 pt-1">
                  {item.achievements.map((ach, aIdx) => (
                    <li
                      key={aIdx}
                      className="text-xs text-slate-700 flex items-start gap-2"
                    >
                      <span className="text-[#1a73e8] font-bold">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Systems & Architectural Deployments */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#1a73e8] font-bold">
            Selected Systems &amp; Open-Source Architectures
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((proj) => (
              <div
                key={proj.slug}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-900">
                    {proj.title}
                  </h3>
                  <span className="text-[10px] font-mono font-semibold text-[#1a73e8]">
                    {proj.category}
                  </span>
                </div>
                <p className="text-[11px] text-slate-600 leading-snug">
                  {proj.overview}
                </p>
                <div className="text-[10px] font-mono text-slate-500 pt-1">
                  Stack: {proj.technologies.slice(0, 4).join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Foundations */}
        <section className="space-y-3 pt-4 border-t border-slate-200">
          <h2 className="text-xs font-mono uppercase tracking-widest text-[#1a73e8] font-bold">
            Education &amp; Foundational Credentials
          </h2>
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-slate-900">
              B.Sc. in Computer Science (Cybersecurity &amp; Systems Focus)
            </h3>
            <p className="text-xs text-slate-600">
              Rigorous foundation in algorithms, network protocols, digital forensics, operating systems, and distributed architecture.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
