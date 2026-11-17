"use client";

import { useState } from "react";
import Link from "next/link";
import { PROJECTS, Project } from "@/data/portfolioData";
import { 
  ArrowUpRight, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Workflow, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

const CATEGORIES = [
  "All",
  "AI Governance & Security",
  "Agentic AI & Automation",
  "AI Agents & Smart Systems",
  "Financial Automation",
  "AI Business Automation",
  "Productivity Software"
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative bg-slate-50/70 border-t border-slate-200 bg-topographic-contour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#1a73e8]" />
          <span className="text-xs font-mono tracking-widest text-[#1a73e8] font-semibold uppercase">
            03 // Featured Deployments &amp; Systems
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Proven Systems. Working Code.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Practical software engineering, autonomous agents, and enterprise automation pipelines designed for reliability, scalability, and measurable ROI.
            </p>
          </div>

          <div className="text-xs font-mono font-medium text-slate-500 bg-white border border-slate-200 px-3.5 py-1.5 rounded-lg shadow-sm">
            Showing <span className="text-[#1a73e8] font-bold">{filteredProjects.length}</span> of {PROJECTS.length} Systems
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all whitespace-nowrap ${
                selectedCategory === category
                  ? "bg-[#1a73e8] text-white font-semibold shadow-sm shadow-blue-500/30"
                  : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl bg-white border border-slate-200/90 hover:border-blue-400 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm group"
            >
              <div>
                {/* Top Badges */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-[#1a73e8]">
                    {project.category}
                  </span>
                  <span className="text-[10px] font-mono font-medium text-slate-500 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1a73e8] transition-colors">
                  <Link href={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1 mb-4 leading-normal">
                  {project.tagline}
                </p>

                {/* Technical Overview Snippet */}
                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                  {project.overview}
                </p>

                {/* Problem / Solution Snapshot */}
                <div className="space-y-2 py-3 border-y border-slate-100 bg-slate-50/50 rounded-lg p-2.5 mb-4 text-[11px]">
                  <div className="flex items-start gap-2 text-slate-600">
                    <span className="text-rose-600 font-mono shrink-0 font-bold">PRBLM:</span>
                    <span className="line-clamp-2">{project.problem}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-700">
                    <span className="text-emerald-700 font-mono shrink-0 font-bold">SOLN:</span>
                    <span className="line-clamp-2">{project.solution}</span>
                  </div>
                </div>

                {/* Key Stats Pill (if present) */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-1.5 mb-4 p-2 rounded-lg bg-slate-50 border border-slate-200/80">
                    {project.stats.map((s, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-[10px] font-mono font-bold text-slate-900 truncate">
                          {s.value}
                        </div>
                        <div className="text-[9px] text-slate-500 truncate">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                      +{project.technologies.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 group-hover:text-[#1a73e8] transition-colors"
                >
                  <span>Case Study &amp; Architecture</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-colors"
                    title="View Source on GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
