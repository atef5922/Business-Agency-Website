import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { PrimaryButton } from "@/components/shared/Buttons";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ContactForm } from "@/components/sections/ContactForm";
import { LightAccordion } from "@/components/sections/LightAccordion";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Inovexa in Dhaka, Bangladesh for consulting, software development, automation, ERP, CRM, and analytics projects."
};

export default function ContactPage() {
  return (
    <main>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {[{ icon: MapPin, title: "Address", text: "Dhaka, Bangladesh" }, { icon: Phone, title: "Phone", text: "+880 1700-000000" }, { icon: Mail, title: "Email", text: "info@inovexa.com" }].map((item) => {
              const Icon = item.icon;
              return <article key={item.title} className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-7 card-shadow"><Icon className="mb-5 h-7 w-7 text-[#134E4A]" /><h2 className="text-xl font-black text-[#111827]">{item.title}</h2><p className="mt-2 text-[#6B7280]">{item.text}</p></article>;
            })}
          </div>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <ContactForm />
            <div className="min-h-[560px] rounded-3xl bg-[#0B3A35] p-8 text-white">
              <div className="grid h-full min-h-[500px] place-items-center rounded-3xl border border-white/15 bg-[linear-gradient(135deg,#134E4A,#0B3A35)] p-8 text-center">
                <div><MapPin className="mx-auto mb-5 h-10 w-10 text-[#B7C95A]" /><h2 className="text-3xl font-black">Dhaka, Bangladesh</h2><p className="mt-4 text-white/70">Map placeholder ready for Google Maps or location API integration.</p></div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-white py-16 sm:py-20 lg:py-24"><Container><SectionHeader label="FAQ" title="Common Contact Questions" /><div className="mt-8"><LightAccordion items={faqs} /></div><div className="mt-10"><PrimaryButton href="/services">Explore Services</PrimaryButton></div></Container></section>
    </main>
  );
}



