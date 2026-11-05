import type { NextConfig } from "next";

/**
 * Next.js Framework Configuration.
 *
 * Configures development indicators and clean URL path rewrites that map section-based
 * landing page routes (e.g., /about, /projects, /services) to the primary landing page
 * root ('/') where client-side smooth scrolling smoothly navigates the visitor to the
 * corresponding anchor ID while preserving clean browser history URLs.
 */
const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      { source: "/home", destination: "/" },
      { source: "/about", destination: "/" },
      { source: "/education", destination: "/" },
      { source: "/services", destination: "/" },
      { source: "/projects", destination: "/" },
      { source: "/skills", destination: "/" },
      { source: "/testimonials", destination: "/" },
      { source: "/blog", destination: "/" },
      { source: "/contact", destination: "/" },
    ];
  },
};

export default nextConfig;
