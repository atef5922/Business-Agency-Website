import { cn } from "@/lib/utils";

type BrandLogoProps = {
  variant?: "header" | "footer";
  showText?: boolean;
  className?: string;
};

export function BrandLogo({ variant = "header", showText = true, className }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <span className={cn("inline-flex items-center gap-[12px]", className)}>
      <svg
        viewBox="0 0 44 44"
        fill="none"
        aria-hidden="true"
        className={cn("shrink-0", isFooter ? "h-11 w-11" : "h-10 w-10")}
      >
        <rect width="44" height="44" rx="11" fill="#073B32" />
        <rect x="12.5" y="10" width="5.5" height="24" rx="2.75" fill="#FFFFFF" />
        <path d="M24.5 11L35.5 33" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
        <circle cx="33" cy="11.5" r="3.5" fill="#B7C95A" />
      </svg>
      {showText ? (
        <span
          className={cn(
            "text-[30px] font-extrabold leading-none tracking-[-0.02em]",
            isFooter ? "text-white" : "text-[#073B32]"
          )}
        >
          Inovexa
        </span>
      ) : null}
    </span>
  );
}
