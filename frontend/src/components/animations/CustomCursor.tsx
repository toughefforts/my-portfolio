"use client";

import { useEffect, useState, useRef } from "react";

/**
 * Editorial custom cursor with mix-blend-difference transparency inversion:
 * Appears solid black over the light canvas and inverts over dark text/elements
 * so text and graphics remain seamlessly visible through the cursor.
 */
export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const isVisibleRef = useRef(false);
  const isHoveredRef = useRef(false);
  const isHiddenRef = useRef(false);
  const isClickedRef = useRef(false);

  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: -100, y: -100 });
  const currentPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Enable custom cursor mode to hide OS default cursor
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (isFinePointer) {
      document.documentElement.classList.add("custom-cursor-enabled");
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
        currentPos.current.x = e.clientX;
        currentPos.current.y = e.clientY;
      }

      // Detect interactive elements or avatar lens with minimal DOM querying
      const target = e.target as HTMLElement | null;
      if (target) {
        const shouldHide = !!target.closest("[data-hide-cursor='true'], .hide-custom-cursor");
        if (isHiddenRef.current !== shouldHide) {
          isHiddenRef.current = shouldHide;
          setIsHidden(shouldHide);
        }

        const interactive = !!target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer");
        if (isHoveredRef.current !== interactive) {
          isHoveredRef.current = interactive;
          setIsHovered(interactive);
        }
      }
    };

    const onMouseDown = () => {
      if (!isClickedRef.current) {
        isClickedRef.current = true;
        setIsClicked(true);
      }
    };

    const onMouseUp = () => {
      if (isClickedRef.current) {
        isClickedRef.current = false;
        setIsClicked(false);
      }
    };

    const onMouseLeave = () => {
      if (isVisibleRef.current) {
        isVisibleRef.current = false;
        setIsVisible(false);
      }
    };

    const onMouseEnter = () => {
      if (!isVisibleRef.current) {
        isVisibleRef.current = true;
        setIsVisible(true);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onMouseLeave, { passive: true });
    document.documentElement.addEventListener("mouseenter", onMouseEnter, { passive: true });

    // Smooth lerp animation loop
    const render = () => {
      const ease = 0.22;
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * ease;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      rafId.current = requestAnimationFrame(render);
    };

    rafId.current = requestAnimationFrame(render);

    return () => {
      document.documentElement.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      document.documentElement.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{ willChange: "transform" }}
      className={`hidden md:block fixed top-0 left-0 pointer-events-none z-[99999] rounded-full bg-white mix-blend-difference transition-[width,height,opacity] duration-200 ease-out border-none shadow-none ${
        isHidden
          ? "opacity-0 scale-0"
          : isHovered
          ? isClicked
            ? "w-10 h-10 scale-90"
            : "w-12 h-12 scale-100"
          : isClicked
          ? "w-4 h-4 scale-75"
          : "w-5 h-5 scale-100"
      }`}
    />
  );
}



