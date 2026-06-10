"use client";

import { Lightbulb, PenTool, Rocket, Search } from "lucide-react";
import { processSteps } from "@/data/process";
import { motion } from "framer-motion";

export function ProcessTimeline() {
  const icons = [Search, Lightbulb, PenTool, Rocket];
  const metrics = ["Clarity", "Governance", "Execution", "Momentum"];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-16 hidden h-px md:block">
        <div className="mx-auto h-full max-w-[1180px] bg-[linear-gradient(90deg,rgba(183,201,90,0),rgba(183,201,90,.45),rgba(183,201,90,0))]" />
      </div>
      <div className="relative grid gap-6 md:grid-cols-4">
      {processSteps.map((step, index) => (
        <motion.article
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.07 }}
          className="group relative flex flex-col rounded-[30px] border border-[#E5E7EB] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#B7C95A]/45"
        >
          <span className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#134E4A]/16 bg-[#134E4A] text-white">
            {(() => {
              const Icon = icons[index] ?? Search;
              return <Icon className="h-6 w-6" />;
            })()}
          </span>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.12em] text-[#134E4A]">
            <span className="inline-grid h-7 w-7 place-items-center rounded-full bg-[#F7F7F3] text-sm text-[#111827]">0{index + 1}</span>
            {metrics[index]}
          </span>
          <h3 className="mb-3 text-xl font-black">{step.title}</h3>
          <p className="leading-7 text-[#6B7280]">{step.description}</p>
          <div className="mt-6 flex items-center justify-between text-xs font-black uppercase tracking-[0.12em] text-[#111827]/60">
            <span>{metrics[index]}</span>
            <span>{Math.max(92 - index * 3, 75)}% readiness</span>
          </div>
          <span className="mt-2 block h-1.5 w-full rounded-full bg-[#E5E7EB]">
            <span
              className="block h-full rounded-full bg-[linear-gradient(90deg,#B7C95A,#A9BD49)]"
              style={{ width: `${88 - index * 7}%` }}
            />
          </span>
        </motion.article>
      ))}
      </div>
    </div>
  );
}


