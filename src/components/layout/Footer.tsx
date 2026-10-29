import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
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
  const place = site.contact.addressLines.at(-1);
  const pages = [
    { href: "/about", label: t("about") },
    { href: "/blog", label: t("insights") },
    { href: "/contact", label: t("contact") },
  ] as const;

  return (
    <footer className="site-footer">
      <Container className="footer-close">
        <p className="footer-close__name">{site.legalName}</p>
        {place ? <p className="footer-close__place">{place}</p> : null}
        <a className="footer-close__mail" href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
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
        <nav className="footer-menu" aria-label={t("primary")}>
          <ul className="footer-menu__pages">
            {pages.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div>
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
          <div>
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
        <p className="footer-close__credit">
          {t("poweredBy")}{" "}
          <a href="https://foxelyx.com" rel="noopener noreferrer" target="_blank">
            foxelyx.com
          </a>
        </p>
      </Container>
    </footer>
  );
}
