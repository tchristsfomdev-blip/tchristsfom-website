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

type HeroMotionProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Hero entrance timeline: ScrambleText eyebrow → SplitText title → fromTo body → media.
 * Mark children with data-hero="eyebrow" | "title" | "body" | "cta" | "media".
 *
 * Important: do not use `display: contents` on this wrapper — GSAP cannot reliably
 * query / animate descendants when the scoped root has no box.
 */
export function HeroMotion({ children, className = "" }: HeroMotionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) {
        return;
      }

      const eyebrow = root.querySelector<HTMLElement>('[data-hero="eyebrow"]');
      const title = root.querySelector<HTMLElement>('[data-hero="title"]');
      const bodies = gsap.utils.toArray<HTMLElement>('[data-hero="body"]', root);
      const cta = root.querySelector<HTMLElement>('[data-hero="cta"]');
      const media = root.querySelector<HTMLElement>('[data-hero="media"]');

      if (prefersReducedMotion()) {
        gsap.set([eyebrow, title, ...bodies, cta, media].filter(Boolean), {
          clearProps: "all",
        });
        return;
      }

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (eyebrow) {
        const original = eyebrow.textContent ?? "";
        gsap.set(eyebrow, { opacity: 0, y: 12 });
        tl.to(eyebrow, { opacity: 1, y: 0, duration: 0.45 }, 0).to(
          eyebrow,
          {
            duration: 0.9,
            scrambleText: {
              text: original,
              chars: "upperAndLowerCase",
              speed: 0.45,
            },
          },
          0.05,
        );
      }

      let split: SplitText | undefined;
      if (title) {
        try {
          split = SplitText.create(title, {
            type: "words,lines",
            wordsClass: "split-word",
            linesClass: "split-line",
            aria: "auto",
          });
          gsap.set(split.words, { opacity: 0, y: 36 });
          tl.to(
            split.words,
            { opacity: 1, y: 0, duration: 0.85, stagger: 0.045 },
            eyebrow ? "-=0.55" : 0,
          );
        } catch {
          gsap.set(title, { opacity: 0, y: 28 });
          tl.to(title, { opacity: 1, y: 0, duration: 0.85 }, eyebrow ? "-=0.55" : 0);
        }
      }

      if (bodies.length) {
        gsap.set(bodies, { opacity: 0, y: 24 });
        tl.to(bodies, { opacity: 1, y: 0, duration: 0.75, stagger: 0.08 }, "-=0.45");
      }

      if (cta) {
        gsap.set(cta, { opacity: 0, y: 18 });
        tl.to(cta, { opacity: 1, y: 0, duration: 0.65 }, "-=0.4");
      }

      if (media) {
        gsap.set(media, { opacity: 0, y: 40, scale: 0.97 });
        tl.to(media, { opacity: 1, y: 0, scale: 1, duration: 1 }, 0.15);
      }

      return () => {
        split?.revert();
      };
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
