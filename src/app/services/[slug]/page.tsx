import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/shared/Container";
import { PrimaryButton } from "@/components/shared/Buttons";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { services } from "@/data/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title ?? "Service", description: service?.summary };
}

export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();
  const related = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <PageHero label="Service Details" title={service.title} text={service.description} />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Image src={service.image} alt={service.title} width={1000} height={700} className="rounded-3xl object-cover" />
          <div>
            <SectionHeader label="Overview" title={`Business-ready ${service.title}`} text={service.description} />
            <div className="mt-8 grid gap-4">
              {service.benefits.map((item) => (
                <p key={item} className="flex gap-3 font-bold">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-[#134E4A]" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#F7F7F3] py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader align="center" label="Features" title="What This Service Includes" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.features.map((item) => (
              <div key={item} className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-7 card-shadow">
                <h3 className="font-black text-[#111827]">{item}</h3>
                <p className="mt-3 leading-7 text-[#6B7280]">
                  Delivered with clear scope, quality checks, and integration readiness.
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader align="center" label="Process" title="How We Deliver" />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader label="Related Services" title="Explore More Capabilities" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {related.map((item, index) => (
              <ServiceCard key={item.slug} service={item} index={index} />
            ))}
          </div>
          <div className="mt-10">
            <PrimaryButton href="/contact">Start A Project</PrimaryButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
