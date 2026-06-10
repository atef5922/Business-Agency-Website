import { cn } from "@/lib/utils";

export function SectionHeader({
  label,
  title,
  text,
  align = "left",
  dark = false
}: {
  label: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="mb-[18px] inline-flex items-center rounded-full bg-[#B7C95A] px-6 py-[10px] text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#111827]">
        {label}
      </p>
      <h2
        className={cn(
          "max-w-[760px] text-balance font-extrabold leading-[1.08] tracking-[-0.03em] text-[#111827]",
          "text-[34px] sm:text-[44px] lg:text-[56px]",
          dark ? "text-white" : "text-[#111827]"
        )}
      >
        {title}
      </h2>
      {text ? <p className={cn("mt-5 text-base leading-8 md:text-lg", dark ? "text-white/75" : "text-[#6B7280]")}>{text}</p> : null}
    </div>
  );
}


