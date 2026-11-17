"use client";

import { useState, useEffect } from "react";
import { 
  Play, 
  RotateCcw, 
  Cpu, 
  Layers, 
  Terminal, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  Activity, 
  ArrowRight,
  Database,
  Workflow
} from "lucide-react";

interface NodeStep {
  id: string;
  name: string;
  category: string;
  detail: string;
  status: "idle" | "running" | "completed";
  latency: string;
}

const PRESET_SCENARIOS = [
  {
    id: "crm-ai",
    title: "AI CRM & Lead Pipeline",
    description: "Inbound webhook -> Gemini intent scoring -> Airtable sync -> Slack alert",
    target: "Make + Gemini + Webhooks",
    tokens: "1,240 tokens",
    runtime: "820ms"
  },
  {
    id: "redteam",
    title: "RedTeam Adversarial Eval",
    description: "OWASP attack suite -> Parallel injection -> Safety judge verification",
    target: "RedTeam AI Labs Core",
    tokens: "3,890 tokens",
    runtime: "1.4s"
  },
  {
    id: "financial-sync",
    title: "LedgerSync Reconciliation",
    description: "Multi-currency invoice OCR -> Transaction hash matching -> Journal sync",
    target: "FastAPI + Python + OCR",
    tokens: "2,110 tokens",
    runtime: "940ms"
  }
];

export default function AgentSimulator() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(2); // default completed view
  const [logs, setLogs] = useState<string[]>([
    "[09:42:10.120] [EVENT] Webhook received: payload_hash=0x8f2a... verified HMAC",
    "[09:42:10.190] [ROUTER] Supervisor assigned goal to Gemini-1.5-Pro agent",
    "[09:42:10.420] [STATE] LangGraph node 'intent_classification' entered",
    "[09:42:10.610] [TOOL_CALL] Dispatched MCP HTTP request to tool: reconcile_entry()",
    "[09:42:10.840] [GUARDRAIL] RedTeam safety filter passed: 0 vulnerabilities detected",
    "[09:42:10.980] [SUCCESS] Target state synchronized. Transaction committed."
  ]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setLogs([`[INIT] Starting pipeline simulation for '${PRESET_SCENARIOS[activeScenario].title}'...`]);

    const steps = [
      { step: 0, log: "[00.12s] Ingesting event stream & verifying cryptographic payload..." },
      { step: 1, log: "[00.35s] Agent Planner initialized: decomposing goal into tool dependencies..." },
      { step: 2, log: "[00.61s] Tool Cluster invoked: executing atomic actions via MCP & n8n nodes..." },
      { step: 3, log: "[00.89s] RedTeam AI Guardrails active: scoring output against OWASP safety matrix..." },
      { step: 4, log: "[01.12s] State committed: Verified output synced to production endpoints." }
    ];

    steps.forEach(({ step, log }, index) => {
      setTimeout(() => {
        setActiveStep(step);
        setLogs((prev) => [...prev, log]);
        if (index === steps.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 450);
    });
  };

  return (
    <div className="w-full rounded-2xl bg-[#0b0d14]/90 border border-white/[0.1] shadow-2xl shadow-cyan-950/20 overflow-hidden backdrop-blur-xl">
      {/* Top Header / Bar */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/[0.08] bg-white/[0.02]">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 radar-ping" />
            <span className="text-[11px] font-mono tracking-wider font-semibold text-emerald-400 uppercase">
              Agentic Pipeline Online
            </span>
          </div>
          <span className="text-white/20">|</span>
          <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
            SYSTEM: MULTI-AGENT ORCHESTRATION LOOP
          </span>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <button
            onClick={runSimulation}
            disabled={isRunning}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
              isRunning
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 cursor-not-allowed"
                : "bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400/50"
            }`}
          >
            {isRunning ? (
              <>
                <Activity className="w-3.5 h-3.5 animate-spin text-cyan-400" />
                <span>Simulating...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-cyan-400 text-cyan-400" />
                <span>Simulate Agent Run</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Scenario Selector Pills */}
      <div className="px-4 sm:px-6 py-2.5 bg-black/40 border-b border-white/[0.06] flex items-center gap-2 overflow-x-auto no-scrollbar">
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 shrink-0">
          Workflows:
        </span>
        {PRESET_SCENARIOS.map((scen, idx) => (
          <button
            key={scen.id}
            onClick={() => {
              setActiveScenario(idx);
              setActiveStep(2);
            }}
            className={`px-2.5 py-1 rounded-md text-xs font-mono whitespace-nowrap transition-all ${
              activeScenario === idx
                ? "bg-white/[0.1] text-cyan-300 border border-cyan-500/40 shadow-sm"
                : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04] border border-transparent"
            }`}
          >
            {scen.title}
          </button>
        ))}
      </div>

      {/* Interactive Workflow Node Diagram */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-transparent to-black/20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
          {/* Node 1: Ingestion */}
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              activeStep === 0
                ? "bg-cyan-500/15 border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                : activeStep > 0
                ? "bg-white/[0.04] border-emerald-500/40 text-slate-300"
                : "bg-white/[0.02] border-white/[0.06] text-slate-500"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-cyan-400 font-semibold">STAGE 01</span>
              <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <h4 className="text-xs font-semibold text-slate-100">Event Ingestion</h4>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
              Webhooks & APIs with HMAC cryptographic verification
            </p>
            <div className="mt-2 text-[10px] font-mono text-cyan-400/80">
              {activeStep === 0 ? "● Processing..." : "✓ Ingested"}
            </div>
          </div>

          {/* Node 2: Reasoning Core */}
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              activeStep === 1
                ? "bg-cyan-500/15 border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                : activeStep > 1
                ? "bg-white/[0.04] border-emerald-500/40 text-slate-300"
                : "bg-white/[0.02] border-white/[0.06] text-slate-500"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-cyan-400 font-semibold">STAGE 02</span>
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <h4 className="text-xs font-semibold text-slate-100">AI Supervisor</h4>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
              Gemini & Claude planning loop, tool routing & memory
            </p>
            <div className="mt-2 text-[10px] font-mono text-cyan-400/80">
              {activeStep === 1 ? "● Reasoning..." : activeStep > 1 ? "✓ Plan Formed" : "Standby"}
            </div>
          </div>

          {/* Node 3: Tool Execution */}
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              activeStep === 2
                ? "bg-cyan-500/15 border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                : activeStep > 2
                ? "bg-white/[0.04] border-emerald-500/40 text-slate-300"
                : "bg-white/[0.02] border-white/[0.06] text-slate-500"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-cyan-400 font-semibold">STAGE 03</span>
              <Zap className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <h4 className="text-xs font-semibold text-slate-100">Tool Cluster</h4>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
              MCP Servers, n8n scenarios, SQL & Apify workers
            </p>
            <div className="mt-2 text-[10px] font-mono text-cyan-400/80">
              {activeStep === 2 ? "● Executing Tools..." : activeStep > 2 ? "✓ Tools Dispatched" : "Standby"}
            </div>
          </div>

          {/* Node 4: Safety & Guardrails */}
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              activeStep === 3
                ? "bg-cyan-500/15 border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                : activeStep > 3
                ? "bg-white/[0.04] border-emerald-500/40 text-slate-300"
                : "bg-white/[0.02] border-white/[0.06] text-slate-500"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-cyan-400 font-semibold">STAGE 04</span>
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            </div>
            <h4 className="text-xs font-semibold text-slate-100">RedTeam Defense</h4>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
              Adversarial checks, OWASP filter & hallucination eval
            </p>
            <div className="mt-2 text-[10px] font-mono text-cyan-400/80">
              {activeStep === 3 ? "● Evaluating Safety..." : activeStep > 3 ? "✓ 0 Vulnerabilities" : "Standby"}
            </div>
          </div>

          {/* Node 5: Verified Output */}
          <div
            className={`p-3.5 rounded-xl border transition-all ${
              activeStep === 4
                ? "bg-cyan-500/15 border-cyan-400/80 shadow-lg shadow-cyan-500/10 scale-[1.02]"
                : activeStep >= 4
                ? "bg-white/[0.04] border-emerald-500/40 text-slate-300"
                : "bg-white/[0.02] border-white/[0.06] text-slate-500"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] font-mono text-cyan-400 font-semibold">STAGE 05</span>
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <h4 className="text-xs font-semibold text-slate-100">Production Sync</h4>
            <p className="text-[11px] text-slate-400 mt-1 leading-snug">
              Committed to CRM, ERP, Slack, and cloud database
            </p>
            <div className="mt-2 text-[10px] font-mono text-emerald-400 font-semibold">
              {activeStep === 4 ? "● Committing..." : "✓ Synced & Live"}
            </div>
          </div>
        </div>

        {/* Telemetry and Terminal Log Window */}
        <div className="mt-4 rounded-xl bg-black/60 border border-white/[0.08] p-3 font-mono text-[11px]">
          <div className="flex items-center justify-between text-slate-400 border-b border-white/[0.06] pb-2 mb-2">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-slate-300">Live Agent Stream Telemetry</span>
            </div>
            <div className="flex items-center gap-3 text-[10px]">
              <span className="text-cyan-400">{PRESET_SCENARIOS[activeScenario].tokens}</span>
              <span className="text-slate-400">Latency: {PRESET_SCENARIOS[activeScenario].runtime}</span>
            </div>
          </div>
          <div className="space-y-1 max-h-24 overflow-y-auto font-mono text-slate-300 pr-1">
            {logs.map((log, idx) => (
              <div key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="text-cyan-500 select-none">&gt;</span>
                <span className={idx === logs.length - 1 ? "text-cyan-300" : "text-slate-400"}>
                  {log}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
