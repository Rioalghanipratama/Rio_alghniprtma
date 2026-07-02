import React from "react";
import { translations } from "../../data/translations";

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

function EduItem({ school, degree, period, current }) {
  return (
    <div className="relative pl-8 border-l border-white/10 group">
      <div
        className={`absolute -left-1 top-0 w-2 h-2 rounded-full ${current ? "bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" : "bg-white/20"}`}
      ></div>
      <div className="space-y-1">
        <span className="text-[10px] font-bold text-blue-500 tracking-widest uppercase">
          {period}
        </span>
        <h4 className="text-xl font-bold text-white">{school}</h4>
        <p className="text-muted text-sm">{degree}</p>
      </div>
    </div>
  );
}

export default function PendidikanContent({ lang }) {
  return (
    <div className="space-y-16">
      <SectionHeader title={translations[lang].riwayatAkademik} subtitle="03" />
      <div className="space-y-16">
        <EduItem
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
