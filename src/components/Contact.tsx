"use client";

import { useState } from "react";
import Link from "next/link";
import { PERSONAL_INFO } from "@/data/portfolioData";
import { 
  Mail, 
  Calendar, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ArrowUpRight,
  Clock,
  Sparkles,
  ShieldCheck
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const PROJECT_TYPES = [
  "Autonomous Multi-Agent System",
  "Business Process & Workflow Automation (n8n/Make)",
  "AI-Powered CRM / Lead Pipeline",
  "Financial Reconciliation (LedgerSync style)",
  "Custom AI Web Application (Next.js/Python)",
  "AI Governance & Safety Assessment",
  "General IT / Systems Advisory"
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    projectType: PROJECT_TYPES[0],
    budget: "$3k - $10k",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [referenceId, setReferenceId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit message.");
      }

      setStatus("success");
      setFeedbackMessage(result.message || "Message delivered successfully.");
      setReferenceId(result.referenceId || "");
      setFormData({
        name: "",
        email: "",
        organization: "",
        projectType: PROJECT_TYPES[0],
        budget: "$3k - $10k",
        message: ""
      });
    } catch (err: unknown) {
      setStatus("error");
      const errorMessage = err instanceof Error ? err.message : "An unexpected network error occurred.";
      setFeedbackMessage(errorMessage);
    }
  };

  return (
    <section id="contact" className="py-24 relative bg-white border-t border-slate-200 bg-topographic-contour">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-[#1a73e8]" />
          <span className="text-xs font-mono tracking-widest text-[#1a73e8] font-semibold uppercase">
            06 // Direct Engineering Channel
          </span>
        </div>

        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Have a problem worth solving?{" "}
            <span className="text-[#1a73e8]">
              Let&apos;s build something intelligent.
            </span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed font-normal">
            Whether you need an autonomous agent architecture, enterprise workflow automation, custom AI tooling, or high-level systems advisory, let&apos;s evaluate your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Channels & Calendly Booking (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Calendly Priority Card */}
            <div className="p-6 rounded-2xl bg-blue-50/80 border border-blue-200 shadow-md relative overflow-hidden group">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-[#1a73e8] text-white flex items-center justify-center shadow-sm">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Direct 30-min Technical Call</h3>
                  <p className="text-xs text-slate-500 font-medium">Skip the inbox &amp; pick a live slot</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 mb-5 leading-relaxed font-normal">
                Schedule a 1-on-1 discovery session directly on my calendar to review your architecture, assess feasibility, and scope deliverables.
              </p>
              <Link
                href={PERSONAL_INFO.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] shadow-sm shadow-blue-500/20 transition-all hover:scale-[1.01]"
              >
                <span>Open Calendly Booking</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Direct Information Channels */}
            <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200 space-y-4 shadow-sm">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Direct Channels &amp; Coordinates
              </h4>

              {/* Email */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#1a73e8]" />
                  <div>
                    <div className="text-[11px] text-slate-500">Direct Inquiries</div>
                    <div className="text-xs font-semibold text-slate-800 group-hover:text-[#1a73e8] transition-colors">
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1a73e8] transition-colors" />
              </a>

              {/* LinkedIn */}
              <Link
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-4 h-4 text-[#1a73e8]" />
                  <div>
                    <div className="text-[11px] text-slate-500">Professional Network</div>
                    <div className="text-xs font-semibold text-slate-800 group-hover:text-[#1a73e8] transition-colors">
                      linkedin.com/in/sulisumen-peter
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1a73e8] transition-colors" />
              </Link>

              {/* GitHub */}
              <Link
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-white border border-slate-200 hover:border-blue-400 shadow-sm transition-all group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-4 h-4 text-[#1a73e8]" />
                  <div>
                    <div className="text-[11px] text-slate-500">Repositories &amp; Code</div>
                    <div className="text-xs font-semibold text-slate-800 group-hover:text-[#1a73e8] transition-colors">
                      github.com/sulisumenpeter
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1a73e8] transition-colors" />
              </Link>
            </div>

            {/* SLA Badge */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center gap-3 text-xs text-slate-600 font-medium">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Standard response time: Within 24 hours Monday through Friday.</span>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-lg">
            <h3 className="text-xl font-extrabold text-slate-900 mb-2">
              Send a Detailed Project Brief
            </h3>
            <p className="text-xs text-slate-600 mb-6 font-normal">
              Share your business problem, timeline, or engineering goals. All submissions are processed directly through our secure pipeline.
            </p>

            {status === "success" ? (
              <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-300 text-center space-y-4 animate-in fade-in duration-300">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-slate-900">Inquiry Transmitted Successfully</h4>
                <p className="text-xs text-slate-700 leading-relaxed max-w-md mx-auto">
                  {feedbackMessage}
                </p>
                {referenceId && (
                  <div className="inline-block px-3 py-1 rounded bg-white border border-slate-200 text-[11px] font-mono text-[#1a73e8] font-bold">
                    Ref ID: {referenceId}
                  </div>
                )}
                <div className="pt-2">
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-xs text-slate-600 hover:text-slate-900 underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && (
                  <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-300 text-rose-800 text-xs flex items-center gap-2.5">
                    <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
                    <span>{feedbackMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] focus:outline-none text-slate-900 text-xs placeholder:text-slate-400 transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono">
                      Business Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] focus:outline-none text-slate-900 text-xs placeholder:text-slate-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Organization */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono">
                      Organization / Company
                    </label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="Acme Corp / Startup"
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] focus:outline-none text-slate-900 text-xs placeholder:text-slate-400 transition-colors"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono">
                      System Engagement Scope
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] focus:outline-none text-slate-900 text-xs transition-colors"
                    >
                      {PROJECT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 font-mono">
                    Problem Description &amp; Scope *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe the workflows, systems, or technical challenges you are looking to automate or build..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 focus:border-[#1a73e8] focus:ring-1 focus:ring-[#1a73e8] focus:outline-none text-slate-900 text-xs placeholder:text-slate-400 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-xs font-semibold text-white bg-[#1a73e8] hover:bg-[#1557b0] shadow-md shadow-blue-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.01]"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Send Project Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
