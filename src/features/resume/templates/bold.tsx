import { ReactNode } from "react";
import { Resume } from "../types/resume";

const boldTemplate = {
  id: "bold",
  name: "Bold",
  thumbnail: "",
  render: (resume: Resume): ReactNode => {
    return (
      <div className="space-y-8">
        <header className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="text-4xl font-bold">
                {resume.personal.fullName}
              </div>
              <div className="mt-2 text-lg text-slate-300">
                {resume.personal.title}
              </div>
            </div>
            <div className="space-y-1 text-sm text-slate-300">
              <div>{resume.personal.email}</div>
              <div>{resume.personal.phone}</div>
              <div>{resume.personal.location}</div>
            </div>
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.9fr]">
          <main className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <section>
              <div className="mb-3 text-xs uppercase tracking-[0.32em] text-slate-500">
                Profile
              </div>
              <p className="text-sm leading-7 text-slate-700">
                {resume.summary}
              </p>
            </section>

            <section>
              <div className="mb-3 text-xs uppercase tracking-[0.32em] text-slate-500">
                Experience
              </div>
              <div className="space-y-5">
                {resume.experiences.map((experience) => (
                  <div key={experience.id} className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {experience.position}
                      </h3>
                      <span className="text-sm text-slate-500">
                        {experience.startDate} — {experience.endDate}
                      </span>
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

            <section>
              <div className="mb-3 text-xs uppercase tracking-[0.32em] text-slate-500">
                Projects
              </div>
              <div className="space-y-4">
                {resume.projects.map((project) => (
                  <div
                    key={project.id}
                    className="space-y-2 rounded-2xl bg-slate-50 p-4"
                  >
                    <div className="font-semibold text-slate-900">
                      {project.title}
                    </div>
                    <div className="text-sm text-slate-600">
                      {project.description.join(" \n")}
                    </div>
                    <div className="text-xs uppercase tracking-[0.24em] text-slate-500">
                      {project.technologies.join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>

          <aside className="space-y-6 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-slate-100 shadow-sm">
            <section>
              <div className="mb-3 text-xs uppercase tracking-[0.32em] text-slate-500">
                Skills
              </div>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <div className="mb-3 text-xs uppercase tracking-[0.32em] text-slate-500">
                Education
              </div>
              <div className="space-y-4 text-sm text-slate-200">
                {resume.education.map((education) => (
                  <div key={education.id}>
                    <div className="font-semibold text-slate-100">
                      {education.institute}
                    </div>
                    <div>{education.degree}</div>
                    <div className="text-xs text-slate-500">
                      {education.startDate} — {education.endDate}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </div>
      </div>
    );
  },
};

export default boldTemplate;
