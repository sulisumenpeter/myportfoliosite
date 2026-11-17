"use client";

import { useEffect, useRef, useState } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  baseX: number;
  baseY: number;
  baseZ: number;
  size: number;
  color: string;
  speed: number;
  phase: number;
}

export default function GenerativeParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1));
    let height = (canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1));

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * (window.devicePixelRatio || 1);
      height = canvas.height = canvas.offsetHeight * (window.devicePixelRatio || 1);
    };

    window.addEventListener("resize", handleResize);

    // Color palette inspired by the organic coral/neural generative sculpture:
    // Vivid magenta, violet, coral red, electric cyan, and warm gold sparks
    const COLORS = [
      "rgba(244, 63, 94, 0.85)",   // Coral rose
      "rgba(236, 72, 153, 0.85)",  // Magenta
      "rgba(168, 85, 247, 0.85)",  // Purple / Violet
      "rgba(192, 132, 252, 0.9)",  // Light Violet
      "rgba(251, 146, 60, 0.8)",   // Amber / Coral
      "rgba(56, 189, 248, 0.75)",  // Cyan highlight
      "rgba(255, 255, 255, 0.95)", // White particle sparks
    ];

    // Generate 3D organic sculpture points using mathematical parametric equations
    // (Combining spherical harmonics with organic fractal flow)
    const particleCount = 750;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random() * Math.PI * 2;
      const v = Math.acos(Math.random() * 2 - 1);
      
      // Organic deformation radius
      const rMod = 1 + 0.35 * Math.sin(5 * u) * Math.cos(4 * v) + 0.2 * Math.sin(3 * v);
      const radius = (120 + Math.random() * 90) * rMod;

      const x = radius * Math.sin(v) * Math.cos(u);
      const y = radius * Math.sin(v) * Math.sin(u) * 0.85;
      const z = radius * Math.cos(v);

      particles.push({
        x,
        y,
        z,
        baseX: x,
        baseY: y,
        baseZ: z,
        size: Math.random() * 2.2 + 0.8,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        speed: 0.0008 + Math.random() * 0.0015,
        phase: Math.random() * Math.PI * 2,
      });
    }

    let angleY = 0;
    let angleX = 0.2;
    let time = 0;

    const render = () => {
      time += 0.015;
      
      // Smooth mouse interpolation for 3D rotation
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      angleY += 0.003 + mouseRef.current.x * 0.0001;
      angleX = 0.2 + mouseRef.current.y * 0.0003;

      ctx.clearRect(0, 0, width, height);

      const fov = 420 * (window.devicePixelRatio || 1);
      const cx = width / 2;
      const cy = height / 2;

      // Sort particles by transformed depth (Z) for natural depth layering
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);
      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);

      // Render ambient soft glow at center
      const gradient = ctx.createRadialGradient(cx, cy, 20, cx, cy, width * 0.45);
      gradient.addColorStop(0, "rgba(236, 72, 153, 0.12)");
      gradient.addColorStop(0.5, "rgba(168, 85, 247, 0.07)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Transform and project particles
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Pulsing breathing wave
        const wave = Math.sin(time + p.phase) * 6;
        const curX = p.baseX + wave * 0.3;
        const curY = p.baseY + Math.cos(time * 0.8 + p.phase) * 6;
        const curZ = p.baseZ + wave * 0.3;

        // 3D Rotation Y
        let rx = curX * cosY - curZ * sinY;
        let rz = curX * sinY + curZ * cosY;

        // 3D Rotation X
        let ry = curY * cosX - rz * sinX;
        rz = curY * sinX + rz * cosX;

        // Perspective projection
        const scale = fov / (fov + rz + 320);
        const px = cx + rx * scale;
        const py = cy + ry * scale;
        const pSize = Math.max(0.6, p.size * scale);
        const alpha = Math.min(1, Math.max(0.15, (rz + 260) / 450));

        projected.push({
          px,
          py,
          scale,
          rz,
          size: pSize,
          color: p.color,
          alpha,
        });
      }

      // Sort back-to-front
      projected.sort((a, b) => b.rz - a.rz);

      // Draw particles with glowing dots
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];

        ctx.beginPath();
        ctx.arc(p.px, p.py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Extra highlight on top 20% nearest particles
        if (p.rz > 60) {
          ctx.beginPath();
          ctx.arc(p.px, p.py, p.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
          ctx.fill();
        }
      }

      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseRef.current.targetX = x;
    mouseRef.current.targetY = y;
  };

  const handleMouseLeave = () => {
    mouseRef.current.targetX = 0;
    mouseRef.current.targetY = 0;
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[460px] sm:h-[520px] lg:h-[580px] rounded-2xl bg-gradient-to-br from-[#12141d] via-[#0d0f17] to-[#08090d] border border-white/[0.1] shadow-2xl overflow-hidden flex items-center justify-center group"
    >
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-purple-500/10 via-transparent to-transparent pointer-events-none" />

      {/* Pure Code 3D Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      />

      {/* Interactive Top-Left Pill: Neural Mesh Active */}
      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/[0.12] backdrop-blur-md text-[11px] font-mono text-slate-300">
        <span className="w-2 h-2 rounded-full bg-emerald-400 radar-ping" />
        <span className="text-white font-medium">Interactive 3D Neural Mesh</span>
      </div>

      {/* Bottom Floating Telemetry */}
      <div className="absolute bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-xs p-3 rounded-xl bg-black/70 border border-white/[0.1] backdrop-blur-md text-[11px] font-mono text-slate-300 pointer-events-none">
        <div className="flex items-center justify-between text-slate-400 border-b border-white/[0.06] pb-1.5 mb-1.5">
          <span>PARAMETRIC TOPOLOGY</span>
          <span className="text-cyan-400">750 NODES</span>
        </div>
        <p className="text-[10px] text-slate-400 leading-tight">
          Drag / hover to interact with the 3D harmonic field in real time.
        </p>
      </div>
    </div>
  );
}
