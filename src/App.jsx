import React, { useState, useEffect, Suspense, useRef } from "react";
import {
  AnimatePresence,
  motion,
  useSpring,
  useMotionValue,
} from "framer-motion";
import Sidebar from "./components/layout/Sidebar";

const ProfilContent = React.lazy(
  () => import("./components/sections/ProfilContent"),
);
const ProyekContent = React.lazy(
  () => import("./components/sections/ProyekContent"),
);
const KeahlianContent = React.lazy(
  () => import("./components/sections/KeahlianContent"),
);
const PendidikanContent = React.lazy(
  () => import("./components/sections/PendidikanContent"),
);

export default function App() {
  const [activeTab, setActiveTab] = useState("profil");
  const [loaded, setLoaded] = useState(false);
  const [lang, setLang] = useState("id");

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const dotRef = useRef(null);
  const auraX = useMotionValue(-100);
  const auraY = useMotionValue(-100);

  const springAuraX = useSpring(auraX, { stiffness: 300, damping: 28 });
  const springAuraY = useSpring(auraY, { stiffness: 300, damping: 28 });

  const ambientColors = {
    profil: { topBg: "bg-blue-900/15", bottomBg: "bg-indigo-950/15" },
    proyek: { topBg: "bg-purple-900/15", bottomBg: "bg-fuchsia-950/15" },
    keahlian: { topBg: "bg-emerald-900/15", bottomBg: "bg-cyan-950/15" },
    pendidikan: { topBg: "bg-amber-900/12", bottomBg: "bg-orange-950/15" },
  };

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const handleMouseMove = (e) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX - 3}px, ${e.clientY - 3}px, 0)`;
      }

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

      setIsHovered((prev) =>
        prev !== !!isInteractive ? !!isInteractive : prev,
      );
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isHovered, auraX, auraY]);

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
    <div className="min-h-screen bg-dark text-[#a0a0a0] font-light selection:bg-blue-500/30 overflow-x-hidden lg:cursor-none [&_a]:cursor-none [&_button]:cursor-none subpixel-antialiased">
      <div
        ref={dotRef}
        className="pointer-events-none fixed w-1.5 h-1.5 rounded-full bg-blue-400 z-[10000] hidden lg:block shadow-[0_0_10px_rgba(96,165,250,1)] will-change-transform"
        style={{ transform: "translate3d(-100px, -100px, 0)", left: 0, top: 0 }}
      />

      <motion.div
        className="pointer-events-none fixed rounded-full z-[9999] hidden lg:block mix-blend-screen transition-colors duration-300 will-change-transform"
        style={{ x: springAuraX, y: springAuraY, left: 0, top: 0 }}
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

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className={`absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[150px] ${ambientColors[activeTab].topBg} will-change-transform`}
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className={`absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full blur-[150px] ${ambientColors[activeTab].bottomBg} will-change-transform`}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

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
              initial={{ opacity: 0, y: 20, scale: 0.99, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -15, scale: 0.99, filter: "blur(8px)" }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="max-w-3xl"
            >
              <Suspense
                fallback={
                  <div className="text-xs uppercase tracking-[0.2em] text-white/20 animate-pulse">
                    Loading...
                  </div>
                }
              >
                {sections[activeTab]}
              </Suspense>
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
