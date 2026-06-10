import Image from "next/image";
import Link from "next/link";
import { Calendar, Facebook, Linkedin, Twitter } from "lucide-react";
import type { TeamMember } from "@/types/content";

export function TeamCard({ member }: { member: TeamMember }) {
  const expertise = member.expertise ?? [];

  return (
    <article className="group overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-white transition duration-500 hover:-translate-y-2 hover:border-[#B7C95A]/50">
      <div className="relative h-80 overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          className="rounded-[24px] object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,transparent,rgba(7,47,43,.84))] opacity-0 transition duration-300 group-hover:opacity-100" />
        <div className="absolute inset-0 flex items-end p-5">
          <div className="w-full translate-y-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <div className="mb-4 flex items-center justify-between rounded-[18px] border border-[#D8E890]/25 bg-[#072F2B]/90 px-4 py-3">
              <p className="text-xs font-black uppercase tracking-[0.12em] text-[#D8E890]">Executive profile</p>
              <p className="text-xs font-bold text-white/80">{expertise.length} expertise</p>
            </div>
            <p className="inline-flex items-center gap-2 text-xs text-white">
              <Linkedin className="h-3.5 w-3.5" /> {member.linkedin ? "View profile" : "Connect via direct enquiry"}
            </p>
          </div>
        </div>
        <div className="absolute left-5 top-5 rounded-full bg-[#072F2B] px-3 py-1.5 text-xs font-black text-[#B7C95A] shadow-[0_8px_20px_rgba(7,47,43,.24)]">
          {member.experienceYears ? `${member.experienceYears}+ Years` : "15+ Years"}
        </div>
        <div className="absolute inset-x-5 bottom-5 hidden translate-y-5 justify-center gap-3 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:flex">
          {[Facebook, Twitter, Linkedin].map((Icon, index) => (
            <a
              href="#"
              key={index}
              aria-label={`${member.name} social profile`}
              className="grid h-10 w-10 place-items-center rounded-full bg-[#B7C95A] text-[#072F2B] shadow-[0_10px_24px_rgba(183,201,90,.35)] transition hover:scale-105"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
        {member.linkedin ? (
          <Link
            href={member.linkedin}
            className="absolute right-5 top-5 rounded-full bg-[#B7C95A] px-3 py-1.5 text-xs font-black text-[#072F2B] transition hover:opacity-90 md:hidden"
          >
            LinkedIn
          </Link>
        ) : null}
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-black">{member.name}</h3>
        <p className="mx-auto mt-3 inline-flex rounded-full bg-[#F7F7F3] px-4 py-1.5 text-xs font-black text-[#072F2B]">{member.role}</p>
        {expertise.length > 0 ? (
          <div className="mx-auto mt-4 flex flex-wrap justify-center gap-2">
            {expertise.map((item) => (
              <span key={item} className="rounded-full border border-[#E5E7EB] bg-[#F7F7F3] px-3 py-1.5 text-xs text-[#111827]">
                {item}
              </span>
            ))}
          </div>
        ) : null}
        <p className="mt-5 inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#6B7280]">
          <Calendar className="h-3.5 w-3.5 text-[#B7C95A]" /> {member.linkedin ? "Active in leadership" : "Consulting lead"}
        </p>
        {member.linkedin ? (
          <Link href={member.linkedin} className="mt-3 inline-flex w-fit items-center justify-center gap-2 text-xs font-bold text-[#134E4A]">
            <Linkedin className="h-3.5 w-3.5" />
            View LinkedIn profile
          </Link>
        ) : null}
      </div>
    </article>
  );
}
