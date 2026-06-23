import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      {...props}
      className={cn(
        "rounded-xl px-5 py-3 font-medium transition-all duration-200",

        variant === "primary" && "bg-blue-600 text-white hover:bg-blue-700",

        variant === "secondary" && "bg-slate-200 hover:bg-slate-300",

        variant === "ghost" && "hover:bg-slate-100",

        className,
      )}
    />
  );
}
