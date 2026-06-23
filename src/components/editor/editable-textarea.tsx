"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface EditableTextareaProps {
  value: string;
  onChange: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export default function EditableTextarea({
  value,
  onChange,
  className,
  placeholder = "Enter text...",
}: EditableTextareaProps) {
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(value);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setText(value);
  }, [value]);

  useEffect(() => {
    if (editing && textareaRef.current) {
      textareaRef.current.focus();

      autoResize();
    }
  }, [editing]);

  const autoResize = () => {
    const textarea = textareaRef.current;

    if (!textarea) return;

    textarea.style.height = "0px";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const save = () => {
    setEditing(false);

    if (text !== value) {
      onChange(text);
    }
  };

  if (editing) {
    return (
      <textarea
        ref={textareaRef}
        value={text}
        rows={1}
        onChange={(e) => {
          setText(e.target.value);
          autoResize();
        }}
        onBlur={save}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            setEditing(false);
            setText(value);
          }

          if (e.key === "Enter" && e.ctrlKey) {
            save();
          }
        }}
        className={cn(
          "w-full resize-none overflow-hidden rounded-md border border-blue-500 bg-blue-50 px-2 py-1 outline-none",
          className
        )}
      />
    );
  }

  return (
    <div
      onClick={() => setEditing(true)}
      className={cn(
        "min-h-[28px] cursor-text whitespace-pre-wrap rounded-md px-2 py-1 hover:bg-slate-100",
        className
      )}
    >
      {value || (
        <span className="text-slate-400">
          {placeholder}
        </span>
      )}
    </div>
  );
}