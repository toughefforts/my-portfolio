"use client";

import React, { useState } from "react";
import RevealAnimation from "@/components/animations/RevealAnimation";
import WorldMapVisual from "@/components/ui/WorldMapVisual";
import { submitContactForm } from "@/lib/api";
import {
  Mail,
  User,
  Tag,
  FileText,
  Send,
  Lock,
  Check,
  AlertCircle,
  Loader2,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/ui/BrandIcons";

/**
 * Contact Section Component.
 *
 * Inquiry dispatch and communication terminal featuring:
 * - Real-time form validation and error/success feedback states.
 * - Integration with Next.js edge route handler delivering automated Nodemailer SMTP emails.
 * - Interactive world map visualization displaying global availability.
 * - Social network links and security guarantee badges.
 */
export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
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
        setResponseMsg("Thank you! Your message has been received. I will reply within 4 hours.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(res.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("Unable to send message right now. You can also reach me directly at officialsachin9910@gmail.com");
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-b border-[#e2e2da] bg-[#fbfbf9] relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-12 right-1/4 w-[480px] h-[480px] bg-[#fa4d56]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-[#fa4d56]/4 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        {/* ===================== MAIN 2-COLUMN SECTION ===================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ----------------- LEFT COLUMN: HEADER + MAP + CARDS + SOCIALS ----------------- */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col space-y-3 sm:space-y-4">
            {/* Tag: — GET IN TOUCH */}
            <div className="flex items-center gap-2 mb-1">
              <span className="w-5 h-[2px] bg-[#fa4d56] inline-block rounded-full" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#7c8ba1]">
                GET IN TOUCH
              </span>
            </div>

            {/* Title & Description Side-by-Side Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 lg:gap-6 mb-2">
              <div className="shrink-0">
                {/* Title: CONTACT ME */}
                <RevealAnimation>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black uppercase font-heading text-[#090d15] tracking-tight leading-none whitespace-nowrap">
                    CONTACT <span className="text-[#fa4d56]">ME</span>
                  </h2>
                </RevealAnimation>

                {/* Cursive Subtitle with Red Underline */}
                <div className="relative mt-1 inline-block ml-2.5 sm:ml-3.5 -rotate-[1.5deg] origin-left">
                  <span className="font-script text-base sm:text-lg md:text-xl font-bold text-[#64748b] leading-tight block whitespace-nowrap tracking-wide">
                    Let&apos;s Build Something Amazing Together
                  </span>
                  {/* Dual Red Scribble Underline Doodle placed under 'Amazing Together' */}
                  <svg
                    viewBox="0 0 180 18"
                    className="w-28 sm:w-34 text-[#fa4d56] ml-auto -mt-1 block pointer-events-none"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                  >
                    <path d="M 4 6 Q 90 16 175 5" />
                    <path d="M 16 12 Q 88 18 160 10" strokeWidth="1.8" strokeOpacity="0.85" />
                  </svg>
                </div>
              </div>

              {/* Description Paragraph (Left vertical line removed on mobile, kept on sm+) */}
              <div className="w-full sm:w-auto max-w-full sm:max-w-[210px] md:max-w-[230px] lg:max-w-[250px] border-l-0 sm:border-l-2 border-[#e2e2da] pl-0 sm:pl-3.5 py-0.5 text-[#64748b] font-serif italic text-xs sm:text-[13px] leading-relaxed shrink-0 ml-0 sm:ml-4 lg:ml-6">
                Have a project in mind, a question, or just want to say hello? I&apos;d love to
                hear from you. Let&apos;s discuss how we can turn your ideas into reality.
              </div>
            </div>

            {/* World Map Visual (Seamless on screen, No Box) */}
            <RevealAnimation>
              <div className="relative w-full -mt-2">
                <WorldMapVisual />
              </div>
            </RevealAnimation>


            {/* Bottom Bar: Follow Me + Let's Connect */}
            <RevealAnimation delay={0.15}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 -mt-2 sm:-mt-4 pt-1">
                {/* Left: Follow Me + Social Icons */}
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#090d15] flex items-center gap-1.5">
                    FOLLOW ME <span className="text-[#fa4d56] font-bold text-sm">—</span>
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href="https://github.com/toughefforts"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                      className="w-8 h-8 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center text-[#090d15] hover:border-[#fa4d56] hover:text-[#fa4d56] shadow-2xs hover:scale-105 transition-all"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/toughefforts"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="w-8 h-8 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center text-[#0a66c2] hover:border-[#0a66c2] shadow-2xs hover:scale-105 transition-all"
                    >
                      <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                    </a>
                    <a
                      href="https://x.com/toughefforts"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter X Profile"
                      className="w-8 h-8 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center text-[#090d15] hover:border-[#fa4d56] hover:text-[#fa4d56] shadow-2xs hover:scale-105 transition-all"
                    >
                      <TwitterIcon className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href="https://instagram.com/toughefforts"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Profile"
                      className="w-8 h-8 rounded-lg bg-white border border-[#e2e8f0] flex items-center justify-center shadow-2xs hover:scale-105 hover:border-[#dc2743] transition-all"
                    >
                      <InstagramIcon className="w-4 h-4" useGradient />
                    </a>
                  </div>
                </div>

                {/* Center horizontal divider line */}
                <div className="hidden md:block flex-1 h-[1px] bg-[#e2e8da] mx-3" />

                {/* Right: Let's Connect! + Red Looping Doodle Arrow */}
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 self-end sm:self-auto">
                  <span className="font-script text-xl sm:text-2xl font-bold text-[#334155] whitespace-nowrap">
                    Let&apos;s Connect!
                  </span>
                  <svg
                    viewBox="0 0 85 28"
                    className="w-12 sm:w-14 text-[#fa4d56] shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M 2 18 C 22 26, 40 24, 54 15 C 60 10, 62 5, 57 3 C 52 1, 49 7, 56 12 C 63 17, 72 16, 81 15" />
                    <path d="M 72 10 L 82 15 L 74 21" />
                  </svg>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* ----------------- RIGHT COLUMN: INQUIRY FORM CARD ----------------- */}
          <div className="lg:col-span-6 xl:col-span-6 flex lg:justify-end">
            <RevealAnimation delay={0.1} className="w-full max-w-[570px]">
              <div className="bg-white rounded-3xl border border-rose-100 shadow-[0_20px_60px_-15px_rgba(250,77,86,0.12)] p-6 sm:p-7 lg:p-8 relative overflow-hidden w-full">
                <div className="w-full">
                  {/* Form Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-4 h-[2px] bg-[#fa4d56] inline-block rounded-full" />
                      <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#7c8ba1]">
                        SEND ME A MESSAGE
                      </span>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#fa4d56] tracking-widest">
                      [ FORM_01 ]
                    </span>
                  </div>

                  {/* Title: INQUIRY FORM */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold uppercase font-heading text-[#090d15] tracking-tight">
                    INQUIRY <span className="text-[#fa4d56]">FORM</span>
                  </h3>
                  <p className="text-xs text-[#64748b] mt-0.5 mb-3.5">
                    Fill out the form below and I&apos;ll get back to you as soon as possible.
                  </p>

                  {/* Status alerts */}
                  {status === "success" && (
                    <div className="mb-4 p-3.5 rounded-xl border border-emerald-200 bg-emerald-50 text-[#090d15] flex items-start gap-2.5 text-xs">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold text-emerald-700 uppercase">
                          TRANSMISSION RECEIVED
                        </strong>
                        {responseMsg}
                      </div>
                    </div>
                  )}

                  {status === "error" && (
                    <div className="mb-4 p-3.5 rounded-xl border border-[#fa4d56]/40 bg-[#fef1f2] text-[#090d15] flex items-start gap-2.5 text-xs">
                      <AlertCircle className="w-4 h-4 text-[#fa4d56] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-bold text-[#fa4d56] uppercase">
                          ERROR
                        </strong>
                        {responseMsg}
                      </div>
                    </div>
                  )}

                  {/* Form Fields */}
                  <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Row 1: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label
                          htmlFor="inquiry-name"
                          className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#090d15] mb-1"
                        >
                          YOUR NAME
                        </label>
                        <div className="relative flex items-center rounded-xl border border-[#e2e8f0] bg-white px-3 py-2 focus-within:border-[#fa4d56] focus-within:ring-2 focus-within:ring-[#fa4d56]/15 transition-all">
                          <User className="w-3.5 h-3.5 text-[#94a3b8] mr-2 shrink-0" />
                          <input
                            id="inquiry-name"
                            type="text"
                            required
                            placeholder="e.g. Rahul Mehta"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full text-xs text-[#090d15] placeholder:text-[#94a3b8] outline-none bg-transparent font-sans"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="inquiry-email"
                          className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#090d15] mb-1"
                        >
                          EMAIL ADDRESS
                        </label>
                        <div className="relative flex items-center rounded-xl border border-[#e2e8f0] bg-white px-3 py-2 focus-within:border-[#fa4d56] focus-within:ring-2 focus-within:ring-[#fa4d56]/15 transition-all">
                          <Mail className="w-3.5 h-3.5 text-[#94a3b8] mr-2 shrink-0" />
                          <input
                            id="inquiry-email"
                            type="email"
                            required
                            placeholder="e.g. rahul@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full text-xs text-[#090d15] placeholder:text-[#94a3b8] outline-none bg-transparent font-sans"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Subject (Optional) */}
                    <div>
                      <label
                        htmlFor="inquiry-subject"
                        className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#090d15] mb-1"
                      >
                        SUBJECT (OPTIONAL)
                      </label>
                      <div className="relative flex items-center rounded-xl border border-[#e2e8f0] bg-white px-3 py-2 focus-within:border-[#fa4d56] focus-within:ring-2 focus-within:ring-[#fa4d56]/15 transition-all">
                        <Tag className="w-3.5 h-3.5 text-[#94a3b8] mr-2 shrink-0" />
                        <input
                          id="inquiry-subject"
                          type="text"
                          placeholder="e.g. Project Inquiry, Collaboration, Job Opportunity"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full text-xs text-[#090d15] placeholder:text-[#94a3b8] outline-none bg-transparent font-sans"
                        />
                      </div>
                    </div>

                    {/* Row 3: Message / Project Details */}
                    <div>
                      <label
                        htmlFor="inquiry-message"
                        className="block text-[10px] font-mono font-bold uppercase tracking-wider text-[#090d15] mb-1"
                      >
                        MESSAGE / PROJECT DETAILS
                      </label>
                      <div className="relative rounded-xl border border-[#e2e8f0] bg-white p-2.5 focus-within:border-[#fa4d56] focus-within:ring-2 focus-within:ring-[#fa4d56]/15 transition-all">
                        <FileText className="w-3.5 h-3.5 text-[#94a3b8] absolute top-2.5 left-2.5 pointer-events-none" />
                        <textarea
                          id="inquiry-message"
                          required
                          rows={3}
                          maxLength={500}
                          placeholder="Tell me about your project, goals, or requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full pl-5 pr-2 pt-0 pb-4 text-xs text-[#090d15] placeholder:text-[#94a3b8] outline-none bg-transparent font-sans resize-none min-h-[85px]"
                        />
                        {/* Live Character Count */}
                        <span className="absolute bottom-1.5 right-2.5 font-mono text-[9.5px] text-[#94a3b8]">
                          {formData.message.length}/500
                        </span>
                      </div>
                    </div>

                    {/* Send Message Button */}
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="w-full py-3.5 px-6 rounded-xl bg-[#090d15] hover:bg-[#fa4d56] text-white font-sans text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-black/15 hover:shadow-[0_8px_24px_rgba(250,77,86,0.4)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-60"
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 -rotate-12" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Privacy Disclaimer */}
                  <div className="flex items-center justify-center gap-1.5 mt-3 text-center text-[#64748b] text-[11px]">
                    <Lock className="w-3 h-3 text-[#94a3b8] shrink-0" />
                    <span>Your information is safe with me. I respect your privacy.</span>
                  </div>
                </div>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
