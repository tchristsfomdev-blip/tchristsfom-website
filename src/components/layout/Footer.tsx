import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getCampusPages } from "@/content/campus";
import { getLocalizedContent } from "@/i18n/content";
import { siteConfig } from "@/config/site";
import { getCopyrightYear } from "@/lib/year";
import { Container } from "@/components/ui/Container";
import { Icon, socialIcons } from "@/components/ui/Icon";

export async function Footer() {
  const year = await getCopyrightYear();
  const locale = await getLocale();
  const t = await getTranslations("ui");
  const { site, services, courses } = getLocalizedContent(locale);
  const campus = getCampusPages(locale);
  const places = site.contact.addresses.flatMap((office) => {
    const place = office.lines.at(-1);
    return place ? [place] : [];
  });
  const pages = [
    { href: "/about", label: t("about") },
    { href: "/blog", label: t("insights") },
    { href: "/contact", label: t("contact") },
  ] as const;
  const statement = site.headline
    .split(/(?<=\.)\s+/)
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <footer className="site-footer">
      <Container className="footer-close">
        <div className="footer-mast">
          <div className="footer-mast__lead">
            <p className="footer-close__name">{site.legalName}</p>
            <p className="footer-statement">
              {statement.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            {places.length > 0 ? (
              <p className="footer-close__place">{places.join(" · ")}</p>
            ) : null}
          </div>
          <div className="footer-mast__actions">
            <a className="footer-close__mail" href={siteConfig.contact.mailto}>
              {siteConfig.contact.email}
              <Icon name="arrow-right" className="size-4" />
            </a>
            <Link href="/contact" className="footer-cta">
              {t("scheduleCall")}
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </div>
        </div>

        <nav className="footer-menu" aria-label={t("primary")}>
          <div className="footer-menu__explore">
            <p className="footer-menu__label">{t("explore")}</p>
            <ul>
              {pages.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-menu__services">
            <p className="footer-menu__label">
              <Link href="/services">{t("services")}</Link>
            </p>
            <ul>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-menu__campus">
            <p className="footer-menu__label">
              <Link href="/campus">{t("campus")}</Link>
            </p>
            <ul>
              {campus.map((page) => (
                <li key={page.slug}>
                  <Link href={`/campus/${page.slug}`}>{page.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-menu__courses">
            <p className="footer-menu__label">
              <Link href="/courses">{t("courses")}</Link>
            </p>
            <ul>
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`}>{course.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="footer-bar">
          <p className="footer-close__legal">
            <span>
              © {year} {t("allRights")}
            </span>
            {site.legal.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </p>
          <ul className="footer-social" aria-label={t("social")}>
            {site.social.map((item) => (
              <li key={item.label}>
                <a href={item.href} rel="noopener noreferrer" target="_blank">
                  <Icon name={socialIcons[item.label] ?? "globe"} className="size-4" />
                  <span className="sr-only">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
          <p className="footer-close__credit">
            {t("poweredBy")}{" "}
            <a href="https://foxelyx.com" rel="noopener noreferrer" target="_blank">
              foxelyx.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
