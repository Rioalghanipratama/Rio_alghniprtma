import React, { useState } from "react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import andoliImg from "../../assets/andoli.png";
import sirukaImg from "../../assets/siruka.png";
import siakadImg from "../../assets/siakad.png";
import apikperpusImg from "../../assets/apikperpus.png";
import webkuImg from "../../assets/webku.png";

// 1. Komponen Header
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

// 2. Komponen Kartu Proyek (Dioptimalkan agar efek hover tidak lag)
function ProjectCard({ project, index }) {
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
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
        index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* KARTU GAMBAR */}
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
            background: `radial-gradient( 600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59,130,246,0.15), transparent 40% )`,
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

      {/* KONTEN DETAIL */}
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            {project.category}
          </p>
          <h3 className="text-4xl font-bold text-white">{project.title}</h3>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">
            Role
          </p>
          <p className="text-white font-medium">{project.role}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">
            Challenge
          </p>
          <p className="text-soft leading-relaxed">{project.challenge}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">
            Impact
          </p>
          <p className="text-soft leading-relaxed">{project.impact}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10"
            >
              <CheckCircle2 size={12} />
              <span className="text-xs">{feature}</span>
            </div>
          ))}
        </div>

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
  );
}

// 3. Komponen Utama Halaman Proyek
export default function ProyekContent() {
  const projectsData = [
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
    <div className="space-y-16">
      <SectionHeader title="Arsip Proyek." subtitle="01" />
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}
