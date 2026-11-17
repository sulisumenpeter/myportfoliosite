import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PROJECTS, Project } from "@/data/portfolioData";
import { 
  ArrowLeft, 
  ExternalLink, 
  CheckCircle2, 
  AlertTriangle, 
  Workflow, 
  Cpu, 
  Layers, 
  ShieldCheck, 
  Clock, 
  ChevronRight,
  Sparkles
} from "lucide-react";
import { GithubIcon } from "@/components/SocialIcons";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study & Architecture | Sulisumen Peter`,
    description: project.overview,
    openGraph: {
      title: `${project.title} - Sulisumen Peter`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col bg-topographic-contour">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb Back Link */}
          <div className="mb-8">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium text-slate-500 hover:text-[#1a73e8] transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Projects &amp; Systems</span>
            </Link>
          </div>

          {/* Header Info */}
          <div className="space-y-4 pb-8 border-b border-slate-200">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-blue-50 border border-blue-200 text-[#1a73e8]">
                {project.category}
              </span>
              <span className="text-xs font-mono font-medium text-slate-500 flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 border border-slate-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {project.status}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-mono">
              {project.tagline}
            </p>

            {/* Quick Action Links */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] shadow-sm shadow-blue-500/20 transition-all"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect GitHub Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              )}

              {project.demoUrl && project.demoUrl !== project.githubUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-all"
                >
                  <ExternalLink className="w-4 h-4 text-[#1a73e8]" />
                  <span>Live System Demonstration</span>
                </Link>
              )}
            </div>
          </div>

          {/* Interactive Architectural Flow Banner */}
          <div className="my-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 relative overflow-hidden shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-[#1a73e8]" />
                <h3 className="text-xs font-mono uppercase tracking-wider text-slate-800 font-bold">
                  Execution Topology // High-Level Pipeline
                </h3>
              </div>
              <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded font-bold">
                Verified Architecture
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
              {project.architecture.map((item, idx) => {
                const [title, ...descParts] = item.split(":");
                const desc = descParts.join(":");
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between shadow-sm"
                  >
                    <div>
                      <div className="text-[10px] font-mono text-[#1a73e8] mb-1 font-bold">
                        LAYER 0{idx + 1}
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 mb-1.5">
                        {title}
                      </h4>
                      <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                        {desc || title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Deep Dive Content Sections */}
          <div className="space-y-12 text-slate-700">
            {/* Overview */}
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#1a73e8]" />
                <span>Executive Overview</span>
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
                {project.overview}
              </p>
            </section>

            {/* Problem & Solution Dual Column */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Problem */}
              <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-rose-700 font-mono text-xs font-bold uppercase tracking-wider">
                  <AlertTriangle className="w-4 h-4 text-rose-600" />
                  <span>The Engineering Problem</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-3 shadow-sm">
                <div className="flex items-center gap-2 text-emerald-800 font-mono text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>The Engineered Solution</span>
                </div>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-700">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Sequential Execution Workflow */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-[#1a73e8]" />
                <span>Sequential Execution Workflow</span>
              </h2>
              <div className="space-y-3">
                {project.workflow.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 shadow-sm"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-mono font-bold text-[#1a73e8] shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Key Implementation Decisions */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#1a73e8]" />
                <span>Key Implementation Decisions &amp; Trade-Offs</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.keyDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#1a73e8] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {decision}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenges & Edge Cases */}
            <section className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#1a73e8]" />
                <span>Technical Challenges &amp; Considerations</span>
              </h2>
              <div className="space-y-3">
                {project.challenges.map((challenge, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3 shadow-sm"
                  >
                    <div className="w-2 h-2 rounded-full bg-amber-500 shrink-0 mt-2" />
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Technology Stack Full Breakdown */}
            <section className="space-y-4 pt-4 border-t border-slate-200">
              <h2 className="text-sm font-mono uppercase tracking-wider text-slate-500 font-bold">
                Technology Stack &amp; Protocols
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono font-medium px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* CTA Box */}
            <div className="p-8 rounded-2xl bg-blue-50 border border-blue-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Need a similar system built for your company?
                </h3>
                <p className="text-xs text-slate-600 mt-1 max-w-lg">
                  I architect bespoke autonomous workflows, AI agents, and enterprise integrations tailored to your technical stack.
                </p>
              </div>
              <Link
                href="/#contact"
                className="px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] transition-all shrink-0 shadow-sm shadow-blue-500/20"
              >
                Discuss System Implementation
              </Link>
            </div>

            {/* Previous / Next Project Navigation */}
            <div className="pt-8 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href={`/projects/${prevProject.slug}`}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition-all flex items-center justify-between group"
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold">← PREVIOUS SYSTEM</span>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#1a73e8] transition-colors">
                    {prevProject.title}
                  </span>
                </div>
              </Link>

              <Link
                href={`/projects/${nextProject.slug}`}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition-all flex items-center justify-between text-right group"
              >
                <div className="w-full">
                  <span className="text-[10px] font-mono text-slate-400 block font-semibold">NEXT SYSTEM →</span>
                  <span className="text-xs font-bold text-slate-800 group-hover:text-[#1a73e8] transition-colors">
                    {nextProject.title}
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
