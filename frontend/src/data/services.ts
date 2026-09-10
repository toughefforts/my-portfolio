import type { ServiceItem } from "@/types";

export const services: ServiceItem[] = [
  {
    number: "01.",
    icon: "code",
    title: "WEB DEVELOPMENT",
    description:
      "Modern, responsive and high-performance websites using latest technologies.",
    annotation: "Build Modern Web",
    tags: ["Fast", "Responsive", "SEO Friendly"],
    image: "/images/services/web-dev.png",
    hasSparkle: true,
    sparklePos: "left",
  },
  {
    number: "02.",
    icon: "palette",
    title: "UI/UX DESIGN",
    description:
      "Clean and user-focused designs that create better digital experiences.",
    annotation: "Design With Purpose",
    tags: ["User Research", "Wireframing", "Modern UI"],
    image: "/images/services/ui-ux.png",
    hasSparkle: true,
    sparklePos: "right",
  },
  {
    number: "03.",
    icon: "rocket",
    title: "LANDING PAGE",
    description:
      "High-converting landing pages for products, startups, and businesses.",
    annotation: "Launch Your Idea",
    tags: ["Conversion Focused", "Modern Design", "Fast Loading"],
    image: "/images/services/landing-page.png",
  },
  {
    number: "04.",
    icon: "layout",
    title: "RESPONSIVE DESIGN",
    description:
      "Seamless experience across all devices with a mobile-first approach.",
    annotation: "Seamless Everywhere",
    tags: ["Mobile First", "Adaptive UI", "Better UX"],
    image: "/images/services/responsive-design.png",
    hasSparkle: true,
    sparklePos: "left",
  },
];

