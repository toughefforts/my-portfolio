"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface CountryNode {
  name: string;
  left: string;
  top: string;
}

const MAIN_COUNTRIES: CountryNode[] = [
  {
    name: "United States",
    left: "19.5%",
    top: "42.0%",
  },
  {
    name: "Canada",
    left: "19.5%",
    top: "27.5%",
  },
  {
    name: "United Kingdom",
    left: "44.3%",
    top: "34.2%",
  },
  {
    name: "Russia",
    left: "72.8%",
    top: "27.2%",
  },
  {
    name: "Japan",
    left: "84.8%",
    top: "42.0%",
  },
  {
    name: "Singapore",
    left: "75.2%",
    top: "58.2%",
  },
  {
    name: "Australia",
    left: "82.8%",
    top: "73.2%",
  },
  {
    name: "Brazil",
    left: "30.8%",
    top: "63.5%",
  },
];

// Curved arc paths connecting Delhi, India (x: 656, y: 191) to all country nodes
const CONNECTION_PATHS = [
  { target: "United States", d: "M 656 191 Q 425 260 195 173" },
  { target: "Canada", d: "M 656 191 Q 425 25 195 113" },
  { target: "United Kingdom", d: "M 656 191 Q 550 210 443 141" },
  { target: "Russia", d: "M 656 191 Q 692 110 728 112" },
  { target: "Japan", d: "M 656 191 Q 752 120 848 173" },
  { target: "Singapore", d: "M 656 191 Q 725 200 752 239" },
  { target: "Australia", d: "M 656 191 Q 820 210 828 301" },
  { target: "Brazil", d: "M 656 191 Q 482 280 308 261" },
];

/**
 * Interactive Dotted World Map Visualization.
 *
 * Displays global telecommunication and remote availability, drawing animated dotted SVG
 * bezier curves originating from Delhi, India to international client hubs with hover tooltips.
 */
export default function WorldMapVisual() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <div className="relative w-full aspect-[1956/804] min-h-[260px] sm:min-h-[300px] md:min-h-[340px] flex items-center justify-center select-none">
      {/* Clean Dotted World Map Image */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-45 pointer-events-none">
        <Image
          src="/images/contact/world-map-dots.png"
          alt="World Map"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 650px"
          className="object-contain"
        />
      </div>

      {/* Red Dotted Connection Lines from India to other countries */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
        viewBox="0 0 1000 411"
        preserveAspectRatio="none"
      >
        {CONNECTION_PATHS.map((path) => {
          const isHighlighted = activeTooltip === path.target;
          return (
            <path
              key={path.target}
              d={path.d}
              fill="none"
              stroke="#fe3130"
              strokeWidth={isHighlighted ? "1.6" : "1.2"}
              strokeDasharray="3 4"
              strokeOpacity={isHighlighted ? "1" : "0.55"}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          );
        })}
      </svg>

      {/* Main Big Countries Red Circle Dots */}
      {MAIN_COUNTRIES.map((country) => (
        <div
          key={country.name}
          className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer z-20"
          style={{ left: country.left, top: country.top }}
          onMouseEnter={() => setActiveTooltip(country.name)}
          onMouseLeave={() => setActiveTooltip(null)}
        >
          {/* Pulsing red ripple wave */}
          <span
            className="absolute -inset-1.5 rounded-full bg-[#fe3130]/15 animate-ping pointer-events-none"
            style={{ animationDuration: "3s" }}
          />

          {/* Faded dashed circle border */}
          <span className="absolute -inset-1 rounded-full border border-dashed border-[#fe3130]/50 pointer-events-none group-hover:scale-110 group-hover:border-[#fe3130]/80 transition-all duration-200" />

          {/* Solid Red Circle Dot */}
          <div className="relative w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#fe3130] shadow-[0_0_6px_rgba(254,49,48,0.8)] group-hover:scale-125 transition-transform duration-200" />

          {/* Tooltip on Hover showing country name */}
          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-200 pointer-events-none z-50">
            <div className="bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-sans font-bold px-3 py-1.5 rounded-xl shadow-2xl border border-white/20 whitespace-nowrap flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#fe3130] shadow-[0_0_6px_rgba(254,49,48,0.8)]" />
              <span>{country.name}</span>
            </div>
            {/* Tooltip beak */}
            <div className="w-2 h-2 bg-slate-900/85 rotate-45 mx-auto -mt-1 border-r border-b border-white/20" />
          </div>
        </div>
      ))}

      {/* Delhi Location Symbol (Red MapPin Hub) */}
      <div
        className="absolute -translate-x-1/2 -translate-y-full group cursor-pointer z-30"
        style={{ left: "65.6%", top: "46.5%" }}
        onMouseEnter={() => setActiveTooltip("Delhi, India")}
        onMouseLeave={() => setActiveTooltip(null)}
      >
        {/* India Base Dot & Dashed Border (Green Hub) */}
        <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 flex items-center justify-center">
          {/* Pulsing green ripple wave */}
          <span
            className="absolute -inset-1.5 rounded-full bg-[#10b981]/20 animate-ping pointer-events-none"
            style={{ animationDuration: "3s" }}
          />

          {/* Faded dashed circle border */}
          <span className="absolute -inset-1 rounded-full border border-dashed border-[#10b981]/60 pointer-events-none group-hover:scale-110 group-hover:border-[#10b981] transition-all duration-200" />

          {/* Solid Green Circle Dot */}
          <div className="relative w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#10b981] shadow-[0_0_6px_rgba(16,185,129,0.9)]" />
        </div>

        {/* Red Location Symbol (Pin) - Compact & sleek */}
        <div className="relative flex flex-col items-center mb-2 group-hover:-translate-y-0.5 transition-transform duration-200">
          <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#fe3130] text-white flex items-center justify-center shadow-[0_2px_8px_rgba(254,49,48,0.5)] border-[1.5px] border-white">
            <MapPin className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-white text-[#fe3130]" />
          </div>
          <div className="w-1 h-1 bg-[#fe3130] rotate-45 -mt-0.5" />
        </div>

        {/* Delhi Tooltip on Hover */}
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 transition-all duration-200 pointer-events-none z-50">
          <div className="bg-slate-900/85 backdrop-blur-md text-white text-[11px] font-sans font-bold px-3 py-1.5 rounded-xl shadow-2xl border border-white/20 whitespace-nowrap flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <div className="text-left">
              <div className="text-white font-bold">Delhi, India</div>
              <div className="text-[9.5px] text-slate-300 font-medium">Base Location</div>
            </div>
          </div>
          {/* Tooltip beak */}
          <div className="w-2 h-2 bg-slate-900/85 rotate-45 mx-auto -mt-1 border-r border-b border-white/20" />
        </div>
      </div>
    </div>
  );
}
