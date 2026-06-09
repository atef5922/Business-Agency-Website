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

    const field = "w-full rounded-2xl border border-[#E5E7EB] bg-white/90 px-5 py-4 text-[#111827] outline-none transition focus:border-[#B7C95A] focus:ring-4 focus:ring-[#B7C95A]/18";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="premium-card rounded-[30px] p-6 md:p-8" noValidate>
      <h2 className="mb-6 text-3xl font-black">Fill Up The Form</h2>
      <div className="grid gap-5">
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
          <textarea className={`${field} min-h-36 resize-y`} {...register("message")} />
          {errors.message ? <span className="mt-2 block text-sm text-red-600">{errors.message.message}</span> : null}
        </label>
        <button disabled={isSubmitting} className="shine inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#B7C95A,#A9BD49)] px-7 py-4 font-extrabold text-[#111827] shadow-[0_16px_40px_rgba(7,47,43,.24)] transition hover:-translate-y-1 hover:bg-[linear-gradient(135deg,#A9BD49,#B7C95A)] disabled:opacity-70">
          {isSubmitting ? "Sending..." : "Send Message"} {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        </button>
        {success ? <p role="status" className="fixed bottom-6 right-6 z-50 rounded-2xl bg-[#F7F7F3] px-5 py-4 font-bold text-[#072F2B] shadow-2xl">Thank you. Your message has been received.</p> : null}
      </div>
    </form>
  );
}


