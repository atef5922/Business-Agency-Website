import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function PrimaryButton({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "shine group inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#B7C95A,#A9BD49)] px-8 py-3.5 text-sm font-black tracking-[-0.01em] text-[#073B32] shadow-[0_14px_38px_rgba(7,47,43,.2)] ring-1 ring-[#B7C95A]/30 transition duration-300 ease-out hover:-translate-y-1 hover:bg-[linear-gradient(135deg,#A9BD49,#B7C95A)] hover:shadow-[0_18px_50px_rgba(183,201,90,.24)]",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}

export function SecondaryButton({ href, children, className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/90 px-8 py-3.5 text-sm font-black tracking-[-0.01em] text-[#111827] shadow-[inset_0_1px_0_rgba(255,255,255,.2)] transition duration-300 ease-out hover:-translate-y-1 hover:border-[#B7C95A] hover:text-[#073B32]",
        className
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
    </Link>
  );
}


