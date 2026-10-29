"use client";

import { HashScroll } from "@/components/motion/HashScroll";
import { PageScroll } from "@/components/motion/PageScroll";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { registerGsap } from "@/components/motion/gsap";

registerGsap();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <HashScroll />
      <PageScroll />
      {children}
    </SmoothScroll>
  );
}
