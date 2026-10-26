"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

type ParallaxProps = {
  children: React.ReactNode;
  className?: string;
  /** Scrubbed vertical travel in px (positive = moves down while scrolling). */
  y?: number;
  speed?: number;
};

/**
 * ScrollTrigger scrubbed parallax — wraps imagery for depth on scroll.
 */
export function Parallax({ children, className = "", y = 48, speed = 1 }: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || prefersReducedMotion()) {
        return;
      }

      const target = root.querySelector("[data-parallax-target]") ?? root;
      gsap.fromTo(
        target,
        { y: -y * speed },
        {
          y: y * speed,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: ref, dependencies: [y, speed] },
  );

  return (
    <div ref={ref} className={`parallax ${className}`}>
      {children}
    </div>
  );
}
