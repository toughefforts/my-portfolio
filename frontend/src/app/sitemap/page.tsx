"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Compass,
  Search,
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Layers,
  FileText,
  FolderGit2,
  GraduationCap,
  ShieldCheck,
  Scale,
  Sparkles,
  Check,
  Copy,
  Printer,
  Globe,
  Home,
  User,
  Settings,
  Mail,
  Folder,
  Send,
  Eye,
  Terminal,
} from "lucide-react";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { projects } from "@/data/projects";
import { educationSlides } from "@/data/education";
import { articlesData } from "@/data/articles";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/ui/BrandIcons";

interface SiteRouteItem {
  title: string;
  description: string;
  path: string;
  category: "main" | "projects" | "education" | "blog" | "legal" | "social";
  typeBadge: string;
  isExternal?: boolean;
}

const siteRoutes: SiteRouteItem[] = [
  // MAIN SECTIONS
  {
    title: "Home / Hero Section",
    description: "Welcome introduction, core engineering philosophy, and quick connect CTA.",
    path: "/",
    category: "main",
    typeBadge: "Core Landing",
  },
  {
    title: "About Sachin Sharma",
    description: "Developer journey, experience narrative, system architecture focus & passion.",
    path: "/about",
    category: "main",
    typeBadge: "Section Anchor",
  },
  {
    title: "Services & Capabilities",
    description: "Full-Stack Development, System Architecture, UI/UX Engineering, and API Design.",
    path: "/services",
    category: "main",
    typeBadge: "Section Anchor",
  },
  {
    title: "Education & Qualifications",
    description: "Academic foundations, degree programs, technical diplomas, and certifications.",
    path: "/education",
    category: "main",
    typeBadge: "Section Anchor",
  },
  {
    title: "Featured Projects Showcase",
    description: "Curated collection of production-grade web applications and platforms.",
    path: "/projects",
    category: "main",
    typeBadge: "Section Anchor",
  },
  {
    title: "Skills & Technical Stack",
    description: "Interactive technology sphere, front-end, back-end, database, and devops proficiencies.",
    path: "/skills",
    category: "main",
    typeBadge: "Section Anchor",
  },
  {
    title: "Client Testimonials & Feedback",
    description: "Endorsements, collaboration testimonials, and client feedback records.",
    path: "/testimonials",
    category: "main",
    typeBadge: "Section Anchor",
  },
  {
    title: "Engineering Blog & Articles",
    description: "Technical writeups, design deep dives, and system architecture case studies.",
    path: "/blog",
    category: "main",
    typeBadge: "Section Anchor",
  },
  {
    title: "Contact & Project Inquiries",
    description: "Interactive message dispatch form, email channel, location, and office availability.",
    path: "/contact",
    category: "main",
    typeBadge: "Section Anchor",
  },

  // INTERACTIVE PROJECT PREVIEWS
  ...projects.map((p) => ({
    title: `${p.title} — Interactive App Preview`,
    description: p.description,
    path: `/preview/${p.id}`,
    category: "projects" as const,
    typeBadge: "Live App Preview",
  })),

  // EDUCATION MILESTONES
  ...educationSlides.map((e) => ({
    title: `${e.code}: ${e.title}`,
    description: `${e.shortInstitution} (${e.duration}) — ${e.coreAreas}`,
    path: `/education/${e.id}`,
    category: "education" as const,
    typeBadge: "Curriculum Detail",
  })),

  // BLOG ARTICLES
  ...articlesData.map((a) => ({
    title: a.title,
    description: a.excerpt || a.subtitle,
    path: `/blog/${a.slug || a.id}`,
    category: "blog" as const,
    typeBadge: `${a.category} Article`,
  })),

  // LEGAL & DIRECTORY
  {
    title: "Privacy Policy",
    description: "Data handling transparency, rights under GDPR/CCPA, cookie policies, and security.",
    path: "/privacy-policy",
    category: "legal",
    typeBadge: "Legal Document",
  },
  {
    title: "Terms of Service",
    description: "Portfolio usage terms, code licensing guidelines, project previews disclaimer, and law.",
    path: "/terms-of-service",
    category: "legal",
    typeBadge: "Legal Document",
  },
  {
    title: "Interactive SiteMap Directory",
    description: "Comprehensive navigational structure and index of all portfolio pages and assets.",
    path: "/sitemap",
    category: "legal",
    typeBadge: "Directory Index",
  },
  {
    title: "Machine-Readable XML Sitemap",
    description: "Official search-engine indexable sitemap conforming to sitemaps.org XML standards.",
    path: "/sitemap.xml",
    category: "legal",
    typeBadge: "SEO Protocol",
  },

  // SOCIAL CHANNELS
  {
    title: "GitHub Profile (@toughefforts)",
    description: "Public repositories, open-source contributions, code commits, and project stars.",
    path: "https://github.com/toughefforts",
    category: "social",
    typeBadge: "External Channel",
    isExternal: true,
  },
  {
    title: "LinkedIn Profile (@toughefforts)",
    description: "Professional background, career recommendations, and networking updates.",
    path: "https://www.linkedin.com/in/toughefforts",
    category: "social",
    typeBadge: "External Channel",
    isExternal: true,
  },
  {
    title: "Twitter / X Profile (@toughefforts)",
    description: "Web development insights, technology commentary, and software experiments.",
    path: "https://x.com/toughefforts",
    category: "social",
    typeBadge: "External Channel",
    isExternal: true,
  },
  {
    title: "Instagram Profile (@toughefforts)",
    description: "Visual design sneak-peeks, creative workspace moments, and lifestyle highlights.",
    path: "https://instagram.com/toughefforts",
    category: "social",
    typeBadge: "External Channel",
    isExternal: true,
  },
];

const categoryTabs = [
  { id: "all", label: "All Routes" },
  { id: "main", label: "Main Sections" },
  { id: "projects", label: "Projects & Previews" },
  { id: "education", label: "Education" },
  { id: "blog", label: "Blog & Articles" },
  { id: "legal", label: "Legal & Info" },
  { id: "social", label: "Social Links" },
];

export default function SitemapPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [copiedPath, setCopiedPath] = useState<string | null>(null);

  const filteredRoutes = useMemo(() => {
    return siteRoutes.filter((route) => {
      const matchesCategory =
        selectedCategory === "all" || route.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        route.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.path.toLowerCase().includes(searchQuery.toLowerCase()) ||
        route.typeBadge.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const handleCopy = (path: string) => {
    if (typeof window !== "undefined") {
      const fullUrl = path.startsWith("http") ? path : `${window.location.origin}${path}`;
      navigator.clipboard.writeText(fullUrl);
      setCopiedPath(path);
      setTimeout(() => setCopiedPath(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f8f5] text-[#090d15] pt-28 pb-20 selection:bg-[#fa4d56] selection:text-white">
      {/* Background Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(#e2e2da_1px,transparent_1px)] [background-size:24px_24px] opacity-40 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ================= TOP BREADCRUMB & ACTIONS ================= */}
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

            <div className="flex items-center gap-3">
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#e2e2da] hover:border-[#090d15] text-[#334155] font-mono text-xs uppercase tracking-wider transition-all shadow-2xs hover:scale-102"
              >
                <Terminal className="w-3.5 h-3.5 text-[#fa4d56]" />
                <span>Raw XML Sitemap</span>
                <ExternalLink className="w-3 h-3 text-[#94a3b8]" />
              </a>
            </div>
          </div>
        </RevealAnimation>

        {/* ================= HERO HEADER ================= */}
        <RevealAnimation delay={0.05}>
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#e2e2da] p-6 sm:p-10 lg:p-12 mb-10 shadow-xs relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#fa4d56]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#fa4d56]/10 text-[#fa4d56] font-mono text-xs font-bold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5" />
              <span>Full Portfolio Architecture</span>
            </div>

            <h1 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#090d15] leading-tight mb-4">
              Site<span className="text-[#fa4d56]">Map</span> Directory
            </h1>

            <p className="font-sans text-sm sm:text-base text-[#475569] max-w-2xl leading-relaxed">
              Explore the complete hierarchy and accessible pages of Sachin Sharma&apos;s portfolio. Jump
              directly to live project previews, educational case studies, engineering articles, legal notices,
              and connect channels.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-[#f1f1eb] font-mono text-xs">
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Total Index Routes</span>
                <span className="font-bold text-[#090d15] text-lg sm:text-xl">{siteRoutes.length} Nodes</span>
              </div>
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Interactive Previews</span>
                <span className="font-bold text-[#fa4d56] text-lg sm:text-xl">{projects.length} Apps</span>
              </div>
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Education Programs</span>
                <span className="font-bold text-[#090d15] text-lg sm:text-xl">{educationSlides.length} Curriculums</span>
              </div>
              <div>
                <span className="block text-[#94a3b8] uppercase text-[10px] tracking-wider">Indexed Status</span>
                <span className="font-bold text-emerald-600 text-lg sm:text-xl flex items-center gap-1">
                  <Check className="w-4 h-4" /> 100% Live
                </span>
              </div>
            </div>
          </div>
        </RevealAnimation>

        {/* ================= CONTROLS: SEARCH & CATEGORY FILTER ================= */}
        <RevealAnimation delay={0.1}>
          <div className="bg-white rounded-2xl border border-[#e2e2da] p-4 sm:p-6 mb-8 shadow-2xs space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
              <input
                type="text"
                placeholder="Search any page, route path, keyword (e.g. 'ecommerce', 'bca', 'privacy', 'blog')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-[#faf9f6] border border-[#e2e2da] rounded-xl text-sm text-[#090d15] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#fa4d56] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-[#94a3b8] hover:text-[#090d15] cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categoryTabs.map((tab) => {
                const isSelected = selectedCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className={`shrink-0 px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-[#090d15] text-white shadow-xs"
                        : "bg-[#faf9f6] border border-[#e2e2da] text-[#64748b] hover:text-[#090d15] hover:border-[#090d15]"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </RevealAnimation>

        {/* ================= RESULTS GRID ================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#64748b] px-1">
            <span>SHOWING {filteredRoutes.length} OF {siteRoutes.length} ROUTES</span>
            {selectedCategory !== "all" && (
              <span className="uppercase text-[#fa4d56] font-bold">Filtered by: {selectedCategory}</span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRoutes.map((item, index) => {
              const isCopied = copiedPath === item.path;

              return (
                <div
                  key={`${item.path}-${index}`}
                  className="bg-white rounded-2xl border border-[#e2e2da] hover:border-[#fa4d56] p-5 shadow-2xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Accent Glow */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#fa4d56]/5 rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-300" />

                  <div>
                    {/* Header: Badge & Quick Copy */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#faf9f6] border border-[#e2e2da] text-[10px] font-mono font-bold uppercase tracking-wider text-[#475569]">
                        {item.typeBadge}
                      </span>

                      <button
                        onClick={() => handleCopy(item.path)}
                        className="text-[#94a3b8] hover:text-[#090d15] p-1 rounded transition-colors cursor-pointer"
                        title="Copy full URL"
                      >
                        {isCopied ? (
                          <span className="text-[10px] font-mono text-emerald-600 font-bold">Copied!</span>
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>

                    {/* Title */}
                    <h3 className="font-heading font-bold text-base text-[#090d15] group-hover:text-[#fa4d56] transition-colors line-clamp-1 mb-1.5">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#64748b] line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Footer: Route Path & Visit Action */}
                  <div className="pt-3 border-t border-[#f1f1eb] flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#94a3b8] truncate max-w-[170px]" title={item.path}>
                      {item.path}
                    </span>

                    {item.isExternal ? (
                      <a
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#090d15] group-hover:text-[#fa4d56] transition-colors"
                      >
                        <span>Open</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <Link
                        href={item.path}
                        className="inline-flex items-center gap-1 font-mono text-xs font-bold text-[#090d15] group-hover:text-[#fa4d56] transition-colors"
                      >
                        <span>Visit</span>
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredRoutes.length === 0 && (
            <div className="bg-white rounded-2xl border border-[#e2e2da] p-12 text-center">
              <Compass className="w-10 h-10 text-[#94a3b8] mx-auto mb-3 animate-bounce" />
              <h3 className="font-heading font-bold text-lg text-[#090d15] uppercase tracking-tight mb-1">
                No matching pages found
              </h3>
              <p className="text-xs text-[#64748b] mb-4">
                We couldn&apos;t find any routes matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 rounded-xl bg-[#090d15] text-white font-mono text-xs uppercase tracking-wider font-semibold cursor-pointer"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>

        {/* ================= BOTTOM QUICK JUMP FOOTER ================= */}
        <div className="mt-12 pt-8 border-t border-[#e2e2da] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/privacy-policy"
              className="font-mono text-xs text-[#64748b] hover:text-[#fa4d56] transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-[#cbd5e1]">•</span>
            <Link
              href="/terms-of-service"
              className="font-mono text-xs text-[#64748b] hover:text-[#fa4d56] transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-[#cbd5e1]">•</span>
            <Link
              href="/contact"
              className="font-mono text-xs text-[#64748b] hover:text-[#fa4d56] transition-colors"
            >
              Contact Sachin
            </Link>
          </div>

          <p className="font-mono text-xs text-[#94a3b8]">
            Updated © {new Date().getFullYear()} Sachin Sharma. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
