"use client";

import EditorSidebar from "./editor-sidebar";
import EditorToolbar from "./editor-toolbar";
import ResumeCanvas from "./resume-canvas";

export default function EditorLayout() {
  return (
    <div className="flex h-screen bg-slate-100">
      <EditorSidebar />

      <div className="flex flex-1 flex-col">
        <EditorToolbar />

        <main className="flex-1 overflow-auto p-10">
          <ResumeCanvas />
        </main>
      </div>
    </div>
  );
}
