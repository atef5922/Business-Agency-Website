"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/shared/Container";
import Link from "next/link";
import Image from "next/image";

type HeroSlide = {
  src: string;
  alt: string;
};

type PageHeroProps = {
  title: string;
  text: string;
  label: string;
};

const heroSlides: HeroSlide[] = [
  { src: "/images/hero/hero-1.jpg", alt: "Business meeting with a professional team discussing growth plans" },
  { src: "/images/hero/hero-2.jpg", alt: "Corporate strategy discussion with executives reviewing plans" },
  { src: "/images/hero/hero-3.jpg", alt: "Professional team collaboration in a corporate office setting" },
];

const heroSquares = [
  { size: 40, right: "7%", top: "16%" },
  { size: 60, right: "14%", top: "36%" },
  { size: 80, right: "9%", top: "58%" },
];

export function PageHero({ title: _title, text: _text, label: _label }: PageHeroProps) {
  const localSlides = useMemo<HeroSlide[]>(() => heroSlides, []);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % localSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [localSlides.length]);

  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#073B32] lg:min-h-[640px] xl:min-h-[720px]">
      <div className="absolute inset-0" aria-hidden>
        {localSlides.map((slide, index) => (
          <div key={`hero-bg-${index}`} className="absolute inset-0 transition-opacity duration-[1200ms] z-0">
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              className="object-cover object-center"
              style={{
                opacity: activeIndex === index ? 1 : 0,
                filter: "grayscale(100%) contrast(1.08) brightness(0.95)",
                transition: "opacity 1200ms ease",
              }}
            />
          </div>
        ))}

        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex: 10,
            background:
              "linear-gradient(90deg, rgba(7,47,43,0.78) 0%, rgba(7,47,43,0.68) 35%, rgba(7,47,43,0.42) 65%, rgba(7,47,43,0.18) 100%)",
          }}
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-5"
          style={{
            zIndex: 20,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "120px 120px, 120px 120px",
          }}
        />

        <div className="pointer-events-none absolute inset-0" style={{ zIndex: 30 }}>
          {heroSquares.map((square, index) => (
            <span
              key={`${square.size}-${index}`}
              className="absolute"
              style={{
                width: `${square.size}px`,
                height: `${square.size}px`,
                right: square.right,
                top: square.top,
                background: "rgba(255,255,255,0.06)",
              }}
            />
          ))}
        </div>
      </div>

      <Container className="relative mx-auto flex min-h-[560px] max-w-[1200px] items-center px-6 py-16 lg:min-h-[620px] xl:min-h-[720px] lg:px-8" style={{ zIndex: 40 }}>
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_320px]">
          <div className="max-w-[620px]">
            <p className="mb-4 inline-flex items-center gap-3 text-[13px] font-extrabold uppercase tracking-[0.08em] text-[#B7C95A]">
              <span className="h-px w-8 bg-[#B7C95A]" />
              GROWTH, INNOVATION, AND SUCCESS
            </p>
            <h1 className="text-[44px] font-black leading-[1.05] tracking-[-0.04em] text-white lg:text-[72px]">
              <span className="block font-black">Transforming</span>
              <span className="block font-normal">Business Growth</span>
              <span className="block font-black">Drive Success</span>
            </h1>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex h-[56px] items-center rounded-[2px] bg-[#B7C95A] px-[34px] py-[18px] text-[1rem] font-bold text-[#111827]"
              >
                Free Consultation
              </Link>
            </div>
          </div>

          <aside className="justify-self-end hidden max-w-[260px] self-end font-bold leading-[1.5] text-white lg:block">
            Take your brand to new heights
            <br />
            Agency offering everything
            <br />
            from strategy business.
          </aside>
        </div>
      </Container>
    </section>
  );
}
