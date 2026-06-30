import andoliImg from "./assets/andoli.png";
import sirukaImg from "./assets/siruka.png";
import siakadImg from "./assets/siakad.png";
import apikperpusImg from "./assets/apikperpus.png";
import webkuImg from "./assets/webku.png";

export const projectsData = [
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
