"use client";

import { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import GenerativeParticleCanvas from "./GenerativeParticleCanvas";
import AgentSimulator from "./AgentSimulator";
import { 
  Calendar, 
  Check, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Cpu, 
  ExternalLink,
  ChevronDown
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function Hero() {
  const [activeVisual, setActiveVisual] = useState<"generative" | "simulator">("generative");

  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-16 bg-white border-b border-slate-200 overflow-hidden bg-topographic-contour">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ========================================================================= */}
          {/* LEFT COLUMN: Clean, high-impact editorial typography on white */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200 self-start mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 radar-ping" />
              <span className="text-xs font-mono font-medium text-slate-700">
                Available for Global Engagements &amp; Advisory
              </span>
            </div>

            {/* Main Headline with Top-Tier Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-[-0.03em] text-slate-900 leading-[1.08] mb-6">
              Building Real AI <br className="hidden sm:inline" />
              Agents &amp; Intelligent <br className="hidden sm:inline" />
              <span className="text-[#1a73e8]">
                Systems.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-6 max-w-xl">
              Skip the theory. I design, build, and deploy real, production-ready AI agents, autonomous workflows, and intelligent business systems that solve complex problems.
            </p>

            {/* Date & Schedule Row with Blue Calendar Icon */}
            <div className="flex items-center gap-2.5 mb-4 text-sm font-semibold text-[#1a73e8]">
              <Calendar className="w-4 h-4 text-[#1a73e8] shrink-0" />
              <Link
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline flex items-center gap-1.5 transition-colors"
              >
                <span>Live Technical Discovery • 30-min Strategy Call Available</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </Link>
            </div>

            {/* Status / Verifiable Checkmark Row */}
            <div className="flex items-center gap-2 text-xs sm:text-sm text-emerald-700 font-medium mb-8">
              <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" />
              <span>10+ Years IT Experience • 100+ Systems &amp; Automations Delivered</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-10">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-white bg-slate-900 hover:bg-black shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
              >
                <span>Explore Engineered Systems</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold text-[#1a73e8] bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-all hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-[#1a73e8]" />
                <span>Book 30-min Technical Discovery</span>
              </Link>
            </div>

            {/* Personal Engineer Attribution Bar */}
            <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-slate-900">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-mono text-[#1a73e8] font-medium">
                  {PERSONAL_INFO.brand}
                </span>
                <span>•</span>
                <span>Founder, Lisumen Innovative Hub</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors"
                  title="GitHub"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-slate-900 transition-colors"
                  title="LinkedIn"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* RIGHT COLUMN: Interactive 3D Generative Visualizer */}
          {/* ========================================================================= */}
          <div className="lg:col-span-6 relative flex flex-col justify-center">
            {/* View Switcher: Generative 3D Mesh vs Live Agent Pipeline */}
            <div className="flex items-center justify-end gap-1.5 mb-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mr-1">
                Visualizer:
              </span>
              <button
                onClick={() => setActiveVisual("generative")}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                  activeVisual === "generative"
                    ? "bg-blue-100 text-[#1a73e8] border border-blue-300 font-semibold"
                    : "text-slate-600 hover:text-slate-900 bg-slate-100 border border-transparent"
                }`}
              >
                3D Neural Mesh
              </button>
              <button
                onClick={() => setActiveVisual("simulator")}
                className={`px-2.5 py-1 rounded-md text-[11px] font-mono transition-all ${
                  activeVisual === "simulator"
                    ? "bg-blue-100 text-[#1a73e8] border border-blue-300 font-semibold"
                    : "text-slate-600 hover:text-slate-900 bg-slate-100 border border-transparent"
                }`}
              >
                Agent Loop
              </button>
            </div>

            {/* Display Component */}
            {activeVisual === "generative" ? (
              <GenerativeParticleCanvas />
            ) : (
              <AgentSimulator />
            )}
          </div>
        </div>

        {/* Explore Engineering Story & Deployments Button */}
        <div className="mt-14 flex justify-center">
          <Link
            href="#about"
            className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 border border-slate-200/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] hover:border-blue-300"
          >
            <span className="text-xs sm:text-sm font-semibold text-slate-800 group-hover:text-[#1a73e8] transition-colors">
              Explore Engineering Story &amp; Deployments
            </span>
            <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-[#1a73e8] group-hover:bg-[#1a73e8] group-hover:text-white transition-all">
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
