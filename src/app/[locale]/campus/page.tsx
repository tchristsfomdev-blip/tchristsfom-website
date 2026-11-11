import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getCampusPages } from "@/content/campus";
import { getLocalizedContent } from "@/i18n/content";
import { shellMetadata } from "@/components/layout/ShellPage";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { HeroMotion } from "@/components/motion/HeroMotion";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = getLocalizedContent(locale);
  return shellMetadata(site.pages.campus.title, site.pages.campus.description);
}

export default async function CampusPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const { site } = getLocalizedContent(locale);
  const pages = getCampusPages(locale);

  return (
    <>
      <Section className="py-20 md:py-28" labelledBy="campus-h1">
        <HeroMotion>
          <p className="eyebrow" data-hero="eyebrow">
            {t("campus")}
          </p>
          <h1 id="campus-h1" className="mt-3 max-w-[16ch]" data-hero="title">
            {site.pages.campus.title}
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg" data-hero="body">
            {site.pages.campus.description}
          </p>
        </HeroMotion>
      </Section>

      <Section className="pb-20" labelledBy="campus-list">
        <h2 id="campus-list" className="sr-only">
          {t("allCampus")}
        </h2>
        <Reveal stagger={0.06}>
          <ul className="service-index">
            {pages.map((page) => (
              <li key={page.slug} data-reveal>
                <Link href={`/campus/${page.slug}`} className="service-index__link">
                  <h3 className="service-index__title">{page.title}</h3>
                  <p className="service-index__desc">{page.lead}</p>
                  <span className="service-index__arrow" aria-hidden="true">
                    <Icon name="arrow-right" className="size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
        <div className="mt-10">
          <Magnetic>
            <Link href="/contact" className="cta">
              {t("scheduleCall")}
              <Icon name="arrow-right" className="size-4" />
            </Link>
          </Magnetic>
        </div>
      </Section>
    </>
  );
}
