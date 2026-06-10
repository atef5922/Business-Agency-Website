"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, BadgeCheck, BarChart3, CheckCircle2, CircleDollarSign, Mail, MapPin, Phone, ShieldCheck, Users } from "lucide-react";
import { useEffect, useRef } from "react";
import { IndustryCard } from "@/components/cards/IndustryCard";
import { TeamCard } from "@/components/cards/TeamCard";
import { Container } from "@/components/shared/Container";
import { PrimaryButton, SecondaryButton } from "@/components/shared/Buttons";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { FloatingShapes, GradientMesh, SectionPattern } from "@/components/shared/VisualEffects";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { TiltCard } from "@/components/shared/TiltCard";
import { PremiumBadge } from "@/components/shared/PremiumBadge";
import { ContactForm } from "@/components/sections/ContactForm";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { LightAccordion } from "@/components/sections/LightAccordion";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { TestimonialSlider } from "@/components/sections/TestimonialSlider";
import { faqs } from "@/data/faqs";
import { industries } from "@/data/industries";
import { stats } from "@/data/stats";
import { team } from "@/data/team";
import { cn } from "@/lib/utils";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 }
};

function MotionSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const baseClass = cn("py-16 sm:py-20 lg:py-24", className);
  return (
    <motion.section initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.16 }} variants={reveal} transition={{ duration: 0.55 }} className={baseClass}>
      {children}
    </motion.section>
  );
}

export function HomeSections() {
  const heroRef = useRef<HTMLElement | null>(null);
  const ctaRef = useRef<HTMLElement | null>(null);
  const statIcons = [ShieldCheck, BarChart3, Users, BadgeCheck];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
    gsap.from(".hero-stagger", { opacity: 0, y: 28, duration: 0.8, stagger: 0.1, ease: "power3.out" });
    gsap.from(".hero-dashboard", { opacity: 0, x: 70, rotateY: -14, duration: 1.0, delay: 0.2, ease: "power3.out" });
    gsap.from(".hero-button", { opacity: 0, y: 12, duration: 0.45, stagger: 0.08, delay: 0.28, ease: "power3.out" });
    gsap.from(".hero-stat", { opacity: 0, y: 16, duration: 0.65, stagger: 0.07, delay: 0.3, ease: "power3.out" });
      gsap.to(".hero-bg", { yPercent: 8, ease: "none", scrollTrigger: { trigger: heroRef.current, scrub: true } });
      gsap.to(".floating-shape", { y: -18, rotation: 8, repeat: -1, yoyo: true, duration: 2.8, ease: "sine.inOut", stagger: 0.2 });
      if (ctaRef.current) {
        gsap.to(".cta-bg", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ctaRef.current, scrub: true } });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-[calc(100svh - 112px)] overflow-hidden bg-[#073B32] text-white sm:min-h-[calc(100svh - 112px)] lg:min-h-[calc(100svh - 112px)]"
      >
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
            alt="Modern business technology office"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{
              filter: "grayscale(100%) contrast(1.08) brightness(0.95)"
            }}
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 10,
            background: "linear-gradient(90deg, rgba(7,47,43,0.82) 0%, rgba(7,47,43,0.70) 35%, rgba(7,47,43,0.45) 65%, rgba(7,47,43,0.20) 100%)"
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 hero-tech-pattern opacity-70"
          style={{
            zIndex: 20
          }}
        />
        <div className="pointer-events-none absolute inset-0" style={{ zIndex: 30 }}>
          <span className="absolute -left-16 -top-12 hidden h-[500px] w-[500px] rounded-full border border-white/5 opacity-70 blur-[1px] lg:block" />
          <span className="absolute -right-24 top-16 hidden h-[360px] w-[360px] rounded-full border border-white/6 opacity-60 lg:block" />
          <span className="absolute left-1/3 top-2/5 hidden h-px w-56 bg-gradient-to-r from-transparent via-white/8 to-transparent lg:block" />
          <span className="absolute right-1/4 top-1/3 hidden h-44 w-px bg-gradient-to-b from-transparent via-white/6 to-transparent lg:block" />
          <GradientMesh />
          <FloatingShapes />
        </div>
        <Container className="relative z-40 grid min-h-[calc(100svh - 112px)] items-center gap-10 py-16 sm:min-h-[calc(100svh - 112px)] sm:py-20 lg:min-h-[calc(100svh - 112px)] lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,.98fr)] lg:gap-12 lg:py-20">
          <div className="max-w-4xl self-center lg:self-center">
            <p className="hero-stagger mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#B7C95A] backdrop-blur-xl">Transforming Businesses Through Technology</p>
            <h1 className="hero-stagger text-balance text-4xl font-black leading-[1.02] sm:text-5xl md:text-6xl lg:text-[5.2rem]">Transforming Business Challenges Into <span className="typing-highlight">Digital Success Stories</span></h1>
            <p className="hero-stagger mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">Inovexa helps organizations streamline operations, automate workflows, improve customer experience, and accelerate growth through modern technology solutions.</p>
            <div className="hero-stagger mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <PrimaryButton href="/contact" className="w-full justify-center sm:w-auto">Get Free Consultation</PrimaryButton>
              <SecondaryButton href="/services" className="w-full justify-center sm:w-auto">Explore Services</SecondaryButton>
            </div>
          </div>
          <div className="hidden lg:block lg:self-center">
            <TiltCard className="hero-dashboard">
              <div className="glass-panel relative overflow-hidden rounded-[36px] p-5 shadow-[0_28px_80px_rgba(7,59,50,.2)]">
                <div className="mb-5 flex items-center justify-between">
                  <PremiumBadge>Live Growth Console</PremiumBadge>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-bold text-white/70">Q2 2026</span>
                </div>
                <div className="rounded-[28px] border border-white/15 bg-[#072F2B]/78 p-5">
                  <div className="mb-6 flex items-end justify-between">
                    <div>
                      <p className="text-sm text-white/55">Operational Efficiency</p>
                      <h3 className="mt-2 text-5xl font-black text-[#B7C95A]">+60%</h3>
                    </div>
                    <div className="rounded-2xl bg-[#B7C95A] px-4 py-2 text-sm font-black text-[#072F2B]">Optimized</div>
                  </div>
                  <div className="grid grid-cols-12 items-end gap-2">
                    {[34, 48, 42, 64, 58, 76, 68, 86, 74, 92, 83, 96].map((height, index) => (
                      <span key={index} className="rounded-t-xl bg-[linear-gradient(180deg,#F7F7F3,#134E4A)]" style={{ height: `${height * 1.55}px` }} />
                    ))}
                  </div>
                </div>
                <div className="mt-5 grid grid-cols-2 gap-4">
                  {[
                    ["CRM Leads", "4.8k", "+32%"],
                    ["Automation", "128", "+18%"],
                    ["Reports", "96%", "Live"],
                    ["Support", "24/7", "Ready"]
                  ].map(([label, value, tag]) => (
                    <div key={label} className="rounded-3xl border border-white/10 bg-white/8 p-4">
                      <p className="text-xs text-white/50">{label}</p>
                      <div className="mt-2 flex items-end justify-between gap-2"><b className="text-2xl text-white">{value}</b><span className="text-xs font-black text-[#B7C95A]">{tag}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </div>
          <div className="hero-stagger grid gap-4 self-start sm:grid-cols-2 lg:col-span-2 lg:mt-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = statIcons[index] ?? BadgeCheck;
              return (
                <div key={stat.label} className="glass-panel rounded-[24px] p-5 transition duration-300 hover:-translate-y-2 hover:border-[#B7C95A]/50">
                <Icon className="mb-4 h-6 w-6 text-[#B7C95A]" />
                <div className="text-3xl font-black text-[#B7C95A]"><AnimatedCounter value={stat.value} /></div>
                <p className="mt-2 text-sm text-white/70">{stat.label}</p>
              </div>
            );
            })}
          </div>
          <a href="#trust" aria-label="Scroll to trust section" className="animated-scroll absolute bottom-5 left-1/2 hidden h-12 w-12 -translate-x-1/2 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur lg:grid">
            <ArrowDown className="h-5 w-5" />
          </a>
        </Container>
      </section>

      <MotionSection className="soft-section">
        <SectionPattern />
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Image src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80" alt="Business consultants reviewing digital strategy" width={600} height={720} className="h-[420px] rounded-3xl object-cover" />
            <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80" alt="Team collaborating on software planning" width={600} height={720} className="mt-14 h-[420px] rounded-3xl object-cover" />
            <div className="absolute left-4 top-4 hidden rounded-3xl bg-[#B7C95A] p-5 text-[#072F2B] shadow-[0_22px_60px_rgba(11,58,53,.22)] md:block"><b className="block text-3xl">10+</b> Years Experience</div>
            <div className="absolute right-4 bottom-4 hidden rounded-3xl border border-[#E5E7EB] bg-white/90 p-5 shadow-2xl backdrop-blur-xl md:block"><b className="block text-2xl text-[#134E4A]">250+</b> Projects Delivered</div>
          </div>
          <div>
            <SectionHeader label="About Inovexa" title="The Journey Behind Our Digital Business Success" text="Inovexa is a business technology company helping organizations adopt digital systems, automate operations, and build scalable software solutions for long-term growth." />
            <div className="mt-8 grid gap-4">
              {["Strategic Technology Consulting", "Custom Software Development", "Business Process Automation", "Long-Term Technical Support"].map((item) => (
                <p key={item} className="flex items-center gap-3 font-bold text-[#111827]"><CheckCircle2 className="h-5 w-5 text-[#134E4A]" /> {item}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <PrimaryButton href="/about">Learn More About Us</PrimaryButton>
              <div className="premium-card rounded-3xl px-5 py-4"><b>Founder&apos;s Note</b><p className="text-sm text-[#6B7280]">Technology should make growth simpler.</p></div>
            </div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-[#072F2B] text-white">
        <GradientMesh />
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader dark label="Innovation & Growth" title="Empowering Your Brand With Innovative Digital Solutions" text="We combine consulting, automation, software engineering, and analytics to help companies move faster without losing operational control." />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {["Digital Strategy", "Business Automation", "Scalable Software"].map((item) => (
                <div key={item} className="glass-panel rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-[#B7C95A]/60"><h3 className="font-black">{item}</h3><p className="mt-3 text-sm leading-6 text-white/65">Practical technology execution for measurable business progress.</p></div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1000&q=80" alt="Digital innovation team" width={900} height={650} className="rounded-3xl object-cover" />
            <div className="absolute -bottom-4 left-4 right-4 hidden rounded-3xl bg-[#B7C95A] p-6 text-[#072F2B] shadow-2xl sm:block lg:left-8 lg:right-auto lg:-bottom-8"><BarChart3 className="mb-3 h-7 w-7" /><b>Growth systems with clarity</b></div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="soft-section">
        <SectionPattern />
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeader label="Growth Systems" title="We Handle Complexities, So You Can Focus On Growth" text="From planning to deployment, we simplify complex business processes through smart digital platforms and reliable implementation." />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Workflow Optimization", "Data-Driven Decisions", "Customer Experience Improvement", "Secure & Scalable Systems"].map((item) => (
                <div key={item} className="premium-card rounded-3xl p-5 font-bold"><BadgeCheck className="mb-3 h-5 w-5 text-[#134E4A]" />{item}</div>
              ))}
            </div>
          </div>
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80" alt="Business team focusing on growth metrics" width={900} height={650} className="rounded-3xl object-cover" />
            <div className="absolute left-4 top-4 hidden rounded-3xl bg-white/90 p-5 shadow-2xl backdrop-blur-xl md:block"><b className="text-3xl text-[#134E4A]">96%</b><p className="text-sm text-[#6B7280]">Client Retention</p></div>
            <div className="absolute bottom-4 right-4 hidden rounded-3xl bg-[#134E4A]/95 p-5 text-white shadow-2xl backdrop-blur-xl md:block"><b className="text-3xl text-[#B7C95A]">60%</b><p className="text-sm text-white/70">Efficiency Improvement</p></div>
          </div>
        </Container>
      </MotionSection>

      <section ref={ctaRef} className="relative overflow-hidden py-16 sm:py-20 lg:py-24 text-white">
        <Image src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1800&q=80" alt="Modern office for digital growth" fill className="cta-bg object-cover" sizes="100vw" />
        <div className="absolute inset-0 image-overlay" />
        <GradientMesh />
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-4xl text-balance text-4xl font-black leading-tight md:text-6xl">Building Digital Connections For Growth & Limitless Opportunities</h2>
          <div className="my-10 flex flex-wrap justify-center gap-5">
            {["Trusted Clients", "Expert Team", "Smart Execution"].map((item) => (
              <div key={item} className="glass-panel grid h-36 w-36 place-items-center rounded-full p-4 text-center text-sm font-black">{item}</div>
            ))}
          </div>
          <PrimaryButton href="/contact">Start Your Project</PrimaryButton>
        </Container>
      </section>

      <MotionSection className="soft-section bg-white">
        <SectionPattern />
        <Container>
          <SectionHeader align="center" label="Our Process" title="From Idea To Scalable Digital Product" text="A structured delivery model keeps every project transparent, measurable, and ready for long-term support." />
          <div className="mt-12"><ProcessTimeline /></div>
        </Container>
      </MotionSection>

      <MotionSection className="soft-section bg-white">
        <SectionPattern />
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <Image src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1000&q=80" alt="Technology consulting analytics session" width={900} height={650} className="rounded-3xl object-cover" />
            <div className="absolute left-4 top-4 hidden rounded-3xl bg-white/90 p-5 shadow-2xl backdrop-blur-xl md:block"><CircleDollarSign className="mb-3 h-7 w-7 text-[#134E4A]" /><b>Transparent delivery with measurable value</b><div className="mt-4 flex h-10 items-end gap-1">{[35, 52, 44, 70, 58].map((h) => <span key={h} className="w-3 rounded-t bg-[#B7C95A]" style={{ height: `${h}%` }} />)}</div></div>
          </div>
          <div>
            <SectionHeader label="Why Choose Inovexa" title="Driving Success Through Tailored Technology And Proven Expertise" />
            <div className="mt-8"><LightAccordion items={["Experienced Technology Team", "Custom Business Solutions", "Transparent Development Process", "Scalable & Secure Architecture", "Long-Term Support & Maintenance"].map((question) => ({ question, answer: "We combine business understanding, reliable engineering, and clear communication so every solution stays aligned with your growth goals." }))} /></div>
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="soft-section">
        <SectionPattern />
        <Container>
          <SectionHeader align="center" label="Industries We Serve" title="Smart Digital Solutions For Every Business Sector" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{industries.map((item) => <IndustryCard key={item.title} {...item} />)}</div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-white">
        <Container>
          <SectionHeader align="center" label="Expert Team" title="Meet The People Behind Our Digital Excellence" />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">{team.map((member) => <TeamCard key={member.name} member={member} />)}</div>
        </Container>
      </MotionSection>

      <MotionSection>
        <Container>
          <SectionHeader label="Client Feedback" title="What Our Clients Say About Working With Us" />
          <div className="mt-12"><TestimonialSlider /></div>
        </Container>
      </MotionSection>

      <MotionSection className="relative overflow-hidden bg-[#072F2B]">
        <GradientMesh />
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <div className="relative mb-8 overflow-hidden rounded-[32px]">
              <Image src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1000&q=80" alt="Support team answering business technology questions" width={900} height={580} className="rounded-[32px] object-cover grayscale" />
              <div className="absolute inset-0 bg-[#072F2B]/30" />
              <PremiumBadge className="absolute bottom-5 left-5">Priority Support</PremiumBadge>
            </div>
            <SectionHeader dark label="FAQ" title="Frequently Asked Questions" text="Get clear answers about our consulting, development, automation, and support services." />
            <div className="mt-8 rounded-3xl border border-[#B7C95A]/25 bg-[#B7C95A]/10 p-6 text-white">
              <h3 className="text-xl font-black">Still have questions?</h3>
              <p className="mt-2 text-white/70">Contact our team for a focused consultation around your business goals.</p>
            </div>
          </div>
          <FAQAccordion items={faqs} />
        </Container>
      </MotionSection>

      <MotionSection className="bg-white">
        <Container>
          <SectionHeader align="center" label="Contact Info" title="Need a premium digital partner?" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { icon: MapPin, title: "Address", text: "Dhaka, Bangladesh" },
              { icon: Phone, title: "Phone", text: "+880 1700-000000" },
              { icon: Mail, title: "Email", text: "info@inovexa.com" }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="premium-card rounded-[28px] p-7 transition hover:-translate-y-2">
                  <Icon className="mb-4 h-7 w-7 text-[#134E4A]" />
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-2 text-[#6B7280]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="soft-section">
        <SectionPattern />
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="min-h-[520px] rounded-3xl bg-[#134E4A] p-8 text-white">
               <div className="relative grid h-full place-items-center overflow-hidden rounded-3xl border border-white/15 bg-[linear-gradient(135deg,#134E4A,#072F2B)] p-8 text-center hero-tech-pattern">
                <span className="absolute left-8 top-8 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold backdrop-blur">Office Hours: Sun-Thu, 10AM-7PM</span>
                <div>
                  <span className="relative mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full bg-[#B7C95A]/15">
                    <span className="absolute h-full w-full animate-ping rounded-full bg-[#B7C95A]/20" />
                    <MapPin className="relative h-10 w-10 text-[#B7C95A]" />
                  </span>
                  <h3 className="text-3xl font-black">Dhaka Office</h3>
                  <p className="mt-4 text-white/70">Map placeholder ready for future backend and location setup.</p>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </Container>
      </MotionSection>
    </>
  );
}



