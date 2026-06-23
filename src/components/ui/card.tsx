import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: Props) {
  return (
    <div
      className={cn(
        "rounded-2xl border bg-white p-6 shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}