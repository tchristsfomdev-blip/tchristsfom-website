"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

type CountUpProps = {
  value: string;
  className?: string;
  duration?: number;
};

function formatCount(n: number, hadCommas: boolean) {
  const rounded = Math.round(n);
  return hadCommas ? rounded.toLocaleString("en-GB") : String(rounded);
}

/**
 * Animates numeric prefixes in stat strings (e.g. "31+", "1,354+") via gsap.to.
 */
export function CountUp({ value, className = "", duration = 1.4 }: CountUpProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) {
        return;
      }

      if (prefersReducedMotion()) {
        el.textContent = value;
        return;
      }

      const match = value.match(/^([\d,]+)(.*)$/);
      if (!match) {
        el.textContent = value;
        return;
      }

      const raw = match[1];
      const hadCommas = raw.includes(",");
      const end = Number(raw.replace(/,/g, ""));
      const suffix = match[2] ?? "";
      const state = { n: 0 };

      gsap.to(state, {
        n: end,
        duration,
        ease: "power2.out",
        snap: { n: 1 },
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${formatCount(state.n, hadCommas)}${suffix}`;
        },
      });
    },
    { scope: ref, dependencies: [value, duration] },
  );

  return (
    <dd ref={ref as React.RefObject<HTMLElement>} className={className}>
      {value}
    </dd>
  );
}
