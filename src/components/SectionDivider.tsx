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
        isCompact ? "py-3" : "py-6",
        "overflow-hidden",
        className
      )}
    >
      <div className="absolute inset-0 flex items-center">
        <div
          className={cn(
            "w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent",
            "dark:via-white/20"
          )}
        />
      </div>

      <div className="relative flex items-center justify-center">
        <span
          className={cn(
            "absolute rounded-full bg-gradient-to-r from-[#e02b2b]/35 via-[#e02b2b]/22 to-[#e02b2b]/35",
            "blur-3xl",
            isCompact ? "h-8 w-8" : "h-12 w-12",
            "opacity-80"
          )}
        />
        <span
          className={cn(
            "absolute rounded-full bg-white/85 dark:bg-white/30 blur-md",
            isCompact ? "h-5 w-5" : "h-7 w-7",
            "opacity-70"
          )}
        />
        <span
          className={cn(
            "relative rounded-full bg-[radial-gradient(circle_at_35%_35%,#ffd6d6,#e02b2b_60%,#a51212_100%)]",
            "shadow-[0_0_10px_rgba(224,43,43,0.35),0_0_0_6px_rgba(224,43,43,0.12),0_6px_12px_-10px_rgba(2,8,19,0.35)]",
            isCompact ? "h-2.5 w-2.5" : "h-3 w-3",
            "animate-glow-pulse"
          )}
        />
      </div>
    </div>
  );
};

export default SectionDivider;
