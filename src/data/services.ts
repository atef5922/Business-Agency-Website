import { BarChart3, Bot, BriefcaseBusiness, Cloud, Code2, DatabaseZap, LineChart, Smartphone } from "lucide-react";
import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    slug: "business-consulting",
    title: "Business Consulting",
    summary: "Strategic technology roadmaps for growth-focused organizations.",
    description: "We align operations, customer journeys, and technology investment so your business can scale with confidence.",
    icon: BriefcaseBusiness,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Clear digital priorities", "Reduced operational waste", "Measurable growth roadmap"],
    features: ["Digital maturity audit", "Process mapping", "KPI planning", "Implementation advisory"]
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    summary: "Secure web platforms built around your real workflows.",
    description: "From internal systems to customer portals, we design and develop maintainable software that fits how your team works.",
    icon: Code2,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Workflow-fit functionality", "Modern architecture", "Long-term maintainability"],
    features: ["Product discovery", "UX and UI design", "API-ready architecture", "Quality assurance"]
  },
  {
    slug: "web-application-development",
    title: "Web Application Development",
    summary: "Fast, responsive, SEO-ready applications for modern teams.",
    description: "We build high-performing web applications that support sales, operations, reporting, and service delivery.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Better online conversion", "Responsive user experience", "Scalable codebase"],
    features: ["Next.js applications", "Dashboards", "Customer portals", "Analytics integration"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    summary: "Customer and workforce apps with practical business value.",
    description: "We turn field workflows, customer services, and operational needs into polished mobile experiences.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Better customer access", "Field team productivity", "Mobile-first operations"],
    features: ["App strategy", "Interface design", "API integration", "Release support"]
  },
  {
    slug: "erp-crm-solutions",
    title: "ERP & CRM Solutions",
    summary: "Integrated systems for sales, inventory, finance, and teams.",
    description: "We help companies centralize data and daily processes through practical ERP and CRM implementation.",
    icon: DatabaseZap,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Unified business data", "Improved reporting", "Stronger customer follow-up"],
    features: ["CRM modules", "ERP planning", "Role-based access", "Management reports"]
  },
  {
    slug: "business-automation",
    title: "Business Automation",
    summary: "Automate repetitive tasks and reduce manual dependency.",
    description: "We simplify approvals, reporting, notifications, and team coordination with reliable automation systems.",
    icon: Bot,
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Faster operations", "Lower human error", "Consistent service delivery"],
    features: ["Workflow automation", "Notification flows", "Document routing", "Approval systems"]
  },
  {
    slug: "cloud-solutions",
    title: "Cloud Solutions",
    summary: "Cloud-ready infrastructure for secure business continuity.",
    description: "We plan, migrate, and support cloud systems that are reliable, secure, and ready for growth.",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Flexible infrastructure", "Improved uptime", "Secure access"],
    features: ["Cloud planning", "Migration support", "Backup strategy", "Monitoring"]
  },
  {
    slug: "ai-data-analytics",
    title: "AI & Data Analytics",
    summary: "Turn business data into sharper decisions and automation.",
    description: "We create dashboards, reporting systems, and AI-assisted workflows that make information easier to act on.",
    icon: BarChart3,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    benefits: ["Decision-ready insights", "Improved forecasting", "Data-driven management"],
    features: ["Executive dashboards", "Data pipelines", "AI workflow support", "Performance reporting"]
  }
];
