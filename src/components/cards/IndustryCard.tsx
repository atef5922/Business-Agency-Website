import type { LucideIcon } from "lucide-react";

export function IndustryCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <article className="premium-card group rounded-[28px] p-6 transition duration-300 hover:-translate-y-2">
      <span className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[linear-gradient(135deg,#F7F7F3,#B7C95A)] text-[#134E4A] shadow-[0_16px_34px_rgba(11,58,53,.18)] transition group-hover:rotate-3">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mb-2 text-lg font-black">{title}</h3>
      <p className="leading-7 text-[#6B7280]">{description}</p>
    </article>
  );
}


