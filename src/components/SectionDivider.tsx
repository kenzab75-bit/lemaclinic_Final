import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "default" | "compact";
}

export const SectionDivider = ({ className, variant = "default" }: SectionDividerProps) => {
  const isCompact = variant === "compact";

  return (
    <div
      aria-hidden
      className={cn(
        "relative flex w-full items-center justify-center",
        isCompact ? "py-4" : "py-7",
        "overflow-hidden",
        className
      )}
    >
      <span className="absolute inset-0 flex items-center">
        <span
          className={cn(
            "w-full h-[0.5px] bg-gradient-to-r from-transparent via-white/45 to-transparent",
            "dark:via-white/20"
          )}
        />
      </span>

      <span className="absolute inset-0 flex items-center justify-center">
        <span
          className={cn(
            "h-[0.5px] w-[220px] max-w-full",
            "bg-[radial-gradient(circle_at_center,rgba(224,43,43,0.3)_0%,rgba(224,43,43,0.12)_45%,rgba(224,43,43,0)_80%)]"
          )}
        />
      </span>

      <div className="relative flex items-center justify-center">
        <span
          className={cn(
            "absolute rounded-full blur-3xl",
            isCompact ? "h-8 w-8" : "h-11 w-11",
            "bg-[radial-gradient(circle_at_center,rgba(224,43,43,0.35),rgba(224,43,43,0.08))]"
          )}
        />
        <span
          className={cn(
            "absolute rounded-full blur-lg",
            isCompact ? "h-5 w-5" : "h-6 w-6",
            "bg-white/70 dark:bg-white/35"
          )}
        />
        <span
          className={cn(
            "relative rounded-full",
            "bg-[radial-gradient(circle_at_center,#ffe4e4_0%,#e02b2b_65%,#a51212_100%)]",
            "shadow-[0_0_8px_rgba(224,43,43,0.35),0_0_0_5px_rgba(224,43,43,0.14)]",
            isCompact ? "h-2.5 w-2.5" : "h-3 w-3",
            "animate-glow-pulse"
          )}
        />
      </div>
    </div>
  );
};

export default SectionDivider;
