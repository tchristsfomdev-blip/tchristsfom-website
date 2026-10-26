"use client";

import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { siteConfig } from "@/config/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const navKeys = ["about", "services", "courses", "insights", "contact"] as const;

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const t = useTranslations("ui");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      id="mobile-menu"
      aria-label={t("menu")}
      className="mobile-menu"
      onClose={onClose}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
    >
      <div className="flex items-center justify-between">
        <p className="font-display text-lg">{siteConfig.shortName}</p>
        <button
          ref={closeRef}
          type="button"
          className="border-line inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border px-4"
          data-close-menu
          onClick={onClose}
        >
          {t("close")}
        </button>
      </div>
      <nav className="mt-10 flex flex-col" aria-label={t("primary")}>
        {siteConfig.nav.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link text-2xl"
            onClick={onClose}
          >
            {t(navKeys[index] ?? "home")}
          </Link>
        ))}
        <LocaleSwitcher className="mt-8" />
        <Link href={siteConfig.cta.href} className="cta mt-8 w-fit" onClick={onClose}>
          {t("enquire")}
        </Link>
      </nav>
    </dialog>
  );
}
