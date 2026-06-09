import { cn } from "@/lib/utils";

export function GradientMesh({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <span className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#B7C95A]/14 blur-3xl" />
      <span className="absolute right-[10%] top-24 h-96 w-96 rounded-full bg-[#A9BD49]/22 blur-3xl" />
      <span className="absolute bottom-0 left-[38%] h-72 w-72 rounded-full bg-[#F7F7F3]/16 blur-3xl" />
    </div>
  );
}

export function SectionPattern({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 opacity-[0.46]", className)}
      style={{
        backgroundImage:
          "linear-gradient(rgba(11,58,53,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(11,58,53,.06) 1px, transparent 1px), radial-gradient(circle at 15% 20%, rgba(19,78,74,.16), transparent 28%)",
        backgroundSize: "56px 56px, 56px 56px, 100% 100%"
      }}
    />
  );
}

export function FloatingShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <span className="floating-shape absolute right-[12%] top-32 h-28 w-28 rounded-full border border-[#B7C95A]/30 shadow-[0_0_60px_rgba(11,74,66,.12)]" />
      <span className="floating-shape absolute bottom-44 left-[8%] h-16 w-16 rounded-2xl border border-white/20 bg-[#B7C95A]/12 rotate-12" />
      <span className="floating-shape absolute right-[24%] bottom-24 grid h-12 w-12 place-items-center rounded-full border border-white/20">
        <span className="h-2 w-2 rounded-full bg-[#B7C95A]" />
      </span>
      <span className="absolute left-[4%] top-[18%] h-44 w-44 rounded-full border border-white/10" />
      <span className="absolute right-[4%] top-[42%] h-32 w-32 rounded-full border border-[#B7C95A]/20" />
    </div>
  );
}

export function GlowEffect({ className }: { className?: string }) {
  return <span aria-hidden="true" className={cn("pointer-events-none absolute rounded-full bg-[#B7C95A]/15 blur-3xl", className)} />;
}


