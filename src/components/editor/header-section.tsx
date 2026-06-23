"use client";

import EditableText from "./editable-text";
import { useResumeStore } from "@/features/resume";

export default function HeaderSection() {
  const { resume, updatePersonalField } = useResumeStore();

  return (
    <section className="mt-10">
      <EditableText
        value={`${resume.personal.fullName}`}
        className="text-4xl font-bold"
        placeholder="Your Name"
        onChange={(value) => {
          updatePersonalField("fullName", value);
        }}
      />

      <EditableText
        value={resume.personal.title}
        className="mt-2 text-xl text-slate-600"
        placeholder="Job Title"
        onChange={(value) => updatePersonalField("title", value)}
      />

      <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600">
        <EditableText
          value={resume.personal.email}
          placeholder="Email"
          onChange={(value) => updatePersonalField("email", value)}
        />

        <EditableText
          value={resume.personal.phone}
          placeholder="Phone"
          onChange={(value) => updatePersonalField("phone", value)}
        />

        <EditableText
          value={resume.personal.location}
          placeholder="Location"
          onChange={(value) => updatePersonalField("location", value)}
        />
      </div>
    </section>
  );
}
