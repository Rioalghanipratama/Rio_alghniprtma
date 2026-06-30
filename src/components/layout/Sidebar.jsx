import React from "react";
import { TypeAnimation } from "react-type-animation";
import { BsGithub } from "react-icons/bs";
import { Mail, Phone } from "lucide-react";
import SidebarContact from "../atoms/SidebarContact";

export default function Sidebar({ activeTab, setActiveTab, sections }) {
  return (
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
              className={`group flex items-center gap-4 text-left transition-all duration-300 ${
                activeTab === key
                  ? "text-white translate-x-4"
                  : "hover:text-white hover:translate-x-2"
              }`}
            >
              <span
                className={`h-px transition-all duration-700 bg-white ${
                  activeTab === key ? "w-12" : "w-4 group-hover:w-8"
                }`}
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
  );
}
