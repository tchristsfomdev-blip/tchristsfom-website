"use client";

import "lenis/dist/lenis.css";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { gsap, registerGsap, ScrollTrigger } from "@/components/motion/gsap";

registerGsap();

function LenisGsapBridge() {
  const lenis = useLenis();
  const pathname = usePathname();

  useEffect(() => {
    if (!lenis) {
      return;
    }

    const onScroll = () => {
      ScrollTrigger.update();
    };

    lenis.on("scroll", onScroll);
    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  // Recalculate scroll limits when route or content size changes
  // (images, fonts, footer) so Lenis does not stop short of the page end.
  useEffect(() => {
    if (!lenis) {
      return;
    }

    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };

    refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => undefined);

    const observer = new ResizeObserver(() => {
      refresh();
    });
    observer.observe(document.body);

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", refresh, { once: true });
      }
    });

    return () => {
      window.removeEventListener("load", refresh);
      observer.disconnect();
    };
  }, [lenis, pathname]);

  return null;
}

/**
 * Inertial smooth scrolling via Lenis (ScrollSmoother alternative) + ScrollTrigger bridge.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  if (!enabled) {
    return <>{children}</>;
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.1,
        smoothWheel: true,
        // Allow reaching the true document end after dynamic content settles.
        syncTouch: false,
      }}
    >
      <LenisGsapBridge />
      {children}
    </ReactLenis>
  );
}
