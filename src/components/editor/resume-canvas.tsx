"use client";

import { useResumeStore } from "@/features/resume";

import HeaderSection from "./header-section";
import SummarySection from "./summary-section";
import ExperienceSection from "./experience/experience-section";
import EducationSection from "./education-section";
import SkillsSection from "./skills-section";
import ProjectsSection from "./projects-section";

export default function ResumeCanvas() {
  const resume = useResumeStore((state) => state.resume);

  return (
    <div className="flex justify-center py-8">
      <div
        className="bg-white shadow-xl"
        style={{
          width: "210mm",
          minHeight: "297mm",
          padding: "24mm",
        }}
      >
        <HeaderSection />

        <SummarySection />

        <ExperienceSection />

        <EducationSection />

        <ProjectsSection />

        <SkillsSection />
      </div>
    </div>
  );
}
