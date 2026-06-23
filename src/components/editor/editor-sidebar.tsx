"use client";

import {
  User,
  Briefcase,
  GraduationCap,
  FolderGit2,
  Wrench,
} from "lucide-react";

const sections = [
  {
    icon: User,
    label: "Personal",
  },
  {
    icon: Briefcase,
    label: "Experience",
  },
  {
    icon: GraduationCap,
    label: "Education",
  },
  {
    icon: FolderGit2,
    label: "Projects",
  },
  {
    icon: Wrench,
    label: "Skills",
  },
];

export default function EditorSidebar() {
  return (
    <aside className="w-72 border-r bg-white">
      <div className="border-b p-6">
        <h2 className="text-xl font-bold">Resume10</h2>
      </div>

      <div className="p-4 space-y-2">
        {sections.map((section) => (
          <button
            key={section.label}
            className="flex w-full items-center gap-3 rounded-lg p-3 transition hover:bg-slate-100"
          >
            <section.icon size={18} />
            {section.label}
          </button>
        ))}
      </div>
    </aside>
  );
}