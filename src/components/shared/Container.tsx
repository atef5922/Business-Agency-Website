import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-[1440px] px-6 lg:px-10", className)}>{children}</div>;
}
