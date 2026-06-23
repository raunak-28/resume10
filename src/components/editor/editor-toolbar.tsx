"use client";

import Button from "@/components/ui/button";

export default function EditorToolbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-8">
      <div>
        <h1 className="font-semibold text-lg">
          Resume Editor
        </h1>
      </div>

      <div className="flex gap-3">
        <Button variant="secondary">
          Preview
        </Button>

        <Button>
          Download PDF
        </Button>
      </div>
    </header>
  );
}