import React from "react";
import { motion } from "framer-motion";
import { translations } from "../../data/translations";

const SectionHeader = React.memo(({ title, subtitle }) => (
  <div className="flex items-baseline gap-4 mb-12">
    <span className="text-sm font-black text-blue-500 tracking-tighter">
      {subtitle}
    </span>
    <h3 className="text-4xl font-bold text-white tracking-tight">{title}</h3>
  </div>
));
SectionHeader.displayName = "SectionHeader";

function SkillGroup({ title, skills, itemVariants }) {
  return (
    <motion.div variants={itemVariants} className="space-y-6">
      <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 border-b border-white/10 pb-2">
        {title}
      </h4>
      <div className="flex flex-wrap gap-3">
        {skills.map((s) => (
          <motion.span
            key={s}
            whileHover={{ y: -3, color: "#60a5fa" }}
            className="text-sm text-white cursor-default transition-colors duration-200 inline-block will-change-transform"
          >
            {s}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function KeahlianContent({ lang }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 200, damping: 22 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="space-y-16 will-change-transform"
    >
      <SectionHeader
        title={translations[lang].keterampilanTeknis}
        subtitle="02"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        <SkillGroup
          title={lang === "id" ? "Pengembangan Web" : "Web Development"}
          itemVariants={itemVariants}
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
          title={
            lang === "id"
              ? "Pengembangan Sistem Informasi"
              : "Information System Development"
          }
          itemVariants={itemVariants}
          skills={[
            "System Analysis",
            "Database Design",
            "PHP",
            "MySQL",
            "Authentication & Authorization",
          ]}
        />
        <SkillGroup
          title={lang === "id" ? "Alat & Kolaborasi" : "Tools & Collaboration"}
          itemVariants={itemVariants}
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
    </motion.div>
  );
}
