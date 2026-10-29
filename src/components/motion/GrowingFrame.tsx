"use client";

import { useRef } from "react";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

export function GrowingFrame({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scope = root.current;
      const disc = scope?.querySelector<HTMLElement>(".orbit__disc");
      if (!scope || !disc) {
        return;
      }

      if (prefersReducedMotion()) {
        gsap.set(disc, { clearProps: "transform" });
        return;
      }

      gsap.fromTo(
        disc,
        { scale: 0.22 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top 75%",
            end: "center 40%",
            scrub: 0.7,
          },
        },
      );
    },
    { scope: root },
  );

  return (
    <div ref={root} className="orbit">
      {children}
    </div>
  );
}
