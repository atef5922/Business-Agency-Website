import { Container } from "@/components/shared/Container";

export function PageHero({ title, text, label }: { title: string; text: string; label: string }) {
  return (
    <section className="relative overflow-hidden bg-[#072F2B] py-16 text-white sm:py-20 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(183,201,90,.22),transparent_24%),radial-gradient(circle_at_80%_28%,rgba(169,189,73,.2),transparent_27%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,47,43,.8),rgba(6,31,29,.85))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(7,47,43,.65)_0%,rgba(6,31,29,.82)_36%,rgba(6,31,29,.9)_100%)]" />
      </div>
      <Container className="relative">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#B7C95A]">{label}</p>
        <h1 className="max-w-4xl text-balance text-4xl font-black leading-tight md:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{text}</p>
      </Container>
    </section>
  );
}


