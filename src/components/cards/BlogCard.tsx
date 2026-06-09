import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/types/content";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group premium-card block overflow-hidden rounded-[30px] transition duration-500 hover:-translate-y-2">
      <div className="relative h-64 overflow-hidden">
        <Image src={post.image} alt={post.title} fill className="object-cover transition duration-700 group-hover:scale-110" sizes="(max-width: 768px) 100vw, 33vw" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(11,18,32,.45))] opacity-0 transition group-hover:opacity-100" />
        <span className="absolute left-5 top-5 rounded-full bg-[#F7F7F3] px-4 py-2 text-xs font-black text-[#072F2B] shadow-lg">{post.category}</span>
      </div>
      <div className="p-7">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold text-[#6B7280]">
          <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> {post.date}</span>
        </div>
        <h3 className="mb-3 text-xl font-black text-[#111827]">{post.title}</h3>
        <p className="mb-5 leading-7 text-[#6B7280]">{post.excerpt}</p>
        <span className="inline-flex items-center gap-2 text-sm font-extrabold text-[#134E4A]">Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}



