import {
  Briefcase,
  FileText,
  GraduationCap,
  User,
} from "lucide-react";

const items = [
  {
    icon: User,
    label: "Personal",
  },

  {
    icon: FileText,
    label: "Summary",
  },

  {
    icon: Briefcase,
    label: "Experience",
  },

  {
    icon: GraduationCap,
    label: "Education",
  },
];

export default function AppSidebar() {
  return (
    <aside className="h-full w-72 border-r bg-white p-6">
      <nav className="space-y-3">
        {items.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-3 rounded-xl p-3 hover:bg-slate-100"
          >
            <item.icon size={18} />

            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}