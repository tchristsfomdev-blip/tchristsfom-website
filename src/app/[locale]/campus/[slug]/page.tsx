import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { getCampusPage, getCampusPages } from "@/content/campus";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { HeroMotion } from "@/components/motion/HeroMotion";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return getCampusPages("en").map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const page = getCampusPage(locale, slug);
  if (!page) {
    return { title: "Campus" };
  }

  return {
    title: page.metaTitle,
    description: page.description.slice(0, 160),
  };
}

export default async function CampusDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const page = getCampusPage(locale, slug);
  if (!page) {
    notFound();
  }

  return (
    <>
      <Section
        className="border-line border-b py-12 md:py-16"
        labelledBy="campus-detail-h1"
      >
        <HeroMotion>
          <nav
            aria-label={t("breadcrumb")}
            className="text-ink-500 text-sm"
            data-hero="body"
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-gold-800">
                  {t("home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/campus" className="hover:text-gold-800">
                  {t("campus")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-900">{page.title}</li>
            </ol>
          </nav>
          <p className="eyebrow mt-6" data-hero="eyebrow">
            {page.eyebrow}
          </p>
          <h1 id="campus-detail-h1" className="mt-3 max-w-[18ch]" data-hero="title">
            {page.headline}
          </h1>
          <p className="text-ink-500 mt-4 max-w-[58ch] text-lg" data-hero="body">
            {page.lead}
          </p>
          <div className="mt-8" data-hero="cta">
            <Magnetic>
              <Link href="/contact" className="cta">
                {t("scheduleCall")}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </Magnetic>
          </div>
        </HeroMotion>
      </Section>

      <Section className="py-16 md:py-20">
        <Reveal className="space-y-12" stagger={0.06}>
          <p className="max-w-[68ch]" data-reveal>
            {page.overview}
          </p>
          <div data-reveal>
            <h2 className="text-2xl tracking-tight">{page.highlightsTitle}</h2>
            <ul className="mt-5 space-y-2">
              {page.highlights.map((item) => (
                <li key={item} className="text-ink-700 flex gap-3 text-sm">
                  <span className="icon-well size-7 shrink-0">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  <span className="pt-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {page.sections.map((section) => (
            <div key={section.title} data-reveal>
              <h2 className="text-2xl tracking-tight">{section.title}</h2>
              {section.body ? (
                <p className="text-ink-700 mt-4 max-w-[68ch]">{section.body}</p>
              ) : null}
              {section.items?.length ? (
                <ul className="text-ink-700 mt-4 list-disc space-y-2 pl-5">
                  {section.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </Reveal>
      </Section>

      <Section className="section-ink py-20" labelledBy="campus-cta">
        <Reveal mode="fromTo">
          <h2 id="campus-cta" className="max-w-[18ch]" data-reveal>
            {page.ctaTitle}
          </h2>
          <p className="mt-4 max-w-[62ch] text-white/70" data-reveal>
            {page.ctaBody}
          </p>
          <div className="mt-9" data-reveal>
            <Magnetic>
              <Link href="/contact" className="cta">
                {t("contactUs")}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
