"use client";

import { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from "lucide-react";
import { PERSONAL_INFO, PROJECTS, SKILL_CATEGORIES } from "@/data/portfolioData";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      command: "welcome",
      output: (
        <div className="space-y-1 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Sulisumen Peter — AI Intelligent Systems & Automation Engineer (#IT_Preacher)
          </p>
          <p className="text-xs text-slate-400">
            Type <span className="text-cyan-300 font-semibold">help</span> to view available commands, or <span className="text-cyan-300 font-semibold">projects</span> to inspect deployed systems.
          </p>
        </div>
      ),
    },
  ]);

  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdHistoryIdx, setCmdHistoryIdx] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus();
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [isOpen, isMinimized, history]);

  const handleCommand = (cmdText: string) => {
    const raw = cmdText.trim();
    if (!raw) return;

    setCmdHistory((prev) => [...prev, raw]);
    setCmdHistoryIdx(-1);

    const parts = raw.split(" ");
    const command = parts[0].toLowerCase();
    const arg = parts.slice(1).join(" ").toLowerCase();

    let output: React.ReactNode = null;

    switch (command) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold">Available Commands:</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 font-mono text-[11px]">
              <div><span className="text-cyan-300">whoami</span> — Executive background & positioning</div>
              <div><span className="text-cyan-300">projects</span> — List all 6 engineering deployments</div>
              <div><span className="text-cyan-300">skills</span> — Inspect technical competence stack</div>
              <div><span className="text-cyan-300">experience</span> — Lisumen Hub track record & metrics</div>
              <div><span className="text-cyan-300">contact</span> — Coordinates & Calendly booking</div>
              <div><span className="text-cyan-300">sudo hire</span> — Priority technical engagement trigger</div>
              <div><span className="text-cyan-300">clear</span> — Reset terminal window</div>
            </div>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <p className="font-semibold text-white">{PERSONAL_INFO.name} ({PERSONAL_INFO.brand})</p>
            <p className="text-cyan-400">{PERSONAL_INFO.title}</p>
            <p className="text-slate-400 text-[11px] leading-relaxed mt-1">
              &quot;{PERSONAL_INFO.positioning}&quot;
            </p>
            <p className="text-[11px] text-slate-400">
              10+ years in IT, Founder of Lisumen Innovative Hub, specializing in autonomous multi-agent pipelines (LangGraph, CrewAI, MCP), enterprise workflow automation (n8n, Make), and AI governance (RedTeam AI Labs).
            </p>
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-1.5 text-xs">
            <p className="text-cyan-400 font-semibold">Production Systems & Architectures:</p>
            <div className="space-y-1 text-[11px] font-mono">
              {PROJECTS.map((p, idx) => (
                <div key={p.slug} className="flex items-center justify-between text-slate-300">
                  <span>[{idx + 1}] <strong className="text-white">{p.title}</strong> — {p.category}</span>
                  <a href={`/projects/${p.slug}`} className="text-cyan-400 underline hover:text-cyan-300">
                    view case study
                  </a>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-400 font-semibold">Technical Stack:</p>
            <div className="space-y-1 text-[11px] font-mono text-slate-300">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <span className="text-cyan-300 font-bold">{cat.title}:</span>{" "}
                  <span className="text-slate-400">{cat.skills.map((s) => s.name).join(", ")}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-1.5 text-xs text-slate-300">
            <p className="text-cyan-400 font-semibold">Verified Metrics & Experience:</p>
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
              {PERSONAL_INFO.metrics.map((m, idx) => (
                <div key={idx} className="p-1.5 rounded bg-white/[0.04]">
                  <span className="text-emerald-400 font-bold">{m.value}</span> — {m.label}
                </div>
              ))}
            </div>
            <p className="text-[11px] text-slate-400 pt-1">
              Founder & Lead Consultant at Lisumen Innovative Hub (2019-2024), delivering 100+ projects and training 500+ professionals.
            </p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-slate-300 font-mono text-[11px]">
            <p className="text-cyan-400 font-semibold font-sans text-xs">Direct Coordinates:</p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-cyan-300 underline">{PERSONAL_INFO.email}</a></p>
            <p>Calendly: <a href={PERSONAL_INFO.calendlyUrl} target="_blank" className="text-cyan-300 underline">{PERSONAL_INFO.calendlyUrl}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedinUrl} target="_blank" className="text-cyan-300 underline">{PERSONAL_INFO.linkedinUrl}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.githubUrl} target="_blank" className="text-cyan-300 underline">{PERSONAL_INFO.githubUrl}</a></p>
          </div>
        );
        break;

      case "sudo":
        if (arg.includes("hire") || arg.includes("call")) {
          output = (
            <div className="text-xs text-emerald-400 font-mono">
              [ACCESS GRANTED] Priority engagement requested. Opening Calendly booking portal in new tab...
            </div>
          );
          setTimeout(() => {
            window.open(PERSONAL_INFO.calendlyUrl, "_blank");
          }, 600);
        } else {
          output = <p className="text-xs text-rose-400 font-mono">Permission denied: try &apos;sudo hire&apos;</p>;
        }
        break;

      case "clear":
        setHistory([]);
        return;

      default:
        output = (
          <p className="text-xs text-rose-400 font-mono">
            command not found: {raw}. Type <span className="text-cyan-300">help</span> for available commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: raw, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(inputVal);
      setInputVal("");
    } else if (e.key === "ArrowUp") {
      if (cmdHistory.length > 0) {
        const nextIdx = cmdHistoryIdx === -1 ? cmdHistory.length - 1 : Math.max(0, cmdHistoryIdx - 1);
        setCmdHistoryIdx(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      if (cmdHistoryIdx !== -1) {
        const nextIdx = cmdHistoryIdx + 1;
        if (nextIdx >= cmdHistory.length) {
          setCmdHistoryIdx(-1);
          setInputVal("");
        } else {
          setCmdHistoryIdx(nextIdx);
          setInputVal(cmdHistory[nextIdx]);
        }
      }
    }
  };

  return (
    <>
      {/* Floating Terminal Trigger Button at bottom left */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setIsMinimized(false);
        }}
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0c0f16]/90 border border-white/[0.12] text-xs font-mono text-slate-300 hover:text-white hover:border-cyan-500/40 shadow-xl shadow-black/60 backdrop-blur-md transition-all group"
        title="Open Interactive CLI Terminal"
      >
        <TerminalIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
        <span className="text-[11px]">#IT_Preacher CLI</span>
      </button>

      {/* Terminal Window */}
      {isOpen && (
        <div
          className={`fixed z-50 transition-all duration-200 shadow-2xl ${
            isMinimized
              ? "bottom-5 left-5 w-72 rounded-xl bg-[#090b10] border border-white/[0.15]"
              : "bottom-5 left-5 sm:left-6 w-[calc(100vw-2.5rem)] sm:w-[540px] max-h-[460px] rounded-2xl bg-[#090b10]/95 border border-white/[0.15] backdrop-blur-xl flex flex-col overflow-hidden"
          }`}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-black/60 border-b border-white/[0.08] select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={() => setIsOpen(false)} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 cursor-pointer" onClick={() => setIsMinimized(!isMinimized)} />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] font-mono text-slate-400">
                peter@lisumen-hub:~$
              </span>
            </div>

            <div className="flex items-center gap-2 text-slate-400">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:text-white"
                title={isMinimized ? "Restore" : "Minimize"}
              >
                {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
              </button>
              <button onClick={() => setIsOpen(false)} className="hover:text-white" title="Close">
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Terminal Logs Body */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 font-mono text-xs max-h-[340px]">
                {history.map((entry, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-2 text-slate-400">
                      <span className="text-cyan-400">peter@lisumen-hub:~$</span>
                      <span className="text-white">{entry.command}</span>
                    </div>
                    <div className="pl-4">{entry.output}</div>
                  </div>
                ))}
                <div ref={bottomRef} />
              </div>

              {/* Command Input Line */}
              <div className="p-3 bg-black/40 border-t border-white/[0.08] flex items-center gap-2 font-mono text-xs">
                <span className="text-cyan-400 font-bold">&gt;</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a command (e.g. 'help', 'projects', 'sudo hire')..."
                  className="w-full bg-transparent text-white placeholder:text-slate-600 focus:outline-none"
                />
                <button
                  onClick={() => {
                    handleCommand(inputVal);
                    setInputVal("");
                  }}
                  className="text-slate-500 hover:text-cyan-400 p-1"
                >
                  <CornerDownLeft className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
