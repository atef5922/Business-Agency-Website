import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/types/content";
import { TiltCard } from "@/components/shared/TiltCard";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <TiltCard>
      <Link href={`/projects/${project.slug}`} className="group premium-card block overflow-hidden rounded-[30px] transition duration-500 hover:shadow-[0_34px_95px_rgba(7,47,43,.18)]">
        <div className="relative h-80 overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(7,47,43,.88))] opacity-75 transition group-hover:opacity-100" />
          <span className="absolute left-5 top-5 rounded-full bg-[#B7C95A] px-4 py-2 text-xs font-black text-[#072F2B] shadow-[0_14px_34px_rgba(11,58,53,.25)]">{project.category}</span>
          <span className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-black text-white backdrop-blur-xl">+45% Efficiency</span>
          <div className="absolute inset-x-5 bottom-5 translate-y-5 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="mb-3 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-extrabold text-white backdrop-blur-xl">View Case Study</span>
            <div className="flex flex-wrap gap-2">{project.tech.slice(0, 3).map((tag) => <span key={tag} className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur">{tag}</span>)}</div>
          </div>
        </div>
        <div className="p-7">
          <h3 className="mb-3 text-xl font-black text-[#111827]">{project.title}</h3>
          <p className="mb-5 leading-7 text-[#6B7280]">{project.summary}</p>
          <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#134E4A]">Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
        </div>
      </Link>
    </TiltCard>
  );
}


