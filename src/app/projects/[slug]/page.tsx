import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { PrimaryButton } from "@/components/shared/Buttons";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? "Project", description: project?.summary };
}

export default async function ProjectDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return (
    <main>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <Image src={project.image} alt={project.title} width={1400} height={760} className="h-[520px] w-full rounded-3xl object-cover" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[["Challenge", project.challenge], ["Solution", project.solution], ["Result", project.result]].map(([title, text]) => <article key={title} className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-7 card-shadow"><h2 className="mb-4 text-2xl font-black text-[#111827]">{title}</h2><p className="leading-8 text-[#6B7280]">{text}</p></article>)}
          </div>
        </Container>
      </section>
      <section className="bg-[#F7F7F3] py-16 sm:py-20 lg:py-24"><Container><SectionHeader label="Technology Used" title="Built With A Scalable Foundation" /><div className="mt-8 flex flex-wrap gap-3">{project.tech.map((item) => <span key={item} className="rounded-full bg-[#134E4A]/10 px-5 py-3 text-sm font-black text-[#111827]">{item}</span>)}</div><div className="mt-12 grid gap-6 md:grid-cols-3">{[project.image, project.image, project.image].map((image, index) => <Image key={index} src={image} alt={`${project.title} gallery ${index + 1}`} width={500} height={360} className="h-72 rounded-3xl object-cover" />)}</div><div className="mt-12"><PrimaryButton href="/contact">Start A Similar Project</PrimaryButton></div></Container></section>
    </main>
  );
}

