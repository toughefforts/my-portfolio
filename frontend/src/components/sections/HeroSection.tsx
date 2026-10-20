"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import CounterAnimation from "@/components/animations/CounterAnimation";
import RevealAnimation from "@/components/animations/RevealAnimation";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { scrollToCleanSection } from "@/lib/navigation";

export default function HeroSection() {
  const heroLetterIRef = useRef<HTMLSpanElement>(null);
  const heroDotRef = useRef<HTMLSpanElement>(null);
  const avatarContainerRef = useRef<HTMLDivElement>(null);
  const alphaCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const [xrayPos, setXrayPos] = useState({ x: 0, y: 0 });
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  // Initialize an offscreen low-resolution canvas (128x171) to perform instant,
  // zero-lag pixel alpha hit testing. This ensures the X-Ray skeleton reticle only activates
  // when hovering over actual character body pixels, ignoring transparent image bounds.
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    const setupCanvas = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = 128;
        canvas.height = 171;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (ctx) {
          ctx.drawImage(img, 0, 0, 128, 171);
          alphaCanvasRef.current = canvas;
        }
      } catch (err) {
        console.warn("Alpha canvas hit testing unavailable, falling back to bounding box:", err);
      }
    };

    img.onload = setupCanvas;
    img.src = "/images/hero/avatar.png";
    if (img.complete) {
      setupCanvas();
    }
  }, []);

  /**
   * Calculates cursor/touch position relative to the avatar container and queries
   * the pre-rendered alpha mask to determine if the cursor is hovering over the avatar's body.
   */
  const updateScopePosition = (clientX: number, clientY: number) => {
    if (!avatarContainerRef.current) return;
    const rect = avatarContainerRef.current.getBoundingClientRect();
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;

    let isHit = false;
    if (alphaCanvasRef.current && rect.width > 0 && rect.height > 0) {
      try {
        const ctx = alphaCanvasRef.current.getContext("2d", { willReadFrequently: true });
        if (ctx) {
          const canvasX = Math.floor((relX / rect.width) * 128);
          const canvasY = Math.floor((relY / rect.height) * 171);
          if (canvasX >= 0 && canvasX < 128 && canvasY >= 0 && canvasY < 171) {
            const pixel = ctx.getImageData(canvasX, canvasY, 1, 1).data;
            // Alpha channel threshold check (> 20 / 255)
            if (pixel[3] > 20) {
              isHit = true;
            }
          }
        }
      } catch {
        isHit = relX >= 0 && relX <= rect.width && relY >= 0 && relY <= rect.height;
      }
    } else {
      // Fallback if canvas is not yet initialized
      isHit = relX >= 0 && relX <= rect.width && relY >= 0 && relY <= rect.height;
    }

    setXrayPos({ x: relX, y: relY });
    setIsAvatarHovered(isHit);
  };

  const handleAvatarMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updateScopePosition(e.clientX, e.clientY);
  };

  const handleAvatarTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      updateScopePosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  const handleAvatarMouseLeave = () => {
    setIsAvatarHovered(false);
  };

  // GSAP Physics Animation Timeline:
  // Drops the coral dot from above, squashes upon striking the letter 'I',
  // and bounces up into its resting accent position above the 'I'.
  useEffect(() => {

    if (heroDotRef.current && heroLetterIRef.current) {
      // Delay so it starts right as hero section appears after intro preloader
      const tl = gsap.timeline({ delay: 0.85 });

      // Step 1: Drop along an arc from top-right down to letter 'I'
      tl.fromTo(
        heroDotRef.current,
        {
          x: 150,
          y: -320,
          scaleX: 0.7,
          scaleY: 1.3,
          opacity: 0,
        },
        {
          x: 0,
          y: 28, // Hits top of letter 'I'
          scaleX: 1,
          scaleY: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power2.in",
        }
      )
        // Step 2: Squash on impact
        .to(heroDotRef.current, {
          scaleX: 1.5,
          scaleY: 0.5,
          duration: 0.08,
          ease: "power1.out",
        })
        // Letter 'I' reacts to impact
        .to(
          heroLetterIRef.current,
          {
            y: 8,
            duration: 0.08,
            yoyo: true,
            repeat: 1,
            ease: "power1.inOut",
          },
          "<"
        )
        // Step 3: Bounce straight up above letter 'I'
        .to(heroDotRef.current, {
          x: 0,
          y: -38,
          scaleX: 0.85,
          scaleY: 1.15,
          duration: 0.38,
          ease: "power1.out",
        })
        // Step 4: Fall down into resting spot directly above 'I'
        .to(heroDotRef.current, {
          x: 0,
          y: 0,
          scaleX: 1.2,
          scaleY: 0.8,
          duration: 0.28,
          ease: "power2.in",
        })
        // Step 5: Gentle settle bounce
        .to(heroDotRef.current, {
          y: -7,
          scaleX: 0.95,
          scaleY: 1.05,
          duration: 0.16,
          ease: "power1.out",
        })
        .to(heroDotRef.current, {
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.16,
          ease: "power1.inOut",
        });

      return () => {
        tl.kill();
      };
    }
  }, []);

  return (
    <section
      id="home"
      className="relative pt-16 sm:pt-20 pb-16 sm:pb-20 border-b border-[#e2e2da] bg-[#f8f8f5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Centerpiece: PORT [3D Character] FOLIO Stage */}
        <div className="relative flex items-center justify-center mt-2 mb-4 sm:mb-8 min-h-[460px] sm:min-h-[560px] lg:min-h-[620px]">
          {/* Big Typography Backdrop: PORT on Left, FOLIO on Right */}
          <div className="w-full flex items-center justify-between select-none pointer-events-none z-0 px-2 sm:px-6 relative">
            {/* Left Block: PORT with Top Subtitle */}
            <div className="relative flex flex-col items-start">
              {/* Top-Left Subtitle: WEBSITE DEVELOPER (Slightly closer to PORT) */}
              <div className="absolute bottom-full mb-1.5 sm:mb-2 md:mb-3 pl-1 flex items-center gap-2 font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-[#090d15] font-bold whitespace-nowrap">
                <span className="w-2 h-2 rounded-full bg-[#fa4d56]" />
                <span>WEBSITE DEVELOPER</span>
              </div>
              <h1 className="text-7xl sm:text-9xl md:text-[13rem] lg:text-[16rem] font-black uppercase font-heading tracking-tighter text-[#090d15] leading-[0.8]">
                PORT
              </h1>
            </div>

            {/* Right Block: FOLIO with Bottom Subtitle */}
            <div className="relative flex flex-col items-end text-right">
              <h1 className="text-7xl sm:text-9xl md:text-[13rem] lg:text-[16rem] font-black uppercase font-heading tracking-tighter text-[#090d15] leading-[0.8]">
                FOL<span ref={heroLetterIRef} className="relative inline-block origin-bottom will-change-transform">I<span className="absolute -top-5 sm:-top-7 md:-top-10 lg:-top-13 left-1/2 -translate-x-1/2 flex items-center justify-center pointer-events-none -translate-x-3 sm:-translate-x-4 md:-translate-x-5 lg:-translate-x-5"><span ref={heroDotRef} className="w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#fa4d56] shadow-sm will-change-transform" /></span></span>O
              </h1>
              {/* Bottom-Right Subtitle: SOFTWARE ENGINEER (Slightly closer to FOLIO, Equal Distance) */}
              <div className="absolute top-full mt-3.5 sm:mt-4.5 md:mt-5.5 pr-1 flex items-center gap-2 font-mono text-xs sm:text-sm md:text-base uppercase tracking-[0.25em] text-[#090d15] font-bold whitespace-nowrap">
                <span>SOFTWARE ENGINEER</span>
                <span className="w-2 h-2 rounded-full bg-[#fa4d56]" />
              </div>
            </div>
          </div>

          {/* 3D Character Centered & Layered in Front with Interactive X-Ray Skeleton Scope */}
          <div
            ref={avatarContainerRef}
            data-hide-cursor={isAvatarHovered ? "true" : "false"}
            onMouseMove={handleAvatarMouseMove}
            onMouseLeave={handleAvatarMouseLeave}
            onTouchStart={handleAvatarTouchMove}
            onTouchMove={handleAvatarTouchMove}
            onTouchEnd={handleAvatarMouseLeave}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-[270px] sm:w-[380px] md:w-[460px] lg:w-[520px] aspect-[2048/2742] flex items-center justify-center pointer-events-auto select-none ${
              isAvatarHovered ? "cursor-none" : ""
            }`}
          >
            {/* Soft Ambient Glow behind character */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#fa4d56]/15 via-transparent to-transparent rounded-full blur-2xl -z-10 scale-90" />
            
            {/* Base 3D Character Avatar */}
            <Image
              src="/images/hero/avatar.png"
              alt="Sachin Sharma — 3D Character Avatar"
              fill
              priority
              unoptimized
              sizes="(max-width: 768px) 300px, (max-width: 1200px) 460px, 520px"
              className="object-contain drop-shadow-[0_20px_30px_rgba(9,13,21,0.12)] pointer-events-none"
            />

            {/* X-Ray Skeleton Revealed ONLY inside circular Cursor Lens Area */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-150 overflow-hidden"
              style={{
                opacity: isAvatarHovered ? 1 : 0,
                clipPath: isAvatarHovered
                  ? `circle(38px at ${xrayPos.x}px ${xrayPos.y}px)`
                  : `circle(0px at 50% 50%)`,
                WebkitClipPath: isAvatarHovered
                  ? `circle(38px at ${xrayPos.x}px ${xrayPos.y}px)`
                  : `circle(0px at 50% 50%)`,
              }}
            >
              {/* Skeleton X-Ray overlay */}
              <Image
                src="/images/hero/avatar-xray.png"
                alt="Sachin Sharma — Avatar Skeleton X-Ray"
                fill
                priority
                unoptimized
                sizes="(max-width: 768px) 300px, (max-width: 1200px) 460px, 520px"
                className="object-contain pointer-events-none"
              />
            </div>

            {/* Futuristic HUD Scanner Lens Reticle Ring (Side outline with edge ticks, clear center) */}
            <div
              className="absolute pointer-events-none transition-opacity duration-150 z-20"
              style={{
                left: `${xrayPos.x}px`,
                top: `${xrayPos.y}px`,
                transform: "translate(-50%, -50%)",
                opacity: isAvatarHovered ? 1 : 0,
              }}
            >
              <div className="relative w-[76px] h-[76px] rounded-full border border-[#fa4d56]/80 shadow-[0_0_15px_rgba(250,77,86,0.5),inset_0_0_10px_rgba(250,77,86,0.25)] flex items-center justify-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-[2px] bg-[#fa4d56]" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-[2px] bg-[#fa4d56]" />
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-2 w-[2px] bg-[#fa4d56]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-[2px] bg-[#fa4d56]" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Ledger: Metrics Counter & Interactive Actions */}
        <RevealAnimation delay={0.3}>
          <div className="mt-8 pt-8 border-t border-[#e2e2da] flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Stats Ledger */}
            <div className="flex items-center gap-6 sm:gap-10 font-mono">
              <div>
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#090d15] flex items-center">
                  <CounterAnimation end={1} />
                  <span className="text-[#fa4d56]">+</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#7c8ba1]">Years Exp.</div>
              </div>

              <div className="w-[1px] h-10 bg-[#e2e2da]" />

              <div>
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#090d15] flex items-center">
                  <CounterAnimation end={10} />
                  <span className="text-[#fa4d56]">+</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#7c8ba1]">Shipped Apps</div>
              </div>

              <div className="w-[1px] h-10 bg-[#e2e2da]" />

              <div>
                <div className="text-3xl sm:text-4xl font-black font-heading text-[#090d15] flex items-center">
                  <CounterAnimation end={100} />
                  <span className="text-[#fa4d56]">%</span>
                </div>
                <div className="text-[10px] uppercase tracking-widest text-[#7c8ba1]">Client Trust</div>
              </div>
            </div>

            {/* Brief Narrative */}
            <p className="text-xs sm:text-sm text-[#475569] max-w-md text-center md:text-left leading-relaxed">
              Specializing in modern full-stack development — blending interactive UI motion with resilient, scalable backend engineering.
            </p>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
              <a
                href="/projects"
                onClick={(e) => scrollToCleanSection("projects", e)}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#090d15] text-white hover:bg-[#fa4d56] transition-colors font-mono text-xs uppercase tracking-wider font-bold shadow-xs cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </a>

              <a
                href="/contact"
                onClick={(e) => scrollToCleanSection("contact", e)}
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#090d15] text-[#090d15] hover:bg-[#090d15] hover:text-white transition-colors font-mono text-xs uppercase tracking-wider font-bold cursor-pointer"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
}
