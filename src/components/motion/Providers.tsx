"use client";

import { CustomCursor } from "@/components/motion/CustomCursor";
import { HashScroll } from "@/components/motion/HashScroll";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { registerGsap } from "@/components/motion/gsap";

registerGsap();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <HashScroll />
      <CustomCursor />
      {children}
    </SmoothScroll>
  );
}
