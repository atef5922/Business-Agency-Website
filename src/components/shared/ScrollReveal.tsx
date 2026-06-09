"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

export function ScrollReveal({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.58, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
