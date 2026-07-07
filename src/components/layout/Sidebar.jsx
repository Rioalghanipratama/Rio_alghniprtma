import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { BsGithub } from "react-icons/bs";
import { Mail, Phone } from "lucide-react";
import SidebarContact from "../atoms/SidebarContact";

function Sidebar({ activeTab, setActiveTab, sections, lang }) {
  const menuLabels = {
    profil: lang === "id" ? "Profil" : "Profile",
    proyek: lang === "id" ? "Proyek" : "Projects",
    keahlian: lang === "id" ? "Keahlian" : "Skills",
    pendidikan: lang === "id" ? "Pendidikan" : "Education",
  };

  return (
    <aside className="w-full lg:w-[400px] lg:h-screen lg:sticky lg:top-0 p-6 lg:p-16 flex flex-col justify-between border-r border-white/5 bg-black/30 backdrop-blur-xl shadow-2xl overflow-hidden">
      <div className="space-y-16">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-white leading-tight">
              Rio Alghani <br />
              <span className="text-muted">Pratama</span>
            </h1>

            <motion.div
              whileHover={{
                scale: 1.03,
                x: 6,
                filter: "drop-shadow(0 0 12px rgba(59,130,246,0.8))",
              }}
              whileTap={{ scale: 0.95, x: 2 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="inline-block origin-left select-none cursor-none will-change-transform"
            >
              <TypeAnimation
                key="en-anim"
                sequence={[
                  "Full-stack Web Developer",
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
            </motion.div>
          </div>
        </div>

        <nav className="flex flex-col space-y-4">
          {Object.keys(sections).map((key) => (
            <motion.button
              key={key}
              onClick={() => setActiveTab(key)}
              whileHover={{ x: activeTab === key ? 4 : 8 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className={`group flex items-center gap-4 text-left transition-all duration-300 lg:cursor-none will-change-transform ${
                activeTab === key
                  ? "text-white translate-x-4"
                  : "hover:text-white"
              }`}
            >
              <span
                className={`h-px transition-all duration-700 bg-white ${
                  activeTab === key ? "w-12" : "w-4 group-hover:w-8"
                }`}
              ></span>
              <span className="text-xs uppercase tracking-[0.4em] font-black">
                {menuLabels[key]}
              </span>
            </motion.button>
          ))}
        </nav>

        <div className="flex items-center gap-6 pt-8 border-t border-white/10">
          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="lg:cursor-none will-change-transform"
          >
            <SidebarContact
              icon={<BsGithub size={18} />}
              label="GitHub"
              href="https://github.com/Rioalghanipratama"
            />
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="lg:cursor-none will-change-transform"
          >
            <SidebarContact
              icon={<Mail size={18} />}
              label="Email"
              href="mailto:pratamagaming94@gmail.com"
            />
          </motion.div>

          <motion.div
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="lg:cursor-none will-change-transform"
          >
            <SidebarContact
              icon={<Phone size={18} />}
              label="WhatsApp"
              href="https://wa.me/6281390148362"
            />
          </motion.div>
        </div>
      </div>
    </aside>
  );
}

export default React.memo(Sidebar);
