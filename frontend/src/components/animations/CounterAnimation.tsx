"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CounterAnimationProps {
  end: number;
  suffix?: string;
  duration?: number;
  className?: string;
}

/**
 * Numeric counter animation that increments smoothly from 0 to the target number
 * when triggered by GSAP ScrollTrigger.
 */
export default function CounterAnimation({
  end,
  suffix = "",
  duration = 2,
  className = "",
}: CounterAnimationProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !ref.current) {
      if (ref.current) ref.current.textContent = `${end}${suffix}`;
      return;
    }

    const startCount = () => {
      const obj = { val: 0 };
      gsap.to(obj, {
        val: end,
        duration,
        ease: "power2.out",
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = `${Math.floor(obj.val)}${suffix}`;
          }
        },
      });
    };

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 90%",
      onEnter: startCount,
      onEnterBack: startCount,
    });

    return () => {
      trigger.kill();
    };
  }, [end, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}

