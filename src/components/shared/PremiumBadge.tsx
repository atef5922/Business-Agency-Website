import type { ReactNode } from "react";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function PremiumBadge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 rounded-full border border-[#B7C95A]/35 bg-[#F7F7F3] px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.12em] text-[#072F2B] shadow-[0_10px_24px_rgba(11,18,32,.1)]", className)}>
      <Sparkles className="h-3.5 w-3.5" />
      {children}
    </span>
  );
}


