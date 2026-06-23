"use client";

import Button from "@/components/ui/button";
import { templates } from "@/features/resume/templates";
import { useResumeStore } from "@/features/resume";

export default function EditorToolbar() {
  const selected = useResumeStore((s) => s.selectedTemplateId);
  const setSelected = useResumeStore((s) => s.setSelectedTemplate);
  const isPreviewMode = useResumeStore((s) => s.isPreviewMode);
  const togglePreviewMode = useResumeStore((s) => s.togglePreviewMode);

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div>
        <h1 className="font-semibold text-lg">Resume Editor</h1>
      </div>

      <div className="flex items-center gap-3">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="rounded border px-2 py-1"
        >
          {templates.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>

        <div className="flex gap-3">
          <Button variant="secondary" onClick={togglePreviewMode}>
            {isPreviewMode ? "Edit" : "Preview"}
          </Button>

          <Button>Download PDF</Button>
        </div>
      </div>
    </header>
  );
}
