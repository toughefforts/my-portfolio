"use client";

import { useState } from "react";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { submitContactForm } from "@/lib/api";
import { ArrowUpRight, Check, AlertCircle, Loader2 } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setResponseMsg("Please fill out all required fields.");
      return;
    }

    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await submitContactForm(formData);
      if (res.success) {
        setStatus("success");
        setResponseMsg("Thank you! Your message has been received. I will reply within 24 hours.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(res.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Unable to send message right now. You can also reach me directly at sachinsharma@awesome.com");
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 border-b border-[#e2e2da] bg-[#f8f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Index Header */}
        <div className="flex items-center justify-between border-b border-[#e2e2da] pb-3 mb-12 font-mono text-xs uppercase tracking-widest text-[#7c8ba1]">
          <div className="flex items-center gap-2">
            <span>[10]</span>
            <span>&bull;</span>
            <span>TRANSMISSION &bull; CONTACT</span>
          </div>
          <div>
            <span>AVAILABLE WORLDWIDE</span>
          </div>
        </div>

        {/* Section Title with Cursive Accent */}
        <div className="relative mb-16">
          <RevealAnimation>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase font-heading tracking-tight text-[#090d15] leading-none inline-block">
              CONTACT ME<span className="text-[#fa4d56] ml-1 select-none">.</span>
            </h2>
          </RevealAnimation>
          <span className="absolute -bottom-5 left-6 sm:left-14 text-3xl sm:text-5xl font-script text-[#fa4d56] rotate-[-4deg] pointer-events-none font-semibold">
            Get in Touch &bull; Say Hello
          </span>
        </div>

        {/* 2-Column Ledger: Direct Info Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Ledger */}
          <div className="lg:col-span-5 space-y-8">
            <RevealAnimation>
              <div className="studio-card p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-[#090d15] pb-3 font-mono text-xs uppercase font-bold text-[#090d15]">
                  <span>{"// DIRECT REACH"}</span>
                  <span className="text-[#fa4d56]">[ONLINE]</span>
                </div>

                <div className="divide-y divide-[#e2e2da] font-mono text-xs">
                  <div className="py-4 space-y-1">
                    <div className="text-[#7c8ba1] uppercase tracking-widest text-[10px]">EMAIL ADDRESS</div>
                    <a
                      href="mailto:sachinsharma@awesome.com"
                      className="text-sm font-bold text-[#090d15] hover:text-[#fa4d56] transition-colors block"
                    >
                      sachinsharma@awesome.com
                    </a>
                  </div>

                  <div className="py-4 space-y-1">
                    <div className="text-[#7c8ba1] uppercase tracking-widest text-[10px]">PHONE // WHATSAPP</div>
                    <a
                      href="tel:+919096543310"
                      className="text-sm font-bold text-[#090d15] hover:text-[#fa4d56] transition-colors block"
                    >
                      +91 90965 43310
                    </a>
                  </div>

                  <div className="py-4 space-y-1">
                    <div className="text-[#7c8ba1] uppercase tracking-widest text-[10px]">LOCATION</div>
                    <div className="text-sm font-bold text-[#090d15]">
                      Delhi, India
                    </div>
                  </div>

                  <div className="py-4 space-y-1">
                    <div className="text-[#7c8ba1] uppercase tracking-widest text-[10px]">RESPONSE TIME</div>
                    <div className="text-sm font-bold text-[#fa4d56]">
                      Under 4 Hours
                    </div>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* Right Column: Architectural Form */}
          <div className="lg:col-span-7">
            <RevealAnimation delay={0.1}>
              <div className="studio-card p-6 sm:p-10">
                <div className="flex items-center justify-between border-b border-[#090d15] pb-3 mb-8 font-mono text-xs uppercase font-bold text-[#090d15]">
                  <span>{"// INQUIRY FORM"}</span>
                  <span className="text-[#fa4d56]">[FORM_01]</span>
                </div>


                {status === "success" && (
                  <div className="mb-6 p-4 border border-[#fa4d56] bg-[#fef1f2] text-[#090d15] flex items-start gap-3 text-xs font-mono">
                    <Check className="w-4 h-4 text-[#fa4d56] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold text-[#fa4d56] uppercase">TRANSMISSION RECEIVED</strong>
                      {responseMsg}
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 border border-[#fa4d56] bg-[#fef1f2] text-[#090d15] flex items-start gap-3 text-xs font-mono">
                    <AlertCircle className="w-4 h-4 text-[#fa4d56] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block font-bold text-[#fa4d56] uppercase">ERROR</strong>
                      {responseMsg}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#090d15] mb-1.5">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Mehta"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f8f8f5] border border-[#e2e2da] focus:border-[#090d15] text-[#090d15] placeholder:text-[#94a3b8] focus:outline-none transition-colors text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#090d15] mb-1.5">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f8f8f5] border border-[#e2e2da] focus:border-[#090d15] text-[#090d15] placeholder:text-[#94a3b8] focus:outline-none transition-colors text-sm font-sans"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-[11px] font-mono font-bold uppercase tracking-wider text-[#090d15] mb-1.5">
                      Message / Project Details
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      rows={5}
                      placeholder="Tell me about your project, goals, or requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-[#f8f8f5] border border-[#e2e2da] focus:border-[#090d15] text-[#090d15] placeholder:text-[#94a3b8] focus:outline-none transition-colors text-sm font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 bg-[#090d15] hover:bg-[#fa4d56] text-white font-mono text-xs uppercase tracking-widest font-bold transition-colors disabled:opacity-60 cursor-pointer shadow-xs"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <span>TRANSMIT MESSAGE</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
