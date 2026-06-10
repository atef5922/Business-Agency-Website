"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="grid gap-[14px]">
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="overflow-hidden rounded-[14px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.06)] p-0 transition data-[state=open]:border-[#B7C95A] data-[state=open]:bg-[rgba(255,255,255,0.10)]"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-[18px] text-left text-[15px] font-bold leading-[1.4] text-white transition">
              <span>{item.question}</span>
              <Plus className="h-[18px] w-[18px] shrink-0 text-[#B7C95A] transition group-data-[state=open]:rotate-45" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden px-5 pb-5 pt-0 text-[14px] leading-[1.7] text-[rgba(255,255,255,0.72)] transition-[max-height,opacity] duration-300 data-[state=closed]:opacity-0 data-[state=open]:opacity-100">
            <div className="pt-[12px]">{item.answer}</div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}


