"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function LightAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible defaultValue="item-0" className="grid gap-4">
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="overflow-hidden rounded-3xl border border-[#E5E7EB] bg-[#F7F7F3] data-[state=open]:border-[#B7C95A] data-[state=open]:bg-white"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-start justify-between gap-4 px-6 py-5 text-left">
              <div className="min-w-0">
                <span className="mb-1 inline-flex items-center gap-2 text-sm font-black tracking-[0.06em] text-[#111827]">
                  <span className="inline-grid h-8 w-8 place-items-center rounded-full border border-[#B7C95A]/45 bg-[#072F2B] text-xs font-black text-[#B7C95A]">0{index + 1}</span>
                  {item.question}
                </span>
                <span className="text-xs text-[#6B7280]">
                  {index === 0 ? "Strategic clarity and discovery depth" : index === 1 ? "Transparent scoping and milestones" : index === 2 ? "Scalable design and secure architecture" : "Continuous support and optimization"}
                </span>
              </div>
              <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[#072F2B] transition duration-300 group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden px-6 pb-6 pt-1 leading-7 text-[#6B7280]">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-4 text-sm leading-7">
              {item.answer}
            </div>
            <div className="mt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#111827]/55">
              <span className="h-px w-4 bg-[#B7C95A]" />
              <span>Verified, measurable, repeatable</span>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
