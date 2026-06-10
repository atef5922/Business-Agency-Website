import type { LucideIcon } from "lucide-react";

type IndustryCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
  index?: number;
};

export function IndustryCard({ title, description, icon: Icon, index = 0 }: IndustryCardProps) {
  const variant = index % 3;

  return (
    <article
      className={`relative overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1`}
    >
      <div className="mb-5 flex items-start justify-between gap-4">
        <span
          className={`grid h-14 w-14 place-items-center rounded-2xl border ${
            variant === 1 ? "bg-[#134E4A] text-[#F7F7F3] border-[#E5E7EB]" : "bg-[#072F2B] text-[#D8E890] border-[#B7C95A]/25"
          }`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-full border border-[#E5E7EB] bg-white px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-[#072F2B]">0{index + 1}</span>
      </div>
      <h3 className="mb-2 text-lg font-black">{title}</h3>
      <p className="leading-7 text-[#6B7280]">{description}</p>
      <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.12em] text-[#111827]/60">
        <span className="h-px w-8 bg-[#B7C95A]" />
        <span>{variant === 2 ? "Priority implementation model" : "Scalable delivery system"}</span>
      </div>
    </article>
  );
}


