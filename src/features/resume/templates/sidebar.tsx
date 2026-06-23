import { ReactNode } from "react";
import { Resume } from "../types/resume";

const sidebarTemplate = {
  id: "sidebar",
  name: "Sidebar",
  thumbnail: "",
  render: (resume: Resume): ReactNode => {
    return (
      <div className="flex w-full">
        <aside
          className="w-[260px] bg-[#142a4a] text-white p-6 flex-shrink-0"
          style={{ minHeight: "297mm" }}
        >
          <div className="mb-6">
            <div className="text-xs uppercase tracking-widest text-slate-300">
              {resume.personal.title}
            </div>
            <div className="mt-3 text-3xl font-extrabold leading-tight">
              {resume.personal.fullName}
            </div>
          </div>

          <div className="mb-6 border-t border-white/10 pt-6">
            <div className="text-sm font-semibold text-slate-200 mb-2">
              Contact
            </div>
            <div className="text-sm text-slate-200">
              {resume.personal.location}
            </div>
            <div className="text-sm text-slate-200">
              {resume.personal.phone}
            </div>
            <div className="text-sm text-slate-200 break-words">
              {resume.personal.email}
            </div>
            {resume.personal.github ? (
              <div className="text-sm text-slate-200">
                {resume.personal.github}
              </div>
            ) : null}
          </div>

          <div className="mb-6">
            <div className="text-sm font-semibold text-slate-200 mb-3">
              Skills
            </div>
            <ul className="text-sm space-y-2 text-slate-200">
              {resume.skills.map((s) => (
                <li key={s.id} className="flex items-start gap-2">
                  <span className="text-slate-300">•</span>
                  <span className="flex-1">{s.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-slate-200 mb-3">
              Languages
            </div>
            <ul className="text-sm space-y-2 text-slate-200">
              {/* if languages exist on resume, render; otherwise show popular placeholder */}
              {((resume as any).languages ?? ["English: Native"]).map(
                (l: string, i: number) => (
                  <li key={i} className="pl-2">
                    {l}
                  </li>
                ),
              )}
            </ul>
          </div>
        </aside>

        <main className="flex-1 bg-white p-8">
          <div className="max-w-[760px] mx-auto">
            <section className="mb-6">
              <p className="text-sm text-slate-700 leading-7">
                {resume.summary}
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Work History
              </h3>

              <div className="space-y-6">
                {resume.experiences.map((exp) => (
                  <div key={exp.id} className="flex gap-6">
                    <div className="w-36 text-sm text-slate-500">
                      {exp.startDate} - {exp.endDate}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-base font-semibold text-slate-900">
                            {exp.position}
                          </div>
                          <div className="text-sm text-slate-500">
                            {exp.company} — {exp.location}
                          </div>
                        </div>
                      </div>

                      <ul className="mt-3 list-disc ml-5 text-sm text-slate-700 space-y-1">
                        {exp.bullets.map((b, i) => (
                          <li key={i}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {resume.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="text-sm text-slate-500">
                      {edu.startDate} - {edu.endDate}
                    </div>
                    <div className="text-base font-semibold text-slate-900">
                      {edu.institute}
                    </div>
                    <div className="text-sm text-slate-700">{edu.degree}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  },
};

export default sidebarTemplate;
