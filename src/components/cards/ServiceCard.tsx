import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/content";
import { PremiumBadge } from "@/components/shared/PremiumBadge";
import { TiltCard } from "@/components/shared/TiltCard";

export function ServiceCard({ service, index = 0, featured = false }: { service: Service; index?: number; featured?: boolean }) {
  const Icon = service.icon;
  const requested = service.title === "Custom Software Development" || service.title === "ERP & CRM Solutions";
  return (
    <TiltCard className={featured ? "md:col-span-2 lg:col-span-2" : ""}>
      <Link href={`/services/${service.slug}`} className={`premium-card group block h-full rounded-[30px] p-7 transition duration-500 hover:shadow-[0_28px_80px_rgba(11,58,53,.16)] ${featured ? "!bg-[#134E4A] text-white" : ""}`}>
        <div className="mb-7 flex items-start justify-between gap-5">
          <span className="grid h-16 w-16 place-items-center rounded-2xl bg-[linear-gradient(135deg,#F7F7F3,#B7C95A)] text-[#072F2B] shadow-[0_16px_34px_rgba(11,58,53,.24)] transition duration-300 group-hover:scale-105 group-hover:rotate-6">
          <Icon className="h-7 w-7" />
          </span>
          <span className="rounded-full border border-[#134E4A]/12 bg-white/70 px-3 py-1 text-xs font-black text-[#B7C95A]">0{index + 1}</span>
        </div>
        {requested ? <PremiumBadge className="mb-4">Most Requested</PremiumBadge> : null}
        <h3 className={`mb-3 text-xl font-black ${featured ? "text-white" : "text-[#111827]"}`}>{service.title}</h3>
        <p className={`mb-6 leading-7 ${featured ? "text-white/72" : "text-[#6B7280]"}`}>{service.summary}</p>
        <span className={`inline-flex items-center gap-2 text-sm font-extrabold ${featured ? "text-[#B7C95A]" : "text-[#134E4A]"}`}>
          Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </Link>
    </TiltCard>
  );
}


