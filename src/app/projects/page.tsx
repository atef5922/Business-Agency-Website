import type { Metadata } from "next";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container } from "@/components/shared/Container";
import { PrimaryButton } from "@/components/shared/Buttons";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PageHero } from "@/components/sections/PageHero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Multitech Solution case studies across websites, CRM, ERP, automation, commerce, and analytics."
};

export default function ProjectsPage() {
  const categories = ["All", ...Array.from(new Set(projects.map((project) => project.category)))];
  return (
    <main>
      <PageHero label="Projects" title="Case Studies That Show Practical Technology Impact" text="Browse solution examples designed to improve sales, operations, customer service, reporting, and growth." />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader label="Filterable Project Grid" title="Solutions Built For Business Progress" />
          <div className="mt-8 flex flex-wrap gap-3">{categories.map((item) => <button key={item} className="rounded-full border border-[#E5E7EB] bg-[#FFFFFF] px-5 py-2 text-sm font-bold text-[#134E4A]">{item}</button>)}</div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
          <div className="mt-12"><PrimaryButton href="/contact">Plan Your Case Study</PrimaryButton></div>
        </Container>
      </section>
    </main>
  );
}



