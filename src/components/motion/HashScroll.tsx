"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { gsap, prefersReducedMotion, registerGsap } from "@/components/motion/gsap";

registerGsap();

const OFFSET = 88;

/**
 * Smooth hash navigation via ScrollToPlugin (or Lenis when smooth scroll is active).
 */
export function HashScroll() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      return;
    }

    const target = document.querySelector<HTMLElement>(hash);
    if (!target) {
      return;
    }

    const reduced = prefersReducedMotion();
    const run = () => {
      if (lenis && !reduced) {
        lenis.scrollTo(target, { offset: -OFFSET, duration: 1.1 });
        return;
      }

      if (reduced) {
        target.scrollIntoView();
        return;
      }

      gsap.to(window, {
        duration: 1,
        ease: "power3.inOut",
        scrollTo: { y: target, offsetY: OFFSET },
      });
    };

    const id = window.setTimeout(run, 80);
    return () => window.clearTimeout(id);
  }, [pathname, lenis]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!anchor) {
        return;
      }

      const id = anchor.getAttribute("href");
      if (!id || id === "#") {
        return;
      }

      const target = document.querySelector<HTMLElement>(id);
      if (!target) {
        return;
      }

      event.preventDefault();
      history.pushState(null, "", id);

      if (prefersReducedMotion()) {
        target.scrollIntoView();
        return;
      }

      if (lenis) {
        lenis.scrollTo(target, { offset: -OFFSET, duration: 1.1 });
        return;
      }

      gsap.to(window, {
        duration: 1,
        ease: "power3.inOut",
        scrollTo: { y: target, offsetY: OFFSET },
      });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [lenis]);

  return null;
}
