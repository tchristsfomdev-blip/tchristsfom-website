"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  SplitText,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

type TextRevealProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  type?: "chars" | "words" | "lines";
  delay?: number;
  stagger?: number;
  y?: number;
  scroll?: boolean;
};

/**
 * SplitText staggered reveal (characters, words, or lines).
 */
export function TextReveal({
  children,
  className = "",
  id,
  as: Tag = "p",
  type = "words",
  delay = 0,
  stagger = 0.04,
  y = 28,
  scroll = false,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || prefersReducedMotion()) {
        return;
      }

      const split = SplitText.create(el, {
        type,
        wordsClass: "split-word",
        charsClass: "split-char",
        linesClass: "split-line",
        aria: "auto",
      });

      const targets =
        type === "chars" ? split.chars : type === "lines" ? split.lines : split.words;

      gsap.from(targets, {
        opacity: 0,
        y,
        duration: 0.85,
        delay,
        stagger,
        ease: "power3.out",
        ...(scroll
          ? {
              scrollTrigger: {
                trigger: el,
                start: "top 88%",
                once: true,
              },
            }
          : {}),
      });

      return () => {
        split.revert();
      };
    },
    { scope: ref, dependencies: [type, delay, stagger, y, scroll] },
  );

  return (
    <Tag ref={ref as React.RefObject<never>} id={id} className={className}>
      {children}
    </Tag>
  );
}
