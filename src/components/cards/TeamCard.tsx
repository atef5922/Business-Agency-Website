import Image from "next/image";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import type { TeamMember } from "@/types/content";

export function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="group premium-card overflow-hidden rounded-[30px] p-2 transition duration-500 hover:-translate-y-3">
      <div className="relative h-80 overflow-hidden">
        <Image src={member.image} alt={`${member.name}, ${member.role}`} fill className="rounded-[24px] object-cover transition duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 25vw" />
        <div className="absolute inset-0 rounded-[24px] bg-[linear-gradient(180deg,transparent,rgba(7,47,43,.82))] opacity-0 transition group-hover:opacity-100" />
        <div className="absolute inset-x-5 bottom-5 flex translate-y-5 justify-center gap-3 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
          {[Facebook, Twitter, Linkedin].map((Icon, index) => (
            <a href="#" key={index} aria-label={`${member.name} social profile`} className="grid h-10 w-10 place-items-center rounded-full bg-[#B7C95A] text-[#072F2B]">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-black">{member.name}</h3>
        <p className="mx-auto mt-3 inline-flex rounded-full bg-[#F7F7F3] px-4 py-1.5 text-xs font-black text-[#072F2B]">{member.role}</p>
      </div>
    </article>
  );
}


