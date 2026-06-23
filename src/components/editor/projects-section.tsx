"use client";

import EditableText from "./editable-text";
import EditableTextarea from "./editable-textarea";
import { useResumeStore } from "@/features/resume";
import { createId } from "@/lib/id";

export default function ProjectsSection() {
  const { resume, addProject, updateProject, removeProject } =
    useResumeStore();

  const handleAdd = () => {
    addProject({
      id: createId(),
      title: "",
      description: [],
      technologies: [],
      github: "",
      live: "",
    });
  };

  return (
    <section className="mt-10">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="border-b pb-2 text-xl font-semibold">Projects</h2>

        <button
          onClick={handleAdd}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          + Add Project
        </button>
      </div>

      <div className="space-y-6">
        {resume.projects.map((project) => (
          <div key={project.id} className="rounded-xl border p-4">
            <div className="flex justify-between">
              <EditableText
                value={project.title}
                placeholder="Project title"
                className="text-lg font-semibold"
                onChange={(value) =>
                  updateProject(project.id, "title", value)
                }
              />

              <button
                className="text-red-500"
                onClick={() => removeProject(project.id)}
              >
                Delete
              </button>
            </div>

            <EditableTextarea
              value={project.description.join("\n")}
              placeholder="Project description (one line per bullet)"
              className="mt-3"
              onChange={(value) =>
                updateProject(project.id, "description", value.split("\n").filter(Boolean))
              }
            />

            <EditableText
              value={project.technologies.join(", ")}
              placeholder="Technologies (comma separated)"
              className="mt-3"
              onChange={(value) =>
                updateProject(
                  project.id,
                  "technologies",
                  value
                    .split(",")
                    .map((t) => t.trim())
                    .filter(Boolean)
                )
              }
            />

            <div className="mt-3 flex gap-3">
              <EditableText
                value={project.github ?? ""}
                placeholder="GitHub URL"
                onChange={(value) =>
                  updateProject(project.id, "github", value)
                }
              />

              <EditableText
                value={project.live ?? ""}
                placeholder="Live URL"
                onChange={(value) => updateProject(project.id, "live", value)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
