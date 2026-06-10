import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  icon: LucideIcon;
  image: string;
  benefits: string[];
  features: string[];
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  image: string;
  challenge: string;
  solution: string;
  result: string;
  tech: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
  content: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  experienceYears?: number;
  expertise?: string[];
  linkedin?: string;
};
