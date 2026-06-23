"use client";

import { useResumeStore } from "@/features/resume";
import templates from "@/features/resume/templates";

import HeaderSection from "./header-section";
import SummarySection from "./summary-section";
import ExperienceSection from "./experience/experience-section";
import EducationSection from "./education-section";
import SkillsSection from "./skills-section";
import ProjectsSection from "./projects-section";

export default function ResumeCanvas() {
  const resume = useResumeStore((state) => state.resume);
  const selectedTemplateId = useResumeStore((s) => s.selectedTemplateId);
  const isPreviewMode = useResumeStore((s) => s.isPreviewMode);

  const template = templates.find((t) => t.id === selectedTemplateId);

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
        {isPreviewMode && template ? (
          <div>{template.render(resume)}</div>
        ) : (
          <>
            <HeaderSection />

            <SummarySection />

            <ExperienceSection />

            <EducationSection />

            <ProjectsSection />

            <SkillsSection />
          </>
        )}
      </div>
    </div>
  );
}
