"use client";

import { useState } from "react";
import templates from "@/features/resume/templates";
import { useResumeStore } from "@/features/resume";
import EditorLayout from "./editor-layout";

export default function EditorEntry() {
  const [started, setStarted] = useState(false);
  const setSelected = useResumeStore((s) => s.setSelectedTemplate);

  const handleChoose = (id: string) => {
    setSelected(id);
    setStarted(true);
  };

  if (started) {
    return <EditorLayout />;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-6 text-2xl font-semibold">Choose a template</h1>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <div key={t.id} className="rounded border bg-white p-4 shadow-sm">
              <div className="mb-3 h-40 w-full overflow-hidden rounded bg-slate-100 flex items-center justify-center text-slate-400">
                {/* thumbnail area */}
                <span>{t.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="font-medium">{t.name}</div>
                <button
                  onClick={() => handleChoose(t.id)}
                  className="rounded bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
                >
                  Use
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
