import type { Metadata } from "next";
import Image from "next/image";
import { TeamCard } from "@/components/cards/TeamCard";
import { Container } from "@/components/shared/Container";
import { PrimaryButton } from "@/components/shared/Buttons";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the Inovexa team behind consulting, automation, software architecture, and project delivery."
};

export default function TeamPage() {
  return (
    <main>
      <section className="py-16 sm:py-20 lg:py-24"><Container><SectionHeader align="center" label="Expert Team" title="Meet The People Behind Our Digital Excellence" /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{team.map((member) => <TeamCard key={member.name} member={member} />)}</div></Container></section>
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Image src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1100&q=80" alt="Inovexa collaborative culture" width={900} height={650} className="rounded-3xl object-cover" />
          <div><SectionHeader label="Culture" title="Clear Communication, Strong Ownership, And Practical Innovation" text="We believe premium delivery comes from disciplined collaboration, thoughtful planning, reliable engineering, and respect for business outcomes." /><div className="mt-8"><PrimaryButton href="/contact">Work With Our Team</PrimaryButton></div></div>
        </Container>
      </section>
    </main>
  );
}
