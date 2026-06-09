import Link from "next/link";
import { Facebook, Linkedin, Mail, MapPin, Phone, Send, Sparkles, Twitter } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { GradientMesh } from "@/components/shared/VisualEffects";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#072F2B] text-white">
      <GradientMesh className="opacity-70" />
      <Container className="relative py-20">
        <div className="animated-border mb-16 grid gap-6 overflow-hidden rounded-[34px] border border-white/10 bg-[linear-gradient(135deg,rgba(7,59,50,.96),rgba(11,74,66,.82))] p-8 shadow-[0_30px_90px_rgba(7,59,50,.2)] md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#B7C95A]"><Sparkles className="h-4 w-4" /> Ready to Transform Your Business?</p>
            <h2 className="text-3xl font-black md:text-5xl">Let&apos;s build a smarter digital future together.</h2>
          </div>
          <Link href="/contact" className="shine rounded-full bg-[linear-gradient(135deg,#B7C95A,#A9BD49)] px-7 py-4 text-center text-sm font-extrabold text-[#111827] shadow-[0_16px_38px_rgba(7,47,43,.22)] transition duration-300 hover:-translate-y-1 hover:bg-[linear-gradient(135deg,#A9BD49,#B7C95A)]">Contact Us</Link>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <h3 className="mb-4 text-2xl font-black">Multitech Solution</h3>
            <p className="max-w-sm leading-8 text-white/70">Multitech Solution helps businesses grow through modern software, automation, consulting, and digital transformation services.</p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Twitter, Linkedin].map((Icon, index) => (
                <a key={index} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:-translate-y-1 hover:bg-[#B7C95A] hover:text-[#072F2B]" aria-label="Social profile">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-black">Quick Links</h4>
            {["About", "Services", "Projects", "Blog", "Team", "Contact"].map((item) => (
              <Link key={item} href={`/${item.toLowerCase()}`} className="mb-3 block text-white/70 transition hover:text-[#B7C95A]">{item}</Link>
            ))}
          </div>
          <div>
            <h4 className="mb-4 font-black">Services</h4>
            {services.slice(0, 5).map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="mb-3 block text-white/70 transition hover:text-[#B7C95A]">{service.title}</Link>
            ))}
          </div>
          <div>
            <h4 className="mb-4 font-black">Contact</h4>
            <p className="mb-3 flex gap-3 text-white/70"><MapPin className="mt-1 h-4 w-4 text-[#B7C95A]" /> Dhaka, Bangladesh</p>
            <p className="mb-3 flex gap-3 text-white/70"><Phone className="mt-1 h-4 w-4 text-[#B7C95A]" /> +880 1700-000000</p>
            <p className="mb-6 flex gap-3 text-white/70"><Mail className="mt-1 h-4 w-4 text-[#B7C95A]" /> info@multitechsolution.com</p>
            <form className="flex overflow-hidden rounded-full border border-white/10 bg-white">
              <input aria-label="Newsletter email" placeholder="Email address" className="min-w-0 flex-1 px-5 text-sm text-[#111827] outline-none" />
              <button aria-label="Subscribe" className="grid h-12 w-12 place-items-center bg-[linear-gradient(135deg,#B7C95A,#A9BD49)] text-[#111827] shadow-[0_14px_30px_rgba(7,47,43,.2)] transition hover:scale-105"><Send className="h-4 w-4" /></button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">Copyright 2026 Multitech Solution. All rights reserved.</div>
      </Container>
    </footer>
  );
}



