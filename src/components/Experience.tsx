"use client";

import { useState } from "react";
import { EXPERIENCE_ITEMS, PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  Building2, 
  MapPin, 
  Award, 
  Layers,
  Sparkles
} from "lucide-react";

export default function Experience() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="experience" className="py-24 relative bg-slate-50/70 border-t border-slate-200 bg-topographic-contour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#1a73e8]" />
          <span className="text-xs font-mono tracking-widest text-[#1a73e8] font-semibold uppercase">
            05 // Professional Trajectory &amp; Track Record
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Over a Decade of Engineering &amp; Leadership.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              From enterprise IT infrastructure and digital transformation to leading Lisumen Innovative Hub and architecting production AI systems.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-[#1a73e8] bg-blue-50 border border-blue-200 px-3.5 py-2 rounded-lg font-semibold shadow-sm">
            <span>10+ Years Verifiable Industry Impact</span>
          </div>
        </div>

        {/* Highlights Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {PERSONAL_INFO.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-400 hover:shadow-md transition-all text-center sm:text-left"
            >
              <div className="text-3xl font-extrabold font-mono text-slate-900 tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs text-slate-600 mt-1 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Experience Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Timeline Navigation Buttons (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            {EXPERIENCE_ITEMS.map((item, idx) => {
              const isSelected = activeItem === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveItem(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all ${
                    isSelected
                      ? "bg-white border-2 border-[#1a73e8] shadow-md"
                      : "bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300 text-slate-600 shadow-sm"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-xs font-mono text-[#1a73e8] font-bold">
                      {item.period}
                    </span>
                    {item.badge && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-0.5">
                    {item.role}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    {item.organization}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Dive Detail of Active Role (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 gap-3 mb-6">
              <div>
                <span className="text-xs font-mono text-[#1a73e8] font-bold">
                  {EXPERIENCE_ITEMS[activeItem].period}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {EXPERIENCE_ITEMS[activeItem].role}
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                  <span className="flex items-center gap-1.5 text-slate-700 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-[#1a73e8]" />
                    {EXPERIENCE_ITEMS[activeItem].organization}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <MapPin className="w-3.5 h-3.5" />
                    {EXPERIENCE_ITEMS[activeItem].location}
                  </span>
                </div>
              </div>

              {EXPERIENCE_ITEMS[activeItem].badge && (
                <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono bg-blue-50 text-[#1a73e8] border border-blue-200 font-semibold">
                  {EXPERIENCE_ITEMS[activeItem].badge}
                </span>
              )}
            </div>

            {/* Role Summary */}
            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-2 font-semibold">
                Executive Overview
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {EXPERIENCE_ITEMS[activeItem].summary}
              </p>
            </div>

            {/* Verifiable Key Achievements */}
            <div className="mb-8">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                Key Accomplishments &amp; Systems Delivered
              </h4>
              <div className="space-y-3">
                {EXPERIENCE_ITEMS[activeItem].achievements.map((ach, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{ach}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Competencies Used */}
            <div className="pt-6 border-t border-slate-200">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3 font-semibold">
                Disciplinary Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {EXPERIENCE_ITEMS[activeItem].skillsUsed.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
