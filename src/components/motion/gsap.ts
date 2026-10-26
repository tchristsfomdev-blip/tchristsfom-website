"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { Flip } from "gsap/Flip";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { Observer } from "gsap/Observer";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

let registered = false;

/**
 * Single registration point for GSAP core + plugins used across the site.
 * ScrollSmoother is intentionally omitted — Lenis in SmoothScroll covers inertial scroll.
 */
export function registerGsap() {
  if (registered || typeof window === "undefined") {
    return;
  }

  try {
    gsap.registerPlugin(
      useGSAP,
      ScrollTrigger,
      ScrollToPlugin,
      SplitText,
      ScrambleTextPlugin,
      TextPlugin,
      DrawSVGPlugin,
      MotionPathPlugin,
      Flip,
      Observer,
    );
    registered = true;
  } catch (error) {
    console.error("[gsap] plugin registration failed", error);
  }
}

export function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export {
  gsap,
  useGSAP,
  ScrollTrigger,
  ScrollToPlugin,
  SplitText,
  ScrambleTextPlugin,
  TextPlugin,
  DrawSVGPlugin,
  MotionPathPlugin,
  Flip,
  Observer,
};
