import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import type { TeamMember } from "@/types/content";

export function TeamCard({ member }: { member: TeamMember }) {
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
        <div className="pointer-events-none absolute inset-x-5 bottom-5 hidden translate-y-5 justify-center gap-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 md:flex">
          {member.linkedin ? (
            <Link href={member.linkedin} aria-label={`${member.name} LinkedIn`} className="grid h-10 w-10 place-items-center rounded-full bg-[#B7C95A] text-[#072F2B] shadow-[0_10px_24px_rgba(183,201,90,.35)] transition hover:scale-105">
              <Linkedin className="h-4 w-4" />
            </Link>
          ) : (
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#B7C95A] text-[#072F2B] opacity-75 shadow-[0_10px_24px_rgba(183,201,90,.35)]">
              <Linkedin className="h-4 w-4" />
            </span>
          )}
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#B7C95A] text-[#072F2B] opacity-85 shadow-[0_10px_24px_rgba(183,201,90,.35)]">
            <Facebook className="h-4 w-4" />
          </span>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#B7C95A] text-[#072F2B] opacity-85 shadow-[0_10px_24px_rgba(183,201,90,.35)]">
            <Instagram className="h-4 w-4" />
          </span>
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-black">{member.name}</h3>
        <p className="mx-auto mt-3 inline-flex rounded-full bg-[#F7F7F3] px-4 py-1.5 text-xs font-black text-[#072F2B]">{member.role}</p>
      </div>
    </article>
  );
}
