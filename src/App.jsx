import React, { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import { Mail, Phone, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BsGithub } from "react-icons/bs";
import andoliImg from "./assets/andoli.png";
import sirukaImg from "./assets/siruka.png";
import siakadImg from "./assets/siakad.png";
import apikperpusImg from "./assets/apikperpus.png";
import webkuImg from "./assets/webku.png";

export default function App() {
  const [activeTab, setActiveTab] = useState("profil");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setLoaded(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  const sections = {
    profil: <ProfilContent />,
    proyek: <ProyekContent />,
    keahlian: <KeahlianContent />,
    pendidikan: <PendidikanContent />,
  };

  return (
    <div className="min-h-screen bg-dark text-[#a0a0a0] font-light selection:bg-blue-500/30 overflow-x-hidden">
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px] animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[150px] animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        {/* Grain Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div
        className={`relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-screen transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Left Sidebar - Fixed Info */}
        <aside className="w-full lg:w-[400px] lg:h-screen lg:sticky lg:top-0 p-6 lg:p-16 flex flex-col justify-between border-r border-white/5 bg-black/30 backdrop-blur-xl shadow-2xl">
          <div className="space-y-16">
            {/* Identity */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight text-white leading-tight">
                  Rio Alghani <br />
                  <span className="text-muted">Pratama</span>
                </h1>
                <TypeAnimation
                  sequence={[
                    "Fullstack Web Developer",
                    2000,
                    "Information System Builder",
                    2000,
                    "UI-Focused Developer",
                    2000,
                  ]}
                  wrapper="p"
                  speed={50}
                  repeat={Infinity}
                  className="text-sm tracking-[0.15em] text-blue-400 font-bold drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
                />
              </div>
            </div>

            {/* Navigation Menus */}
            <nav className="flex flex-col space-y-4">
              {Object.keys(sections).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`group flex items-center gap-4 text-left transition-all duration-300 ${activeTab === key ? "text-white translate-x-4" : "hover:text-white hover:translate-x-2"}`}
                >
                  <span
                    className={`h-px transition-all duration-700 bg-white ${activeTab === key ? "w-12" : "w-4 group-hover:w-8"}`}
                  ></span>
                  <span className="text-xs uppercase tracking-[0.4em] font-black">
                    {key}
                  </span>
                </button>
              ))}
            </nav>

            {/* Contacts Footer */}
            <div className="flex items-center gap-6 pt-8 border-t border-white/10">
              <SidebarContact
                icon={<BsGithub size={18} />}
                label="GitHub"
                href="https://github.com/Rioalghanipratama"
              />

              <SidebarContact
                icon={<Mail size={18} />}
                label="Email"
                href="mailto:pratamagaming94@gmail.com"
              />

              <SidebarContact
                icon={<Phone size={18} />}
                label="WhatsApp"
                href="https://wa.me/6281390148362"
              />
            </div>
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex-1 overflow-y-auto scroll-smooth p-6 lg:p-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.98,
                filter: "blur(10px)",
              }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-3xl"
            >
              {sections[activeTab]}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}

// --- Page Components ---
function ProfilContent() {
  return (
    <div className="space-y-16">
      <p className="max-w-2xl text-lg leading-relaxed text-soft font-light">
        Dunia teknologi menjadi hal yang selalu menarik bagi saya sejak menempuh
        pendidikan di
        <a
          href="https://smkdaka.sch.id/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-400 transition-all duration-300"
        >
          {" "}
          SMK Darussalam Karangpucung{" "}
        </a>
        dengan jurusan Teknik Komputer dan Jaringan (TKJ). Dari sana, saya mulai
        mengenal bagaimana teknologi dapat digunakan untuk menciptakan solusi
        yang bermanfaat, menyederhanakan proses kerja, dan membantu
        menyelesaikan berbagai permasalahan secara lebih efektif.
      </p>
      <p className="max-w-2xl text-lg leading-relaxed text-soft font-light">
        Ketertarikan tersebut membawa saya untuk melanjutkan pendidikan di
        <a
          href="https://unikma.ac.id/"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:text-blue-400 transition-all duration-300"
        >
          {" "}
          Universitas Komputama Majenang{" "}
        </a>
        pada program studi Sistem Informasi (SI), sekaligus memperdalam
        kemampuan dalam pengembangan web modern, desain antarmuka, dan
        pengalaman pengguna. Saat ini, saya berfokus pada pengembangan sistem
        informasi berbasis web yang menggabungkan fungsionalitas, kemudahan
        penggunaan, dan desain yang responsif. Saya menikmati setiap proses
        pengembangan, mulai dari memahami kebutuhan pengguna, merancang solusi,
        hingga mengimplementasikannya menjadi aplikasi yang mampu memberikan
        manfaat nyata dan pengalaman yang baik bagi penggunanya.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <StatBox
          icon={<ShieldCheck className="text-blue-400" />}
          title="Information System Builder"
          desc="Mengembangkan sistem informasi berbasis web yang membantu menyelesaikan kebutuhan administrasi, akademik, dan operasional."
        />

        <StatBox
          icon={<Zap className="text-yellow-400" />}
          title="UI-Focused Development"
          desc="Menggabungkan fungsionalitas dan desain untuk menciptakan pengalaman pengguna yang modern, responsif, dan mudah digunakan."
        />
      </div>
    </div>
  );
}

function ProyekContent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };
  const projects = [
    {
      title: "AnDoli POS V2",
      category: "Retail Management System",
      role: "Frontend Developer & UI Designer",
      challenge:
        "Merancang antarmuka Point of Sale yang mampu menampilkan data produk, proses transaksi, dan ringkasan penjualan secara cepat tanpa membingungkan pengguna.",
      impact:
        "Menyediakan alur transaksi yang lebih efisien melalui dashboard interaktif, pencatatan penjualan, dan tampilan yang responsif di berbagai perangkat.",
      features: [
        "Product Management",
        "Transaction Flow",
        "Sales Dashboard",
        "Responsive UI",
      ],
      link: "https://andoli-v2.vercel.app/",
      tech: ["React", "Tailwind CSS", "Vercel"],
      image: andoliImg,
      status: "Live",
    },

    {
      title: "Sistem Informasi Peminjaman Ruangan Kampus (SIRUKA)",
      category: "Campus Room Reservation System",
      role: "Fullstack Web Developer",
      challenge:
        "Mengembangkan sistem peminjaman ruangan kampus yang mampu mengelola data ruangan, proses pengajuan, persetujuan, dan pemantauan peminjaman secara digital.",
      impact:
        "Membantu digitalisasi administrasi peminjaman ruangan kampus sehingga proses reservasi menjadi lebih terstruktur, efisien, dan mudah dipantau.",
      features: [
        "Room Reservation",
        "Booking Management",
        "Status Tracking",
        "Admin Dashboard",
        "Responsive Interface",
      ],
      link: "https://siruka.netlify.app/",
      tech: ["React", "Tailwind CSS", "Firebase"],
      image: sirukaImg,
      status: "Live",
    },

    {
      title: "Sistem Informasi Akademik (SIAKAD)",
      category: "Academic Information System",
      role: "Fullstack Web Developer",
      challenge:
        "Mengintegrasikan data akademik seperti mahasiswa, dosen, mata kuliah, dan nilai ke dalam satu sistem yang terstruktur dan mudah dikelola.",
      impact:
        "Menyederhanakan proses administrasi akademik melalui pengelolaan data terpusat dan fitur autentikasi pengguna.",
      features: [
        "Authentication",
        "Student Management",
        "Lecturer Management",
        "Course Management",
        "Grade Processing",
      ],
      link: "https://siakad-rio.rf.gd/index.html",
      tech: ["PHP", "MySQL", "Bootstrap"],
      image: siakadImg,
      status: "Live",
    },

    {
      title: "ApikPerpus Web V2",
      category: "Library Management System",
      role: "Frontend Developer",
      challenge:
        "Menyederhanakan pengelolaan dan pencarian koleksi buku melalui antarmuka digital yang mudah dipahami oleh pengguna.",
      impact:
        "Meningkatkan aksesibilitas informasi perpustakaan dan mempermudah proses pencarian koleksi secara online.",
      features: [
        "Book Catalog",
        "Book Search",
        "Category Filtering",
        "Responsive Design",
      ],
      link: "https://apikperpusweb-v2.vercel.app/",
      tech: ["React", "Tailwind CSS", "Firebase"],
      image: apikperpusImg,
      status: "Live",
    },

    {
      title: "WebKu Cek",
      category: "Campus Information Portal",
      role: "Frontend Developer",
      challenge:
        "Menyajikan informasi kampus dalam satu portal yang ringan, responsif, dan mudah diakses oleh mahasiswa maupun calon mahasiswa.",
      impact:
        "Mempermudah akses terhadap informasi akademik dan profil kampus melalui media digital.",
      features: [
        "Campus Profile",
        "Academic Information",
        "Simple Navigation",
        "Responsive Layout",
      ],
      link: "https://rioalghanipratama.github.io/WebKu-Cek/",
      tech: ["HTML", "CSS", "JavaScript"],
      image: webkuImg,
      status: "In Development",
    },
  ];

  return (
    <div className="space-y-24">
      <SectionHeader title="Karya Terpilih" subtitle="01" />

      {projects.map((project, index) => (
        <div
          key={index}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
            index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* IMAGE */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            onMouseMove={handleMouseMove}
            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5"
          >
            {/* Mouse Glow */}{" "}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: `radial-gradient( 600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40% )`,
              }}
            />
            {/* Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"></div>
            {/* Status Badge */}
            <div className="absolute top-6 left-6">
              <span className="px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/20 text-xs tracking-widest uppercase text-blue-300 font-bold">
                {project.status}
              </span>
            </div>
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-blue-500/5"></div>
          </a>

          {/* CONTENT */}
          <div className="space-y-6">
            {/* Heading */}
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
                {project.category}
              </p>

              <h3 className="text-4xl font-bold text-white">{project.title}</h3>
            </div>

            {/* Role */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">
                Role
              </p>

              <p className="text-white font-medium">{project.role}</p>
            </div>

            {/* Challenge */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">
                Challenge
              </p>

              <p className="text-soft leading-relaxed">{project.challenge}</p>
            </div>

            {/* Impact */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">
                Impact
              </p>

              <p className="text-soft leading-relaxed">{project.impact}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10"
                >
                  <CheckCircle2 size={12} />
                  <span className="text-xs">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 pt-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:text-blue-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-white hover:text-blue-400 transition-all duration-300 group"
              >
                <span className="text-sm uppercase tracking-[0.25em] font-bold">
                  View Project
                </span>

                <ArrowUpRight
                  size={18}
                  className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function KeahlianContent() {
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

function PendidikanContent() {
  return (
    <div className="space-y-16">
      <SectionHeader title="Riwayat Akademis" subtitle="03" />
      <div className="space-y-16">
        <EduItem
          school="Universitas Komputama Majenang"
          degree="S1 Sistem Informasi"
          period="2024 — Sekarang"
          current
        />
        <EduItem
          school="SMK Darussalam Karangpucung"
          degree="Teknik Komputer dan Jaringan"
          period="2020 — 2023"
        />
      </div>
    </div>
  );
}

// --- Reusable UI Atoms ---
function SidebarContact({ icon, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex items-center gap-2 text-white/40 hover:text-blue-400 transition-all duration-300"
    >
      {icon}

      <span className="text-sm font-medium">{label}</span>
    </a>
  );
}

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
