import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    description: "A modern task management app with Kanban boards, sprint tracking, and team collaboration features.",
    image: "/images/projects/taskflow-preview.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ecommerce",
    title: "E-Commerce",
    description: "A full-stack e-commerce platform with product management, cart system, and payment integration.",
    image: "/images/projects/ecommerce-preview.jpg",
    technologies: ["Next.js", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ai-chatbot",
    title: "AI ChatBot",
    description: "An AI-powered chatbot solution with real-time code generation, context awareness, and multi-model support.",
    image: "/images/projects/aichatbot-preview.jpg",
    technologies: ["Python", "OpenAI", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
