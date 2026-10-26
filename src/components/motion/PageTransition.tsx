"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { useLenis } from "lenis/react";
import { siteConfig } from "@/config/site";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  ScrollTrigger,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useGSAP(
    () => {
      const overlay = overlayRef.current;
      const content = contentRef.current;
      if (!overlay || !content) {
        return;
      }

      const resetScroll = () => {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true });
        } else {
          window.scrollTo(0, 0);
        }
        // Let layout settle, then recalc scroll limits for the new page.
        requestAnimationFrame(() => {
          lenis?.resize();
          ScrollTrigger.refresh();
        });
      };

      if (prefersReducedMotion()) {
        gsap.set(overlay, { autoAlpha: 0, scaleY: 0 });
        gsap.set(content, { clearProps: "all" });
        resetScroll();
        return;
      }

      // Keep page content fully opaque under the wipe so contrast/a11y stay valid.
      gsap.set(content, { clearProps: "opacity,transform" });
      gsap.set(overlay, { autoAlpha: 1, scaleY: 1, transformOrigin: "top" });

      const tl = gsap.timeline({
        onComplete: resetScroll,
      });

      tl.to(overlay, {
        scaleY: 0,
        duration: 0.55,
        delay: 0.12,
        ease: "power4.inOut",
        transformOrigin: "bottom",
      });
    },
    { dependencies: [pathname, lenis] },
  );

  return (
    <>
      <div ref={overlayRef} className="page-transition" aria-hidden="true">
        <Image
          src={siteConfig.logo.src}
          alt=""
          width={72}
          height={72}
          className="page-transition__logo"
        />
      </div>
      <div ref={contentRef}>{children}</div>
    </>
  );
}
