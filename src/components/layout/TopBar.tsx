import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, MapPin, X } from "lucide-react";

const quickLinks = [
  { label: "About", href: "/about" },
  { label: "FAQs", href: "/#faq" },
  { label: "Contact", href: "/contact" }
];

const quickIcons = [
  { Icon: Facebook, href: "#", label: "Facebook" },
  { Icon: Instagram, href: "#", label: "Instagram" },
  { Icon: X, href: "#", label: "X" },
  { Icon: Linkedin, href: "#", label: "LinkedIn" }
];

export function TopBar() {
  return (
    <div className="border-b border-[#E5E7EB] bg-white">
      <div className="mx-auto flex h-[48px] max-w-[1440px] items-stretch justify-between px-6 lg:px-10">
        <div className="flex min-w-0 items-center gap-3 text-sm sm:gap-4">
          <a
            className="inline-flex min-w-0 items-center gap-1.5 font-medium text-[#111827] transition-colors hover:text-[#073B32]"
            href="mailto:info@multitechsolution.com"
          >
            <Mail className="h-4 w-4 shrink-0 text-[#073B32]" />
            <span className="truncate">info@multitechsolution.com</span>
          </a>

          <span className="hidden h-4 w-px shrink-0 bg-[#E5E7EB] sm:block" />

          <span className="hidden items-center gap-1.5 font-medium text-[#111827] sm:inline-flex">
            <MapPin className="h-4 w-4 shrink-0 text-[#073B32]" />
            <span className="whitespace-nowrap">Dhaka, Bangladesh</span>
          </span>
        </div>

        <div className="hidden h-[48px] w-[440px] shrink-0 items-center justify-center gap-5 bg-[#B7C95A] px-5 text-sm font-semibold text-[#111827] lg:flex xl:w-[460px]">
          {quickLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap text-[#111827] transition-colors duration-300 hover:text-[#0B3A35]"
            >
              {item.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-[#073B32]/20" />
          {quickIcons.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-[#111827] transition-colors duration-300 hover:text-[#0B3A35]"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
