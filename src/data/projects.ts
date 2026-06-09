import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "corporate-website-development",
    title: "Corporate Website Development",
    category: "Web Experience",
    summary: "A conversion-focused corporate website for a growing service company.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    challenge: "The client needed a credible online presence that could explain complex services and capture qualified leads.",
    solution: "We designed a structured website with service pages, strong content hierarchy, and lead-focused contact flows.",
    result: "The new site improved inquiry quality, strengthened trust signals, and created a scalable content foundation.",
    tech: ["Next.js", "Tailwind CSS", "CMS-ready data", "SEO metadata"]
  },
  {
    slug: "crm-management-platform",
    title: "CRM Management Platform",
    category: "CRM",
    summary: "A role-based CRM for sales tracking, follow-ups, and customer history.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    challenge: "Sales teams were using disconnected spreadsheets and losing visibility into customer follow-up.",
    solution: "We created a centralized CRM workflow with pipeline stages, reminders, and management reporting.",
    result: "Follow-up consistency improved and managers gained a clearer view of sales activity.",
    tech: ["React", "PostgreSQL-ready schema", "Role access", "Analytics"]
  },
  {
    slug: "erp-business-automation",
    title: "ERP Business Automation",
    category: "ERP",
    summary: "An ERP workflow for inventory, finance, approvals, and reporting.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80",
    challenge: "Manual approvals and scattered records slowed day-to-day operations.",
    solution: "We mapped key processes and built ERP modules around approvals, inventory, and financial records.",
    result: "Teams reduced duplicate entry and leadership gained faster access to operational metrics.",
    tech: ["ERP modules", "Dashboards", "Workflow automation", "Secure roles"]
  },
  {
    slug: "ecommerce-platform",
    title: "eCommerce Platform",
    category: "Commerce",
    summary: "A responsive commerce experience with product management readiness.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    challenge: "The business needed a smoother buying journey and easier product content management.",
    solution: "We planned a performant storefront, category flow, and order-ready architecture.",
    result: "The experience became easier to browse, manage, and extend into future integrations.",
    tech: ["Next.js", "Product catalog", "Checkout-ready UX", "Analytics"]
  },
  {
    slug: "visitor-management-system",
    title: "Visitor Management System",
    category: "Automation",
    summary: "A digital visitor check-in system for office security and reception.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    challenge: "Manual visitor logs created delays and made reporting difficult.",
    solution: "We designed a digital registration workflow with host notifications and searchable logs.",
    result: "Reception became faster, reporting improved, and visitor records became more reliable.",
    tech: ["Workflow design", "Notifications", "Reporting", "Access control"]
  },
  {
    slug: "data-reporting-dashboard",
    title: "Data Reporting Dashboard",
    category: "Analytics",
    summary: "An executive reporting dashboard for business performance tracking.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    challenge: "Leadership needed a single view of sales, operations, and service performance.",
    solution: "We consolidated metrics into visual dashboards with clear filters and export-ready reports.",
    result: "Decision-making became faster and performance conversations became more data-driven.",
    tech: ["Dashboards", "Data modeling", "KPI design", "Exports"]
  }
];
