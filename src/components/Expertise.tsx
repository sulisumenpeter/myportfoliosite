"use client";

import { useState } from "react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";
import { 
  Cpu, 
  Workflow, 
  Code2, 
  ShieldAlert, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const CATEGORY_ICONS = [
  Cpu,
  Workflow,
  Code2,
  ShieldAlert
];

export default function Expertise() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="expertise" className="py-24 relative bg-white border-t border-slate-200 bg-topographic-contour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#1a73e8]" />
          <span className="text-xs font-mono tracking-widest text-[#1a73e8] font-semibold uppercase">
            02 // Technical Competence Matrix
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Engineered for Production.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              A comprehensive breakdown of tools, frameworks, protocols, and architectural patterns deployed across modern intelligent systems.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#1a73e8] font-medium bg-blue-50 border border-blue-200 px-3.5 py-2 rounded-lg self-start md:self-auto">
            <span className="w-2 h-2 rounded-full bg-[#1a73e8]" />
            <span>Interactive Technology Explorer</span>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-8 p-1.5 rounded-xl bg-slate-100 border border-slate-200">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.title}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2.5 p-3 rounded-lg text-left transition-all ${
                  isActive
                    ? "bg-white text-slate-900 shadow-sm border border-slate-200/80 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white/50 border border-transparent"
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#1a73e8]" : "text-slate-400"}`} />
                <span className="text-xs tracking-tight truncate">
                  {cat.title.split("&")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Display */}
        <div className="rounded-2xl bg-white border border-slate-200 shadow-sm p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2.5">
                {SKILL_CATEGORIES[activeTab].title}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                {SKILL_CATEGORIES[activeTab].description}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                {SKILL_CATEGORIES[activeTab].skills.length} Core Technologies
              </span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-xl bg-slate-50/70 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#1a73e8] transition-colors">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700 shrink-0">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-mono">
                    {skill.focus}
                  </p>
                </div>
                <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500">
                  <span className="font-medium">Production Ready</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Synthesis Box */}
          <div className="mt-8 p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-300 flex items-center justify-center text-[#1a73e8] shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <h5 className="text-xs font-bold text-slate-900">Full-Stack System Synthesis</h5>
                <p className="text-xs text-slate-600">
                  Every layer is integrated via strict API contracts, secure authentication, and end-to-end monitoring.
                </p>
              </div>
            </div>
            <a
              href="#solutions"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1a73e8] hover:underline shrink-0"
            >
              <span>See production solutions</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
