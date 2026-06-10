import Link from "next/link";
import { ArrowRight, Facebook, Linkedin, Mail, MapPin, Phone, Send, Twitter } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#072F2B] text-white">
      <div className="relative bg-[#F7F7F3] py-20">
        <Container className="relative mb-10 px-6 sm:px-8">
          <div className="grid gap-10 rounded-[28px] border border-[#E5E7EB] bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#B7C95A]">
                <span className="h-px w-8 bg-[#B7C95A]" /> Ready for enterprise-grade execution
              </p>
              <h2 className="text-balance text-3xl font-extrabold leading-tight tracking-[-0.02em] text-[#111827] sm:text-4xl">
                Build your next transformation roadmap with a partner that delivers with clarity and speed.
              </h2>
              <p className="mt-4 max-w-2xl text-[#6B7280]">
                Tell us your priorities and we will align a practical delivery plan with timeline, governance, and post-launch support.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[12px] bg-[#073B32] px-6 py-3 text-sm font-extrabold text-[#FFFFFF] transition duration-300 hover:-translate-y-1 hover:bg-[#0B4A42]"
                >
                  Get Consultation
                  <Send className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-[54px] items-center justify-center gap-2 rounded-[12px] border border-[#B7C95A] bg-white px-[28px] text-[15px] font-bold !text-[#111827] transition duration-300 ease-out hover:-translate-y-1 hover:border-[#B7C95A] hover:bg-[#F7F7F3] hover:!text-[#111827] hover:decoration-transparent"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4 !text-[#111827]" />
                </Link>
              </div>
            </div>
            <div className="rounded-[20px] border border-[#E5E7EB] bg-[#F8F9F7] p-7">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.14em] text-[#B7C95A]">Enterprise newsletter</p>
              <p className="mb-5 text-sm text-[#6B7280]">Receive monthly strategy notes, product insights, and implementation playbooks.</p>
              <form className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <label className="sr-only" htmlFor="newsletter-email">Email for newsletter</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your work email"
                  className="h-12 rounded-[14px] border border-[#D1D5DB] bg-white px-5 text-[#111827] outline-none placeholder:text-[#9CA3AF] focus:border-[#B7C95A] focus:ring-2 focus:ring-[#B7C95A]/30"
                />
                <button className="inline-flex items-center justify-center rounded-[12px] bg-[#B7C95A] px-5 py-3 text-sm font-black text-[#073B32] shadow-[0_12px_30px_rgba(183,201,90,.28)] transition duration-300 hover:-translate-y-1 hover:bg-[#9eb84f]"
                >
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
