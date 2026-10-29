"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";
import { Link } from "@/i18n/navigation";
import { siteImages } from "@/config/media";
import { siteConfig } from "@/config/site";
import {
  gsap,
  prefersReducedMotion,
  registerGsap,
  useGSAP,
} from "@/components/motion/gsap";

registerGsap();

/**
 * Enhanced Corporate Leadership Academy / brand lockup for the footer.
 */
export function FooterBrand() {
  const ref = useRef<HTMLAnchorElement>(null);
  const t = useTranslations("ui");
  const { footerBrand } = siteImages;

  useGSAP(
    () => {
      const root = ref.current;
      if (!root || prefersReducedMotion()) {
        return;
      }

      const frame = root.querySelector("[data-footer-brand-frame]");
      const image = root.querySelector("[data-footer-brand-image]");
      if (!frame || !image) {
        return;
      }

      gsap.fromTo(
        frame,
        { opacity: 0, y: 28, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: root,
            start: "top 92%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        image,
        { y: 18 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Link
      ref={ref}
      href="/services/corporate-leadership-academy"
      className="footer-brand"
      aria-label={`${siteConfig.brandName} ${t("academyCaption")}`}
    >
      <span className="footer-brand__frame" data-footer-brand-frame>
        <Image
          src={footerBrand.src}
          alt={footerBrand.alt}
          width={footerBrand.width}
          height={footerBrand.height}
          className="footer-brand__image"
          data-footer-brand-image
          sizes="(max-width: 768px) 220px, 260px"
        />
      </span>
      <span className="footer-brand__caption">{t("academyCaption")}</span>
    </Link>
  );
}
