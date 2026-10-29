"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { useLenis } from "lenis/react";
import { Link, usePathname } from "@/i18n/navigation";
import { localizeCourses, localizeServices } from "@/i18n/content";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/layout/Logo";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { LocaleSwitcher } from "@/components/layout/LocaleSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Icon } from "@/components/ui/Icon";
import { Magnetic } from "@/components/motion/Magnetic";

const navKeys = ["about", "services", "courses", "insights", "contact"] as const;

export function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("ui");
  const services = localizeServices(locale);
  const courses = localizeCourses(locale);
  const [menuPath, setMenuPath] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const open = menuPath === pathname;

  useLenis((lenis) => {
    const y = lenis.scroll;
    setScrolled(y > 8);
    setHidden(y > 96 && y > lastY.current);
    lastY.current = y;
  });

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 96 && y > lastY.current);
      lastY.current = y;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = [
    "site-header",
    scrolled ? "is-scrolled" : "",
    hidden && !open ? "is-hidden" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={headerClass}>
      <Container className="flex min-h-[3.75rem] items-center justify-between gap-4">
        <Logo />
        <nav className="primary-nav" aria-label={t("primary")}>
          {siteConfig.nav.map((item, index) =>
            item.href === "/services" ? (
              <NavDropdown
                key={item.href}
                label={t("services")}
                href="/services"
                allLabel={t("allServices")}
                items={services}
              />
            ) : item.href === "/courses" ? (
              <NavDropdown
                key={item.href}
                label={t("courses")}
                href="/courses"
                allLabel={t("allCourses")}
                items={courses}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link text-sm"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {t(navKeys[index] ?? "home")}
              </Link>
            ),
          )}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <LocaleSwitcher />
          <Magnetic className="header-cta">
            <Link href={siteConfig.cta.href} className="cta">
              {t("enquire")}
              <Icon name="arrow-right" className="size-3.5" />
            </Link>
          </Magnetic>
          <button
            type="button"
            className="menu-button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setMenuPath(pathname)}
          >
            <span className="sr-only">{t("openMenu")}</span>
            <MenuIcon />
          </button>
        </div>
      </Container>
      <nav className="nav-fallback" aria-label={t("primary")}>
        {siteConfig.nav.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className="nav-link"
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {t(navKeys[index] ?? "home")}
          </Link>
        ))}
        <Link href={siteConfig.cta.href} className="cta mt-2">
          {t("enquire")}
        </Link>
      </nav>
      <MobileMenu open={open} onClose={() => setMenuPath(null)} />
    </header>
  );
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
