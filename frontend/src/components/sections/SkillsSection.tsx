"use client";

import React, { useState } from "react";
import Image from "next/image";
import RevealAnimation from "@/components/animations/RevealAnimation";
import {
  SiGithub,
  SiJavascript,
} from "react-icons/si";

// 100% Authentic W3C HTML5 Shield Vector (Official Brand Spec)
function Html5Icon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z" />
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z" />
      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z" />
      <path fill="#FFFFFF" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z" />
    </svg>
  );
}

// 100% Authentic W3C CSS3 Shield Vector (Official Brand Spec)
function CssIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z" />
      <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z" />
      <path fill="#FFFFFF" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z" />
      <path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z" />
      <path fill="#FFFFFF" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z" />
      <path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z" />
    </svg>
  );
}

// 100% Authentic MySQL Sakila Dolphin Silhouette (Glowing Cyan Gradient)
function MysqlIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <defs>
        <linearGradient id="mysql-dolphin-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00F2FE" />
          <stop offset="50%" stopColor="#38BDF8" />
          <stop offset="100%" stopColor="#0284C7" />
        </linearGradient>
      </defs>
      <path
        fill="url(#mysql-dolphin-grad)"
        d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0"
      />
    </svg>
  );
}

// 100% Authentic Git Vector Logo (Official Git Red Diamond with White Branches)
function GitIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className} fill="none">
      <path
        d="M124.7 57.3L70.7 3.3c-4.4-4.4-11.5-4.4-15.9 0L3.3 54.8c-4.4 4.4-4.4 11.5 0 15.9l54 54c4.4 4.4 11.5 4.4 15.9 0l51.5-51.5c4.4-4.4 4.4-11.5 0-15.9z"
        fill="#F05032"
      />
      <path
        d="M68.5 76.5c-2.4-1.2-4.1-3.4-4.6-6.1l-8.5-8.5c-.8.2-1.6.3-2.4.3-5.2 0-9.4-4.2-9.4-9.4 0-1.8.5-3.5 1.4-4.9l-11.4-11.4c-1.4.9-3.1 1.4-4.9 1.4-5.2 0-9.4-4.2-9.4-9.4s4.2-9.4 9.4-9.4 9.4 4.2 9.4 9.4c0 1.8-.5 3.5-1.4 4.9l11.2 11.2c1.4-.9 3.1-1.4 4.9-1.4 3.7 0 6.9 2.2 8.4 5.4l9.1-9.1c-1.2-2.4-1.4-5.2-.4-7.8 1.9-4.8 7.3-7.2 12.1-5.3 4.8 1.9 7.2 7.3 5.3 12.1-1.4 3.6-4.9 5.9-8.7 5.9-1.2 0-2.4-.2-3.4-.7l-9.1 9.1c.3 1 .4 2 .4 3 0 3.7-2.2 6.9-5.4 8.4l8.5 8.5c1-.3 2-.4 3-.4 5.2 0 9.4 4.2 9.4 9.4s-4.2 9.4-9.4 9.4-9.4-4.2-9.4-9.4c0-1.7.5-3.3 1.3-4.7z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

// 100% Authentic Official PHP Vector Logo (Original Colin Viebrock Specification)
function PhpIcon({ className = "w-7.5 sm:w-8 md:w-9" }: { className?: string }) {
  return (
    <Image
      src="/images/skills/php.svg"
      alt="Official PHP Logo"
      width={711}
      height={384}
      priority
      unoptimized
      className={`${className} h-auto object-contain shrink-0 select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]`}
    />
  );
}

// 100% Authentic Official Python Vector (Devicon / Python Software Foundation Spec)
function PythonIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 128 128" className={className}>
      <defs>
        <linearGradient
          id="python-official-a"
          gradientUnits="userSpaceOnUse"
          x1="70.252"
          y1="1237.476"
          x2="170.659"
          y2="1151.089"
          gradientTransform="matrix(0.563 0 0 -0.568 -29.215 707.817)"
        >
          <stop offset="0" stopColor="#5A9FD4" />
          <stop offset="1" stopColor="#306998" />
        </linearGradient>
        <linearGradient
          id="python-official-b"
          gradientUnits="userSpaceOnUse"
          x1="209.474"
          y1="1098.811"
          x2="173.62"
          y2="1149.537"
          gradientTransform="matrix(0.563 0 0 -0.568 -29.215 707.817)"
        >
          <stop offset="0" stopColor="#FFD43B" />
          <stop offset="1" stopColor="#FFE873" />
        </linearGradient>
      </defs>
      <path
        fill="url(#python-official-a)"
        d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
        transform="translate(0, 10.26)"
      />
      <path
        fill="url(#python-official-b)"
        d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
        transform="translate(0, 10.26)"
      />
    </svg>
  );
}

// 100% Authentic JavaScript Brand Icon (Yellow rounded square with solid black JS letters)
function JsIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <div className={`${className} bg-black rounded-[3px] overflow-hidden flex items-center justify-center shrink-0 shadow-xs`}>
      <SiJavascript className="w-full h-full text-[#F7DF1E]" />
    </div>
  );
}

// Crimson Leaf SVG for Falling Leaves Animation
function FallingLeafSvg({ className = "w-4 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 32" className={className} fill="none">
      <path
        d="M12 2C7 6 3 13 4 20c1 6 5 9 8 10 3-1 7-4 8-10 1-7-3-14-8-18z"
        fill="#fa4d56"
      />
      <path
        d="M12 2c0 0 4 7 4 18-1 4-2 7-4 10V2z"
        fill="#b81d2a"
        opacity="0.4"
      />
      <path
        d="M12 4v24"
        stroke="#ffffff"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

// Core Skills positioned with glowing neon medallion orbs centered precisely on foliage clusters
// Default state shows ONLY the circular glowing neon medallion; hover smoothly expands the sleek glassmorphic tray!
const coreSkills = [
  {
    id: "html5",
    label: "HTML5",
    desc: "Modern Structure",
    x: 43.4,
    y: 22.65,
    glow: "#FF6D00",
    borderColor: "#ff6d00",
    orbBg: "radial-gradient(circle at 35% 35%, #993d00 0%, #2b1100 70%, #0d0500 100%)",
    glowShadow: "0 0 14px rgba(255, 109, 0, 0.85), 0 0 28px rgba(255, 109, 0, 0.4), inset 0 0 8px rgba(255, 109, 0, 0.5)",
    icon: <Html5Icon className="w-5.5 h-5.5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" />,
  },
  {
    id: "css",
    label: "CSS",
    desc: "Beautiful Styling",
    x: 37.0,
    y: 42.2,
    glow: "#2563EB",
    borderColor: "#3b82f6",
    orbBg: "radial-gradient(circle at 35% 35%, #1d4ed8 0%, #0c2366 70%, #030a1c 100%)",
    glowShadow: "0 0 14px rgba(37, 99, 235, 0.85), 0 0 28px rgba(37, 99, 235, 0.45), inset 0 0 8px rgba(59, 130, 246, 0.5)",
    icon: <CssIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" />,
  },
  {
    id: "javascript",
    label: "JavaScript",
    desc: "Dynamic & Interactive",
    x: 46.1,
    y: 51.0,
    glow: "#FFE600",
    borderColor: "#ffe600",
    orbBg: "radial-gradient(circle at 35% 35%, #7a6800 0%, #262002 70%, #0f0c01 100%)",
    glowShadow: "0 0 14px rgba(255, 230, 0, 0.85), 0 0 28px rgba(255, 230, 0, 0.4), inset 0 0 8px rgba(255, 230, 0, 0.5)",
    icon: (
      <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 bg-[#F7DF1E] rounded-[3.5px] overflow-hidden flex items-center justify-center shrink-0 shadow-sm border border-[#ffe600]">
        <span className="font-sans font-black text-black text-[10.5px] sm:text-[11.5px] md:text-[12.5px] tracking-tight leading-none select-none pl-0.5 pt-0.5">
          JS
        </span>
      </div>
    ),
  },
  {
    id: "git",
    label: "Git",
    desc: "Version Control",
    x: 36.8,
    y: 65.8,
    glow: "#FF1744",
    borderColor: "#ff1744",
    orbBg: "radial-gradient(circle at 35% 35%, #8f0e24 0%, #29040a 70%, #100104 100%)",
    glowShadow: "0 0 14px rgba(255, 23, 68, 0.85), 0 0 28px rgba(255, 23, 68, 0.4), inset 0 0 8px rgba(255, 23, 68, 0.5)",
    icon: <GitIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" />,
  },
  {
    id: "mysql",
    label: "MySQL",
    desc: "Data Management",
    x: 59.8,
    y: 28.0,
    glow: "#00F2FE",
    borderColor: "#00f2fe",
    orbBg: "radial-gradient(circle at 35% 35%, #086b7d 0%, #03252c 70%, #010f12 100%)",
    glowShadow: "0 0 14px rgba(0, 242, 254, 0.85), 0 0 28px rgba(0, 242, 254, 0.4), inset 0 0 8px rgba(0, 242, 254, 0.5)",
    icon: <MysqlIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 shrink-0 drop-shadow-[0_0_8px_rgba(0,242,254,0.6)]" />,
  },
  {
    id: "python",
    label: "Python",
    desc: "Backend & Automation",
    x: 74.0,
    y: 24.0,
    glow: "#38BDF8",
    borderColor: "#38bdf8",
    orbBg: "radial-gradient(circle at 35% 35%, #183d5e 0%, #091a2b 70%, #030a12 100%)",
    glowShadow: "0 0 14px rgba(56, 189, 248, 0.85), 0 0 28px rgba(255, 212, 59, 0.45), inset 0 0 8px rgba(56, 189, 248, 0.5)",
    icon: <PythonIcon className="w-5.5 h-5.5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 shrink-0 drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]" />,
  },
  {
    id: "php",
    label: "PHP",
    desc: "Server Scripting",
    x: 66.8,
    y: 38.5,
    glow: "#C084FC",
    borderColor: "#c084fc",
    orbBg: "radial-gradient(circle at 35% 35%, #5e2894 0%, #1c0a2e 70%, #0a0312 100%)",
    glowShadow: "0 0 14px rgba(192, 132, 252, 0.85), 0 0 28px rgba(192, 132, 252, 0.4), inset 0 0 8px rgba(192, 132, 252, 0.5)",
    icon: <PhpIcon className="w-7 sm:w-7.5 md:w-8.5 shrink-0" />,
  },
  {
    id: "django",
    label: "Django",
    desc: "Web Framework",
    x: 78.5,
    y: 44.5,
    glow: "#00FF9D",
    borderColor: "#00ff9d",
    orbBg: "radial-gradient(circle at 35% 35%, #086b44 0%, #032417 70%, #010f0a 100%)",
    glowShadow: "0 0 14px rgba(0, 255, 157, 0.85), 0 0 28px rgba(0, 255, 157, 0.4), inset 0 0 8px rgba(0, 255, 157, 0.5)",
    icon: (
      <div className="flex items-center justify-center font-heading font-black text-[17px] sm:text-[19px] md:text-[21px] tracking-tight leading-none select-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
        <span className="text-white">d</span>
        <span className="text-[#00FF9D] drop-shadow-[0_0_6px_rgba(0,255,157,0.8)]">j</span>
      </div>
    ),
  },
  {
    id: "github",
    label: "GitHub",
    desc: "Collaboration",
    x: 83.3,
    y: 66.0,
    glow: "#FFFFFF",
    borderColor: "rgba(255, 255, 255, 0.85)",
    orbBg: "radial-gradient(circle at 35% 35%, #363b44 0%, #15181e 70%, #08090c 100%)",
    glowShadow: "0 0 12px rgba(255, 255, 255, 0.75), 0 0 24px rgba(255, 255, 255, 0.35), inset 0 0 8px rgba(255, 255, 255, 0.4)",
    icon: <SiGithub className="w-5.5 h-5.5 sm:w-6 sm:h-6 md:w-6.5 md:h-6.5 shrink-0 text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" />,
  },
];

// Falling leaves configuration spawning from tree branches with organic sway
const fallingLeaves = [
  { id: 1, left: "51%", top: "14%", duration: "6.8s", mobileDuration: "10.8s", delay: "0s", anim: "leafFallA", scale: 1.0 },
  { id: 2, left: "41%", top: "21%", duration: "7.6s", mobileDuration: "12.0s", delay: "1.8s", anim: "leafFallB", scale: 0.85 },
  { id: 3, left: "69%", top: "19%", duration: "6.2s", mobileDuration: "9.8s", delay: "3.4s", anim: "leafFallC", scale: 1.1 },
  { id: 4, left: "35%", top: "38%", duration: "8.2s", mobileDuration: "13.0s", delay: "1.2s", anim: "leafFallB", scale: 0.9 },
  { id: 5, left: "77%", top: "37%", duration: "7.0s", mobileDuration: "11.2s", delay: "4.5s", anim: "leafFallA", scale: 1.05 },
  { id: 6, left: "32%", top: "57%", duration: "5.8s", mobileDuration: "9.5s", delay: "2.8s", anim: "leafFallC", scale: 0.8 },
  { id: 7, left: "84%", top: "55%", duration: "7.4s", mobileDuration: "11.8s", delay: "5.6s", anim: "leafFallA", scale: 0.95 },
  { id: 8, left: "56%", top: "24%", duration: "8.5s", mobileDuration: "13.5s", delay: "2.5s", anim: "leafFallB", scale: 1.0 },
  { id: 9, left: "45%", top: "32%", duration: "6.5s", mobileDuration: "10.2s", delay: "6.2s", anim: "leafFallC", scale: 0.9 },
  { id: 10, left: "88%", top: "49%", duration: "7.8s", mobileDuration: "12.4s", delay: "4.0s", anim: "leafFallA", scale: 0.85 },
  { id: 11, left: "44%", top: "16%", duration: "6.0s", mobileDuration: "9.6s", delay: "7.0s", anim: "leafFallB", scale: 1.15 },
  { id: 12, left: "63%", top: "33%", duration: "8.0s", mobileDuration: "12.8s", delay: "3.2s", anim: "leafFallC", scale: 0.95 },
];

/**
 * Skills Section Component.
 *
 * Immersive panoramic bonsai tech tree experience featuring:
 * - Handcrafted vector brand identity badges with custom radiant gradients.
 * - Glowing interactive neon medallion nodes mapped along botanical branches.
 * - Ambient floating cherry blossom leaf animations.
 * - Interactive node inspect card showing mastery percentage, experience level, and description.
 */
export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="pt-6 sm:pt-8 lg:pt-10 pb-2 sm:pb-4 lg:pb-6 border-b border-[#e2e2da] bg-[#f8f8f5] overflow-hidden relative">
      
      {/* Falling Leaves Keyframe Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes leafFallA {
          0% {
            transform: translate3d(0, 0, 0) rotate(0deg) rotateY(0deg) scale(0.9);
            opacity: 0;
          }
          12% {
            opacity: 0.95;
          }
          35% {
            transform: translate3d(-18px, 60px, 0) rotate(45deg) rotateY(120deg) scale(1);
          }
          65% {
            transform: translate3d(22px, 140px, 0) rotate(115deg) rotateY(240deg) scale(0.95);
          }
          85% {
            opacity: 0.85;
            transform: translate3d(-12px, 210px, 0) rotate(180deg) rotateY(320deg) scale(0.9);
          }
          100% {
            transform: translate3d(14px, 260px, 0) rotate(240deg) rotateY(360deg) scale(0.75);
            opacity: 0;
          }
        }

        @keyframes leafFallB {
          0% {
            transform: translate3d(0, 0, 0) rotate(20deg) rotateX(0deg) scale(0.85);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          40% {
            transform: translate3d(24px, 65px, 0) rotate(-35deg) rotateX(90deg) scale(0.95);
          }
          70% {
            transform: translate3d(-18px, 150px, 0) rotate(60deg) rotateX(180deg) scale(0.9);
          }
          88% {
            opacity: 0.75;
            transform: translate3d(14px, 220px, 0) rotate(-15deg) rotateX(270deg) scale(0.85);
          }
          100% {
            transform: translate3d(-8px, 275px, 0) rotate(40deg) rotateX(360deg) scale(0.7);
            opacity: 0;
          }
        }

        @keyframes leafFallC {
          0% {
            transform: translate3d(0, 0, 0) rotate(-25deg) rotateZ(0deg) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          30% {
            transform: translate3d(16px, 55px, 0) rotate(30deg) rotateY(60deg) scale(1.05);
          }
          55% {
            transform: translate3d(-24px, 125px, 0) rotate(-45deg) rotateY(180deg) scale(0.95);
          }
          80% {
            transform: translate3d(18px, 200px, 0) rotate(70deg) rotateY(300deg) scale(0.9);
          }
          90% {
            opacity: 0.8;
          }
          100% {
            transform: translate3d(-6px, 260px, 0) rotate(115deg) rotateY(360deg) scale(0.75);
            opacity: 0;
          }
        }

        .compound-badge-unified {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .falling-leaf-node {
          animation-duration: var(--mobile-dur, 11s) !important;
        }
        @media (min-width: 640px) {
          .falling-leaf-node {
            animation-duration: var(--desktop-dur, 7s) !important;
          }
        }
      `}} />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mobile Header (Placed above tree on mobile so tree sits cleanly below without overlapping text) */}
        <div className="block md:hidden mb-5 max-w-md">
          {/* Eyebrow */}
          <RevealAnimation>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#fa4d56] rounded-full inline-block" />
              <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-[#7c8ba1]">
                MY TECH STACK
              </span>
            </div>
          </RevealAnimation>

          {/* Core Skills Heading */}
          <RevealAnimation delay={0.1}>
            <h2 className="font-heading font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#090d15] leading-[0.88] select-none">
              CORE <span className="text-[#fa4d56]">SKILLS</span>
            </h2>
          </RevealAnimation>

          {/* Thin Divider Line */}
          <div className="w-8 h-[1.5px] bg-[#d5d7dc] my-2.5" />

          {/* Description Paragraph */}
          <RevealAnimation delay={0.2}>
            <p className="font-serif italic text-[#64748b] text-xs leading-relaxed max-w-[280px]">
              A strong foundation of modern technologies, enabling me to build scalable, high-performance and user-friendly digital solutions.
            </p>
          </RevealAnimation>
        </div>

        {/* Master Panoramic Visual Canvas - Seamlessly on #f8f8f5 (No card container) */}
        <div className="-mx-4 sm:mx-0 w-[calc(100%+2rem)] sm:w-full overflow-x-clip sm:overflow-visible my-3 xs:my-4 sm:my-0">
          <div className="relative w-[128%] xs:w-[132%] sm:w-full -ml-[22%] xs:-ml-[24%] sm:ml-0 aspect-[2048/960]">
          
          {/* Subtle Misty Mountain Horizon Backdrop (Faded behind tree base & roots) */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none">
            <Image
              src="/images/skills/skills-mountain-horizon.png"
              alt="Misty Mountain Horizon"
              fill
              priority
              unoptimized
              className="object-contain object-bottom select-none pointer-events-none opacity-[0.25] sm:opacity-[0.28] mix-blend-multiply"
            />
          </div>

          {/* Panoramic Tree & Mountain Art Backdrop - 100% Transparent PNG */}
          <Image
            src="/images/skills/core-skills-tree-banner.png"
            alt="Core Skills Tech Tree on Crimson Roots"
            fill
            priority
            unoptimized
            className="relative z-10 object-contain object-bottom select-none pointer-events-none"
          />

          {/* Falling Crimson Leaves Drifting Down From Branches */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
            {fallingLeaves.map((leaf) => (
              <div
                key={leaf.id}
                className="falling-leaf-node absolute"
                style={{
                  left: leaf.left,
                  top: leaf.top,
                  "--desktop-dur": leaf.duration,
                  "--mobile-dur": leaf.mobileDuration,
                  animation: `${leaf.anim} ${leaf.duration} ease-in-out infinite`,
                  animationDelay: leaf.delay,
                  transform: `scale(${leaf.scale})`,
                  willChange: "transform, opacity",
                } as React.CSSProperties}
              >
                <FallingLeafSvg className="w-1.5 h-2 xs:w-2 xs:h-2.5 sm:w-4 sm:h-5 drop-shadow-[0_1px_2px_rgba(250,77,86,0.25)] sm:drop-shadow-[0_2px_4px_rgba(250,77,86,0.3)]" />
              </div>
            ))}
          </div>

          {/* Desktop Left Content Column (Overlay on >= md screens only) */}
          <div className="hidden md:block absolute top-6 sm:top-10 lg:top-16 left-2 sm:left-4 lg:left-6 z-30 max-w-[210px] sm:max-w-[240px] lg:max-w-[270px]">
            
            {/* Eyebrow */}
            <RevealAnimation>
              <div className="flex items-center gap-2 mb-2 sm:mb-2.5">
                <span className="w-5 sm:w-6 h-[2px] bg-[#fa4d56] rounded-full inline-block" />
                <span className="font-mono text-[9px] sm:text-[10px] lg:text-[11px] font-bold uppercase tracking-widest text-[#7c8ba1]">
                  MY TECH STACK
                </span>
              </div>
            </RevealAnimation>

            {/* Core Skills Heading (Clean without single quote) */}
            <RevealAnimation delay={0.1}>
              <h2 className="font-heading font-black text-3xl sm:text-5xl lg:text-[60px] uppercase tracking-tight text-[#090d15] leading-[0.88] select-none">
                CORE<br />
                <span className="text-[#fa4d56]">SKILLS</span>
              </h2>
            </RevealAnimation>

            {/* Thin Divider Line */}
            <div className="w-8 sm:w-10 h-[1.5px] bg-[#d5d7dc] my-3 sm:my-4" />

            {/* Description Paragraph */}
            <RevealAnimation delay={0.2}>
              <p className="font-serif italic text-[#64748b] text-xs sm:text-[13px] leading-relaxed max-w-[210px] sm:max-w-[250px]">
                A strong foundation of modern technologies, enabling me to build scalable, high-performance and user-friendly digital solutions.
              </p>
            </RevealAnimation>
          </div>

          {/* Interactive Tech Orbs - Only circular icon orb by default, text tray expands smoothly on hover */}
          {coreSkills.map((skill) => {
            const isHovered = activeSkill === skill.id;

            return (
              <div
                key={skill.id}
                className={`absolute cursor-pointer select-none group ${isHovered ? "z-40" : "z-30"}`}
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setActiveSkill(activeSkill === skill.id ? null : skill.id)}
                onMouseEnter={() => setActiveSkill(skill.id)}
                onMouseLeave={() => setActiveSkill(null)}
              >
                {/* Fixed-size circular anchor box keeping the orb centered precisely on skill.x, skill.y */}
                <div className="relative w-8 h-8 sm:w-11 sm:h-11 md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px]">
                  
                  {/* Compound Silhouette: Orb is stationary at left-0, tray slides out smoothly to the right */}
                  <div
                    className={`absolute left-0 top-1/2 -translate-y-1/2 inline-flex items-center compound-badge-unified transition-transform duration-300 ${
                      isHovered ? "-translate-y-[calc(50%+2px)]" : ""
                    }`}
                  >
                    {/* 1. Left: Circular Glowing Neon Medallion Orb */}
                    <div
                      className="relative z-20 w-8 h-8 sm:w-11 sm:h-11 md:w-[50px] md:h-[50px] lg:w-[54px] lg:h-[54px] rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                      style={{
                        background: skill.orbBg,
                        border: `1.5px solid ${skill.borderColor}`,
                        boxShadow: isHovered
                          ? `0 0 16px ${skill.glow}, 0 0 32px ${skill.glow}80, inset 0 0 8px ${skill.glow}90`
                          : skill.glowShadow,
                      }}
                    >
                      <div className="relative z-10 scale-[0.72] sm:scale-100 transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                        {skill.icon}
                      </div>
                    </div>

                    {/* 2. Right: Attached Slimmer Dark Glassmorphic Text Tray (Hidden by default, smoothly expands on hover/tap) */}
                    <div
                      className={`-ml-2.5 sm:-ml-4 md:-ml-5 relative z-10 h-[26px] sm:h-[34px] md:h-[38px] lg:h-[42px] flex flex-col justify-center text-left rounded-r-full overflow-hidden transition-all duration-300 ease-out whitespace-nowrap ${
                        isHovered
                          ? "max-w-[170px] sm:max-w-[220px] opacity-100 pl-4 sm:pl-6 md:pl-6.5 pr-3 sm:pr-4"
                          : "max-w-0 opacity-0 pl-0 pr-0 pointer-events-none group-hover:max-w-[220px] group-hover:opacity-100 group-hover:pl-5 group-hover:sm:pl-6 group-hover:md:pl-6.5 group-hover:pr-3.5 group-hover:sm:pr-4 group-hover:pointer-events-auto"
                      }`}
                      style={{
                        background: "rgba(10, 14, 22, 0.94)",
                        backdropFilter: "blur(12px)",
                        borderRight: `1.5px solid ${skill.borderColor}`,
                        borderTop: `1.5px solid ${skill.borderColor}`,
                        borderBottom: `1.5px solid ${skill.borderColor}`,
                        boxShadow: `0 0 18px ${skill.glow}40, 0 8px 24px rgba(0, 0, 0, 0.5)`,
                      }}
                    >
                      <span
                        className="font-heading font-black text-[9px] sm:text-[12px] md:text-[13px] tracking-tight leading-none whitespace-nowrap transition-colors"
                        style={{ color: skill.glow }}
                      >
                        {skill.label}
                      </span>
                      <span className="font-sans text-[6px] sm:text-[8px] md:text-[9px] text-[#cbd5e1] font-medium leading-none mt-0.5 sm:mt-1 whitespace-nowrap">
                        {skill.desc}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>

      </div>
    </section>
  );
}
