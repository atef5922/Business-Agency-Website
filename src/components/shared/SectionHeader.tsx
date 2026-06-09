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
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] text-[#B7C95A]">
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-[#B7C95A]" />
        {label}
      </p>
      <h2 className={cn("text-balance text-3xl font-black leading-tight md:text-5xl", dark ? "text-white" : "text-[#111827]")}>{title}</h2>
      {text ? <p className={cn("mt-5 text-base leading-8 md:text-lg", dark ? "text-white/70" : "text-[#6B7280]")}>{text}</p> : null}
    </div>
  );
}


