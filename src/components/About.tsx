import Image from "next/image";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  CheckCircle, 
  Terminal, 
  ShieldCheck, 
  Cpu, 
  Workflow, 
  Briefcase, 
  Award, 
  ArrowUpRight 
} from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative bg-slate-50/70 border-t border-slate-200 bg-topographic-contour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#1a73e8]" />
          <span className="text-xs font-mono tracking-widest text-[#1a73e8] font-semibold uppercase">
            01 // Professional Narrative
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Identity Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative group rounded-2xl p-1 bg-white border border-slate-200 shadow-lg overflow-hidden">
              {/* Photo Container */}
              <div className="relative w-full aspect-square sm:aspect-[4/4.5] rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/sulisumen-peter.jpg"
                  alt="Sulisumen Peter - AI Intelligent Systems & Automation Engineer"
                  fill
                  priority
                  className="object-cover object-top filter brightness-[0.98] contrast-[1.02] group-hover:scale-[1.02] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 420px"
                />

                {/* Subtle bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-90" />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">Sulisumen Peter</h4>
                      <p className="text-xs text-[#1a73e8] font-mono font-medium">#IT_Preacher</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      10+ Yrs Exp
                    </span>
                  </div>
                </div>
              </div>

              {/* Status and Specialization Tags */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">DISCIPLINE:</span>
                  <span className="text-slate-800 font-semibold">AI &amp; Automation Systems</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">VENTURE:</span>
                  <span className="text-slate-800 font-semibold">Founder, Lisumen Hub</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-500">FOUNDATION:</span>
                  <span className="text-slate-800 font-semibold">Computer Science &amp; Security</span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 gap-3">
              {PERSONAL_INFO.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-600 mt-1 leading-snug font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: First-Person Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Engineering Practical Intelligence for the Real World.
            </h2>

            <div className="space-y-5 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                I have spent over <strong className="text-slate-900 font-semibold">a decade in the technology industry</strong> working across systems infrastructure, network security, enterprise consulting, and software development. My foundation as a computer scientist with deep roots in cybersecurity and systems engineering means I don&apos;t just view software as abstract code—I view it as resilient, mission-critical infrastructure that must operate reliably under real-world constraints.
              </p>

              <p>
                As the <strong className="text-slate-900 font-semibold">Founder and Lead Consultant of Lisumen Innovative Hub (2019–2024)</strong>, I led the delivery of more than 100 technology deployments, helped train over 500 entrepreneurs and business operators in digital systems, and facilitated over 200 corporate registrations. That entrepreneurial journey gave me an invaluable perspective: <em className="text-[#1a73e8] font-medium not-italic">technology is only as valuable as the concrete business problem it solves</em>.
              </p>

              <p>
                My evolution into <strong className="text-slate-900 font-semibold">AI Engineering and Intelligent Automation</strong> was a natural continuation of that mission. Rather than treating AI as a conversational toy or a superficial chatbot add-on, I focus on the hard engineering problems: autonomous multi-agent orchestration, reliable state graphs, asynchronous tool calling, and deterministic workflow pipelines using platforms like <span className="text-slate-800 font-mono text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold">LangGraph</span>, <span className="text-slate-800 font-mono text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold">n8n</span>, <span className="text-slate-800 font-mono text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold">Make</span>, and <span className="text-slate-800 font-mono text-xs px-2 py-0.5 rounded bg-slate-100 border border-slate-200 font-semibold">MCP</span>.
              </p>

              <p>
                I also maintain an active commitment to <strong className="text-slate-900 font-semibold">AI Governance and Safety</strong>. As the creator of <span className="text-[#1a73e8] font-semibold">RedTeam AI Labs</span>, I design adversarial evaluation workflows that test LLM applications against prompt injections, jailbreaks, and compliance regressions before they ever touch production users.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2.5 text-[#1a73e8] mb-2">
                  <Workflow className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                    Deterministic Engineering
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Building fault-tolerant systems with retries, validation schemas, and automated human-in-the-loop escalation.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 transition-all">
                <div className="flex items-center gap-2.5 text-[#1a73e8] mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <h4 className="text-xs font-bold uppercase tracking-wider font-mono">
                    Security &amp; Governance
                  </h4>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Rooted in cybersecurity principles to defend autonomous systems against data leakage and injection attacks.
                </p>
              </div>
            </div>

            {/* Quote / Positioning callout */}
            <div className="p-5 rounded-xl bg-blue-50/80 border-l-4 border-[#1a73e8] shadow-sm">
              <p className="text-sm italic text-slate-800 font-medium">
                &ldquo;{PERSONAL_INFO.positioning}&rdquo;
              </p>
              <span className="block mt-2 text-xs font-mono text-[#1a73e8] font-semibold">
                — Sulisumen Peter (#IT_Preacher)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
