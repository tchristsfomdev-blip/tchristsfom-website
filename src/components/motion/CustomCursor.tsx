"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "link" | "view" | "text" | "native" | "hidden";

export function CustomCursor() {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setEnabled(fine.matches && !reduced.matches);
    sync();
    fine.addEventListener("change", sync);
    reduced.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduced.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled || !rootRef.current || !dotRef.current || !ringRef.current) {
      document.body.classList.remove("has-custom-cursor");
      return;
    }

    document.body.classList.add("has-custom-cursor");
    document.documentElement.dataset.cursor = "default";

    const root = rootRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;

    gsap.set(root, { xPercent: -50, yPercent: -50 });

    const moveX = gsap.quickTo(root, "x", { duration: 0.18, ease: "power3.out" });
    const moveY = gsap.quickTo(root, "y", { duration: 0.18, ease: "power3.out" });

    let mode: CursorMode = "default";

    const setMode = (next: CursorMode, text = "") => {
      if (mode === next && (next !== "view" || label?.textContent === text)) {
        return;
      }

      mode = next;
      document.documentElement.dataset.cursor = next;

      if (label) {
        label.textContent = next === "view" ? text || "View" : "";
      }

      // Drive visibility via GSAP so CSS opacity fights do not leave the gold
      // dot sitting on top of the label (the previous garbled "VIEW" bug).
      // "native" hides the ring entirely so it does not cut through letterforms.
      const concealDot =
        next === "view" || next === "text" || next === "hidden" || next === "native";
      const concealRing = next === "hidden" || next === "native";
      gsap.to(dot, {
        autoAlpha: concealDot ? 0 : 1,
        duration: next === "native" ? 0 : 0.15,
        overwrite: true,
      });
      gsap.to(ring, {
        autoAlpha: concealRing ? 0 : 1,
        duration: next === "native" ? 0 : 0.15,
        overwrite: true,
      });
    };

    const onMove = (event: MouseEvent) => {
      moveX(event.clientX);
      moveY(event.clientY);
    };

    const onOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target || target.closest(".custom-cursor")) {
        return;
      }

      if (target.closest("input, textarea, select, [contenteditable='true']")) {
        setMode("text");
        return;
      }

      // Keep the decorative ring off headings and paragraphs. The system
      // pointer takes over so glyphs are not covered.
      if (target.closest("h1, h2, h3, h4, h5, h6, p, blockquote, figcaption")) {
        setMode("native");
        return;
      }

      const cursorHost = target.closest<HTMLElement>("[data-cursor]");
      if (cursorHost?.dataset.cursor === "hidden") {
        setMode("hidden");
        return;
      }
      if (cursorHost?.dataset.cursor === "view") {
        setMode("view", cursorHost.dataset.cursorLabel ?? "View");
        return;
      }
      if (target.closest("a, button, [role='button'], .cta, .cta-secondary, .nav-link")) {
        setMode("link");
        return;
      }
      setMode("default");
    };

    const onLeave = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;
      const inside = x >= 0 && y >= 0 && x < window.innerWidth && y < window.innerHeight;
      // Leaving the window hides the cursor. A leave that still lands inside
      // the viewport is an embedded frame (video); keep tracking everywhere else
      // so the pointer does not vanish over normal sections.
      if (!inside) {
        setMode("hidden");
        return;
      }
      const top = document.elementFromPoint(x, y);
      if (top?.closest("iframe, video")) {
        setMode("hidden");
      }
    };
    const onEnter = () => {
      if (mode === "hidden") {
        setMode("default");
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
      delete document.documentElement.dataset.cursor;
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div ref={rootRef} className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className="custom-cursor__ring">
        <span ref={labelRef} className="custom-cursor__label" />
      </div>
      <div ref={dotRef} className="custom-cursor__dot" />
    </div>
  );
}
