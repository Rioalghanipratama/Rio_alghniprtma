import React, { useRef } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import andoliImg from "../../assets/andoli.png";
import sirukaImg from "../../assets/siruka.png";
import siakadImg from "../../assets/siakad.png";
import apikperpusImg from "../../assets/apikperpus.png";
import webkuImg from "../../assets/webku.png";

const SectionHeader = React.memo(({ title, subtitle }) => (
  <div className="flex items-baseline gap-4 mb-12">
    <span className="text-sm font-black text-blue-500 tracking-tighter">
      {subtitle}
    </span>
    <h3 className="text-4xl font-bold text-white tracking-tight">{title}</h3>
  </div>
));

SectionHeader.displayName = "SectionHeader";

function ProjectCard({ project, index, lang }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
        delay: index * 0.05,
      }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center will-change-transform ${
        index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 block will-change-transform"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{
            background: `radial-gradient( 600px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), rgba(59,130,246,0.15), transparent 40% )`,
          }}
        />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-103 will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-0"></div>
        <div className="absolute top-6 left-6 z-20">
          <span className="px-4 py-2 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/20 text-xs tracking-widest uppercase text-blue-300 font-bold">
            {lang === "id" ? project.status.id : project.status.en}
          </span>
        </div>
      </a>

      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-400">
            {lang === "id" ? project.Kategori.id : project.Kategori.en}
          </p>
          <h3 className="text-4xl font-bold text-white tracking-tight">
            {project.title}
          </h3>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">
            {lang === "id" ? "Peran" : "Role"}
          </p>
          <p className="text-white font-medium">
            {lang === "id" ? project.Peran.id : project.Peran.en}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">
            {lang === "id" ? "Tantangan" : "Challenge"}
          </p>
          <p className="text-soft leading-relaxed text-sm lg:text-base">
            {lang === "id" ? project.Tantangan.id : project.Tantangan.en}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/30 mb-2">
            {lang === "id" ? "Dampak" : "Impact"}
          </p>
          <p className="text-soft leading-relaxed text-sm lg:text-base">
            {lang === "id" ? project.Dampak.id : project.Dampak.en}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {(lang === "id" ? project.Fitur.id : project.Fitur.en).map(
            (feature) => (
              <div
                key={feature}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10"
              >
                <CheckCircle2 size={12} className="text-blue-400" />
                <span className="text-xs text-white/80">{feature}</span>
              </div>
            ),
          )}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-white/70 hover:text-blue-400 transition-colors duration-200"
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
              {lang === "id" ? "Lihat Proyek" : "View Project"}
            </span>
            <ArrowUpRight
              size={18}
              className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProyekContent({ lang }) {
  const projectsData = [
    {
      title: "AnDoli POS V2",
      Kategori: {
        id: "Sistem Manajemen Ritel",
        en: "Retail Management System",
      },
      Peran: {
        id: "Frontend Developer & UI Designer",
        en: "Frontend Developer & UI Designer",
      },
      Tantangan: {
        id: "Merancang antarmuka Point of Sale yang mampu menampilkan data produk, proses transaksi, dan ringkasan penjualan secara cepat tanpa membingungkan pengguna.",
        en: "Designing a Point of Sale interface capable of displaying product data, transaction processes, and sales summaries quickly, without confusing the user.",
      },
      Dampak: {
        id: "Menyediakan alur transaksi yang lebih efisien melalui dashboard interaktif, pencatatan penjualan, dan tampilan yang responsif di berbagai perangkat.",
        en: "Provides a more efficient transaction workflow through an interactive dashboard, sales recording, and a responsive interface across various devices.",
      },
      Fitur: {
        id: [
          "Manajemen Produk",
          "Alur Transaksi",
          "Dasbor Penjualan",
          "UI Responsif",
        ],
        en: [
          "Product Inventory",
          "Transaction Engine",
          "Sales Analytics",
          "Responsive Layout",
        ],
      },
      link: "https://andoli-v2.vercel.app/",
      tech: ["React", "Tailwind CSS", "Vercel"],
      image: andoliImg,
      status: { id: "Hidup", en: "Live" },
    },
    {
      title: "Sistem Informasi Peminjaman Ruangan Kampus (SIRUKA)",
      Kategori: {
        id: "Sistem Reservasi Ruangan Kampus",
        en: "Campus Room Reservation System",
      },
      Peran: { id: "Fullstack Web Developer", en: "Fullstack Web Developer" },
      Tantangan: {
        id: "Mengembangkan sistem peminjaman ruangan kampus yang mampu mengelola data ruangan, proses pengajuan, persetujuan, dan pemantauan peminjaman secara digital.",
        en: "Developing a campus room booking system capable of digitally managing room data, as well as the processes for booking requests, approvals, and monitoring.",
      },
      Dampak: {
        id: "Membantu digitalisasi administrasi peminjaman ruangan kampus sehingga proses reservasi menjadi lebih terstruktur, efisien, dan mudah dipantau.",
        en: "Facilitates the digitization of campus room booking administration, making the reservation process more structured, efficient, and easy to monitor.",
      },
      Fitur: {
        id: [
          "Reservasi Kamar",
          "Manajemen Pemesanan",
          "Pelacakan Status",
          "Dasbor Admin",
          "Antarmuka Responsif",
        ],
        en: [
          "Room Reservation",
          "Booking Engines",
          "Real-time Tracking",
          "Admin Control Deck",
          "Responsive UI",
        ],
      },
      link: "https://siruka.netlify.app/",
      tech: ["React", "Tailwind CSS", "Firebase"],
      image: sirukaImg,
      status: { id: "Hidup", en: "Live" },
    },
    {
      title: "Sistem Informasi Akademik (SIAKAD)",
      Kategori: {
        id: "Sistem Informasi Akademik",
        en: "Academic Information System",
      },
      Peran: { id: "Fullstack Web Developer", en: "Fullstack Web Developer" },
      Tantangan: {
        id: "Mengintegrasikan data akademik seperti mahasiswa, dosen, mata kuliah, dan nilai ke dalam satu sistem yang terstruktur dan mudah dikelola.",
        en: "Integrating academic data—such as students, lecturers, courses, and grades—into a single, structured, and easily manageable system.",
      },
      Dampak: {
        id: "Menyederhanakan proses administrasi akademik melalui pengelolaan data terpusat dan fitur autentikasi pengguna.",
        en: "Streamlining academic administrative processes through centralized data management and user authentication features.",
      },
      Fitur: {
        id: [
          "Autentikasi",
          "Manajemen Mahasiswa",
          "Manajemen Dosen",
          "Manajemen Mata Kuliah",
          "Manajemen Jadwal Perkuliahan",
          "Pemrosesan Nilai",
        ],
        en: [
          "Secure Auth",
          "Student Ledger",
          "Faculty Controls",
          "Curriculum Management",
          "Class Scheduler",
          "Grade Processing Engine",
        ],
      },
      link: "https://siakad-rio.rf.gd/index.html",
      tech: ["PHP", "MySQL", "Bootstrap"],
      image: siakadImg,
      status: { id: "Hidup", en: "Live" },
    },
    {
      title: "ApikPerpus Web V2",
      Kategori: {
        id: "Sistem Manajemen Perpustakaan",
        en: "Library Management System",
      },
      Peran: { id: "Frontend Developer", en: "Frontend Developer" },
      Tantangan: {
        id: "Menyederhanakan pengelolaan dan pencarian koleksi buku melalui antarmuka digital yang mudah dipahami oleh pengguna.",
        en: "Streamlining the management and searching of book collections through a user-friendly digital interface.",
      },
      Dampak: {
        id: "Meningkatkan aksesibilitas informasi perpustakaan dan mempermudah proses pencarian koleksi secara online.",
        en: "Improving the accessibility of library information and simplifying the process of searching for collections online.",
      },
      Fitur: {
        id: [
          "Book Catalog",
          "Book Search",
          "Kategori Filtering",
          "Responsive Design",
        ],
        en: [
          "Book Catalog",
          "Book Search",
          "Category Filtering",
          "Responsive Design",
        ],
      },
      link: "https://apikperpusweb-v2.vercel.app/",
      tech: ["React", "Tailwind CSS", "Firebase"],
      image: apikperpusImg,
      status: { id: "Hidup", en: "Live" },
    },
    {
      title: "WebKu Cek",
      Kategori: {
        id: "Portal Informasi Kampus",
        en: "Campus Information Portal",
      },
      Peran: { id: "Frontend Developer", en: "Frontend Developer" },
      Tantangan: {
        id: "Menyajikan informasi kampus dalam satu portal yang ringan, responsif, dan mudah diakses oleh mahasiswa maupun calon mahasiswa.",
        en: "Presenting campus information through a single portal that is lightweight, responsive, and easily accessible to both current and prospective students.",
      },
      Dampak: {
        id: "Mempermudah akses terhadap informasi akademik dan profil kampus melalui media digital.",
        en: "Facilitate access to academic information and campus profiles via digital media.",
      },
      Fitur: {
        id: [
          "Profil Kampus",
          "Informasi Akademik",
          "Navigasi Sederhana",
          "Tata Letak Responsif",
        ],
        en: [
          "Campus Profiles",
          "Academic Feeds",
          "Streamlined Navigation",
          "Responsive Web Layout",
        ],
      },
      link: "https://rioalghanipratama.github.io/WebKu-Cek/",
      tech: ["HTML", "CSS", "JavaScript"],
      image: webkuImg,
      status: { id: "Sedang Dikembangkan", en: "In Development" },
    },
  ];

  return (
    <div className="space-y-20">
      <SectionHeader
        title={lang === "id" ? "Arsip Proyek" : "Project Archive"}
        subtitle="01"
      />
      {projectsData.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
          lang={lang}
        />
      ))}
    </div>
  );
}
