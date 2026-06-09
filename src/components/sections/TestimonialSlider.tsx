"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonials } from "@/data/testimonials";

export function TestimonialSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);

  const updateSelected = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", updateSelected);
    updateSelected();
  }, [emblaApi, updateSelected]);

  useEffect(() => {
    if (!emblaApi || paused) return;
    const id = window.setInterval(() => emblaApi.scrollNext(), 4200);
    return () => window.clearInterval(id);
  }, [emblaApi, paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((item) => (
            <article key={item.name} className="premium-card relative min-w-0 flex-[0_0_100%] rounded-[34px] p-8 md:flex-[0_0_58%] lg:flex-[0_0_48%]">
              <Quote className="absolute right-8 top-8 h-12 w-12 text-[#134E4A]/10" />
              <span className="mb-5 inline-flex rounded-full bg-[#134E4A] px-4 py-2 text-xs font-black text-white">Digital Transformation Project</span>
              <div className="mb-6 flex gap-1 text-[#B7C95A]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-5 w-5 fill-current drop-shadow-sm" />)}</div>
              <p className="mb-8 text-xl font-semibold leading-9 text-[#111827]">&quot;{item.quote}&quot;</p>
              <div className="flex items-center gap-4">
                <Image src={item.image} alt={item.name} width={64} height={64} className="h-16 w-16 rounded-full object-cover" />
                <div>
                  <h3 className="font-black">{item.name}</h3>
                  <p className="text-sm text-[#6B7280]">{item.company}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-8 flex gap-3">
        <button aria-label="Previous testimonial" onClick={() => emblaApi?.scrollPrev()} className="grid h-12 w-12 place-items-center rounded-full border border-[#E5E7EB] bg-white text-[#134E4A]"><ArrowLeft className="h-5 w-5" /></button>
        <button aria-label="Next testimonial" onClick={() => emblaApi?.scrollNext()} className="grid h-12 w-12 place-items-center rounded-full bg-[#134E4A] text-white"><ArrowRight className="h-5 w-5" /></button>
        <div className="ml-3 flex items-center gap-2">{testimonials.map((item, index) => <button key={item.name} aria-label={`Go to testimonial ${index + 1}`} onClick={() => emblaApi?.scrollTo(index)} className={`h-2.5 rounded-full transition-all ${selected === index ? "w-8 bg-[#B7C95A]" : "w-2.5 bg-[#134E4A]/20"}`} />)}</div>
      </div>
    </div>
  );
}


