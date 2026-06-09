import type { Metadata } from "next";
import { Search } from "lucide-react";
import { BlogCard } from "@/components/cards/BlogCard";
import { Container } from "@/components/shared/Container";
import { PrimaryButton } from "@/components/shared/Buttons";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PageHero } from "@/components/sections/PageHero";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Blog",
  description: "Read Multitech Solution insights on digital transformation, automation, custom software, and business technology growth."
};

export default function BlogPage() {
  const categories = ["All", ...Array.from(new Set(blogs.map((post) => post.category)))];
  return (
    <main>
      <PageHero label="Blog" title="Insights For Smarter Digital Business Decisions" text="Practical articles on transformation, automation, software systems, and technology-led growth." />
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="mb-10 grid gap-5 rounded-3xl bg-white p-5 card-shadow md:grid-cols-[1fr_auto]">
            <label className="relative">
              <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-[#6B7280]" />
              <input aria-label="Search blog posts" placeholder="Search insights" className="w-full rounded-full border border-[#E5E7EB] bg-[#FFFFFF] py-4 pl-14 pr-5 outline-none focus:border-[#B7C95A]" />
            </label>
            <div className="flex flex-wrap gap-3">{categories.map((item) => <button key={item} className="rounded-full border border-[#E5E7EB] bg-[#FFFFFF] px-5 py-2 text-sm font-bold text-[#134E4A]">{item}</button>)}</div>
          </div>
          <SectionHeader label="Latest Articles" title="Our News & Blogs" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">{blogs.map((post) => <BlogCard key={post.slug} post={post} />)}</div>
        </Container>
      </section>
      <section className="bg-[#134E4A] py-16 sm:py-20 text-white lg:py-24"><Container className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center"><div><h2 className="text-4xl font-black">Get business technology insights in your inbox.</h2><p className="mt-4 text-white/70">Monthly ideas for automation, growth, and digital operations.</p></div><PrimaryButton href="/contact">Subscribe</PrimaryButton></Container></section>
    </main>
  );
}



