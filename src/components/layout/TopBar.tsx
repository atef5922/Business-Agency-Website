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

const headerContainer = "w-full px-6 lg:px-10";
const headerColumns = "lg:grid-cols-[auto_minmax(0,1fr)_460px]";

export function TopBar() {
  return (
    <div className="h-[40px] bg-white">
      <div className={`${headerContainer} h-[40px]`}>
        <div className={`grid h-[40px] grid-cols-1 items-stretch ${headerColumns}`}>
          <div className="flex min-w-0 items-center gap-3 text-[13px] sm:gap-4">
            <a
              className="inline-flex min-w-0 items-center gap-1.5 font-medium text-[#111827] transition-colors hover:text-[#073B32]"
              href="mailto:info@inovexa.com"
            >
              <Mail className="h-[14px] w-[14px] shrink-0 text-[#073B32]" />
              <span className="truncate">info@inovexa.com</span>
            </a>

            <span className="hidden h-3.5 w-px shrink-0 bg-[#E5E7EB] sm:block" />

            <span className="hidden items-center gap-1.5 font-medium text-[#111827] sm:inline-flex">
              <MapPin className="h-[14px] w-[14px] shrink-0 text-[#073B32]" />
              <span className="whitespace-nowrap">Dhaka, Bangladesh</span>
            </span>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />

          <div className="hidden h-[40px] w-full max-w-[460px] items-center justify-center gap-[22px] bg-[#B7C95A] text-[13px] font-semibold text-[#111827] lg:flex">
            {quickLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="whitespace-nowrap text-[#111827] transition-colors duration-300 hover:text-[#0B3A35]"
              >
                {item.label}
              </Link>
            ))}
            <span className="h-3.5 w-px shrink-0 bg-[#073B32]/20" />
            {quickIcons.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-[#111827] transition-colors duration-300 hover:text-[#0B3A35]"
              >
                <Icon className="h-[14px] w-[14px]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
