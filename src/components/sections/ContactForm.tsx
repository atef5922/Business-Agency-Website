"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(6, "Phone number is required"),
  service: z.string().min(1, "Select a service"),
  message: z.string().min(10, "Message should be at least 10 characters")
});

type ContactValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactValues>({ resolver: zodResolver(contactSchema) });

  async function onSubmit() {
    setSuccess(false);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSuccess(true);
    reset();
  }

  const field = "h-12 w-full rounded-[12px] border border-[#E5E7EB] bg-white/90 px-5 text-sm text-[#111827] outline-none transition focus:border-[#B7C95A] focus:ring-2 focus:ring-[#B7C95A]/22";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="h-full rounded-[28px] border border-[#E5E7EB] bg-white p-6 shadow-[0_22px_55px_rgba(7,47,43,0.10)] md:p-8" noValidate>
      <p className="mb-2 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#B7C95A]"><span className="h-px w-8 bg-[#B7C95A]" /> Secure Consultation</p>
      <h2 className="mb-2 text-3xl font-black">Fill Up The Form</h2>
      <p className="mb-6 text-sm text-[#6B7280]">We usually respond within one business day with a tailored execution plan.</p>
      <div className="mb-6 rounded-[22px] border border-[#B7C95A]/20 bg-[#F7F7F3] p-4">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#072F2B]">Consultation standards</p>
        <ul className="mt-3 grid gap-2 text-xs text-[#6B7280]">
          <li>&#8226; Initial call: within 24 hours</li>
          <li>&#8226; Discovery notes: shared within 2 business days</li>
          <li>&#8226; Project roadmap: drafted in week one</li>
        </ul>
      </div>
      <div className="mt-2 grid gap-5">
        <label>
          <span className="mb-2 block text-sm font-bold">Full Name</span>
          <input className={field} {...register("name")} />
          {errors.name ? <span className="mt-2 block text-sm text-red-600">{errors.name.message}</span> : null}
        </label>
        <div className="grid gap-5 md:grid-cols-2">
          <label>
            <span className="mb-2 block text-sm font-bold">Email Address</span>
            <input className={field} {...register("email")} />
            {errors.email ? <span className="mt-2 block text-sm text-red-600">{errors.email.message}</span> : null}
          </label>
          <label>
            <span className="mb-2 block text-sm font-bold">Phone Number</span>
            <input className={field} {...register("phone")} />
            {errors.phone ? <span className="mt-2 block text-sm text-red-600">{errors.phone.message}</span> : null}
          </label>
        </div>
        <label>
          <span className="mb-2 block text-sm font-bold">Interested Service</span>
          <select className={field} {...register("service")} defaultValue="">
            <option value="" disabled>Select a service</option>
            <option>Business Consulting</option>
            <option>Custom Software Development</option>
            <option>ERP & CRM Solutions</option>
            <option>Business Automation</option>
            <option>AI & Data Analytics</option>
          </select>
          {errors.service ? <span className="mt-2 block text-sm text-red-600">{errors.service.message}</span> : null}
        </label>
        <label>
          <span className="mb-2 block text-sm font-bold">Message</span>
          <textarea className={`${field} min-h-36 resize-y py-3`} {...register("message")} />
          {errors.message ? <span className="mt-2 block text-sm text-red-600">{errors.message.message}</span> : null}
        </label>
        <button
          disabled={isSubmitting}
          className="shine inline-flex h-[54px] w-full items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#B7C95A,#A9BD49)] px-7 font-extrabold text-[#073B32] shadow-[0_16px_40px_rgba(7,59,50,.24)] transition hover:-translate-y-1 hover:bg-[linear-gradient(135deg,#A9BD49,#B7C95A)] disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Send Message"} {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
      </div>
      {success ? <p role="status" className="fixed bottom-6 right-6 z-50 rounded-2xl bg-[#F7F7F3] px-5 py-4 font-bold text-[#072F2B] shadow-2xl">Thank you. Your message has been received.</p> : null}
    </form>
  );
}
