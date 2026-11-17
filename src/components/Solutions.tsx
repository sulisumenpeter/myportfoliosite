import Link from "next/link";
import { WHAT_I_CAN_BUILD, PERSONAL_INFO } from "@/data/portfolioData";
import RoiCalculator from "./RoiCalculator";
import { 
  Bot, 
  Workflow, 
  Users2, 
  Sparkles, 
  Receipt, 
  LayoutDashboard, 
  Network, 
  ShieldCheck, 
  ArrowRight,
  Calendar,
  Check
} from "lucide-react";

const SERVICE_ICONS = [
  Bot,
  Workflow,
  Users2,
  Sparkles,
  Receipt,
  LayoutDashboard,
  Network,
  ShieldCheck
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 relative bg-white border-t border-slate-200 bg-topographic-contour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#1a73e8]" />
          <span className="text-xs font-mono tracking-widest text-[#1a73e8] font-semibold uppercase">
            04 // What I Can Build For You
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Commercial AI &amp; Automation Systems.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Turnkey engineering engagements for SMBs, venture-backed startups, and modern enterprises in the US, UK, Europe, and worldwide.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href={PERSONAL_INFO.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] rounded-lg shadow-sm shadow-blue-500/20 transition-all"
            >
              <Calendar className="w-3.5 h-3.5 text-white" />
              <span>Book Strategy Call</span>
            </Link>
          </div>
        </div>

        {/* 8 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHAT_I_CAN_BUILD.map((service, idx) => {
            const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
            return (
              <div
                key={service.title}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-lg shadow-sm"
              >
                <div>
                  {/* Tag and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1a73e8] group-hover:border-blue-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-[#1a73e8] transition-colors">
                    {service.title}
                  </h3>

                  {/* The Problem */}
                  <div className="mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-rose-600 font-bold block mb-1">
                      The Operational Problem
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.businessProblem}
                    </p>
                  </div>

                  {/* The Solution */}
                  <div className="mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#1a73e8] font-bold block mb-1">
                      Engineered Solution
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {service.solution}
                    </p>
                  </div>

                  {/* Outcomes */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 font-bold block">
                      Target Outcomes
                    </span>
                    {service.keyOutcomes.map((outcome, oIdx) => (
                      <div key={oIdx} className="flex items-start gap-1.5 text-[11px] text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tech pills & action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {service.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/#contact`}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-[#1a73e8] hover:bg-blue-50 transition-colors"
                    title="Inquire about this capability"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive ROI Calculator for Prospects */}
        <RoiCalculator />

        {/* Global Delivery Note */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-bold text-slate-900">
              Remote-First, Global Delivery Capability
            </h4>
            <p className="text-xs text-slate-600 max-w-2xl">
              Fully aligned with US (EST/PST), UK (GMT), and European (CET) business hours. Flexible contract structures: project-based turnkey delivery or ongoing fractional AI engineering advisory.
            </p>
          </div>
          <Link
            href={PERSONAL_INFO.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] transition-all shrink-0 shadow-md shadow-blue-500/20"
          >
            <span>Book 30-min Technical Discovery</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
