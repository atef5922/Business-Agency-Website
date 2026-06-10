"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Facebook, Instagram, Linkedin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { services } from "@/data/services";
import { TopBar } from "@/components/layout/TopBar";
import { BrandLogo } from "@/components/shared/BrandLogo";

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

const headerContainer = "w-full px-6 lg:px-10";
const headerColumns = "lg:grid-cols-[auto_minmax(0,1fr)_460px]";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/services") {
      return pathname.startsWith("/services");
    }
    if (href === "/projects") {
      return pathname.startsWith("/projects");
    }
    if (href === "/blog") {
      return pathname.startsWith("/blog");
    }
    return pathname === href;
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollTop =
          window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        setScrolled(scrollTop > 50);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
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
      <style jsx>{`
        @keyframes contactNowShine {
          0% {
            transform: translateX(-130%);
          }
          50% {
            transform: translateX(290%);
          }
          100% {
            transform: translateX(290%);
          }
        }
      `}</style>

      <div className="sticky top-0 z-[9990] overflow-x-clip bg-white">
        <div
          className={`overflow-hidden border-b border-[#E5E7EB] bg-white transition-all duration-300 ease-out ${
            scrolled
              ? "pointer-events-none h-0 max-h-0 opacity-0"
              : "h-[40px] max-h-[40px] opacity-100"
          }`}
        >
          <TopBar />
        </div>

        <header
          className={`border-b border-[#E5E7EB] bg-white transition-shadow duration-300 ${
            scrolled ? "shadow-[0_8px_32px_rgba(7,59,43,0.08)]" : "shadow-none"
          }`}
        >
          <div
            className={`${headerContainer} grid h-[72px] items-center lg:h-[72px] lg:grid ${headerColumns}`}
          >
            <Link href="/" className="relative z-20 flex h-full shrink-0 items-center" aria-label="Inovexa home">
              <BrandLogo />
            </Link>

            <nav className="hidden min-w-0 lg:flex lg:justify-self-center">
              <div className="flex h-full items-center gap-[28px]">
                {links.map((link) => {
                  const isServices = link.label === "Services";
                  const isActive = isActiveLink(link.href);

                  return (
                    <div key={link.href} className="group relative inline-flex items-center pb-[10px]">
                      <Link
                        href={link.href}
                        className={`relative inline-flex h-full min-w-0 items-center gap-1 whitespace-nowrap transition-colors duration-300 hover:text-[#073B32] ${
                          isActive ? "font-bold text-[#073B32]" : "font-semibold text-[#111827]"
                        }`}
                      >
                        {link.label}
                        {isServices ? <ChevronDown className="h-4 w-4 shrink-0" /> : null}
                        <span
                          className={`pointer-events-none absolute left-1/2 bottom-[-8px] h-[3px] w-[32px] -translate-x-1/2 rounded-full bg-[#B7C95A] transition-[transform,opacity] duration-200 ease-out ${
                            isActive
                              ? "scale-x-100 opacity-100"
                              : "scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100"
                          }`}
                        />
                      </Link>
                      {isServices ? (
                        <div className="pointer-events-none invisible absolute left-1/2 top-full z-30 min-w-[340px] -translate-x-1/2 pt-2 opacity-0 transition-all duration-300 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100">
                          <div className="rounded-xl border border-[#E5E7EB] bg-white py-2 shadow-[0_16px_48px_rgba(7,59,43,0.16)]">
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
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </nav>

            <div className="relative z-20 flex w-auto shrink-0 items-center justify-end gap-[20px] lg:w-auto">
              <a
                href="tel:+8801700000000"
                className="hidden min-w-0 items-center gap-[12px] bg-transparent p-0 xl:flex"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#B7C95A] text-[#073B32]">
                  <Phone className="h-6 w-6" />
                </span>
                <span className="min-w-0 leading-[1.2] whitespace-nowrap">
                  <span className="block text-[18px] font-[700] text-[#111827]">+880 1700-000000</span>
                </span>
              </a>

              <Link
                href="/contact"
                className="group hidden h-[56px] w-[190px] shrink-0 items-center justify-center gap-2 overflow-hidden rounded-[12px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,#073B32_0%,#0B4A42_100%)] bg-[length:100%_100%] text-[15px] font-bold leading-none tracking-[0.02em] text-white shadow-[0_10px_30px_rgba(7,59,50,0.22)] transition-all duration-300 lg:inline-flex hover:-translate-y-[2px] hover:bg-[linear-gradient(135deg,#0D574B_0%,#137062_100%)] hover:shadow-[0_16px_35px_rgba(7,59,50,0.28)] active:scale-[0.98]"
                aria-label="Contact now"
              >
                <span className="relative z-10 text-[#FFFFFF]">Contact Now</span>
                <span
                  className="relative z-10 inline-flex text-white transition-transform duration-300 group-hover:translate-x-[3px]"
                  aria-hidden="true"
                >
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span className="pointer-events-none absolute inset-[1px] rounded-[11px] border border-white/15" />
                <span className="pointer-events-none absolute inset-x-0 top-0 h-[38%] bg-gradient-to-b from-white/25 to-transparent opacity-60" />
                <span
                  className="pointer-events-none absolute inset-0 -z-10 rounded-[12px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.08)] to-transparent"
                  style={{
                    animation: "contactNowShine 2.5s linear infinite",
                    width: "45%"
                  }}
                />
              </Link>

              <button
                type="button"
                className="grid h-10 w-10 shrink-0 place-items-center text-[#111827] transition-colors duration-300 hover:text-[#073B32] lg:hidden"
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
        className={`fixed inset-0 z-[110] bg-black/45 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}
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
            <Link href="/" onClick={() => setOpen(false)} aria-label="Inovexa home">
              <BrandLogo />
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
                    className={`relative border-b border-[#E5E7EB] px-1 py-3 text-base transition-colors duration-300 ${isActiveLink(link.href) ? "border-l-2 border-l-[#B7C95A] bg-[rgba(183,201,90,0.12)] pl-4 text-[#073B32] font-bold" : "text-[#111827] font-semibold"} hover:text-[#073B32]`}
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
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#B7C95A] text-[#073B32]">
                <Phone className="h-5 w-5" />
              </span>
              <span className="leading-[1.2]">
                <span className="block text-[11px] font-bold tracking-[0.08em] text-[#073B32]">PHONE:</span>
                <span className="mt-0.5 block text-base font-extrabold text-[#111827]">+880 1700-000000</span>
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
            className="mt-auto inline-flex h-14 w-full items-center justify-center rounded-sm bg-[#073B32] text-sm font-bold transition-colors duration-300 hover:bg-[#0B3A35]"
            style={{ color: "#FFFFFF" }}
          >
            <span style={{ color: "#FFFFFF" }}>Contact Now</span>
          </Link>
        </aside>
      </div>
    </>
  );
}
