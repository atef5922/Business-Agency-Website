import type { Metadata } from "next";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container } from "@/components/shared/Container";
import { PrimaryButton } from "@/components/shared/Buttons";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { LightAccordion } from "@/components/sections/LightAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { faqs } from "@/data/faqs";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Inovexa services including consulting, custom software, ERP, CRM, automation, cloud, and analytics."
};

export default function ServicesPage() {
  return (
    <main>
      <section className="py-16 sm:py-20 lg:py-24">
          <Container>
          <SectionHeader align="center" label="Service Grid" title="End-To-End Digital Business Capabilities" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader label="Service Categories" title="Consult, Build, Automate, And Scale" text="Our services are structured for future full-stack delivery, admin management, and content-driven growth." />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Strategy & Consulting", "Software Engineering", "Automation & Analytics"].map((item) => (
              <div key={item} className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-8 card-shadow">
                <h3 className="text-2xl font-black text-[#111827]">{item}</h3>
                <p className="mt-4 leading-7 text-[#6B7280]">Focused service delivery with clear milestones, measurable outcomes, and scalable technical foundations.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader align="center" label="Our Process" title="From Idea To Scalable Digital Product" />
          <div className="mt-12">
            <ProcessTimeline />
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader label="FAQ" title="Service Questions" />
          <div className="mt-8">
            <LightAccordion items={faqs} />
          </div>
          <div className="mt-10">
            <PrimaryButton href="/contact">Get Consultation</PrimaryButton>
          </div>
        </Container>
      </section>
    </main>
  );
}
