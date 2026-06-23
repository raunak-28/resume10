import React, { ReactNode } from "react";
import { Resume } from "../types/resume";

export const simpleTemplate = {
  id: "simple",
  name: "Simple",
  thumbnail: "",
  render: (resume: Resume): ReactNode => {
    return (
      <div>
        <header className="mb-4">
          <h1 className="text-2xl font-bold">{resume.personal.fullName}</h1>
          <div className="text-sm text-slate-600">{resume.personal.title}</div>
          <div className="text-xs text-slate-500 mt-2">
            {resume.personal.email} • {resume.personal.phone} •{" "}
            {resume.personal.location}
          </div>
        </header>

        <section className="mb-4">
          <h2 className="font-semibold">Summary</h2>
          <div className="text-sm text-slate-700">{resume.summary}</div>
        </section>

        <section className="mb-4">
          <h2 className="font-semibold">Experience</h2>
          {resume.experiences.map((exp) => (
            <div key={exp.id} className="mb-2">
              <div className="font-medium">
                {exp.position} — {exp.company}
              </div>
              <div className="text-xs text-slate-500">
                {exp.startDate} - {exp.endDate} • {exp.location}
              </div>
              <ul className="list-disc ml-5 text-sm">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mb-4">
          <h2 className="font-semibold">Projects</h2>
          {resume.projects.map((p) => (
            <div key={p.id} className="mb-2">
              <div className="font-medium">{p.title}</div>
              <div className="text-sm">{p.description.join(" \n")}</div>
              <div className="text-xs text-slate-500">
                {p.technologies.join(", ")}
              </div>
            </div>
          ))}
        </section>

        <section>
          <h2 className="font-semibold">Education</h2>
          {resume.education.map((edu) => (
            <div key={edu.id} className="mb-2">
              <div className="font-medium">{edu.institute}</div>
              <div className="text-sm text-slate-600">
                {edu.degree} • {edu.startDate} - {edu.endDate}
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  },
};

export default simpleTemplate;
