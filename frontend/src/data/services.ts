export interface ServiceItem {
  number: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  alt: string;
  annotation?: string;
  tags?: string[];
  hasSparkle?: boolean;
  sparklePos?: "left" | "right" | "top-left" | "top-right";
}

export const services: ServiceItem[] = [
  {
    number: "01",
    title: "Web Development",
    description: "Modern, responsive websites\nusing latest technologies.",
    icon: "/images/services/web-dev.png",
    image: "/images/services/web-dev.jpg",
    alt: "Web Development coding visual",
    annotation: "Build Modern Web",
    tags: ["Fast", "Responsive", "SEO Friendly"],
    hasSparkle: true,
    sparklePos: "left",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description: "User-focused designs\nfor better experiences.",
    icon: "/images/services/ui-ux.png",
    image: "/images/services/ui-ux.jpg",
    alt: "UI/UX Design visual",
    annotation: "Design With Purpose",
    tags: ["User Research", "Wireframing", "Modern UI"],
    hasSparkle: true,
    sparklePos: "right",
  },
  {
    number: "03",
    title: "Landing Page",
    description: "High-converting pages\nfor your business.",
    icon: "/images/services/landing-page.png",
    image: "/images/services/landing-page.jpg",
    alt: "Landing Page conversion visual",
    annotation: "Launch Your Idea",
    tags: ["Conversion Focused", "Modern Design", "Fast Loading"],
  },
  {
    number: "04",
    title: "E-commerce Solutions",
    description: "Scalable online stores\nthat sell.",
    icon: "/images/services/ecommerce.png",
    image: "/images/services/ecommerce.jpg",
    alt: "E-commerce Solutions visual",
    annotation: "Scale Your Sales",
    tags: ["Payments", "Catalog", "Checkout"],
    hasSparkle: true,
    sparklePos: "right",
  },
  {
    number: "05",
    title: "API Integration",
    description: "Connect and automate\nyour tools.",
    icon: "/images/services/api-integration.png",
    image: "/images/services/api-integration.jpg",
    alt: "API Integration visual",
    annotation: "Automate Workflows",
    tags: ["Fast APIs", "Webhooks", "Integrations"],
  },
  {
    number: "06",
    title: "Responsive Design",
    description: "Seamless experience\nacross all devices.",
    icon: "/images/services/responsive-design.png",
    image: "/images/services/responsive-design.jpg",
    alt: "Responsive Design multi-device visual",
    annotation: "Seamless Everywhere",
    tags: ["Mobile First", "Adaptive UI", "Better UX"],
    hasSparkle: true,
    sparklePos: "left",
  },
];
