import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { services } from "@/content/services";
import { getLocalizedContent, localizeServices } from "@/i18n/content";
import { siteImages } from "@/config/media";
import { Section } from "@/components/ui/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { VideoEmbed } from "@/components/ui/VideoEmbed";
import { Icon, serviceIcons } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { HeroMotion } from "@/components/motion/HeroMotion";
import { Parallax } from "@/components/motion/Parallax";
import { DrawIcon } from "@/components/motion/DrawIcon";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const service = localizeServices(locale).find((item) => item.slug === slug);
  if (!service) {
    return { title: t("serviceNotFound") };
  }

  return {
    title: service.title,
    description: service.shortDescription.slice(0, 160),
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const { site, services: localized } = getLocalizedContent(locale);
  const service = localized.find((item) => item.slug === slug);
  if (!service) {
    notFound();
  }

  const related = localized.filter((item) => item.slug !== service.slug).slice(0, 3);
  const iconName = serviceIcons[service.slug] ?? "briefcase";
  const hasAcademyActions = Boolean(service.actions?.length);

  return (
    <>
      <Section className="border-line border-b py-12 md:py-16" labelledBy="service-h1">
        <HeroMotion className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <nav
              aria-label="Breadcrumb"
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
                  <Link href="/services" className="hover:text-gold-800">
                    {t("services")}
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-ink-900">{service.title}</li>
              </ol>
            </nav>
            <p className="eyebrow mt-6" data-hero="eyebrow">
              Consultancy
            </p>
            <h1 id="service-h1" className="mt-3 max-w-[18ch]" data-hero="title">
              {service.title}
            </h1>
            <p className="text-ink-500 mt-4 max-w-[58ch] text-lg" data-hero="body">
              {service.headline}
            </p>
            <p className="mt-4 max-w-[68ch]" data-hero="body">
              {service.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3" data-hero="cta">
              {hasAcademyActions ? (
                service.actions!.map((action) => (
                  <Magnetic key={action.href}>
                    <a
                      href={action.href}
                      className={action.variant === "secondary" ? "cta-secondary" : "cta"}
                      {...(action.external
                        ? { rel: "noopener noreferrer", target: "_blank" }
                        : {})}
                    >
                      {action.label}
                      <Icon name="arrow-right" className="size-4" />
                    </a>
                  </Magnetic>
                ))
              ) : (
                <>
                  <Magnetic>
                    <Link href={`/contact?service=${service.slug}`} className="cta">
                      {t("enquire")}
                      <Icon name="arrow-right" className="size-4" />
                    </Link>
                  </Magnetic>
                  <Magnetic>
                    <Link href="/services" className="cta-secondary">
                      {t("allServices")}
                    </Link>
                  </Magnetic>
                </>
              )}
            </div>
          </div>
          <div data-hero="media">
            <Parallax y={28}>
              <MediaFrame {...siteImages.services} priority />
            </Parallax>
          </div>
        </HeroMotion>
      </Section>

      <Section
        className="py-16 md:py-20"
        containerClassName="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]"
      >
        <Reveal className="space-y-12" stagger={0.06}>
          <div data-reveal>
            <div className="mb-4 flex items-center gap-3">
              <DrawIcon>
                <span className="icon-well icon-well--accent">
                  <Icon name={iconName} />
                </span>
              </DrawIcon>
              <h2 className="text-2xl tracking-tight">{t("overview")}</h2>
            </div>
            <p className="mt-2 max-w-[68ch]">{service.overview}</p>
          </div>

          <div data-reveal>
            <h2 className="text-2xl tracking-tight">{t("highlights")}</h2>
            <ul className="mt-5 space-y-2">
              {service.points.map((point) => (
                <li key={point} className="text-ink-700 flex gap-3 text-sm">
                  <span className="icon-well size-7 shrink-0">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  <span className="pt-1">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {service.sections.map((section) => (
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

          {service.videos?.length ? (
            <div data-reveal className="space-y-6">
              <div>
                <p className="eyebrow">{t("highlightedSuccesses")}</p>
                <h2 className="mt-2 text-2xl tracking-tight">{t("academyStories")}</h2>
                <p className="text-ink-500 mt-3 max-w-[58ch] text-sm">
                  {t("academyWatch")}
                </p>
              </div>
              {service.videos.map((video) => (
                <VideoEmbed
                  key={video.youtubeId}
                  youtubeId={video.youtubeId}
                  title={video.title}
                />
              ))}
            </div>
          ) : null}

          {service.relatedCourseSlug ? (
            <div data-reveal className="apple-tile gap-4 p-6">
              <h2 className="text-xl tracking-tight">{t("relatedCourse")}</h2>
              <p className="text-ink-500 text-sm">{t("relatedCourseNote")}</p>
              <Magnetic>
                <Link
                  href={`/courses/${service.relatedCourseSlug}`}
                  className="cta-secondary"
                >
                  {t("viewCourse")}
                  <Icon name="arrow-right" className="size-4" />
                </Link>
              </Magnetic>
            </div>
          ) : null}
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="apple-tile h-fit gap-4 p-6 lg:sticky lg:top-24">
            <span className="icon-well icon-well--accent">
              <Icon name={iconName} />
            </span>
            <h2 className="text-xl tracking-tight">
              {hasAcademyActions ? t("joinAcademy") : t("enquireService")}
            </h2>
            <p className="text-ink-500 text-sm">
              {hasAcademyActions ? t("academyAside") : t("serviceAside")}
            </p>

            {hasAcademyActions
              ? service.actions!.map((action) => (
                  <Magnetic key={`aside-${action.href}`} className="block w-full">
                    <a
                      href={action.href}
                      className={
                        action.variant === "secondary"
                          ? "cta-secondary w-full"
                          : "cta w-full"
                      }
                      {...(action.external
                        ? { rel: "noopener noreferrer", target: "_blank" }
                        : {})}
                    >
                      {action.label}
                      <Icon name="arrow-right" className="size-4" />
                    </a>
                  </Magnetic>
                ))
              : null}

            <Magnetic className="mt-1 block w-full">
              <Link
                href={`/contact?service=${service.slug}`}
                className={hasAcademyActions ? "cta-secondary w-full" : "cta w-full"}
              >
                {hasAcademyActions ? t("askQuestion") : t("enquire")}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </Magnetic>
            <Magnetic className="block w-full">
              <a
                href={site.contact.whatsapp}
                className="cta-secondary w-full"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="message" className="size-4" />
                {t("whatsapp")}
              </a>
            </Magnetic>
          </aside>
        </Reveal>
      </Section>

      {hasAcademyActions ? (
        <Section className="section-surface py-16 md:py-20" labelledBy="academy-apply">
          <Reveal mode="fromTo">
            <div
              className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
              data-reveal
            >
              <div>
                <p className="eyebrow">{t("enrolment")}</p>
                <h2 id="academy-apply" className="mt-2 max-w-[18ch]">
                  {t("applyAcademy")}
                </h2>
                <p className="text-ink-500 mt-3 max-w-[52ch]">{t("applyAcademyBody")}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Magnetic>
                  <a
                    href="https://forms.office.com/r/dpTk2TjGQN"
                    className="cta"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t("applyAcademy")}
                    <Icon name="arrow-right" className="size-4" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a
                    href="https://rzp.io/rzp/9ABYa76Z"
                    className="cta-secondary"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {service.actions?.[1]?.label}
                    <Icon name="arrow-right" className="size-4" />
                  </a>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        </Section>
      ) : null}

      <Section
        className={hasAcademyActions ? "py-16" : "section-surface py-16"}
        labelledBy="related-services"
      >
        <Reveal>
          <h2 id="related-services" data-reveal>
            {t("relatedServices")}
          </h2>
        </Reveal>
        <Reveal className="mt-8" stagger={0.06}>
          <ul className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} data-reveal>
                <Link href={`/services/${item.slug}`} className="block no-underline">
                  <h3 className="text-ink-900 hover:text-gold-800 text-lg tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-ink-500 mt-2 text-sm">
                    {item.shortDescription.slice(0, 120)}…
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="section-ink py-20" labelledBy="service-cta">
        <Reveal mode="fromTo">
          <h2 id="service-cta" className="max-w-[18ch]" data-reveal>
            {site.home.ctaTitle}
          </h2>
          <p className="mt-4 max-w-[62ch] text-white/70" data-reveal>
            {site.home.ctaBody}
          </p>
          <div className="mt-9 flex flex-wrap gap-3" data-reveal>
            <Magnetic>
              <Link href="/contact" className="cta">
                {t("contactUs")}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/services" className="cta-secondary">
                {t("browseServices")}
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
