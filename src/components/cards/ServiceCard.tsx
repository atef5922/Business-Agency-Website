import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/types/content";
import { PremiumBadge } from "@/components/shared/PremiumBadge";
import { TiltCard } from "@/components/shared/TiltCard";

export function ServiceCard({ service, index, featured = false }: { service: Service; index?: number; featured?: boolean }) {
  const Icon = service.icon;
  const requested = service.title === "Custom Software Development" || service.title === "ERP & CRM Solutions";
  const effectiveIndex = (index ?? service.slug.length) % 4;
  const tone = effectiveIndex % 4;
  const toneTone = tone % 2 === 0 ? "border-[#B7C95A]/35 bg-[linear-gradient(160deg,#F7F7F3,#FFFFFF)]" : "border-[#D1D5DB] bg-white";
  return (
    <TiltCard className={featured ? "md:col-span-2 lg:col-span-2" : ""}>
      <Link
        href={`/services/${service.slug}`}
        className={`group flex h-full flex-col rounded-[30px] border border-[#E5E7EB] p-7 transition duration-500 ${
          featured
            ? "bg-[linear-gradient(160deg,#0F4A44,#134E4A)] text-white hover:border-[#B7C95A]"
            : `bg-white ${toneTone} hover:border-[#B7C95A]/55`
        }`}
      >
        <div className="mb-7 flex items-start justify-between gap-5">
          <span className={`grid h-16 w-16 place-items-center rounded-[18px] border transition duration-300 ${featured ? "border-[#B7C95A]/45 bg-[#B7C95A]/20 text-[#AEE8A6]" : "bg-[linear-gradient(145deg,#F7F7F3,#B7C95A)] text-[#072F2B] shadow-[0_14px_34px_rgba(11,58,53,.2)] group-hover:scale-105 group-hover:rotate-6"}`}>
            <Icon className="h-7 w-7" />
          </span>
          <span className={`rounded-full border px-3 py-1 text-xs font-black ${featured ? "border-[#B7C95A]/45 bg-[#072F2B] text-[#B7C95A]" : "border-[#134E4A]/12 bg-white/70 text-[#B7C95A]"}`}>0{(index ?? 0) + 1}</span>
        </div>
        {requested ? <PremiumBadge className="mb-4">Most Requested</PremiumBadge> : null}
        <h3 className={`mb-3 text-xl font-black ${featured ? "text-white" : "text-[#111827]"}`}>{service.title}</h3>
        <p className={`mb-6 leading-7 ${featured ? "text-white/78" : "text-[#6B7280]"}`}>{service.summary}</p>
        <p className={`mt-auto inline-flex items-center gap-2 text-sm font-extrabold ${featured ? "text-[#B7C95A]" : "text-[#134E4A]"}`}>
          Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </p>
      </Link>
    </TiltCard>
  );
}
