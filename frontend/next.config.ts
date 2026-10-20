import type { NextConfig } from "next";

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
