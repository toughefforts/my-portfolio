import type { BlogPost } from "@/types";

export const blogPosts: BlogPost[] = [
  {
    id: "blog-1",
    title: "Design Unraveled: Behind the Scenes of UI/UX Magic",
    category: "Design",
    date: "25 July 2024",
    image: "/images/blog/blog-1.jpg",
    excerpt:
      "Exploring the creative process behind building intuitive and visually stunning user interfaces.",
    slug: "design-unraveled-uiux-magic",
  },
  {
    id: "blog-2",
    title: "Beyond Aesthetics: Crafting Intuitive UX",
    category: "Development",
    date: "18 July 2024",
    image: "/images/blog/blog-2.jpg",
    excerpt:
      "How modern software engineering combines design principles with functional code architecture.",
    slug: "beyond-aesthetics-crafting-intuitive-ux",
  },
  {
    id: "blog-3",
    title: "Pixels & Insights: Unveiling the Art of UI/UX",
    category: "UI/UX",
    date: "12 July 2024",
    image: "/images/blog/blog-3.jpg",
    excerpt:
      "A deep dive into design systems, typography scales, and component frameworks.",
    slug: "pixels-insights-art-of-uiux",
  },
];
