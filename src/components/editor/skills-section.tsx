"use client";

import { useState } from "react";
import { useResumeStore } from "@/features/resume";
import { createId } from "@/lib/id";

export default function SkillsSection() {
  const { resume, addSkill, removeSkill } = useResumeStore();

  const [newSkill, setNewSkill] = useState("");

  const handleAddSkill = () => {
    const skillName = newSkill.trim();

    if (!skillName) return;

    addSkill({ id: createId(), name: skillName });

    setNewSkill("");
  };

  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="border-b pb-2 text-xl font-semibold">Skills</h2>
      </div>

      <div className="mb-4 flex gap-3">
        <input
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          placeholder="Add a skill"
          className="flex-1 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddSkill();
            }
          }}
        />

        <button
          onClick={handleAddSkill}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      <div className="flex flex-wrap gap-3">
        {resume.skills.map((skill) => (
          <div
            key={skill.id}
            className="flex items-center gap-2 rounded-full bg-slate-200 px-4 py-2"
          >
            <span>{skill.name}</span>

            <button
              onClick={() => removeSkill(skill.id)}
              className="text-red-600 hover:text-red-800"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
