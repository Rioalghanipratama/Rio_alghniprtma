import React from "react";

// Komponen kecil khusus untuk Keahlian
function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <span className="text-sm font-black text-blue-500 tracking-tighter">
        {subtitle}
      </span>
      <h3 className="text-4xl font-bold text-white tracking-tight">{title}</h3>
    </div>
  );
}

function SkillGroup({ title, skills }) {
  return (
    <div className="space-y-6">
      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 border-b border-white/10 pb-2">
        {title}
      </h4>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <span
            key={s}
            className="text-sm text-white hover:text-blue-400 cursor-default transition-colors"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function KeahlianContent() {
  return (
    <div className="space-y-16">
      <SectionHeader title="Keahlian Teknik" subtitle="02" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        <SkillGroup
          title="Web Development"
          skills={[
            "HTML5",
            "CSS3",
            "JavaScript",
            "React",
            "Tailwind CSS",
            "Responsive Web Design",
          ]}
        />
        <SkillGroup
          title="Information System Development"
          skills={[
            "System Analysis",
            "Database Design",
            "PHP",
            "MySQL",
            "Authentication & Authorization",
          ]}
        />
        <SkillGroup
          title="Tools & Collaboration"
          skills={[
            "Git & GitHub",
            "Vercel",
            "Netlify",
            "VS Code",
            "Figma",
            "UI/UX Fundamentals",
          ]}
        />
      </div>
    </div>
  );
}
