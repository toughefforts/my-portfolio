import type { BlogPost } from "@/types";

/**
 * Standardized blog post metadata items.
 * Maps article overview information for landing cards and category listings.
 */
export const blogPosts: BlogPost[] = [
  // ================= DESIGN =================
  {
    id: "blog-1",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    category: "Design",
    date: "25 July 2024",
    image: "/images/blogs/blog1/design-workspace.webp",
    excerpt:
      "Exploring the creative process behind building intuitive and visually stunning user interfaces.",
    slug: "design-unraveled-uiux-magic",
  },
  {
    id: "blog-2",
    title: "Minimalist Systems: Crafting Timeless Digital Identities",
    category: "Design",
    date: "14 August 2024",
    image: "/images/blogs/blog2/minimalist-branding.webp",
    excerpt:
      "How reductionist aesthetics and intentional negative space drive user retention and brand authority.",
    slug: "minimalist-systems-timeless-identities",
  },
  {
    id: "blog-3",
    title: "Color Theory: Psychology Behind High-Contrast Palettes",
    category: "Design",
    date: "28 August 2024",
    image: "/images/blogs/blog3/color-palette-lab.webp",
    excerpt:
      "Decoding how strategic high-contrast accents and curated dark modes guide cognitive attention.",
    slug: "color-theory-high-contrast-palettes",
  },

  // ================= DEVELOPMENT =================
  {
    id: "blog-4",
    title: "Beyond Aesthetics: Crafting Intuitive UX",
    category: "Development",
    date: "18 July 2024",
    image: "/images/blogs/blog4/code-architecture.webp",
    excerpt:
      "How modern software engineering combines design principles with functional code architecture.",
    slug: "beyond-aesthetics-crafting-intuitive-ux",
  },
  {
    id: "blog-5",
    title: "Next.js Runtimes: Maximizing Hybrid Edge Performance",
    category: "Development",
    date: "05 August 2024",
    image: "/images/blogs/blog5/edge-architecture.webp",
    excerpt:
      "Benchmarking server components, streaming SSR, and edge middleware for sub-second page loads.",
    slug: "nextjs-runtimes-hybrid-edge-performance",
  },
  {
    id: "blog-6",
    title: "TypeScript Mastery: Advanced Patterns for Modern Apps",
    category: "Development",
    date: "20 August 2024",
    image: "/images/blogs/blog6/type-system.webp",
    excerpt:
      "Leveraging template literal types, conditional generics, and branded types for bulletproof codebases.",
    slug: "typescript-mastery-advanced-patterns",
  },

  // ================= UI/UX =================
  {
    id: "blog-7",
    title: "Pixels & Insights: Unveiling the Art of UI/UX",
    category: "UI/UX",
    date: "12 July 2024",
    image: "/images/blogs/blog7/design-tokens.webp",
    excerpt:
      "A deep dive into design systems, typography scales, and scalable component frameworks.",
    slug: "pixels-insights-art-of-uiux",
  },
  {
    id: "blog-8",
    title: "Micro-Interactions: The Invisible Details of Retention",
    category: "UI/UX",
    date: "02 August 2024",
    image: "/images/blogs/blog8/gesture-animation.webp",
    excerpt:
      "Crafting fluid tactile feedback, magnetic button states, and smooth gesture transitions.",
    slug: "micro-interactions-details-of-retention",
  },
  {
    id: "blog-9",
    title: "Accessibility First: Designing Experiences for Everyone",
    category: "UI/UX",
    date: "16 August 2024",
    image: "/images/blogs/blog9/inclusive-design.webp",
    excerpt:
      "Achieving WCAG AAA compliance without sacrificing high-end typography and immersive visual polish.",
    slug: "accessibility-first-designing-experiences",
  },

  // ================= ARCHITECTURE =================
  {
    id: "blog-10",
    title: "System Scalability: Architecting Resilient Web Platforms",
    category: "Architecture",
    date: "10 July 2024",
    image: "/images/blogs/blog10/distributed-caching.webp",
    excerpt:
      "Deconstructing distributed caching, event-driven pipelines, and high-throughput micro-frontends.",
    slug: "system-scalability-resilient-platforms",
  },
  {
    id: "blog-11",
    title: "State Orchestration: Concurrency Patterns in Client Apps",
    category: "Architecture",
    date: "24 July 2024",
    image: "/images/blogs/blog11/atomic-stores.webp",
    excerpt:
      "Comparing atomic stores, signal reactive paradigms, and optimistic mutation rollback pipelines.",
    slug: "state-orchestration-concurrency-patterns",
  },
  {
    id: "blog-12",
    title: "Distributed Caching: Zero-Downtime Data Synchronization",
    category: "Architecture",
    date: "11 August 2024",
    image: "/images/blogs/blog12/redis-clusters.webp",
    excerpt:
      "Designing Redis cache invalidation strategies and edge geo-replication for global low latency.",
    slug: "distributed-caching-zero-downtime",
  },
];
