import { FileText } from "lucide-react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-blue-600 p-3 text-white">
        <FileText size={28} />
      </div>

      <span className="text-3xl font-bold">
        Resume10
      </span>
    </div>
  );
}