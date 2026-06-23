"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface EditableTextProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function EditableText({
  value,
  onChange,
  className,
  placeholder = "Enter text...",
}: EditableTextProps) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  const save = () => {
    setEditing(false);

    if (text !== value) {
      onChange(text);
    }
  };

  if (editing) {
    return (
      <input
        ref={inputRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={save}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            save();
          }

          if (e.key === "Escape") {
            setText(value);
            setEditing(false);
          }
        }}
        className={cn(
          "w-full rounded border border-blue-500 bg-blue-50 px-2 py-1 outline-none",
          className,
        )}
      />
    );
  }

  return (
    <div
      onClick={() => setEditing(true)}
      className={cn(
        "cursor-text rounded px-2 py-1 hover:bg-slate-100",
        className,
      )}
    >
      {value || <span className="text-slate-400">{placeholder}</span>}
    </div>
  );
}
