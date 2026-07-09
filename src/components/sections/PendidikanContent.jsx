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

function EduItem({ school, degree, period, current, itemVariants }) {
  return (
    <motion.div
      variants={itemVariants}
      className="relative pl-8 border-l border-white/10 group will-change-transform"
    >
      <div
        className={`absolute -left-1 top-0 w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-125 ${
          current
            ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            : "bg-white/20"
        }`}
      ></div>
      <div className="space-y-1">
        <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">
          {period}
        </span>
        <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {school}
        </h4>
        <p className="text-muted text-sm">{degree}</p>
      </div>
    </motion.div>
  );
}

export default function PendidikanContent({ lang }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 22 },
    },
  };

  return (
    <div className="space-y-16">
      <SectionHeader title={translations[lang].riwayatAkademik} subtitle="03" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="space-y-12 will-change-transform"
      >
        <EduItem
          school="Universitas Komputama Majenang"
          degree={
            lang === "id"
              ? "S1 Sistem Informasi"
              : "Bachelor of Information Systems"
          }
          period={lang === "id" ? "2024 — Sekarang" : "2024 — Present"}
          current={true}
          itemVariants={itemVariants}
        />
        <EduItem
          school="SMK Darussalam Karangpucung"
          degree={
            lang === "id"
              ? "Teknik Komputer dan Jaringan"
              : "Computer and Network Engineering"
          }
          period="2020 — 2023"
          current={false}
          itemVariants={itemVariants}
        />
      </motion.div>
    </div>
  );
}
