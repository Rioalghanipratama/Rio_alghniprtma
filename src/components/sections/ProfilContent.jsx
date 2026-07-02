import React from "react";
import { ShieldCheck, Zap } from "lucide-react";

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
            The world of technology has always been something that has
            interested me since I was studying at
            <a
              href="https://smkdaka.sch.id/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1"
            >
              SMK Darussalam Karangpucung
            </a>
            majoring in Computer and Network Engineering. From there, I began to
            understand how technology can be used to create beneficial
            solutions, streamline workflows, and help resolve various issues
            more effectively.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-soft font-light">
            This interest led me to continue my education at
            <a
              href="https://unikma.ac.id/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1"
            >
              Universitas Komputama Majenang
            </a>
            in the Information Systems study program, while also deepening my
            skills in modern web development, interface design, and user
            experience. Currently, I focus on developing web-based information
            systems that combine functionality, ease of use, and responsive
            design.
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
              : "Developing a web-based information system that helps address administrative, academic, and operational needs."
          }
        />
        <StatBox
          icon={<Zap className="text-yellow-400" />}
          title="UI-Focused Developer"
          desc={
            lang === "id"
              ? "Menggabungkan fungsionalitas dan desain untuk menciptakan pengalaman pengguna yang modern, responsif, dan mudah digunakan."
              : "Combining functionality and design to create a modern, responsive, and user-friendly experience."
          }
        />
      </div>
    </div>
  );
}
