import { Resume } from "../types/resume";

export const mockResume: Resume = {
  personal: {
    fullName: "Raunak Kumar Jha",
    title: "Frontend Developer",

    email: "raunak@gmail.com",

    phone: "+91 9999999999",

    location: "Bengaluru",

    github: "github.com/raunak",

    linkedin: "linkedin.com/in/raunak",
  },

  summary:
    "Passionate software engineer with experience building scalable web applications.",

  experiences: [
    {
      id: "1",

      company: "ABC Technologies",

      position: "Software Engineer",

      startDate: "Jan 2023",

      endDate: "Present",

      current: true,

      location: "Bangalore",

      bullets: [
        "Developed React applications.",

        "Reduced load time by 35%.",

        "Collaborated with backend team.",
      ],
    },
  ],

  education: [
    {
      id: "1",

      institute: "XYZ University",

      degree: "B.Tech Computer Science",

      startDate: "2019",

      endDate: "2023",

      cgpa: "8.8",
    },
  ],

  skills: [
    {
      id: "1",
      name: "React",
    },

    {
      id: "2",
      name: "Next.js",
    },

    {
      id: "3",
      name: "TypeScript",
    },

    {
      id: "4",
      name: "Node.js",
    },
  ],

  projects: [
    {
      id: "1",

      title: "Resume Builder",

      description: ["Built a modern resume builder using Next.js."],

      technologies: ["Next.js", "TypeScript", "Tailwind"],
    },
  ],
};
