import React, { useState } from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
    >
      {/* KARTU GAMBAR DENGAN EFEK HOVER GLOW */}
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        onMouseMove={handleMouseMove}
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40%)`,
          }}
        />
        <img
          src={project.image}
          alt={project.title}
          className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
        <div className="absolute top-6 left-6">
          <span className="px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/20 text-xs tracking-widest uppercase text-blue-300 font-bold">
            {project.status}
          </span>
        </div>
      </a>

      {/* KONTEN DETAIL PROYEK */}
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            {project.category}
          </p>
          <h3 className="text-4xl font-bold text-white">{project.title}</h3>
        </div>
        {/* ... render detail role, challenge, impact, features, dan tech stack seperti kode asli Anda ... */}
        <div className="pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-300 group"
          >
            <span className="text-sm uppercase tracking-[0.25em] font-bold">
              Lihat Proyek
            </span>
            <ArrowUpRight
              size={18}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
