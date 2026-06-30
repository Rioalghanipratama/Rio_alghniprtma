import React from "react";

export default function SidebarContact({ icon, label, href }) {
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
