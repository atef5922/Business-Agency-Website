import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { TeamCard } from "@/components/cards/TeamCard";
import { Container } from "@/components/shared/Container";
import { PrimaryButton } from "@/components/shared/Buttons";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { stats } from "@/data/stats";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Inovexa, a Bangladeshi business technology company focused on consulting, automation, and custom software."
};

export default function AboutPage() {
  return (
    <main>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1100&q=80" alt="Inovexa strategy team" width={900} height={650} className="rounded-3xl object-cover" />
          <div>
            <SectionHeader label="Company Overview" title="Built For Businesses That Want Technology To Create Real Momentum" text="Inovexa works with startups, SMEs, and corporate teams that need reliable consulting, development, and automation support." />
            <div className="mt-8 grid gap-4">
              {["Mission: simplify growth through smart technology", "Vision: become a trusted digital transformation partner in Bangladesh", "Values: clarity, reliability, innovation, and long-term support"].map((item) => (
                <p key={item} className="flex gap-3 font-bold text-[#111827]"><CheckCircle2 className="mt-1 h-5 w-5 text-[#134E4A]" /> {item}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <section className="bg-[#F7F7F3] py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader align="center" label="Our Journey" title="From Consulting Conversations To Scalable Digital Platforms" />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {["Discovery roots", "Software delivery", "Automation focus", "Growth partnership"].map((item, index) => (
              <article key={item} className="rounded-3xl border border-[#E5E7EB] bg-[#FFFFFF] p-7 card-shadow">
                <span className="text-4xl font-black text-[#134E4A]">0{index + 1}</span>
                <h3 className="mt-5 text-xl font-black text-[#111827]">{item}</h3>
                <p className="mt-3 leading-7 text-[#6B7280]">A steady step in our commitment to solving business problems through practical digital systems.</p>
              </article>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-3xl bg-[#134E4A] p-7 text-white">
                <b className="text-4xl text-[#F7F7F3]">{stat.value}</b>
                <p className="mt-2 text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionHeader align="center" label="Team Preview" title="People Behind Our Digital Excellence" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{team.map((member) => <TeamCard key={member.name} member={member} />)}</div>
          <div className="mt-12 text-center"><PrimaryButton href="/contact">Discuss Your Goals</PrimaryButton></div>
        </Container>
      </section>
    </main>
  );
}
