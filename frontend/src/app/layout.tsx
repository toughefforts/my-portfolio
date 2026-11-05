import type { Metadata } from "next";
import { Inter, Oswald, Caveat, Plus_Jakarta_Sans } from "next/font/google";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Preloader from "@/components/animations/Preloader";
import CustomCursor from "@/components/animations/CustomCursor";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

/**
 * Primary Google Font configurations utilizing CSS variable bindings
 * for high-performance zero-CLS variable typography.
 */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/**
 * Comprehensive SEO Metadata & OpenGraph configurations.
 */
export const metadata: Metadata = {
  title: "Sachin Sharma — Full Stack Web Developer & Software Engineer",
  description:
    "Editorial & Modern Software Developer Portfolio showcasing Full-Stack Web Development, System Architecture, and Interactive Design by Sachin Sharma.",
  keywords: [
    "Sachin Sharma",
    "Full Stack Web Developer",
    "Software Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Python",
    "FastAPI",
    "Portfolio",
  ],
  authors: [{ name: "Sachin Sharma" }],
  openGraph: {
    title: "Sachin Sharma — Full Stack Web Developer",
    description: "Full Stack Web Developer & Software Engineer Portfolio",
    type: "website",
    locale: "en_US",
  },
};

/**
 * Root Application Layout.
 *
 * Wraps every route in global font classes, smooth inertia scrolling (Lenis),
 * an editorial interactive custom cursor, initial preloader lifecycle,
 * persistent header navigation, and global footer.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${oswald.variable} ${caveat.variable} ${jakarta.variable} scroll-smooth antialiased`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-[#f8f8f5] text-[#090d15] selection:bg-[#fa4d56] selection:text-white"
      >
        {/* Interactive Custom Magnetic Cursor */}
        <CustomCursor />

        {/* First-load Session Preloader Animation */}
        <Preloader />

        {/* Inertia Smooth Scrolling Container */}
        <SmoothScroll>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
