"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileCheck2,
  Scale,
  ShieldAlert,
  Code2,
  Briefcase,
  ExternalLink,
  HelpCircle,
  ArrowLeft,
  ArrowRight,
  Printer,
  Check,
  Copy,
  Layers,
  Sparkles,
  MapPin,
  Mail,
  AlertTriangle,
  FolderGit2,
} from "lucide-react";
import RevealAnimation from "@/components/animations/RevealAnimation";

const termSections = [
  { id: "acceptance", title: "1. Acceptance of Terms" },
  { id: "scope", title: "2. Portfolio Scope & Nature" },
  { id: "ip-rights", title: "3. Intellectual Property & Code" },
  { id: "interactive-demos", title: "4. Interactive Demos & Previews" },
  { id: "client-engagements", title: "5. Inquiries & Freelance Engagements" },
  { id: "external-links", title: "6. External Links & Platforms" },
  { id: "disclaimer", title: "7. Disclaimer of Warranties" },
  { id: "limitation", title: "8. Limitation of Liability" },
  { id: "governing-law", title: "9. Governing Law & Dispute Resolution" },
  { id: "contact", title: "10. Questions & Contact Information" },
];

export default function TermsOfServicePage() {
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
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#090d15]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#090d15]/5 text-[#090d15] font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-[#090d15]/10">
              <Scale className="w-3.5 h-3.5 text-[#fa4d56]" />
              <span>Terms & Agreement Conditions</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#090d15] leading-tight mb-4">
              Terms of <span className="text-[#fa4d56]">Service</span>
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
              These Terms of Service govern your access and use of Sachin Sharma&apos;s personal portfolio,
              live engineering demonstrations, software prototypes, technical articles, and project case studies.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#f1f1eb] font-mono text-xs">
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Effective Date</span>
                <span className="font-bold text-[#090d15] text-xs sm:text-sm">October 2024</span>
              </div>
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Document ID</span>
                <span className="font-bold text-[#090d15] text-xs sm:text-sm">TOS-2024-V1</span>
              </div>
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Applicable To</span>
                <span className="font-bold text-[#090d15] text-xs sm:text-sm">All Visitors</span>
              </div>
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Jurisdiction</span>
                <span className="font-bold text-[#fa4d56] text-xs sm:text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> Delhi, India
                </span>
              </div>
            </div>

            {/* Quick Badges */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f8f5] border border-[#e2e2da] text-[#334155] font-mono text-xs">
                <Code2 className="w-3.5 h-3.5 text-[#fa4d56]" />
                Portfolio Demonstrations
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f8f5] border border-[#e2e2da] text-[#334155] font-mono text-xs">
                <FolderGit2 className="w-3.5 h-3.5 text-[#fa4d56]" />
                Open Source Licensing Honored
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#f8f8f5] border border-[#e2e2da] text-[#334155] font-mono text-xs">
                <ShieldAlert className="w-3.5 h-3.5 text-[#fa4d56]" />
                Fair & Lawful Use
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
                <Scale className="w-4 h-4 text-[#fa4d56]" />
                <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-[#090d15]">
                  Terms Overview
                </h3>
              </div>
              <nav className="space-y-1">
                {termSections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`/terms-of-service#${sec.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(sec.id);
                      if (el) {
                        const top = el.getBoundingClientRect().top + window.scrollY - 90;
                        window.scrollTo({ top, behavior: "smooth" });
                      }
                    }}
                    className="block px-2.5 py-1.5 text-xs text-[#475569] hover:text-[#fa4d56] hover:bg-[#faf9f6] rounded-md transition-colors font-medium cursor-pointer"
                  >
                    {sec.title}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-[#f1f1eb]">
                <div className="bg-[#faf9f6] rounded-xl p-3 border border-[#f1f1eb]">
                  <p className="text-[11px] text-[#64748b] leading-relaxed">
                    Looking to discuss a custom contract, NDA, or software engineering project?
                  </p>
                  <Link
                    href="/contact"
                    className="mt-2 text-xs font-bold text-[#fa4d56] hover:underline flex items-center gap-1"
                  >
                    <span>Get in Touch Directly</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </aside>

          {/* Terms Content Articles */}
          <main className="lg:col-span-8 space-y-6">
            {/* Section 1 */}
            <article id="acceptance" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <FileCheck2 className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  1. Acceptance of Terms
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                By visiting, viewing, or interacting with this portfolio website (including subdomains, articles,
                and interactive live project previews), you acknowledge that you have read, understood, and agree
                to be bound by these Terms of Service and our Privacy Policy.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                If you do not agree to these terms, your sole remedy is to discontinue browsing and refrain from
                interacting with site tools and demonstration environments.
              </p>
            </article>

            {/* Section 2 */}
            <article id="scope" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  2. Portfolio Scope & Nature
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                This platform is curated personally by Sachin Sharma to showcase engineering skills, architectural
                patterns, interactive UX/UI design prototypes, educational history, and technical writeups.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                Nothing on this site constitutes a binding commercial offer or formal contract unless expressly
                stipulated in a signed Master Services Agreement (MSA) or statement of work.
              </p>
            </article>

            {/* Section 3 */}
            <article id="ip-rights" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Code2 className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  3. Intellectual Property & Code Licensing
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-4">
                Respecting intellectual property is a cornerstone of professional software engineering:
              </p>
              <div className="space-y-3 text-sm text-[#475569]">
                <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#f1f1eb]">
                  <strong className="text-[#090d15] block mb-1">Portfolio Design & Written Content</strong>
                  <p className="text-xs text-[#64748b]">
                    All custom artwork, typography styling, layout systems, original articles, and branding
                    elements are the copyrighted intellectual property of Sachin Sharma, unless otherwise specified.
                    Reproduction without attribution is prohibited.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#f1f1eb]">
                  <strong className="text-[#090d15] block mb-1">Open Source Projects & Code Snippets</strong>
                  <p className="text-xs text-[#64748b]">
                    Code repositories hosted on GitHub and linked from this portfolio are governed by their
                    individual open-source license declarations (such as MIT, Apache 2.0, or BSD). You are free
                    to study and build upon them in accordance with their respective licenses.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#faf9f6] border border-[#f1f1eb]">
                  <strong className="text-[#090d15] block mb-1">Third-Party Trademarks</strong>
                  <p className="text-xs text-[#64748b]">
                    Brand logos (e.g., React, Next.js, Python, MongoDB, Tailwind CSS, Stripe) are the property of
                    their respective trademark owners and are shown strictly for informational and tech-stack
                    attribution purposes.
                  </p>
                </div>
              </div>
            </article>

            {/* Section 4 */}
            <article id="interactive-demos" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Layers className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  4. Interactive Demos & Previews
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                The interactive preview routes (e.g. <code className="font-mono text-xs bg-[#f1f1eb] px-1.5 py-0.5 rounded text-[#fa4d56]">/preview/*</code>)
                are provided as technological demonstrations of real-time front-end UI state, animations, and component design.
              </p>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shrink-0" />
                  <span><strong>Simulated Data:</strong> Financial figures, crypto market tickers, task data, and products displayed in previews are mock demonstrations and must not be relied upon for investment or real-world transactions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#fa4d56] mt-2 shrink-0" />
                  <span><strong>No Financial or Medical Advice:</strong> Prototypes represent software engineering exercises and do not constitute professional advisory services.</span>
                </li>
              </ul>
            </article>

            {/* Section 5 */}
            <article id="client-engagements" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  5. Inquiries & Freelance Engagements
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                When you initiate a project discussion via the contact form or email:
              </p>
              <ul className="space-y-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Confidentiality:</strong> Project outlines, business ideas, and technical requirements shared in mutual correspondence are held strictly confidential.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                  <span><strong>Formal Contracts:</strong> Actual deliverables, intellectual property assignments, timelines, and milestones are documented in mutually signed client agreements prior to commencement.</span>
                </li>
              </ul>
            </article>

            {/* Section 6 */}
            <article id="external-links" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <ExternalLink className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  6. External Links & Third-Party Platforms
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                This website contains hyperlinks to third-party services (such as GitHub, LinkedIn, Twitter/X, and Instagram).
                Sachin Sharma is not responsible for the privacy practices, content, or uptime of third-party platforms.
                We encourage you to inspect their respective terms of service.
              </p>
            </article>

            {/* Section 7 */}
            <article id="disclaimer" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  7. Disclaimer of Warranties
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                This website and all interactive demos, articles, and downloadable assets are provided on an
                <strong className="text-[#090d15]"> &ldquo;as is&rdquo;</strong> and <strong className="text-[#090d15]">&ldquo;as available&rdquo;</strong> basis
                without warranty of any kind, either express or implied, including but not limited to warranties of
                merchantability, fitness for a particular purpose, or non-infringement.
              </p>
              <p className="text-xs text-[#64748b]">
                While every effort is made to maintain 100% bug-free rendering and uptime, no guarantee is made that
                the website will always function without interruptions or errors.
              </p>
            </article>

            {/* Section 8 */}
            <article id="limitation" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <ShieldAlert className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  8. Limitation of Liability
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed">
                To the fullest extent permitted under applicable law, in no event shall Sachin Sharma be liable
                for any indirect, incidental, special, consequential, or punitive damages arising from your access,
                inability to access, or reliance upon the portfolio contents or code prototypes.
              </p>
            </article>

            {/* Section 9 */}
            <article id="governing-law" className="bg-white rounded-2xl border border-[#e2e2da] p-6 sm:p-8 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 text-[#fa4d56] flex items-center justify-center">
                  <Scale className="w-4 h-4" />
                </div>
                <h2 className="font-heading font-bold text-xl text-[#090d15] uppercase tracking-tight">
                  9. Governing Law & Dispute Resolution
                </h2>
              </div>
              <p className="text-sm text-[#475569] leading-relaxed mb-3">
                These Terms shall be interpreted and governed in accordance with the laws of India. Any disputes
                arising out of or in connection with the use of this website shall be subject to the exclusive
                jurisdiction of the competent courts in Delhi, India.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed">
                Prior to formal proceedings, both parties commit to attempting good-faith informal resolution.
              </p>
            </article>

            {/* Section 10: Contact */}
            <article id="contact" className="bg-[#090d15] text-white rounded-2xl p-6 sm:p-8 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#fa4d56]/20 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 font-mono text-xs text-[#fa4d56] font-bold uppercase tracking-wider mb-2">
                  <HelpCircle className="w-4 h-4" />
                  <span>Clarifications & Legal Inquiries</span>
                </div>

                <h2 className="font-heading font-black text-2xl uppercase tracking-tight text-white mb-2">
                  10. Questions & Contact Information
                </h2>

                <p className="text-xs sm:text-sm text-[#cbd5e1] leading-relaxed max-w-xl mb-6">
                  For inquiries regarding terms, licensing, contracting, or custom development engagements:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs">
                  <div className="space-y-1">
                    <span className="text-[#94a3b8] uppercase font-mono text-[10px] block">Point of Contact</span>
                    <p className="font-bold text-white text-sm">Sachin Sharma</p>
                    <p className="text-[#94a3b8] text-xs">officialsachin9910@gmail.com</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[#94a3b8] uppercase font-mono text-[10px] block">Location</span>
                    <p className="font-bold text-white text-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#fa4d56]" /> Delhi, India
                    </p>
                    <p className="text-[#94a3b8] text-xs">Mon - Sat, 9AM - 6PM IST</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#fa4d56] hover:bg-[#e02838] text-white font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-md cursor-pointer"
                  >
                    <span>Connect on Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

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
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </article>

            {/* Navigation Jump to Privacy Policy & Sitemap */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#e2e2da]">
              <Link
                href="/privacy-policy"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white border border-[#e2e2da] hover:border-[#fa4d56] text-[#090d15] hover:text-[#fa4d56] font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-2xs group"
              >
                <span>Read Privacy Policy</span>
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
