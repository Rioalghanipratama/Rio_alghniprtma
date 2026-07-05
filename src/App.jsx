import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useSpring } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import ProfilContent from "./components/sections/ProfilContent";
import ProyekContent from "./components/sections/ProyekContent";
import KeahlianContent from "./components/sections/KeahlianContent";
import PendidikanContent from "./components/sections/PendidikanContent";

export default function App() {
  const [activeTab, setActiveTab] = useState("profil");
  const [loaded, setLoaded] = useState(false);
  const [lang, setLang] = useState("id");

  // Status interaksi untuk kursor jeli global
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Posisi mentah koordinat mouse (Lapisan 1: Titik Inti Instan)
  const [rawMousePos, setRawMousePos] = useState({ x: -100, y: -100 });

  // Pegas halus untuk efek tertinggal (Lapisan 2: Cincin Aura)
  const auraX = useSpring(-100, { stiffness: 220, damping: 26 });
  const auraY = useSpring(-100, { stiffness: 220, damping: 26 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Set posisi titik inti instan (dikurangi setengah ukuran w-1.5 = 6px)
      setRawMousePos({ x: e.clientX - 3, y: e.clientY - 3 });

      // Set posisi pusat cincin aura secara dinamis mengikuti perubahan ukuran hover
      const auraSize = isHovered ? 52 : 24;
      auraX.set(e.clientX - auraSize / 2);
      auraY.set(e.clientY - auraSize / 2);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a");

      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [auraX, auraY, isHovered]);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const sections = {
    profil: <ProfilContent lang={lang} />,
    proyek: <ProyekContent lang={lang} />,
    keahlian: <KeahlianContent lang={lang} />,
    pendidikan: <PendidikanContent lang={lang} />,
  };

  return (
    <div className="min-h-screen bg-dark text-[#a0a0a0] font-light selection:bg-blue-500/30 overflow-x-hidden lg:cursor-none [&_a]:cursor-none [&_button]:cursor-none">
      {/* LAPISAN 1: TITIK INTI KURSOR (PRESISI TINGGI - INSTAN) */}
      <div
        className="pointer-events-none fixed w-1.5 h-1.5 rounded-full bg-blue-400 z-[10000] hidden lg:block shadow-[0_0_10px_rgba(96,165,250,1)]"
        style={{
          left: rawMousePos.x,
          top: rawMousePos.y,
        }}
      />

      {/* LAPISAN 2: CINCIN AURA LUAR (EFEK JELI MENGEJAR + RESPONS HOVER/KLIK) */}
      <motion.div
        className="pointer-events-none fixed rounded-full z-[9999] hidden lg:block mix-blend-screen transition-colors duration-300"
        style={{
          x: auraX,
          y: auraY,
        }}
        animate={{
          width: isHovered ? "52px" : "24px",
          height: isHovered ? "52px" : "24px",
          backgroundColor: isClicked
            ? "rgba(59, 130, 246, 0.5)"
            : isHovered
              ? "rgba(59, 130, 246, 0.25)"
              : "rgba(59, 130, 246, 0.03)",
          borderColor: isHovered
            ? "rgba(147, 197, 253, 0.9)"
            : "rgba(96, 165, 250, 0.4)",
          borderWidth: isHovered ? "2px" : "1px",
          scale: isClicked ? 0.7 : 1,
          boxShadow: isClicked
            ? "0 0 35px rgba(59, 130, 246, 0.9)"
            : isHovered
              ? "0 0 25px rgba(59, 130, 246, 0.6)"
              : "0 0 12px rgba(59, 130, 246, 0.2)",
        }}
        transition={{
          scale: { type: "spring", stiffness: 500, damping: 15 },
          default: { type: "tween", ease: "backOut", duration: 0.25 },
        }}
      />

      {/* Latar Belakang Dekoratif Ambient */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px] animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[150px] animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* SINKRONISASI 1: TOMBOL SAKELAR BAHASA GLOBAL */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          onClick={() => setLang((prev) => (prev === "id" ? "en" : "id"))}
          whileHover={{ scale: 1.05, borderColor: "rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 500, damping: 15 }}
          className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white hover:bg-blue-500/20 backdrop-blur-md transition-colors duration-300 uppercase tracking-widest shadow-lg"
        >
          🌐 {lang === "id" ? "EN" : "ID"}
        </motion.button>
      </div>

      <div
        className={`relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-screen transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sections={sections}
          lang={lang}
        />

        <main className="flex-1 overflow-y-auto scroll-smooth p-6 lg:p-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30, scale: 0.98, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, scale: 0.98, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
