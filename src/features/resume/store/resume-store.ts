import { create } from "zustand";

import { mockResume } from "../data/mock-resume";
import {
  Education,
  Experience,
  PersonalInfo,
  Project,
  Resume,
  Skill,
} from "../types/resume";

import { createId } from "@/lib/id";

interface ResumeStore {
  resume: Resume;

  setResume: (resume: Resume) => void;

  resetResume: () => void;

  updateSummary: (summary: string) => void;

  updatePersonalField: <
    K extends keyof PersonalInfo
  >(
    field: K,
    value: PersonalInfo[K]
  ) => void;

  updateExperience: <
    K extends keyof Experience
  >(
    id: string,
    field: K,
    value: Experience[K]
  ) => void;

  addExperience: () => void;

  removeExperience: (id: string) => void;

  updateEducation: <
    K extends keyof Education
  >(
    id: string,
    field: K,
    value: Education[K]
  ) => void;

  addEducation: () => void;

  removeEducation: (id: string) => void;

  addSkill: (skill: Skill) => void;

  updateSkill: (
    id: string,
    name: string
  ) => void;

  removeSkill: (id: string) => void;

  addProject: (project: Project) => void;

  updateProject: <
    K extends keyof Project
  >(
    id: string,
    field: K,
    value: Project[K]
  ) => void;

  removeProject: (id: string) => void;
}

export const useResumeStore =
  create<ResumeStore>((set) => ({
    resume: mockResume,

    setResume: (resume) =>
      set({
        resume,
      }),

    resetResume: () =>
      set({
        resume: mockResume,
      }),

    updateSummary: (summary) =>
      set((state) => ({
        resume: {
          ...state.resume,
          summary,
        },
      })),

    updatePersonalField: (
      field,
      value
    ) =>
      set((state) => ({
        resume: {
          ...state.resume,
          personal: {
            ...state.resume.personal,
            [field]: value,
          },
        },
      })),

    updateExperience: (
      id,
      field,
      value
    ) =>
      set((state) => ({
        resume: {
          ...state.resume,
          experiences:
            state.resume.experiences.map(
              (experience) =>
                experience.id === id
                  ? {
                      ...experience,
                      [field]: value,
                    }
                  : experience
            ),
        },
      })),

    addExperience: () =>
      set((state) => ({
        resume: {
          ...state.resume,
          experiences: [
            ...state.resume.experiences,
            {
              id: createId(),
              company: "",
              position: "",
              startDate: "",
              endDate: "",
              current: false,
              location: "",
              bullets: [],
            },
          ],
        },
      })),

    removeExperience: (id) =>
      set((state) => ({
        resume: {
          ...state.resume,
          experiences:
            state.resume.experiences.filter(
              (experience) =>
                experience.id !== id
            ),
        },
      })),

    updateEducation: (
      id,
      field,
      value
    ) =>
      set((state) => ({
        resume: {
          ...state.resume,
          education:
            state.resume.education.map(
              (education) =>
                education.id === id
                  ? {
                      ...education,
                      [field]: value,
                    }
                  : education
            ),
        },
      })),

    addEducation: () =>
      set((state) => ({
        resume: {
          ...state.resume,
          education: [
            ...state.resume.education,
            {
              id: createId(),
              institute: "",
              degree: "",
              startDate: "",
              endDate: "",
              cgpa: "",
            },
          ],
        },
      })),

    removeEducation: (id) =>
      set((state) => ({
        resume: {
          ...state.resume,
          education:
            state.resume.education.filter(
              (education) =>
                education.id !== id
            ),
        },
      })),

    addSkill: (skill) =>
      set((state) => ({
        resume: {
          ...state.resume,
          skills: [
            ...state.resume.skills,
            skill,
          ],
        },
      })),

    updateSkill: (
      id,
      name
    ) =>
      set((state) => ({
        resume: {
          ...state.resume,
          skills: state.resume.skills.map(
            (skill) =>
              skill.id === id
                ? {
                    ...skill,
                    name,
                  }
                : skill
          ),
        },
      })),

    removeSkill: (id) =>
      set((state) => ({
        resume: {
          ...state.resume,
          skills:
            state.resume.skills.filter(
              (skill) =>
                skill.id !== id
            ),
        },
      })),

    addProject: (project) =>
      set((state) => ({
        resume: {
          ...state.resume,
          projects: [
            ...state.resume.projects,
            project,
          ],
        },
      })),

    updateProject: (
      id,
      field,
      value
    ) =>
      set((state) => ({
        resume: {
          ...state.resume,
          projects:
            state.resume.projects.map(
              (project) =>
                project.id === id
                  ? {
                      ...project,
                      [field]: value,
                    }
                  : project
            ),
        },
      })),

    removeProject: (id) =>
      set((state) => ({
        resume: {
          ...state.resume,
          projects:
            state.resume.projects.filter(
              (project) =>
                project.id !== id
            ),
        },
      })),
  }));