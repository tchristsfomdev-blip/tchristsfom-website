"use client";

import { usePathname } from "@/i18n/navigation";
import { gsap, prefersReducedMotion, useGSAP } from "@/components/motion/gsap";

/**
 * Fade-up for sections that do not already run their own scroll reveal.
 * Screens with data-reveal / data-hero keep that motion and are left alone.
 */
export function PageScroll() {
  const pathname = usePathname();

  useGSAP(
    () => {
      if (prefersReducedMotion()) {
        return;
      }

      const sections = gsap.utils.toArray<HTMLElement>("main section");

      sections.forEach((section) => {
        if (section.querySelector("[data-reveal], [data-hero]")) {
          return;
        }

        const inView = section.getBoundingClientRect().top < window.innerHeight * 0.92;

        if (inView) {
          gsap.fromTo(
            section,
            { y: 18 },
            { y: 0, duration: 0.7, ease: "power3.out", clearProps: "transform" },
          );
          return;
        }

        gsap.fromTo(
          section,
          { autoAlpha: 0, y: 32 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power3.out",
            clearProps: "transform,opacity,visibility",
            scrollTrigger: {
              trigger: section,
              start: "top 88%",
              once: true,
            },
          },
        );
      });
    },
    { dependencies: [pathname] },
  );

  return null;
}
