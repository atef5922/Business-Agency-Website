import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { GradientMesh } from "@/components/shared/VisualEffects";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#072F2B] text-white">
      <div className="relative bg-[linear-gradient(135deg,rgba(11,58,53,.96),rgba(7,47,43,.98))]">
        <GradientMesh />
        <Container className="relative mb-10 px-6 py-14 sm:py-16 lg:pb-24 lg:pt-14">
          <div className="grid gap-10 rounded-[24px] border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.03)] p-7 backdrop-blur-[10px] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_25px_60px_rgba(0,0,0,0.22)] sm:p-10 lg:grid-cols-[1.15fr_0.85fr] lg:p-12">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#B7C95A]">
                <span className="h-px w-8 bg-[#B7C95A]" /> Ready for enterprise-grade execution
              </p>
              <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.02em] sm:text-4xl">
                Build your next transformation roadmap with a partner that delivers with clarity and speed.
              </h2>
              <p className="mt-4 max-w-2xl text-white/75">
                Tell us your priorities and we will align a practical delivery plan with timeline, governance, and post-launch support.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="shine inline-flex items-center justify-center rounded-full bg-[#B7C95A] px-6 py-3 text-sm font-extrabold text-[#072F2B] shadow-[0_20px_46px_rgba(183,201,90,.35)] transition duration-300 hover:-translate-y-1 hover:bg-[#A9BD49] relative overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.34),transparent)] before:translate-x-[-140%] before:transition-transform before:duration-700 before:opacity-0 hover:before:translate-x-[140%] hover:before:opacity-70"
                >
                  Get Consultation
                  <Send className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="shine inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-extrabold text-white shadow-[0_14px_30px_rgba(255,255,255,0.10)] transition duration-300 hover:-translate-y-1 hover:border-[#B7C95A] hover:bg-white/15 relative overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.34),transparent)] before:translate-x-[-140%] before:transition-transform before:duration-700 before:opacity-0 hover:before:translate-x-[140%] hover:before:opacity-70"
                >
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="rounded-[18px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.05)] p-6 backdrop-blur">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-[#B7C95A]">Enterprise newsletter</p>
              <p className="mb-5 text-sm text-white/75">Receive monthly strategy notes, product insights, and implementation playbooks.</p>
              <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="sr-only" htmlFor="newsletter-email">Email for newsletter</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your work email"
                  className="h-12 rounded-full border border-white/20 bg-white/12 px-5 text-white outline-none placeholder:text-white/55 focus:border-[#B7C95A] focus:ring-2 focus:ring-[#B7C95A]/30"
                />
                <button className="shine inline-flex items-center justify-center rounded-full bg-[#B7C95A] px-5 py-3 font-black text-[#072F2B] shadow-[0_16px_34px_rgba(183,201,90,.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#A9BD49] relative overflow-hidden before:absolute before:inset-0 before:-z-10 before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.34),transparent)] before:translate-x-[-140%] before:transition-transform before:duration-700 before:opacity-0 hover:before:translate-x-[140%] hover:before:opacity-70">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
      <Container className="relative py-16">
        <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-4">
              <BrandLogo variant="footer" />
            </div>
            <p className="max-w-sm leading-8 text-white/70">Inovexa helps businesses grow through modern software, automation, consulting, and digital transformation services.</p>
            <p className="mt-3 text-sm font-semibold tracking-[0.06em] text-[#B7C95A]">Innovate. Automate. Grow.</p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-[#B7C95A] hover:text-[#072F2B]"
                  aria-label="Social profile"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-extrabold">Quick Links</h4>
            {["About", "Services", "Projects", "Blog", "Team", "Contact"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="mb-3 block text-white/70 transition hover:text-[#B7C95A]"
              >
                {item}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="mb-4 font-extrabold">Services</h4>
            {services.slice(0, 5).map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="mb-3 block text-white/70 transition hover:text-[#B7C95A]"
              >
                {service.title}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="mb-4 font-extrabold">Contact</h4>
            <p className="mb-3 flex gap-3 text-white/70">
              <MapPin className="mt-1 h-4 w-4 text-[#B7C95A]" /> Dhaka, Bangladesh
            </p>
            <p className="mb-3 flex gap-3 text-white/70">
              <Phone className="mt-1 h-4 w-4 text-[#B7C95A]" /> +880 1700-000000
            </p>
            <p className="mb-6 flex gap-3 text-white/70">
              <Mail className="mt-1 h-4 w-4 text-[#B7C95A]" /> info@inovexa.com
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-flex rounded-full bg-[#B7C95A] px-5 py-3 text-sm font-extrabold text-[#072F2B] transition hover:-translate-y-1"
            >
              Contact Us
              <Send className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          <p>Copyright 2026 Inovexa. All rights reserved.</p>
          <p className="mt-2 text-xs text-white/45">A trusted digital transformation partner for growth-stage and enterprise organizations.</p>
        </div>
      </Container>
    </footer>
  );
}
