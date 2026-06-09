"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export function LightAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <Accordion.Root type="single" collapsible defaultValue="item-0" className="grid gap-4">
      {items.map((item, index) => (
        <Accordion.Item key={item.question} value={`item-${index}`} className="premium-card overflow-hidden rounded-3xl data-[state=open]:border-[#B7C95A]">
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-black text-[#111827]">
              {item.question}
              <ChevronDown className="h-5 w-5 shrink-0 text-[#072F2B] transition group-data-[state=open]:rotate-180" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="px-6 pb-5 leading-7 text-[#6B7280]">
            {item.answer}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}


