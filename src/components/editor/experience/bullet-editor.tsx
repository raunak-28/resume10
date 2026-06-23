"use client";

import EditableTextarea from "../editable-textarea";

import { Experience, useResumeStore } from "@/features/resume";

interface Props {
  experience: Experience;
}

export default function BulletEditor({
  experience,
}: Props) {
  const updateExperience = useResumeStore(
    (state) => state.updateExperience
  );

  const updateBullet = (
    index: number,
    value: string
  ) => {
    const bullets = [...experience.bullets];

    bullets[index] = value;

    updateExperience(
      experience.id,
      "bullets",
      bullets
    );
  };

  const addBullet = () => {
    updateExperience(
      experience.id,
      "bullets",
      [...experience.bullets, ""]
    );
  };

  const removeBullet = (
    index: number
  ) => {
    const bullets =
      experience.bullets.filter(
        (_, i) => i !== index
      );

    updateExperience(
      experience.id,
      "bullets",
      bullets
    );
  };

  return (
    <div className="mt-5">
      <div className="space-y-2">
        {experience.bullets.map(
          (bullet, index) => (
            <div
              key={index}
              className="flex gap-2"
            >
              <div className="mt-2 h-2 w-2 rounded-full bg-slate-500" />

              <EditableTextarea
                value={bullet}
                placeholder="Describe your achievement..."
                className="flex-1"
                onChange={(value) =>
                  updateBullet(index, value)
                }
              />

              <button
                onClick={() =>
                  removeBullet(index)
                }
                className="text-red-500"
              >
                ✕
              </button>
            </div>
          )
        )}
      </div>

      <button
        onClick={addBullet}
        className="mt-4 rounded-md bg-slate-100 px-3 py-2 text-sm hover:bg-slate-200"
      >
        + Add Bullet
      </button>
    </div>
  );
}