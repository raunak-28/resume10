"use client";

import EditableText from "../editable-text";
import BulletEditor from "./bullet-editor";

import { Experience, useResumeStore } from "@/features/resume";

interface Props {
  experience: Experience;
}

export default function ExperienceCard({ experience }: Props) {
  const updateExperience = useResumeStore((state) => state.updateExperience);

  const removeExperience = useResumeStore((state) => state.removeExperience);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex justify-between">
        <EditableText
          value={experience.position}
          placeholder="Position"
          className="text-lg font-semibold"
          onChange={(value) =>
            updateExperience(experience.id, "position", value)
          }
        />

        <button
          onClick={() => removeExperience(experience.id)}
          className="text-sm text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>

      <EditableText
        value={experience.company}
        placeholder="Company"
        className="mt-2 text-slate-600"
        onChange={(value) => updateExperience(experience.id, "company", value)}
      />

      <div className="mt-3 grid grid-cols-3 gap-3">
        <EditableText
          value={experience.location}
          placeholder="Location"
          onChange={(value) =>
            updateExperience(experience.id, "location", value)
          }
        />

        <EditableText
          value={experience.startDate}
          placeholder="Start Date"
          onChange={(value) =>
            updateExperience(experience.id, "startDate", value)
          }
        />

        <EditableText
          value={experience.endDate}
          placeholder="End Date"
          onChange={(value) =>
            updateExperience(experience.id, "endDate", value)
          }
        />
      </div>

      <BulletEditor experience={experience} />
    </div>
  );
}
