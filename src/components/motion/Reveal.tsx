"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  ScrollTrigger,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

type RevealMode = "from" | "to" | "fromTo";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  /** gsap.from | gsap.to | gsap.fromTo */
  mode?: RevealMode;
  y?: number;
  x?: number;
  stagger?: number;
  delay?: number;
  duration?: number;
  once?: boolean;
  start?: string;
};

export function Reveal({
  children,
  className = "",
  mode = "from",
  y = 32,
  x = 0,
  stagger = 0.08,
  delay = 0,
  duration = 0.9,
  once = true,
  start = "top 88%",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) {
        return;
      }

      const items = gsap.utils.toArray<HTMLElement>("[data-reveal]", root);
      const targets = items.length > 0 ? items : [root];

      if (prefersReducedMotion()) {
        gsap.set(targets, { clearProps: "all" });
        return;
      }

      const scrollTrigger: ScrollTrigger.Vars = {
        trigger: root,
        start,
        once,
      };

      const ease = "power3.out";
      const fromVars = { opacity: 0, y, x };
      const toVars = {
        opacity: 1,
        y: 0,
        x: 0,
        duration,
        delay,
        ease,
        stagger,
        scrollTrigger,
      };

      // Always use fromTo so the end state is explicit (avoids from→already-hidden bugs).
      if (mode === "to") {
        gsap.set(targets, fromVars);
        gsap.to(targets, toVars);
        return;
      }

      gsap.fromTo(targets, fromVars, toVars);
    },
    { scope: ref, dependencies: [mode, y, x, stagger, delay, duration, once, start] },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
