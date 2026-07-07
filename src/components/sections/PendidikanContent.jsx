import React from "react";
import { motion } from "framer-motion";
import { translations } from "../../data/translations";

// OPTIMASI: Memoisasi SectionHeader
const SectionHeader = React.memo(({ title, subtitle }) => (
  <div className="flex items-baseline gap-4 mb-12">
    <span className="text-sm font-black text-blue-500 tracking-tighter">
      {subtitle}
    </span>
    <h3 className="text-4xl font-bold text-white tracking-tight">{title}</h3>
  </div>
));
SectionHeader.displayName = "SectionHeader";

function EduItem({ school, degree, period, current, index }) {
  return (
    // OPTIMASI: Animasi masuk kinetik menggunakan GPU Acceleration
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
        delay: index * 0.1,
      }}
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
  return (
    <div className="space-y-16">
      <SectionHeader title={translations[lang].riwayatAkademik} subtitle="03" />
      <div className="space-y-12">
        <EduItem
          index={0}
          school="Universitas Komputama Majenang"
          degree={
            lang === "id"
              ? "S1 Sistem Informasi"
              : "Bachelor of Information Systems"
          }
          period={lang === "id" ? "2024 — Sekarang" : "2024 — Present"}
          current={true}
        />
        <EduItem
          index={1}
          school="SMK Darussalam Karangpucung"
          degree={
            lang === "id"
              ? "Teknik Komputer dan Jaringan"
              : "Computer and Network Engineering"
          }
          period="2020 — 2023"
          current={false}
        />
      </div>
    </div>
  );
}
