import type { Metadata } from "next";
import "@/app/globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CustomCursorGlow } from "@/components/shared/CustomCursorGlow";

export const metadata: Metadata = {
  title: {
    default: "Multitech Solution | Business Technology Consulting",
    template: "%s | Multitech Solution"
  },
  description: "Multitech Solution helps Bangladeshi businesses grow with software, automation, consulting, cloud, ERP, CRM, and analytics solutions.",
  openGraph: {
    title: "Multitech Solution",
    description: "Transforming Businesses Through Technology, Innovation & Growth.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <CustomCursorGlow />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
