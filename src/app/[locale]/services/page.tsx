import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getLocalizedContent } from "@/i18n/content";
import { siteImages } from "@/config/media";
import { shellMetadata } from "@/components/layout/ShellPage";
import { Section } from "@/components/ui/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { HeroMotion } from "@/components/motion/HeroMotion";
import { Parallax } from "@/components/motion/Parallax";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = getLocalizedContent(locale);
  return shellMetadata(site.pages.services.title, site.pages.services.description);
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const { site, services } = getLocalizedContent(locale);

  return (
    <>
      <Section className="py-20 md:py-28" labelledBy="services-h1">
        <HeroMotion className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow" data-hero="eyebrow">
              {t("consultancy")}
            </p>
            <h1 id="services-h1" className="mt-3 max-w-[16ch]" data-hero="title">
              {site.pages.services.title}
            </h1>
            <p className="mt-6 max-w-[48ch] text-lg" data-hero="body">
              {t("serviceLead")}
            </p>
          </div>
          <div data-hero="media">
            <Parallax y={36}>
              <MediaFrame {...siteImages.services} priority />
            </Parallax>
          </div>
        </HeroMotion>
      </Section>

      <Section className="py-16 md:py-24" labelledBy="services-list">
        <Reveal>
          <div className="border-line flex flex-wrap items-end justify-between gap-4 border-b pb-8">
            <div>
              <p className="eyebrow" data-reveal>
                {t("servicesCount", { count: String(services.length).padStart(2, "0") })}
              </p>
              <h2 id="services-list" className="mt-3 max-w-[16ch]" data-reveal>
                {t("whatWeOffer")}
              </h2>
            </div>
            <p className="text-ink-500 max-w-[36ch] text-sm" data-reveal>
              {t("openAnyService")}
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-2" stagger={0.05} mode="fromTo">
          <ul className="service-index">
            {services.map((service) => (
              <li key={service.slug} id={service.slug} data-reveal>
                <Link href={`/services/${service.slug}`} className="service-index__link">
                  <h3 className="service-index__title">{service.title}</h3>
                  <p className="service-index__desc">{service.shortDescription}</p>
                  <span className="service-index__arrow" aria-hidden="true">
                    <Icon name="arrow-right" className="size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="section-ink py-20" labelledBy="services-cta">
        <Reveal mode="fromTo">
          <h2 id="services-cta" className="max-w-[18ch]" data-reveal>
            {site.home.ctaTitle}
          </h2>
          <p className="mt-4 max-w-[62ch] text-white/70" data-reveal>
            {site.home.ctaBody}
          </p>
          <div className="mt-9 flex flex-wrap gap-3" data-reveal>
            <Magnetic>
              <Link href="/contact" className="cta">
                {t("getQuotation")}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <a
                href={site.contact.whatsapp}
                className="cta-secondary"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="message" className="size-4" />
                {t("whatsappUs")}
              </a>
            </Magnetic>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
