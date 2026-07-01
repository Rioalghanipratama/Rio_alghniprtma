import React from "react";
import { ShieldCheck, Zap } from "lucide-react";

// Komponen kecil khusus untuk Profil
function StatBox({ icon, title, desc }) {
  return (
    <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/20 hover:bg-white/[0.07] transition-all duration-700 group hover:-translate-y-1">
      <div className="mb-4 transition-transform group-hover:scale-125 duration-700">
        {icon}
      </div>
      <h4 className="text-white font-bold text-lg">{title}</h4>
      <p className="text-sm text-muted">{desc}</p>
    </div>
  );
}

export default function ProfilContent({ lang }) {
  return (
    <div className="space-y-16">
      {lang === "id" ? (
        <>
          <p className="max-w-2xl text-lg leading-relaxed text-soft font-light">
            Dunia teknologi menjadi hal yang selalu menarik bagi saya sejak
            menempuh pendidikan di
            <a
              href="https://smkdaka.sch.id/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1"
            >
              SMK Darussalam Karangpucung
            </a>
            dengan jurusan Teknik Komputer dan Jaringan (TKJ). Dari sana, saya
            mulai mengenal bagaimana teknologi dapat digunakan untuk menciptakan
            solusi yang bermanfaat, menyederhanakan proses kerja, dan membantu
            menyelesaikan berbagai permasalahan secara lebih efektif.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-soft font-light">
            Ketertarikan tersebut membawa saya untuk melanjutkan pendidikan di
            <a
              href="https://unikma.ac.id/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1"
            >
              Universitas Komputama Majenang
            </a>
            pada program studi Sistem Informasi (SI), sekaligus memperdalam
            kemampuan dalam pengembangan web modern, desain antarmuka, dan
            pengalaman pengguna. Saat ini, saya berfokus pada pengembangan
            sistem informasi berbasis web yang menggabungkan fungsionalitas,
            kemudahan penggunaan, dan desain yang responsif.
          </p>
        </>
      ) : (
        <>
          <p className="max-w-2xl text-lg leading-relaxed text-soft font-light">
            The world of technology has fascinated me ever since I pursued my
            education at
            <a
              href="https://smkdaka.sch.id/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1"
            >
              SMK Darussalam Karangpucung
            </a>
            majoring in Computer and Network Engineering (TKJ). That experience
            introduced me to how technology can be harnessed to engineer
            impactful solutions, optimize operational workflows, and solve
            complex problems more effectively.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-soft font-light">
            This growing passion drove me to continue my studies at
            <a
              href="https://unikma.ac.id/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1"
            >
              Universitas Komputama Majenang
            </a>
            under the Information Systems (SI) department, while deepening my
            proficiency in modern web development, interface design, and user
            experience. Currently, I focus on building web-based information
            systems that seamlessly combine robust functionality, usability, and
            responsive design.
          </p>
        </>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StatBox
          icon={<ShieldCheck className="text-blue-400" />}
          title="Information System Builder"
          desc={
            lang === "id"
              ? "Mengembangkan sistem informasi berbasis web yang membantu menyelesaikan kebutuhan administrasi, akademik, dan operasional."
              : "Developing web-based information systems tailored to streamline administrative, academic, and business workflows."
          }
        />
        <StatBox
          icon={<Zap className="text-yellow-400" />}
          title="UI-Focused Development"
          desc={
            lang === "id"
              ? "Menggabungkan fungsionalitas dan desain untuk menciptakan pengalaman pengguna yang modern, responsif, dan mudah digunakan."
              : "Bridging solid programming functionality with clean interface aesthetics for an immersive, cross-device user experience."
          }
        />
      </div>
    </div>
  );
}
