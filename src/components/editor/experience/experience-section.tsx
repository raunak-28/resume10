"use client";

import { useResumeStore } from "@/features/resume";

import ExperienceCard from "./experience-card";

export default function ExperienceSection() {
  const experiences = useResumeStore((state) => state.resume.experiences);

  const addExperience = useResumeStore((state) => state.addExperience);

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="border-b pb-2 text-xl font-semibold">Experience</h2>

        <button
          onClick={addExperience}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Add Experience
        </button>
      </div>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}
