"use client";

import EditableText from "./editable-text";
import { useResumeStore } from "@/features/resume";

export default function EducationSection() {
  const {
    resume,
    updateEducation,
    addEducation,
    removeEducation,
  } = useResumeStore();

  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="border-b pb-2 text-xl font-semibold">
          Education
        </h2>

        <button
          onClick={addEducation}
          className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Add
        </button>
      </div>

      {resume.education.map((edu) => (
        <div
          key={edu.id}
          className="mb-6 rounded-xl border p-4"
        >
          <div className="flex justify-between">
            <EditableText
              value={edu.institute}
              placeholder="Institute"
              className="text-lg font-semibold"
              onChange={(value) =>
                updateEducation(
                  edu.id,
                  "institute",
                  value
                )
              }
            />

            <button
              className="text-red-500"
              onClick={() =>
                removeEducation(edu.id)
              }
            >
              Delete
            </button>
          </div>

          <EditableText
            value={edu.degree}
            placeholder="Degree"
            className="mt-2 text-slate-600"
            onChange={(value) =>
              updateEducation(
                edu.id,
                "degree",
                value
              )
            }
          />

          <div className="mt-3 flex gap-3">
            <EditableText
              value={edu.startDate}
              placeholder="Start"
              onChange={(value) =>
                updateEducation(
                  edu.id,
                  "startDate",
                  value
                )
              }
            />

            <span>-</span>

            <EditableText
              value={edu.endDate}
              placeholder="End"
              onChange={(value) =>
                updateEducation(
                  edu.id,
                  "endDate",
                  value
                )
              }
            />
          </div>

          <EditableText
            value={edu.cgpa ?? ""}
            placeholder="CGPA"
            className="mt-3"
            onChange={(value) =>
              updateEducation(
                edu.id,
                "cgpa",
                value
              )
            }
          />
        </div>
      ))}
    </section>
  );
}