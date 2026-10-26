"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

type TypewriterProps = {
  text: string;
  className?: string;
  as?: "p" | "span" | "h2";
  delay?: number;
  speed?: number;
  scroll?: boolean;
};

/**
 * TextPlugin typewriter — types characters into the element.
 */
export function Typewriter({
  text,
  className = "",
  as: Tag = "p",
  delay = 0,
  speed = 0.03,
  scroll = false,
}: TypewriterProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) {
        return;
      }

      if (prefersReducedMotion()) {
        el.textContent = text;
        return;
      }

      el.textContent = "";
      gsap.to(el, {
        duration: Math.max(text.length * speed, 0.6),
        delay,
        text: { value: text, delimiter: "" },
        ease: "none",
        ...(scroll
          ? {
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                once: true,
              },
            }
          : {}),
      });
    },
    { scope: ref, dependencies: [text, delay, speed, scroll] },
  );

  return (
    <Tag ref={ref as React.RefObject<never>} className={className}>
      {text}
    </Tag>
  );
}
