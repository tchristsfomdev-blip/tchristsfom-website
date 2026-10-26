"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

type MotionPathAccentProps = {
  className?: string;
};

/**
 * Decorative MotionPath dot that travels along an SVG path on scroll (scrubbed).
 */
export function MotionPathAccent({ className = "" }: MotionPathAccentProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || prefersReducedMotion()) {
        return;
      }

      const dot = root.querySelector<SVGCircleElement>("[data-motion-dot]");
      const path = root.querySelector<SVGPathElement>("[data-motion-path]");
      if (!dot || !path) {
        return;
      }

      gsap.to(dot, {
        motionPath: {
          path,
          align: path,
          alignOrigin: [0.5, 0.5],
          autoRotate: false,
        },
        ease: "none",
        scrollTrigger: {
          trigger: root,
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={`motion-path-accent ${className}`} aria-hidden="true">
      <svg viewBox="0 0 320 80" className="h-16 w-full max-w-md" fill="none">
        <path
          data-motion-path
          d="M8 52 C 60 8, 120 72, 160 40 S 260 8, 312 48"
          stroke="currentColor"
          strokeWidth="1.25"
          className="text-[var(--line)]"
        />
        <circle
          data-motion-dot
          r="4.5"
          cx="8"
          cy="52"
          className="fill-[var(--gold-500)]"
        />
      </svg>
    </div>
  );
}
