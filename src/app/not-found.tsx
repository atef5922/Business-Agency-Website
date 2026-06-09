import { PrimaryButton } from "@/components/shared/Buttons";

export default function NotFound() {
  return (
    <main className="grid min-h-[72vh] place-items-center bg-[#072F2B] px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:py-24">
      <div>
        <div className="mb-4 animate-pulse text-8xl font-black text-[#B7C95A] md:text-9xl">404</div>
        <h1 className="text-4xl font-black">Page Not Found</h1>
        <p className="mx-auto mt-4 max-w-xl leading-8 text-white/70">The page you are looking for may have moved, or the link needs a quick route check.</p>
        <PrimaryButton href="/" className="mt-8">
          Back To Home
        </PrimaryButton>
      </div>
    </main>
  );
}


