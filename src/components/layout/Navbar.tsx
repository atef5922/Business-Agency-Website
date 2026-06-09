"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Facebook, Instagram, Linkedin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/data/services";
import { TopBar } from "@/components/layout/TopBar";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" }
];

const quickSocial = [
  { href: "#", Icon: Facebook, label: "Facebook" },
  { href: "#", Icon: Instagram, label: "Instagram" },
  { href: "#", Icon: X, label: "X" },
  { href: "#", Icon: Linkedin, label: "LinkedIn" }
];

const quickLinks = [
  { href: "/about", label: "About" },
  { href: "/#faq", label: "FAQs" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_32px_rgba(7,59,43,0.08)]" : ""}`}
      >
        <TopBar />

        <header className="border-b border-[#E5E7EB] bg-white">
          <div className="mx-auto grid h-[88px] max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-6 lg:grid-cols-[250px_1fr_auto] lg:gap-6 lg:px-10">
            <Link
              href="/"
              className="inline-flex w-[250px] max-w-[50vw] items-center gap-3"
              aria-label="Multitech Solution home"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-[#073B32] text-[15px] font-black tracking-wide text-white">
                MS
              </span>
              <span className="text-xl font-black leading-none text-[#073B32]">Multitech Solution</span>
            </Link>

            <nav className="hidden justify-center lg:flex">
              <div className="flex items-center gap-8 xl:gap-9">
                {links.map((link) => {
                  const isServices = link.label === "Services";
                  const isActive = pathname === link.href;

                  return (
                    <div key={link.href} className="group relative">
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1 whitespace-nowrap border-b-2 border-transparent py-1 text-[15px] font-semibold leading-none text-[#111827] transition-colors duration-300 ${
                          isActive ? "border-[#B7C95A] text-[#073B32]" : "hover:border-[#B7C95A] hover:text-[#073B32]"
                        }`}
                      >
                        {link.label}
                        {isServices ? <ChevronDown className="h-4 w-4 shrink-0" /> : null}
                      </Link>

                      {isServices ? (
                        <div className="pointer-events-none invisible absolute left-1/2 top-full z-30 min-w-[340px] -translate-x-1/2 -translate-y-1 rounded-xl border border-[#E5E7EB] bg-white py-2 opacity-0 shadow-[0_16px_48px_rgba(7,59,43,0.16)] transition-all duration-300 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                          <div className="px-2">
                            {services.slice(0, 6).map((service) => {
                              const Icon = service.icon;
                              return (
                                <Link
                                  key={service.slug}
                                  href={`/services/${service.slug}`}
                                  className="group/item flex items-start gap-3 rounded-lg px-4 py-3 text-sm text-[#111827] transition hover:bg-[#F7F7F3] hover:text-[#073B32]"
                                  onClick={() => setOpen(false)}
                                >
                                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md bg-[#F7F7F3] text-[#073B32]">
                                    <Icon className="h-4 w-4" />
                                  </span>
                                  <span className="space-y-0.5">
                                    <b className="block leading-tight">{service.title}</b>
                                    <span className="block text-xs leading-5 text-[#6B7280]">{service.summary}</span>
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </nav>

            <div className="flex w-auto items-center justify-end gap-5 lg:w-[440px] xl:gap-6 xl:w-[460px]">
              <a
                href="tel:+8801700000000"
                className="group hidden items-center gap-3 bg-transparent p-0 xl:flex"
              >
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#B7C95A] text-[#073B32]">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="leading-[1.2]">
                  <span className="block text-xs font-semibold tracking-[0.08em] text-[#073B32]">PHONE:</span>
                  <span className="mt-0.5 block text-lg font-bold text-[#111827]">+880 1700-000000</span>
                </span>
              </a>

              <Link
                href="/contact"
                className="hidden h-14 w-[180px] items-center justify-center rounded-none bg-[#073B32] text-sm font-bold text-white transition-colors duration-300 hover:bg-[#0B3A35] lg:inline-flex"
              >
                Contact Now
              </Link>

              <button
                type="button"
                className="grid h-11 w-11 place-items-center text-[#111827] transition-colors duration-300 hover:text-[#073B32] lg:hidden"
                aria-label="Open menu"
                onClick={() => setOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </header>
      </div>

      <div
        className={`fixed inset-0 z-[60] bg-black/45 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <button
          type="button"
          aria-label="Close drawer"
          className="absolute inset-0 h-full w-full"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`ml-auto flex h-full w-[86%] max-w-sm transform flex-col bg-white p-6 text-[#111827] shadow-2xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="mb-8 flex items-center justify-between">
            <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-2 text-[#073B32]">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-[#073B32] text-xs font-black text-white">MS</span>
              <span className="font-black">Multitech Solution</span>
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center text-[#073B32]"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="grid gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-[#E5E7EB] px-1 py-3 text-base font-semibold text-[#111827] transition-colors duration-300 hover:text-[#073B32]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 space-y-6 border-t border-[#E5E7EB] pt-6">
            <p className="text-xs font-semibold tracking-[0.08em] text-[#6B7280]">QUICK LINKS</p>
            <div className="grid gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-semibold text-[#111827] transition-colors duration-300 hover:text-[#073B32]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <a href="tel:+8801700000000" className="inline-flex items-center gap-3 bg-transparent p-0">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#B7C95A] text-[#073B32]">
                <Phone className="h-5 w-5" />
              </span>
              <span className="leading-[1.2]">
                <span className="block text-xs font-semibold tracking-[0.08em] text-[#073B32]">PHONE:</span>
                <span className="mt-0.5 block text-lg font-bold text-[#111827]">+880 1700-000000</span>
              </span>
            </a>

            <div className="flex items-center gap-4">
              {quickSocial.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="text-[#073B32] transition-colors duration-300 hover:text-[#0B3A35]"
                  onClick={() => setOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex h-14 w-full items-center justify-center rounded-none bg-[#073B32] text-sm font-bold text-white transition-colors duration-300 hover:bg-[#0B3A35]"
          >
            Contact Now
          </Link>
        </aside>
      </div>
    </>
  );
}
