"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/config/site";

export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const t = useTranslations("ui");
  const pixels = size === "lg" ? 72 : size === "sm" ? 44 : 56;

  return (
    <Link
      href="/"
      className="text-ink-900 inline-flex min-h-11 shrink-0 items-center gap-2.5 no-underline sm:gap-3"
      aria-label={`${siteConfig.brandName} ${t("home")}`}
    >
      <Image
        src={siteConfig.logo.src}
        alt={t("logoAlt")}
        width={pixels}
        height={pixels}
        className="size-11 rounded-sm bg-black object-contain sm:size-14"
        priority={size !== "sm"}
      />
      <span className="font-display text-[1.05rem] leading-none tracking-tight">
        {siteConfig.shortName}
      </span>
    </Link>
  );
}
