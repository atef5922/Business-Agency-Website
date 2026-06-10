import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "@/app/globals.css";
import { FloatingActions } from "@/components/shared/FloatingActions";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Inovexa | Premium Technology Consulting",
    template: "%s | Inovexa"
  },
  description:
    "Inovexa is a premium technology consulting and digital transformation company helping businesses innovate, automate, and grow.",
  openGraph: {
    title: "Inovexa",
    description: "Innovate. Automate. Grow.",
    type: "website",
    locale: "en_US"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plusJakarta.variable} suppressHydrationWarning>
      <body className={plusJakarta.className} suppressHydrationWarning>
        <Navbar />
        {children}
        <FloatingActions />
        <Footer />
      </body>
    </html>
  );
}
