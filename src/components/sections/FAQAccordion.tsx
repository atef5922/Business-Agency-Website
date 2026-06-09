"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";

export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible className="grid gap-4">
      {items.map((item, index) => (
        <Accordion.Item key={item.question} value={`item-${index}`} className="glass-panel overflow-hidden rounded-3xl data-[state=open]:border-[#B7C95A]/40">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-black text-white">
              {item.question}
              <Plus className="h-5 w-5 shrink-0 text-[#B7C95A] transition group-data-[state=open]:hidden" />
              <Minus className="hidden h-5 w-5 shrink-0 text-[#B7C95A] transition group-data-[state=open]:block" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden px-6 pb-5 leading-7 text-white/70 data-[state=closed]:animate-none">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}


