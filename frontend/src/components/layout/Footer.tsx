"use client";

import React from "react";
import Image from "next/image";
import {
  Home,
  User,
  Settings,
  GraduationCap,
  Folder,
  FileText,
  Send,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
  ArrowUpRight,
  ArrowUp,
  ChevronRight,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/ui/BrandIcons";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: User },
  { label: "Services", href: "/services", icon: Settings },
  { label: "Education", href: "/education", icon: GraduationCap },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Blog", href: "/blog", icon: FileText },
  { label: "Contact", href: "/contact", icon: Send },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const sectionId = href === "/" ? "home" : href.replace("/", "");
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", href);
    } else {
      window.location.href = href;
    }
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  return (
    <footer className="relative bg-[#faf9f6] text-[#090d15] overflow-hidden border-t border-[#eae8e3]">
      {/* ================= BACKGROUND ARTWORK (Real Mountain Landscape & Red Sun) ================= */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
        aria-hidden="true"
      >
        {/* Soft atmospheric left corner glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#fa4d56]/5 rounded-full blur-3xl" />

        {/* Top-Right Red Corner Shape & Light Wash (behind Let's Connect card area) */}
        <div className="absolute top-0 right-0 w-[420px] sm:w-[520px] h-[380px] sm:h-[440px] pointer-events-none select-none overflow-hidden">
          <svg
            className="absolute top-0 right-0 w-full h-full"
            viewBox="0 0 520 440"
            fill="none"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Corner triangular shape gradient */}
              <linearGradient id="cornerShapeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fa4d56" stopOpacity="0.06" />
                <stop offset="60%" stopColor="#fa4d56" stopOpacity="0.16" />
                <stop offset="100%" stopColor="#fa4d56" stopOpacity="0.25" />
              </linearGradient>

              {/* Diagonal softer accent band */}
              <linearGradient id="diagonalBandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fa4d56" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#fa4d56" stopOpacity="0.10" />
              </linearGradient>
            </defs>

            {/* Diagonal accent band */}
            <path d="M 160 0 L 290 0 L 520 230 L 520 360 Z" fill="url(#diagonalBandGrad)" />

            {/* Corner angled shape */}
            <path d="M 270 0 L 520 0 L 520 250 Z" fill="url(#cornerShapeGrad)" />
          </svg>
        </div>

        {/* Mountain Landscape & Red Sun Image */}
        <div className="absolute left-0 bottom-0 w-full sm:w-[88%] md:w-[78%] lg:w-[68%] xl:w-[60%] max-w-[1100px] pointer-events-none select-none">
          <Image
            src="/images/footer-mountain.png"
            alt="Mountain scenery"
            width={1200}
            height={480}
            className="w-full h-auto object-contain object-left-bottom opacity-95 mix-blend-multiply"
            priority
          />
        </div>
      </div>

      {/* ================= MAIN FOOTER CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6 sm:pb-7 lg:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* ----------------- COLUMN 1: BRAND / BIO ----------------- */}
          <div className="lg:col-span-4 space-y-4">
            {/* Title with Red Dot */}
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 rounded-full bg-[#fa4d56] shrink-0 inline-block shadow-sm" />
              <h2 className="font-heading font-black text-2xl sm:text-3xl tracking-tight text-[#090d15] uppercase">
                SACHIN <span className="text-[#fa4d56]">SHARMA</span>
              </h2>
            </div>

            {/* Role Subtitle */}
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold tracking-wider text-[#64748b] uppercase">
              <span>FULL-STACK SOFTWARE DEVELOPER</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#94a3b8]" />
            </div>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-[#475569] leading-relaxed max-w-sm font-sans">
              Dedicated to engineering clean, reliable, and high-performance
              digital architectures that create real-world impact.
            </p>

            {/* Social Icons + Handwriting Callout */}
            <div className="pt-2 flex items-center gap-6 flex-wrap">
              {/* Social Icons */}
              <div className="flex items-center gap-2.5">
                <a
                  href="https://github.com/toughefforts"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] shadow-xs hover:border-[#090d15] hover:text-[#fa4d56] flex items-center justify-center text-[#334155] transition-all hover:scale-105"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/toughefforts"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] shadow-xs hover:border-[#090d15] hover:text-[#0a66c2] flex items-center justify-center text-[#334155] transition-all hover:scale-105"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                </a>
                <a
                  href="https://x.com/toughefforts"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter / X"
                  className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] shadow-xs hover:border-[#090d15] hover:text-[#fa4d56] flex items-center justify-center text-[#334155] transition-all hover:scale-105"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com/toughefforts"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-xl bg-white border border-[#e2e8f0] shadow-xs hover:border-[#090d15] hover:text-[#e1306c] flex items-center justify-center text-[#334155] transition-all hover:scale-105"
                >
                  <InstagramIcon className="w-4 h-4 text-[#e1306c]" />
                </a>
              </div>

              {/* Handwriting Script Callout */}
              <div className="relative -rotate-6 select-none pl-1">
                <span className="font-script text-xl sm:text-2xl text-[#1e293b] font-bold leading-none block">
                  Let&apos;s
                  <br />
                  Build Together
                </span>
                {/* Red Swoosh Brush Underline */}
                <svg
                  className="w-20 h-2.5 text-[#fa4d56] -mt-0.5"
                  viewBox="0 0 100 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 8 C 25 2, 70 11, 97 4"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ----------------- COLUMN 2: QUICK LINKS ----------------- */}
          <div className="lg:col-span-2 space-y-3">
            <div>
              <h3 className="font-bold text-[15px] sm:text-base text-[#090d15] tracking-tight">
                Quick Links
              </h3>
              <div className="w-6 h-[2.5px] bg-[#fa4d56] rounded-full mt-1.5" />
            </div>

            <ul className="space-y-1.5 pt-1 font-sans text-xs sm:text-[13px]">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className="group flex items-center gap-2.5 py-1 text-[#475569] hover:text-[#fa4d56] transition-colors cursor-pointer"
                    >
                      <IconComponent className="w-3.5 h-3.5 text-[#64748b] group-hover:text-[#fa4d56] transition-colors" />
                      <span className="font-medium group-hover:translate-x-1 transition-transform">{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* ----------------- COLUMN 3: GET IN TOUCH ----------------- */}
          <div className="lg:col-span-3 lg:-ml-6 space-y-3">
            <div>
              <h3 className="font-bold text-[15px] sm:text-base text-[#090d15] tracking-tight">
                Get In Touch
              </h3>
              <div className="w-6 h-[2.5px] bg-[#fa4d56] rounded-full mt-1.5" />
            </div>

            <div className="space-y-3 pt-1">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 border border-[#fecaca] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-[13px] text-[#090d15]">
                    Delhi, India
                  </h4>
                  <p className="text-[11px] text-[#64748b]">
                    Available for remote work
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 border border-[#fecaca] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href="mailto:officialsachin9910@gmail.com"
                    className="font-bold text-xs sm:text-[13px] text-[#090d15] hover:text-[#fa4d56] transition-colors block"
                  >
                    officialsachin9910@gmail.com
                  </a>
                  <p className="text-[11px] text-[#64748b]">Drop me an email</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-[#fee2e2]/60 border border-[#fecaca] text-[#fa4d56] flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <a
                    href="tel:+918810227281"
                    className="font-bold text-xs sm:text-[13px] text-[#090d15] hover:text-[#fa4d56] transition-colors block"
                  >
                    +91 88102 27281
                  </a>
                  <p className="text-[11px] text-[#64748b]">
                    Mon - Sat, 9AM - 6PM
                  </p>
                </div>
              </div>

              {/* Status Indicator / Opportunities Link */}
              <a
                href="#contact"
                onClick={scrollToContact}
                aria-label="Open to exciting opportunities - Contact me"
                className="pt-3 border-t border-[#e2e8f0] flex items-center justify-between group cursor-pointer transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fa4d56] animate-pulse shrink-0 shadow-xs" />
                  <div>
                    <span className="block font-bold text-[11px] text-[#090d15] group-hover:text-[#fa4d56] transition-colors">
                      Open to exciting opportunities
                    </span>
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-[#64748b] group-hover:text-[#090d15] transition-colors">
                      LET&apos;S CREATE SOMETHING AMAZING
                    </span>
                  </div>
                </div>
                <div className="w-6 h-6 rounded-full bg-white border border-[#e2e8f0] group-hover:border-[#fa4d56] group-hover:bg-[#fa4d56] flex items-center justify-center transition-all text-[#94a3b8] group-hover:text-white shadow-xs">
                  <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:-rotate-45" />
                </div>
              </a>
            </div>
          </div>

          {/* ----------------- COLUMN 4: LET'S CONNECT CARD ----------------- */}
          <div className="lg:col-span-3 flex lg:justify-end relative">
            {/* Soft Red Shadow / Ambient Glow blooming behind the card to the right */}
            <div className="absolute -top-3 -right-6 w-80 h-80 bg-gradient-to-br from-[#fa4d56]/28 via-[#fa4d56]/15 to-transparent rounded-full blur-3xl pointer-events-none select-none z-0" />

            <div className="relative z-10 w-full max-w-[310px] rounded-[22px] sm:rounded-[24px] overflow-hidden p-5 bg-[#10131b] text-white shadow-xl border border-white/[0.08] flex flex-col justify-between min-h-[275px]">
              {/* Background Glows, 3D Origami Red Plane & Dotted Loop Trail */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none select-none z-0"
                viewBox="0 0 300 320"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  {/* Rich Vibrant Corner Radial Glow */}
                  <radialGradient id="cardRedGlow" cx="100%" cy="100%" r="72%">
                    <stop offset="0%" stopColor="#fa4d56" stopOpacity="0.82" />
                    <stop offset="30%" stopColor="#e02438" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="#881337" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#10131b" stopOpacity="0" />
                  </radialGradient>

                  {/* Top-Right Ambient Red Hue */}
                  <radialGradient id="cardTopGlow" cx="85%" cy="20%" r="48%">
                    <stop offset="0%" stopColor="#fa4d56" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#10131b" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ambient Red Glows */}
                <rect width="300" height="320" fill="url(#cardTopGlow)" />
                <rect width="300" height="320" fill="url(#cardRedGlow)" />

                {/* Graceful Looping Flight Swirl Trail */}
                <path
                  d="M 251.5 61.5 C 242 74, 230 88, 222 102 C 214 116, 234 126, 244 112 C 250 96, 230 90, 224 108 C 220 135, 244 195, 258 238 C 265 260, 269 274, 267 282"
                  stroke="#ffffff"
                  strokeWidth="1.2"
                  strokeDasharray="2.5 3.5"
                  strokeLinecap="round"
                  strokeOpacity="0.30"
                />
              </svg>

              {/* Real 3D Red Paper Airplane Image Asset */}
              <div className="absolute top-2 right-2.5 w-14 h-14 pointer-events-none select-none z-10">
                <Image
                  src="/images/footer-plane.png"
                  alt="Paper plane"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(250,77,86,0.35)]"
                />
              </div>

              {/* Card Content */}
              <div className="relative z-10">
                {/* Subtitle with accent line */}
                <div className="space-y-0.5">
                  <span className="font-mono text-[9.5px] uppercase font-bold tracking-[0.14em] text-[#94a3b8] block">
                    HAVE A PROJECT IN MIND?
                  </span>
                  <div className="w-6 h-[2px] bg-[#fa4d56] rounded-full mt-1" />
                </div>

                {/* Big Heading */}
                <h3 className="font-editorial font-extrabold text-[23px] sm:text-[25px] text-white tracking-tight leading-[1.08] mt-2">
                  Let&apos;s
                  <br />
                  Connect
                </h3>

                {/* Paragraph */}
                <p className="text-[11px] sm:text-[11.5px] text-[#cbd5e1] leading-[1.5] mt-2 max-w-[230px] font-sans">
                  I&apos;m always open to discussing new opportunities,
                  interesting ideas, or just a friendly chat about technology.
                </p>
              </div>

              {/* Bottom Button + Tags */}
              <div className="relative z-10 mt-4 space-y-3">
                <button
                  onClick={scrollToContact}
                  className="w-fit inline-flex items-center gap-2 px-4 py-2 sm:px-4.5 sm:py-2.5 rounded-xl bg-white text-[#090d15] hover:bg-[#f8fafc] font-bold text-[10.5px] uppercase tracking-wider shadow-md transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer group"
                >
                  <span className="font-mono font-bold tracking-wider">LET&apos;S CONNECT</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#fa4d56] stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                {/* Bottom Tags */}
                <div className="text-[8.5px] font-mono uppercase tracking-[0.16em] text-[#94a3b8] pt-2 border-t border-white/[0.08]">
                  IDEAS &nbsp;|&nbsp; COLLABORATION &nbsp;|&nbsp; IMPACT
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right-Aligned Compact Divider Line & Theme Links at Bottom */}
        <div className="mt-12 sm:mt-14 lg:mt-16 flex flex-col items-end relative z-10 translate-y-3.5 sm:translate-y-4.5">
          <div className="w-full max-w-[320px] sm:max-w-[380px] border-t border-[#e2e8f0] pt-2.5 pb-1 flex items-center justify-center gap-2.5 sm:gap-3.5 text-[#64748b]">
            <a
              href="#privacy"
              className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-wider font-semibold hover:text-[#fa4d56] transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-[#cbd5e1] select-none text-[10px]">|</span>
            <a
              href="#terms"
              className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-wider font-semibold hover:text-[#fa4d56] transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-[#cbd5e1] select-none text-[10px]">|</span>
            <a
              href="#sitemap"
              className="font-mono text-[10px] sm:text-[10.5px] uppercase tracking-wider font-semibold hover:text-[#fa4d56] transition-colors"
            >
              SiteMap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
