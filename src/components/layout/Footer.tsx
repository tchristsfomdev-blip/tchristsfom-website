import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getLocalizedContent } from "@/i18n/content";
import { siteConfig } from "@/config/site";
import { getCopyrightYear } from "@/lib/year";
import { Container } from "@/components/ui/Container";
import { FooterBrand } from "@/components/layout/FooterBrand";
import { Icon, socialIcons } from "@/components/ui/Icon";

export async function Footer() {
  const year = await getCopyrightYear();
  const locale = await getLocale();
  const t = await getTranslations("ui");
  const { site, courses, services } = getLocalizedContent(locale);

  return (
    <footer className="site-footer">
      <div className="gold-rule" />
      <Container className="footer-layout">
        <div className="footer-brand-col">
          <FooterBrand />
          <p className="footer-tagline">{site.businessTagline}</p>
          <p className="footer-tagline footer-tagline--quiet">{site.tagline}</p>
        </div>
        <div className="footer-navs">
          <nav aria-label={t("footer")}>
            <h2 className="footer-heading">{t("explore")}</h2>
            <ul className="footer-list">
              <li>
                <Link href="/" className="footer-link">
                  {t("home")}
                </Link>
              </li>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={t("services")}>
            <h2 className="footer-heading">{t("services")}</h2>
            <ul className="footer-list">
              {services.slice(0, 5).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="footer-link">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={t("courses")}>
            <h2 className="footer-heading">{t("courses")}</h2>
            <ul className="footer-list">
              {courses.map((course) => (
                <li key={course.slug}>
                  <Link href={`/courses/${course.slug}`} className="footer-link">
                    {course.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h2 className="footer-heading">{t("contact")}</h2>
            <ul className="footer-list footer-contact">
              {site.contact.addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
              <li>
                <a className="footer-link" href={`mailto:${siteConfig.contact.email}`}>
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a className="footer-link" href={siteConfig.contact.primaryPhoneHref}>
                  {siteConfig.contact.primaryPhone}
                </a>
              </li>
              <li>
                <a
                  className="footer-link"
                  href={siteConfig.website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  www.tchrists.com
                </a>
              </li>
            </ul>
            <h2 className="footer-heading footer-heading--follow">{t("social")}</h2>
            <ul className="footer-list">
              {siteConfig.social.map((item) => (
                <li key={item.label}>
                  <a
                    className="footer-link gap-2 text-sm"
                    href={item.href}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <Icon
                      name={socialIcons[item.label] ?? "globe"}
                      className="size-4 shrink-0"
                    />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
      <Container className="border-line text-ink-500 flex flex-col gap-2 border-t py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <p className="m-0 leading-snug">
          © {year} {site.legalName}. {t("allRights")}
        </p>
        <p className="m-0 flex flex-wrap items-center gap-x-3 gap-y-1 leading-snug">
          <span>
            {t("developedBy")}{" "}
            <a
              className="footer-credit-link"
              href="https://foxelyx.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              foxelyx.com
            </a>
          </span>
          <span className="text-ink-500/40 hidden sm:inline" aria-hidden="true">
            ·
          </span>
          {site.legal.map((item, index) => (
            <span key={item.href} className="contents">
              {index > 0 ? (
                <span className="text-ink-500/40" aria-hidden="true">
                  ·
                </span>
              ) : null}
              <Link href={item.href} className="footer-meta-link">
                {item.label}
              </Link>
            </span>
          ))}
        </p>
      </Container>
    </footer>
  );
}
