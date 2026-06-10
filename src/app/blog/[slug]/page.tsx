import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import { notFound } from "next/navigation";
import { BlogCard } from "@/components/cards/BlogCard";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PageHero } from "@/components/sections/PageHero";
import { blogs } from "@/data/blogs";

type Props = { params: Promise<{ slug: string }> };

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  return { title: post?.title ?? "Blog", description: post?.excerpt };
}

export default async function BlogDetailsPage({ params }: Props) {
  const { slug } = await params;
  const post = blogs.find((item) => item.slug === slug);
  if (!post) notFound();
  const related = blogs.filter((item) => item.slug !== post.slug);
  return (
    <main>
      <PageHero label={post.category} title={post.title} text={post.excerpt} />
      <article className="py-16 sm:py-20 lg:py-24">
        <Container className="max-w-4xl">
          <Image src={post.image} alt={post.title} width={1200} height={680} className="mb-10 h-[480px] w-full rounded-3xl object-cover" />
          <p className="mb-8 text-sm font-bold uppercase tracking-[0.18em] text-[#B7C95A]">{post.date}</p>
          <div className="grid gap-7 text-lg leading-9 text-[#6B7280]">{post.content.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
          <div className="mt-12 rounded-3xl bg-[#FFFFFF] p-7 card-shadow">
            <h2 className="text-2xl font-black">Author</h2>
            <p className="mt-3 leading-8 text-[#6B7280]">Inovexa strategy team shares practical insights from consulting, automation, and software delivery projects.</p>
            <div className="mt-5 flex gap-3">{[Facebook, Twitter, Linkedin].map((Icon, index) => <Link href="#" key={index} aria-label="Share post" className="grid h-10 w-10 place-items-center rounded-full bg-[#134E4A] text-white"><Icon className="h-4 w-4" /></Link>)}</div>
          </div>
        </Container>
      </article>
      <section className="bg-[#F7F7F3] py-16 sm:py-20 lg:py-24"><Container><SectionHeader label="Related Posts" title="More Insights" /><div className="mt-12 grid gap-6 md:grid-cols-2">{related.map((item) => <BlogCard key={item.slug} post={item} />)}</div></Container></section>
    </main>
  );
}

