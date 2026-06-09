"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Rocket, Search } from "lucide-react";
import { processSteps } from "@/data/process";

export function ProcessTimeline() {
  const icons = [Search, Lightbulb, PenTool, Rocket];
  return (
    <div className="relative grid gap-6 md:grid-cols-4">
      <span aria-hidden="true" className="absolute left-0 right-0 top-10 hidden h-px bg-[linear-gradient(90deg,transparent,#B7C95A,transparent)] md:block" />
      {processSteps.map((step, index) => (
        <motion.article
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ delay: index * 0.08 }}
          className="premium-card group relative rounded-[30px] p-7 transition duration-300 hover:-translate-y-2"
        >
          <span className="mb-6 grid h-20 w-20 place-items-center rounded-full border-8 border-[#F7F7F3] bg-[#134E4A] text-sm font-black text-[#B7C95A] shadow-[0_16px_38px_rgba(7,47,43,.22)]">
            {(() => {
              const Icon = icons[index] ?? Search;
              return <Icon className="h-7 w-7" />;
            })()}
          </span>
          <span className="absolute right-6 top-6 text-5xl font-black text-[#134E4A]/10">0{index + 1}</span>
          <h3 className="mb-3 text-xl font-black">{step.title}</h3>
          <p className="leading-7 text-[#6B7280]">{step.description}</p>
        </motion.article>
      ))}
    </div>
  );
}


