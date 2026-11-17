"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { PERSONAL_INFO, PROJECTS } from "@/data/portfolioData";
import { 
  Search, 
  X, 
  Calendar, 
  FileText, 
  FolderGit2, 
  ArrowRight, 
  Mail, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Workflow, 
  ExternalLink 
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

interface PaletteItem {
  id: string;
  category: "Navigation" | "Projects" | "Action" | "Social";
  title: string;
  subtitle: string;
  action: () => void;
  icon: React.ReactNode;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  // Listen for Cmd+K or Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closePalette = () => {
    setIsOpen(false);
    setQuery("");
  };

  const items: PaletteItem[] = [
    // Actions
    {
      id: "action-call",
      category: "Action",
      title: "Schedule 30-min Technical Discovery",
      subtitle: "Open Calendly to book a 1-on-1 consultation slot",
      icon: <Calendar className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open(PERSONAL_INFO.calendlyUrl, "_blank");
        closePalette();
      }
    },
    {
      id: "action-cv",
      category: "Action",
      title: "View & Download CV",
      subtitle: "Print or export Sulisumen Peter's complete engineering resume",
      icon: <FileText className="w-4 h-4 text-cyan-400" />,
      action: () => {
        router.push("/resume");
        closePalette();
      }
    },
    {
      id: "action-email",
      category: "Action",
      title: "Send Direct Email Inquiry",
      subtitle: `Open mail client to ${PERSONAL_INFO.email}`,
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.location.href = `mailto:${PERSONAL_INFO.email}`;
        closePalette();
      }
    },

    // Navigation
    {
      id: "nav-about",
      category: "Navigation",
      title: "About & Lisumen Hub Journey",
      subtitle: "10+ years IT experience, founder leadership, AI transition",
      icon: <Cpu className="w-4 h-4 text-cyan-400" />,
      action: () => {
        router.push("/#about");
        closePalette();
      }
    },
    {
      id: "nav-expertise",
      category: "Navigation",
      title: "Technical Expertise Matrix",
      subtitle: "AI agents, LangGraph, n8n, Make, FastAPI, Python",
      icon: <Workflow className="w-4 h-4 text-cyan-400" />,
      action: () => {
        router.push("/#expertise");
        closePalette();
      }
    },
    {
      id: "nav-projects",
      category: "Navigation",
      title: "Explore All Featured Projects",
      subtitle: "View the 6 production-grade systems & architectures",
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      action: () => {
        router.push("/#projects");
        closePalette();
      }
    },
    {
      id: "nav-solutions",
      category: "Navigation",
      title: "What I Can Build (Commercial Solutions)",
      subtitle: "Autonomous agents, CRM sync, FinOps, workflow automation",
      icon: <Sparkles className="w-4 h-4 text-cyan-400" />,
      action: () => {
        router.push("/#solutions");
        closePalette();
      }
    },
    {
      id: "nav-contact",
      category: "Navigation",
      title: "Contact & Project Inquiries",
      subtitle: "Send a detailed project brief to Sulisumen Peter",
      icon: <Mail className="w-4 h-4 text-cyan-400" />,
      action: () => {
        router.push("/#contact");
        closePalette();
      }
    },

    // Projects
    ...PROJECTS.map((p) => ({
      id: `proj-${p.slug}`,
      category: "Projects" as const,
      title: p.title,
      subtitle: `${p.category} — ${p.tagline}`,
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      action: () => {
        router.push(`/projects/${p.slug}`);
        closePalette();
      }
    })),

    // Social
    {
      id: "social-github",
      category: "Social",
      title: "GitHub Repositories",
      subtitle: "github.com/sulisumenpeter",
      icon: <GithubIcon className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open(PERSONAL_INFO.githubUrl, "_blank");
        closePalette();
      }
    },
    {
      id: "social-linkedin",
      category: "Social",
      title: "LinkedIn Profile",
      subtitle: "linkedin.com/in/sulisumen-peter",
      icon: <LinkedinIcon className="w-4 h-4 text-cyan-400" />,
      action: () => {
        window.open(PERSONAL_INFO.linkedinUrl, "_blank");
        closePalette();
      }
    }
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      {/* Floating Shortcut Pill - Bottom Right */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c0f16]/90 border border-white/[0.12] text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/40 shadow-xl shadow-black/60 backdrop-blur-md transition-all group"
        title="Open Command Palette (Cmd+K / Ctrl+K)"
      >
        <Search className="w-3.5 h-3.5 text-cyan-400" />
        <span className="text-[11px]">Command Palette</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/[0.08] text-[10px] text-slate-400 font-sans border border-white/[0.08]">
          ⌘K
        </kbd>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-150">
          <div
            className="w-full max-w-xl rounded-2xl bg-[#0b0e14] border border-white/[0.12] shadow-2xl shadow-cyan-950/30 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/[0.08]">
              <Search className="w-4 h-4 text-cyan-400 shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command, project, or section... (e.g. RedTeam, Calendly, ROI)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent text-sm text-white placeholder:text-slate-500 focus:outline-none"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              <kbd className="px-2 py-0.5 rounded bg-white/[0.05] text-[10px] font-mono text-slate-400 border border-white/[0.08]">
                ESC
              </kbd>
            </div>

            {/* Results List */}
            <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
              {filteredItems.length === 0 ? (
                <div className="p-8 text-center text-xs text-slate-400">
                  No commands or projects matching &ldquo;{query}&rdquo;
                </div>
              ) : (
                filteredItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/[0.05] text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 transition-colors">
                        {item.icon}
                      </div>
                      <div className="truncate">
                        <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors truncate">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-400 truncate">
                          {item.subtitle}
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
                  </button>
                ))
              )}
            </div>

            {/* Footer Tip */}
            <div className="px-4 py-2.5 bg-black/40 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>Sulisumen Peter Portfolio Navigator</span>
              <span>Use ↑ ↓ to navigate, ESC to exit</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
