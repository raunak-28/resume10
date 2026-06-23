import { ReactNode } from "react";
import { Resume } from "../types/resume";

const modernTemplate = {
  id: "modern",
  name: "Modern",
  thumbnail: "",
  render: (resume: Resume): ReactNode => {
    return (
      <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
        <aside className="space-y-6 rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 shadow-sm">
          <div className="space-y-3 rounded-3xl bg-slate-900 p-6">
            <div className="text-4xl font-semibold tracking-tight text-white">
              {resume.personal.fullName}
            </div>
            <div className="text-sm uppercase tracking-[0.24em] text-slate-400">
              {resume.personal.title}
            </div>
          </div>

          <div className="space-y-3 rounded-3xl bg-slate-900 p-5">
            <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
              Contact
            </div>
            <div className="text-sm text-slate-200">
              {resume.personal.email}
            </div>
            <div className="text-sm text-slate-200">
              {resume.personal.phone}
            </div>
            <div className="text-sm text-slate-200">
              {resume.personal.location}
            </div>
            {resume.personal.github ? (
              <div className="text-sm text-slate-200">
                {resume.personal.github}
              </div>
            ) : null}
            {resume.personal.linkedin ? (
              <div className="text-sm text-slate-200">
                {resume.personal.linkedin}
              </div>
            ) : null}
          </div>

          <div className="rounded-3xl bg-white/5 p-5">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">
              Skills
            </div>
            <div className="flex flex-wrap gap-2">
              {resume.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-200"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 p-5">
            <div className="mb-4 text-xs uppercase tracking-[0.24em] text-slate-400">
              Projects
            </div>
            <div className="space-y-4 text-sm text-slate-200">
              {resume.projects.map((project) => (
                <div key={project.id}>
                  <div className="font-semibold text-slate-100">
                    {project.title}
                  </div>
                  <div className="text-slate-400">
                    {project.technologies.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="space-y-6">
          <section className="rounded-3xl border border-slate-200/40 bg-white p-6 shadow-sm">
            <div className="mb-4 flex flex-col gap-1">
              <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                Summary
              </div>
              <div className="text-sm leading-7 text-slate-700">
                {resume.summary}
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200/40 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Experience
                </h2>
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Recent Roles
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {resume.experiences.map((experience) => (
                <div key={experience.id} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="text-lg font-semibold text-slate-900">
                      {experience.position}
                    </div>
                    <div className="text-sm text-slate-500">
                      {experience.startDate} — {experience.endDate}
                    </div>
                  </div>
                  <div className="text-sm text-slate-600">
                    {experience.company} • {experience.location}
                  </div>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-slate-600">
                    {experience.bullets.map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200/40 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Projects
                </h2>
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Selected Work
                </div>
              </div>
            </div>
            <div className="space-y-5">
              {resume.projects.map((project) => (
                <div
                  key={project.id}
                  className="space-y-2 rounded-3xl bg-slate-50 p-4"
                >
                  <div className="text-lg font-semibold text-slate-900">
                    {project.title}
                  </div>
                  <div className="text-sm leading-6 text-slate-600">
                    {project.description.join(" ")}
                  </div>
                  {project.technologies.length > 0 ? (
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      {project.technologies.join(", ")}
                    </div>
                  ) : null}
                  <div className="flex flex-wrap gap-3 text-xs text-slate-500">
                    {project.github ? (
                      <span>GitHub: {project.github}</span>
                    ) : null}
                    {project.live ? <span>Live: {project.live}</span> : null}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-slate-200/40 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Education
                </h2>
                <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Academic background
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {resume.education.map((education) => (
                <div key={education.id} className="space-y-1">
                  <div className="text-lg font-semibold text-slate-900">
                    {education.institute}
                  </div>
                  <div className="text-sm text-slate-600">
                    {education.degree}
                  </div>
                  <div className="text-sm text-slate-500">
                    {education.startDate} — {education.endDate}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    );
  },
};

export default modernTemplate;
