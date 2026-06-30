import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Sidebar from "./components/layout/Sidebar";
import ProfilContent from "./components/sections/ProfilContent";
import ProyekContent from "./components/sections/ProyekContent";
import KeahlianContent from "./components/sections/KeahlianContent";
import PendidikanContent from "./components/sections/PendidikanContent";

export default function App() {
  const [activeTab, setActiveTab] = useState("profil");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
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
      {/* Efek Latar Belakang */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/10 blur-[150px] animate-pulse"></div>
        <div
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[150px] animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <div
        className={`relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row min-h-screen transition-all duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Navigasi Samping */}
        <Sidebar
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          sections={sections}
        />

        {/* Area Konten Utama */}
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
