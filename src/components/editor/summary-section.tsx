"use client";

import { useResumeStore } from "@/features/resume";
import EditableTextarea from "./editable-textarea";

export default function SummarySection() {
  const { resume, updateSummary } = useResumeStore();

  return (
     <section className="mt-10">
          <h2 className="border-b pb-2 text-xl font-semibold">
            Professional Summary
          </h2>

          <EditableTextarea
            className="mt-3 leading-7"
            value={resume.summary}
            placeholder="Write your professional summary..."
            onChange={updateSummary}
          />
        </section>
  );
}
