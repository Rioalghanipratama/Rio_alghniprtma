import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap } from "lucide-react";

function StatBox({ icon, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
        delay: 0.2 + index * 0.1,
      }}
      whileHover={{ y: -6, backgroundColor: "rgba(255, 255, 255, 0.07)" }}
      className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/20 transition-colors duration-500 group block will-change-transform"
    >
      <div className="mb-4 transition-transform duration-500 group-hover:scale-115 original-transform will-change-transform inline-block">
        {icon}
      </div>
      <h4 className="text-white font-bold text-lg">{title}</h4>
      <p className="text-sm text-muted mt-1">{desc}</p>
    </motion.div>
  );
}

export default function ProfilContent({ lang }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
    },
  };

  return (
    <div className="space-y-16">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6 will-change-transform"
      >
        {lang === "id" ? (
          <>
            <motion.p
              variants={textVariants}
              className="max-w-2xl text-lg leading-relaxed text-soft font-light"
            >
              Dunia teknologi menjadi hal yang selalu menarik bagi saya sejak
              menempuh pendidikan di
              <a
                href="https://smkdaka.sch.id/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1 font-normal"
              >
                SMK Darussalam Karangpucung
              </a>
              dengan jurusan Teknik Komputer dan Jaringan (TKJ). Dari sana, saya
              mulai mengenal bagaimana teknologi dapat digunakan untuk
              menciptakan solusi yang bermanfaat, menyederhanakan proses kerja,
              dan membantu menyelesaikan berbagai permasalahan secara lebih
              efektif.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="max-w-2xl text-lg leading-relaxed text-soft font-light"
            >
              Ketertarikan tersebut membawa saya untuk melanjutkan pendidikan di
              <a
                href="https://unikma.ac.id/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1 font-normal"
              >
                Universitas Komputama Cilacap
              </a>
              pada program studi Sistem Informasi (SI), sekaligus memperdalam
              kemampuan dalam pengembangan web modern, desain antarmuka, dan
              pengalaman pengguna. Saat ini, saya berfokus pada pengembangan
              sistem informasi berbasis web yang menggabungkan fungsionalitas,
              kemudahan penggunaan, dan desain yang responsif.
            </motion.p>
          </>
        ) : (
          <>
            <motion.p
              variants={textVariants}
              className="max-w-2xl text-lg leading-relaxed text-soft font-light"
            >
              The world of technology has always been something that has
              interested me since I was studying at
              <a
                href="https://smkdaka.sch.id/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1 font-normal"
              >
                Darussalam Karangpucung Vocational High School
              </a>
              majoring in Computer and Network Engineering. From there, I began
              to understand how technology can be used to create beneficial
              solutions, streamline workflows, and help resolve various issues
              more effectively.
            </motion.p>
            <motion.p
              variants={textVariants}
              className="max-w-2xl text-lg leading-relaxed text-soft font-light"
            >
              This interest led me to continue my education at
              <a
                href="https://unikma.ac.id/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-400 transition-all duration-300 ml-1 mr-1 font-normal"
              >
                Komputama University Cilacap
              </a>
              in the Information Systems study program, while also deepening my
              skills in modern web development, interface design, and user
              experience. Currently, I focus on developing web-based information
              systems that combine functionality, ease of use, and responsive
              design.
            </motion.p>
          </>
        )}
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StatBox
          index={0}
          icon={<ShieldCheck className="text-blue-400" size={28} />}
          title="Information System Builder"
          desc={
            lang === "id"
              ? "Mengembangkan sistem informasi berbasis web yang membantu menyelesaikan kebutuhan administrasi, akademik, dan operasional."
              : "Developing a web-based information system that helps address administrative, academic, and operational needs."
          }
        />
        <StatBox
          index={1}
          icon={<Zap className="text-yellow-400" size={28} />}
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
