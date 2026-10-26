"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

type ScrambleRevealProps = {
  children: string;
  className?: string;
  id?: string;
  as?: "p" | "span" | "h2" | "h3";
  delay?: number;
  scroll?: boolean;
  chars?: string;
};

/**
 * ScrambleText decode effect — best for short eyebrows / labels.
 */
export function ScrambleReveal({
  children,
  className = "",
  id,
  as: Tag = "p",
  delay = 0,
  scroll = false,
  chars = "upperAndLowerCase",
}: ScrambleRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) {
        return;
      }

      const trigger = scroll
        ? { scrollTrigger: { trigger: el, start: "top 90%", once: true } }
        : {};

      gsap.from(el, {
        opacity: 0,
        duration: 0.35,
        delay,
        ease: "power2.out",
        ...trigger,
      });

      gsap.to(el, {
        duration: 1.1,
        delay,
        scrambleText: {
          text: children,
          chars,
          speed: 0.4,
        },
        ...trigger,
      });
    },
    { scope: ref, dependencies: [children, delay, scroll, chars] },
  );

  return (
    <Tag ref={ref as React.RefObject<never>} id={id} className={className}>
      {children}
    </Tag>
  );
}
