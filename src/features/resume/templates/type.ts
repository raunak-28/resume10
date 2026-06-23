import { ReactNode } from "react";
import { Resume } from "../types/resume";

export interface ResumeTemplate {
  id: string;
  name: string;
  thumbnail: string;
  render: (resume: Resume) => ReactNode;
}
