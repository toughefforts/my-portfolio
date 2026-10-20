export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  icon?: string;
  image: string;
  alt: string;
  technologies: string[];
  accentColor: string;
  badgeBg: string;
  badgeTextColor: string;
  doodleText?: string;
  annotation?: string;
  tags?: string[];
  hasSparkle?: boolean;
  sparklePos?: "left" | "right" | "top-left" | "top-right";
}

export const services: ServiceItem[] = [
  {
    id: "web-dev",
    number: "01",
    title: "WEB DEVELOPMENT",
    category: "Development",
    description: "Full-stack websites & web apps built with HTML5, CSS3, JavaScript, PHP, and MySQL database.",
    icon: "/images/services/web-dev.png",
    image: "/images/services/web-dev.png",
    alt: "Web Development 3D neon code editor over red ink splash",
    technologies: ["HTML5", "CSS3", "JAVASCRIPT", "PHP", "MYSQL"],
    accentColor: "#fa4d56",
    badgeBg: "bg-[#fee2e2]",
    badgeTextColor: "text-[#ef4444]",
    doodleText: "Code Fast Scale",
    tags: ["PHP & MySQL Backend", "Modern JavaScript", "Semantic HTML & CSS"],
    annotation: "Full-Stack Web & DB",
    hasSparkle: true,
    sparklePos: "left",
  },
  {
    id: "ui-ux",
    number: "02",
    title: "UI/UX DESIGN",
    category: "Design",
    description: "User-centric design systems, clickable prototypes, and modern interfaces that maximize user engagement.",
    icon: "/images/services/ui-ux.png",
    image: "/images/services/ui-ux.png",
    alt: "UI/UX Design neon creative design workspace with interface elements",
    technologies: ["FIGMA", "DESIGN SYSTEMS", "PROTOTYPING", "WIREFRAMES"],
    accentColor: "#8b5cf6",
    badgeBg: "bg-[#ede9fe]",
    badgeTextColor: "text-[#8b5cf6]",
    doodleText: "Design With Purpose",
    tags: ["User Research", "Wireframing & Prototypes", "Design System"],
    annotation: "Design With Purpose",
    hasSparkle: true,
    sparklePos: "right",
  },
  {
    id: "landing-page",
    number: "03",
    title: "LANDING PAGES",
    category: "Design",
    description: "High-converting promotional landing pages crafted with HTML5, CSS3, JavaScript, and smooth animations.",
    icon: "/images/services/landing-page.png",
    image: "/images/services/landing-page.png",
    alt: "Landing Pages green growth conversion analytics dashboard",
    technologies: ["HTML5", "CSS3", "JAVASCRIPT", "ANIMATIONS"],
    accentColor: "#10b981",
    badgeBg: "bg-[#d1fae5]",
    badgeTextColor: "text-[#10b981]",
    doodleText: "Convert Scale Grow",
    tags: ["High Conversion Rate", "Interactive JavaScript", "Pixel-Perfect CSS3"],
    annotation: "Launch Your Idea",
  },
  {
    id: "ecommerce",
    number: "04",
    title: "E-COMMERCE",
    category: "E-Commerce",
    description: "Scalable online stores with frictionless checkout, inventory systems, and secure payment processing.",
    icon: "/images/services/ecommerce.png",
    image: "/images/services/ecommerce.png",
    alt: "E-Commerce AuraStep sneaker showcase store interface",
    technologies: ["PHP", "MYSQL", "STRIPE", "SHOPIFY"],
    accentColor: "#3b82f6",
    badgeBg: "bg-[#dbeafe]",
    badgeTextColor: "text-[#3b82f6]",
    doodleText: "Buy Sell Grow",
    tags: ["Frictionless Checkout", "Secure Payments", "Inventory Management"],
    annotation: "Scale Your Sales",
    hasSparkle: true,
    sparklePos: "right",
  },
  {
    id: "api-integration",
    number: "05",
    title: "API & DATABASE INTEGRATION",
    category: "Solutions",
    description: "Seamless REST & GraphQL APIs, automated webhooks, PHP backends, and secure MySQL database architecture.",
    icon: "/images/services/api-integration.png",
    image: "/images/services/api-integration.png",
    alt: "API Integration futuristic API hub with golden tech splash",
    technologies: ["PHP", "MYSQL", "REST APIS", "GRAPHQL"],
    accentColor: "#f59e0b",
    badgeBg: "bg-[#fef3c7]",
    badgeTextColor: "text-[#d97706]",
    doodleText: "Automate Workflows",
    tags: ["PHP & MySQL Sync", "Custom Endpoints", "Database Management"],
    annotation: "Automate Workflows",
  },
  {
    id: "responsive-design",
    number: "06",
    title: "RESPONSIVE APPS",
    category: "Development",
    description: "Multi-screen pixel-perfect responsiveness ensuring consistent, intuitive UX across all devices and resolutions.",
    icon: "/images/services/responsive-design.png",
    image: "/images/services/responsive-design.png",
    alt: "Responsive Apps multi-device tech mockup with cyan modern interface",
    technologies: ["HTML5", "CSS3", "JAVASCRIPT", "MOBILE FIRST"],
    accentColor: "#06b6d4",
    badgeBg: "bg-[#cffafe]",
    badgeTextColor: "text-[#0891b2]",
    doodleText: "Seamless Everywhere",
    tags: ["Mobile-First Approach", "Fluid Breakpoints", "Cross-Browser Tested"],
    annotation: "Seamless Everywhere",
    hasSparkle: true,
    sparklePos: "left",
  },
];
