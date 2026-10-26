"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

type DrawIconProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

/**
 * DrawSVG stroke reveal for icons that use stroke-based SVG paths.
 */
export function DrawIcon({
  children,
  className = "",
  delay = 0,
  duration = 1,
}: DrawIconProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || prefersReducedMotion()) {
        return;
      }

      const paths = root.querySelectorAll("path, circle, rect, line, polyline, polygon");
      if (!paths.length) {
        return;
      }

      gsap.from(paths, {
        drawSVG: "0%",
        duration,
        delay,
        stagger: 0.06,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: root,
          start: "top 90%",
          once: true,
        },
      });
    },
    { scope: ref, dependencies: [delay, duration] },
  );

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
