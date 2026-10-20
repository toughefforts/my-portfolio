"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Database,
  UserCheck,
  Bell,
  Mail,
  ArrowLeft,
  ArrowRight,
  Printer,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  Layers,
  Scale,
  MapPin,
  Phone,
} from "lucide-react";
import RevealAnimation from "@/components/animations/RevealAnimation";

const sections = [
  { id: "introduction", title: "1. Introduction & Scope" },
  { id: "information-collected", title: "2. Information We Collect" },
  { id: "usage", title: "3. How Information Is Used" },
  { id: "cookies", title: "4. Cookies & Local Storage" },
  { id: "third-parties", title: "5. Third-Party Services" },
  { id: "security", title: "6. Security & Retention" },
  { id: "your-rights", title: "7. Your Rights & Choices" },
  { id: "contact", title: "8. Data Controller Contact" },
];

export default function PrivacyPolicyPage() {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("officialsachin9910@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-[#090d15] pt-28 pb-20 selection:bg-[#fa4d56] selection:text-white">
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#e2e2da_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= TOP BREADCRUMB & UTILITIES ================= */}
        <RevealAnimation>
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e2e2da] pb-5 mb-8">
            <Link
              href="/"
              className="group inline-flex items-center gap-2.5 font-mono text-xs font-bold uppercase tracking-wider text-[#64748b] hover:text-[#fa4d56] transition-colors"
            >
              <div className="w-8 h-8 rounded-xl bg-white border border-[#e2e2da] group-hover:border-[#fa4d56] flex items-center justify-center shadow-2xs group-hover:-translate-x-1 transition-all">
                <ArrowLeft className="w-4 h-4 text-[#090d15] group-hover:text-[#fa4d56]" />
              </div>
              <span>Return to Portfolio</span>
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e2e2da] hover:border-[#090d15] text-[#334155] font-mono text-xs uppercase tracking-wider transition-all shadow-2xs hover:scale-102 cursor-pointer"
                title="Copy Page URL"
              >
                {copiedLink ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Copied Link</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-[#64748b]" />
                    <span>Share</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e2e2da] hover:border-[#090d15] text-[#334155] font-mono text-xs uppercase tracking-wider transition-all shadow-2xs hover:scale-102 cursor-pointer"
                title="Print this document"
              >
                <Printer className="w-3.5 h-3.5 text-[#64748b]" />
                <span className="hidden sm:inline">Print / PDF</span>
              </button>
            </div>
          </div>
        </RevealAnimation>

        {/* ================= HERO HEADER ================= */}
        <RevealAnimation delay={0.05}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e2e2da] p-6 sm:p-10 lg:p-12 mb-10 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#fa4d56]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fa4d56]/10 text-[#fa4d56] font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Legal & Privacy Documentation</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#090d15] leading-tight mb-4">
              Privacy <span className="text-[#fa4d56]">Policy</span>
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
              This Privacy Policy explains how Sachin Sharma collects, uses, and protects your personal
              information when you browse this website, submit contact inquiries, or review interactive
              development case studies.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#f1f1eb] font-mono text-xs">
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Last Updated</span>
                <span className="font-bold text-[#090d15] text-xs sm:text-sm">October 2024</span>
              </div>
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Version</span>
                <span className="font-bold text-[#090d15] text-xs sm:text-sm">2.1 (Current)</span>
              </div>
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Estimated Read</span>
                <span className="font-bold text-[#090d15] text-xs sm:text-sm">4 Min Read</span>
              </div>
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Compliance</span>
                <span className="font-bold text-emerald-600 text-xs sm:text-sm flex items-center gap-1">
                  <Check className="w-3 h-3" /> GDPR / CCPA
                </span>
              </div>
            </div>

            {/* Core Privacy Guarantees */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f8f5] border border-[#e2e2da] text-[#334155] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                No Personal Data Sold
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f8f5] border border-[#e2e2da] text-[#334155] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Zero Invasive Trackers
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f8f5] border border-[#e2e2da] text-[#334155] font-mono text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                SSL / TLS Encrypted
              </span>
            </div>
          </div>
        </RevealAnimation>

        {/* ================= MAIN CONTENT WITH SIDEBAR ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Sticky Table of Contents */}
          <aside className="lg:col-span-4 sticky top-28 hidden lg:block">
            <div className="bg-white rounded-2xl border border-[#e2e2da] p-5 shadow-2xs space-y-3">
              <div className="flex items-center gap-2 pb-3 border-b border-[#f1f1eb]">
                <FileText className="w-4 h-4 text-[#fa4d56]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#090d15]">
                  Policy Sections
                </h3>
              </div>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    className="block px-2.5 py-1.5 text-xs text-[#475569] hover:text-[#fa4d56] hover:bg-[#faf9f6] rounded-md transition-colors font-medium"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#f1f1eb]">
                <div className="bg-[#faf9f6] rounded-xl p-3 border border-[#f1f1eb]">
                  <p className="text-[11px] text-[#64748b] leading-relaxed">
                    Have questions regarding your personal information? Feel free to reach out directly.
                  </p>
                  <button
                    onClick={handleCopyEmail}
                    className="mt-2 text-xs font-bold text-[#fa4d56] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    {copiedEmail ? "Email Copied!" : "Copy Contact Email"}
                  </button>
                </div>
              </div>
            </div>
          </aside>

          {/* Policy Text Articles */}
          <main className="lg:col-span-8 space-y-6">
            {/* Section 1 */}
            <article id="introduction" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  1. Introduction & Scope
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                Welcome to Sachin Sharma&apos;s personal portfolio website. I value your privacy and believe in
                transparency. This website functions primarily as an interactive digital showcase of full-stack
                engineering capabilities, architecture case studies, and code projects.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                By accessing this site, you acknowledge and agree to the practices outlined in this policy. If you
                do not agree with these principles, please refrain from using the interactive features or submitting
                forms.
              </p>
            </article>

            {/* Section 2 */}
            <article id="information-collected" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Database className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  2. Information We Collect
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                We only collect information necessary to fulfill your communication requests or enhance site performance:
              </p>
              <ul className="space-y-3 text-sm text-[#475569]">
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[#090d15] font-semibold">Contact Inquiries:</strong> When you voluntarily
                    send a message via our contact form or email, we collect your name, email address, company (optional),
                    and message content to reply to your inquiry.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[#090d15] font-semibold">Technical Log Data:</strong> Like most web servers,
                    standard anonymized connection logs (IP address, browser type, device screen size, referring page,
                    and timestamp) may be temporarily processed to ensure network security and prevent abuse.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shrink-0" />
                  <div>
                    <strong className="text-[#090d15] font-semibold">Interactive Previews:</strong> Live project
                    simulations (e.g. TaskFlow, CryptoVault) store mock sessions exclusively in your local browser
                    storage. No personal financial or task data is transmitted to external servers.
                  </div>
                </li>
              </ul>
            </article>

            {/* Section 3 */}
            <article id="usage" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  3. How Information Is Used
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                Any information collected is used strictly for legitimate developer portfolio purposes:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#f1f1eb]">
                  <h4 className="font-bold text-[#090d15] mb-1">Direct Communication</h4>
                  <p className="text-[#64748b]">To answer job offers, consulting inquiries, freelance requests, and project collaboration notes.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#f1f1eb]">
                  <h4 className="font-bold text-[#090d15] mb-1">Platform Stability</h4>
                  <p className="text-[#64748b]">Diagnosing front-end rendering performance, browser compatibility, and Core Web Vitals optimization.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#f1f1eb]">
                  <h4 className="font-bold text-[#090d15] mb-1">Security & Protection</h4>
                  <p className="text-[#64748b]">Mitigating DDoS threats, rate limiting API spam, and safeguarding contact delivery pipelines.</p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#f1f1eb]">
                  <h4 className="font-bold text-[#090d15] mb-1">Zero Commercial Monetization</h4>
                  <p className="text-[#64748b]">We do not sell, rent, or trade your personal email or data to advertisers or data brokers under any circumstances.</p>
                </div>
              </div>
            </article>

            {/* Section 4 */}
            <article id="cookies" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Eye className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  4. Cookies & Local Storage
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                This portfolio relies on minimal, functional client-side storage technologies to deliver a fluid
                single-page and multi-page experience:
              </p>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="font-mono text-xs font-bold text-[#fa4d56]">[SessionStorage]</span>
                  <span>Remembers your scroll target and active section so navigating back from an article or preview returns you to where you were.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-mono text-xs font-bold text-[#fa4d56]">[LocalStorage]</span>
                  <span>Stores lightweight UI preferences (such as bookmarked articles in the blog section) strictly on your client machine.</span>
                </li>
              </ul>
              <p className="text-xs text-[#64748b] mt-3">
                You can clear or disable LocalStorage and Cookies at any moment via your web browser settings without breaking fundamental navigation.
              </p>
            </article>

            {/* Section 5 */}
            <article id="third-parties" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  5. Third-Party Services
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                To run securely and quickly, this site connects to a few trusted third-party cloud infrastructure providers:
              </p>
              <div className="space-y-2 text-xs">
                <div className="p-3 bg-[#faf9f6] rounded-xl flex items-center justify-between border border-[#f1f1eb]">
                  <div>
                    <span className="font-bold text-[#090d15] block">Hosting & Edge CDN (Vercel / Cloudflare)</span>
                    <span className="text-[#64748b]">High-speed content delivery and SSL certificate termination.</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#64748b]">Infrastructure</span>
                </div>
                <div className="p-3 bg-[#faf9f6] rounded-xl flex items-center justify-between border border-[#f1f1eb]">
                  <div>
                    <span className="font-bold text-[#090d15] block">External Code Repositories (GitHub)</span>
                    <span className="text-[#64748b]">Direct hyperlinks to open-source project code and commits.</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#64748b]">Developer Platform</span>
                </div>
                <div className="p-3 bg-[#faf9f6] rounded-xl flex items-center justify-between border border-[#f1f1eb]">
                  <div>
                    <span className="font-bold text-[#090d15] block">Web Fonts (Google Fonts)</span>
                    <span className="text-[#64748b]">Optimized font subsets delivered directly with zero tracking cookies.</span>
                  </div>
                  <span className="font-mono text-[10px] text-[#64748b]">Typography</span>
                </div>
              </div>
            </article>

            {/* Section 6 */}
            <article id="security" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Lock className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  6. Security & Data Retention
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                We employ standard modern security protocols including end-to-end HTTPS/TLS encryption to protect
                transmissions. Inquiries sent via the contact form are retained only for as long as necessary to
                maintain correspondence and evaluate potential business opportunities.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                You may request immediate deletion of your past email threads and contact history at any time.
              </p>
            </article>

            {/* Section 7 */}
            <article id="your-rights" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  7. Your Rights & Choices
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                Regardless of your geographic location, you enjoy full sovereignty over your personal data:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[#faf9f6] rounded-xl border border-[#f1f1eb]">
                  <strong className="text-[#090d15] block mb-1">Right to Access & Portability</strong>
                  <span className="text-[#64748b]">Request a copy of any correspondence or data we hold associated with your email.</span>
                </div>
                <div className="p-3 bg-[#faf9f6] rounded-xl border border-[#f1f1eb]">
                  <strong className="text-[#090d15] block mb-1">Right to Erasure (Forget Me)</strong>
                  <span className="text-[#64748b]">Request immediate, permanent deletion of your contact records from our inbox.</span>
                </div>
                <div className="p-3 bg-[#faf9f6] rounded-xl border border-[#f1f1eb]">
                  <strong className="text-[#090d15] block mb-1">Right to Rectification</strong>
                  <span className="text-[#64748b]">Update or correct inaccurate contact information previously provided.</span>
                </div>
                <div className="p-3 bg-[#faf9f6] rounded-xl border border-[#f1f1eb]">
                  <strong className="text-[#090d15] block mb-1">Zero Retaliation</strong>
                  <span className="text-[#64748b]">You will never receive diminished portfolio access or service for exercising your privacy rights.</span>
                </div>
              </div>
            </article>

            {/* Section 8: Contact */}
            <article id="contact" className="bg-[#090d15] text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fa4d56]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 font-mono text-xs text-[#fa4d56] font-bold uppercase tracking-wider mb-2">
                  <Mail className="w-4 h-4" />
                  <span>Direct Privacy Inquiries</span>
                </div>

                <h2 className="font-heading font-black text-2xl uppercase tracking-tight text-white mb-2">
                  8. Data Controller & Contact
                </h2>

                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed max-w-xl mb-6">
                  For any questions concerning this Privacy Policy, your rights, or data requests, please contact
                  Sachin Sharma directly:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div className="space-y-1">
                    <span className="text-[#94a3b8] uppercase font-mono text-[10px] block">Full Name & Role</span>
                    <p className="font-bold text-white text-sm">Sachin Sharma</p>
                    <p className="text-[#94a3b8] text-xs">Full-Stack Software Developer</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#94a3b8] uppercase font-mono text-[10px] block">Location</span>
                    <p className="font-bold text-white text-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#fa4d56]" /> Delhi, India
                    </p>
                    <p className="text-[#94a3b8] text-xs">Available for remote work worldwide</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="mailto:officialsachin9910@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#fa4d56] hover:bg-[#e02838] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Send Email Request</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all border border-white/10 cursor-pointer"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Email Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email Address</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>

            {/* Navigation Jump to Terms of Service & Sitemap */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e2e2da]">
              <Link
                href="/terms-of-service"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#e2e2da] hover:border-[#fa4d56] text-[#090d15] hover:text-[#fa4d56] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-2xs group"
              >
                <span>Read Terms of Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/sitemap"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#e2e2da] hover:border-[#fa4d56] text-[#090d15] hover:text-[#fa4d56] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-2xs group"
              >
                <span>Explore SiteMap Directory</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
