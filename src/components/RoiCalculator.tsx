"use client";

import { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp, Sparkles } from "lucide-react";

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(6);
  const [hoursPerWeekPerPerson, setHoursPerWeekPerPerson] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(45);

  // Calculations
  const totalWeeklyManualHours = teamSize * hoursPerWeekPerPerson;
  const estimatedAutomationPercentage = 0.75; // 75% of manual ops automated by intelligent workflows
  const weeklyHoursSaved = Math.round(totalWeeklyManualHours * estimatedAutomationPercentage);
  const annualHoursSaved = weeklyHoursSaved * 50;
  const annualCostSavings = Math.round(annualHoursSaved * hourlyRate);

  return (
    <div className="mt-16 rounded-2xl bg-white border border-slate-200 p-6 sm:p-10 shadow-lg relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 blur-[90px] pointer-events-none rounded-full" />

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 relative z-10">
        {/* Left Side: Sliders */}
        <div className="lg:w-7/12 space-y-6">
          <div className="flex items-center gap-2 text-[#1a73e8] font-mono text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Interactive Commercial ROI Calculator</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Estimate Your Annual Automation ROI
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
            See how much manual administrative friction and operational capital your organization can eliminate with bespoke AI agents and autonomous workflows.
          </p>

          <div className="space-y-5 pt-2">
            {/* Slider 1: Team Size */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-700 font-medium">Operations &amp; Admin Team Size:</span>
                <span className="text-[#1a73e8] font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                  {teamSize} {teamSize === 1 ? "person" : "people"}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="50"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
              />
            </div>

            {/* Slider 2: Manual hours */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-700 font-medium">Manual Hours / Person / Week (CRM, reports, invoices):</span>
                <span className="text-[#1a73e8] font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                  {hoursPerWeekPerPerson} hrs/wk
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={hoursPerWeekPerPerson}
                onChange={(e) => setHoursPerWeekPerPerson(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
              />
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-700 font-medium">Blended Hourly Cost (Salary + Benefits):</span>
                <span className="text-[#1a73e8] font-bold px-2 py-0.5 rounded bg-blue-50 border border-blue-200">
                  ${hourlyRate}/hour
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="150"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#1a73e8]"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Visual Metrics Output Card */}
        <div className="lg:w-5/12 p-6 rounded-2xl bg-slate-900 text-white space-y-5 shadow-xl">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block font-semibold">
            Estimated Annual Yield (75% Automation Benchmark)
          </span>

          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400 tracking-tight">
              ${annualCostSavings.toLocaleString()}
            </div>
            <div className="text-xs text-slate-300">
              Annual Capital Saved from Manual Repetition
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
            <div>
              <div className="text-lg font-bold font-mono text-white">
                {annualHoursSaved.toLocaleString()} hrs
              </div>
              <div className="text-[11px] text-slate-400">
                Staff Hours Reclaimed / Yr
              </div>
            </div>
            <div>
              <div className="text-lg font-bold font-mono text-cyan-300">
                &lt; 6 Weeks
              </div>
              <div className="text-[11px] text-slate-400">
                Average Breakeven Window
              </div>
            </div>
          </div>

          <Link
            href={PERSONAL_INFO.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 shadow-md transition-all hover:scale-[1.01]"
          >
            <span>Review This Blueprint With Sulisumen</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
