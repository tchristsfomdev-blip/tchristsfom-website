import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { expertiseLogos } from "@/content/expertise";
import { getLocalizedContent } from "@/i18n/content";
import { siteImages } from "@/config/media";
import { Section } from "@/components/ui/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { HeroMotion } from "@/components/motion/HeroMotion";
import { Parallax } from "@/components/motion/Parallax";
import { DrawIcon } from "@/components/motion/DrawIcon";
import { CountUp } from "@/components/motion/CountUp";
import { TextReveal } from "@/components/motion/TextReveal";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const { site, courses, services } = getLocalizedContent(locale);
  const { home } = site;

  return (
    <>
      <Section className="hero-section" labelledBy="home-heading">
        <HeroMotion className="hero">
          <div className="hero__copy">
            <p className="eyebrow" data-hero="eyebrow">
              {home.eyebrow}
            </p>
            <h1 id="home-heading" data-hero="title">
              {home.h1}
            </h1>
            <p className="hero__lead" data-hero="body">
              {home.lead}
            </p>
            <div className="hero__actions" data-hero="cta">
              <Magnetic>
                <Link href="/courses" className="cta">
                  {t("exploreCourses")}
                  <Icon name="arrow-right" className="size-4" />
                </Link>
              </Magnetic>
              <Magnetic>
                <Link href="/contact" className="cta-secondary">
                  {t("contactUs")}
                </Link>
              </Magnetic>
            </div>
          </div>
          <div className="hero__stage" data-hero="media">
            <Parallax className="hero__frame" y={28}>
              <Image
                {...siteImages.hero}
                priority
                data-parallax-target
                className="hero__photo"
                sizes="(max-width: 960px) 100vw, 52vw"
              />
            </Parallax>
            <div className="hero__note">
              <p className="hero__mark">{site.headline}</p>
              <p>{home.sublead}</p>
            </div>
          </div>
        </HeroMotion>
      </Section>

      <Section className="pb-10 md:pb-14" labelledBy="trust-heading">
        <h2 id="trust-heading" className="sr-only">
          {t("trustHeading")}
        </h2>
        <Reveal mode="fromTo" stagger={0.1}>
          <div className="apple-group">
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
              {home.trust.map((item, index) => {
                const icons = ["award", "globe", "graduation", "briefcase"] as const;
                return (
                  <li key={item} className="apple-row" data-reveal>
                    <DrawIcon>
                      <span className="icon-well icon-well--accent">
                        <Icon name={icons[index] ?? "sparkles"} />
                      </span>
                    </DrawIcon>
                    <span className="text-ink-700 self-center text-sm font-semibold tracking-tight">
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>
      </Section>

      <Section className="py-16 md:py-24" labelledBy="stats-heading">
        <Reveal>
          <h2 id="stats-heading" className="sr-only">
            {t("impactFigures")}
          </h2>
          <dl className="stat-board">
            {site.stats.map((stat) => (
              <div key={stat.label} className="stat-card" data-reveal>
                <dt>{stat.label}</dt>
                <CountUp value={stat.value} className="stat-figure" />
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section className="py-12 md:py-20" labelledBy="intro-heading">
        <div className="intro-band">
          <Parallax className="intro-band__frame" y={24} speed={0.85}>
            <Image
              {...siteImages.courses}
              data-parallax-target
              className="intro-band__photo"
              sizes="(max-width: 960px) 100vw, 58vw"
            />
          </Parallax>
          <Reveal className="intro-band__copy">
            <p className="eyebrow" data-reveal>
              {t("ukAligned")}
            </p>
            <TextReveal as="h2" id="intro-heading" className="mt-3" type="words" scroll>
              {home.introTitle}
            </TextReveal>
            <p className="intro-band__body" data-reveal>
              {home.introBody}
            </p>
            <p className="intro-band__extra" data-reveal>
              {home.introExtra}
            </p>
          </Reveal>
        </div>
      </Section>

      <Section className="section-surface py-16 md:py-24" labelledBy="services-heading">
        <Reveal>
          <div className="offer__intro">
            <div className="offer__title" data-reveal>
              <p className="eyebrow">{t("consultancy")}</p>
              <h2 id="services-heading" className="mt-3 max-w-[14ch]">
                {home.servicesTitle}
              </h2>
            </div>
            <p className="offer__lead" data-reveal>
              {home.servicesLead}
            </p>
            <div className="offer__action" data-reveal>
              <Magnetic>
                <Link href="/services" className="cta">
                  {t("viewAllServices")}
                  <Icon name="arrow-right" className="size-4" />
                </Link>
              </Magnetic>
            </div>
          </div>
        </Reveal>
        <Reveal stagger={0.06} mode="fromTo">
          <ul className="offer-board">
            {services.map((service, index) => (
              <li
                key={service.slug}
                className={
                  index === 0
                    ? "offer-tile offer-tile--lead"
                    : index === services.length - 1
                      ? "offer-tile offer-tile--band"
                      : "offer-tile"
                }
                data-reveal
              >
                <Link href={`/services/${service.slug}`} className="offer-tile__link">
                  <span className="offer-tile__copy">
                    <h3>{service.title}</h3>
                    <span className="offer-tile__foot">
                      <p>{service.shortDescription}</p>
                      <span className="offer-tile__go" aria-hidden="true">
                        <Icon name="arrow-right" className="size-4" />
                      </span>
                    </span>
                  </span>
                  {index === 0 ? (
                    <Image
                      {...siteImages.academy}
                      alt={siteImages.academy.alt}
                      className="offer-tile__photo"
                      sizes="(max-width: 900px) 100vw, 640px"
                    />
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="py-16 md:py-24" labelledBy="offerings-heading">
        <Reveal>
          <p className="eyebrow" data-reveal>
            {t("courseDirectory")}
          </p>
          <h2 id="offerings-heading" className="mt-3 max-w-[20ch]" data-reveal>
            {home.offeringsTitle}
          </h2>
          <p className="text-ink-500 mt-4 max-w-[65ch]" data-reveal>
            {home.offeringsLead}
          </p>
        </Reveal>
        <Reveal className="mt-10" stagger={0.06} mode="fromTo">
          <ol className="course-board">
            {courses.map((course, index) => {
              const number = String(index + 1).padStart(2, "0");
              const tileClass =
                index === 0
                  ? "course-tile course-tile--feature"
                  : index === courses.length - 1
                    ? "course-tile course-tile--close"
                    : "course-tile";
              return (
                <li key={course.slug} className={tileClass} data-reveal>
                  <Link href={`/courses/${course.slug}`} className="course-tile__link">
                    <span className="sr-only">{t("courseN", { n: number })}</span>
                    <span className="course-tile__index" aria-hidden="true">
                      {number}
                    </span>
                    <div className="course-tile__body">
                      <h3>{course.title}</h3>
                      <div className="course-tile__foot">
                        <p>{course.shortDescription}</p>
                        <span className="course-tile__go" aria-hidden="true">
                          <Icon name="arrow-right" className="size-4" />
                        </span>
                      </div>
                    </div>
                    {index === 0 ? (
                      <Image
                        {...siteImages.virtualWorking}
                        alt={siteImages.virtualWorking.alt}
                        className="course-tile__photo"
                        sizes="(max-width: 700px) 100vw, 280px"
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </Section>

      <Section className="section-surface py-16 md:py-24" labelledBy="why-heading">
        <Reveal>
          <div className="why__intro">
            <p className="eyebrow" data-reveal>
              {t("whyChoose")}
            </p>
            <h2 id="why-heading" className="mt-3 max-w-[18ch]" data-reveal>
              {home.whyTitle}
            </h2>
            <p className="why__lead" data-reveal>
              {home.whyLead}
            </p>
          </div>
        </Reveal>
        <div className="why">
          <Reveal>
            <figure className="why__photo" data-reveal>
              <Image
                {...siteImages.learning}
                alt={siteImages.learning.alt}
                sizes="(max-width: 900px) 100vw, 520px"
              />
            </figure>
          </Reveal>
          <Reveal stagger={0.07} mode="fromTo">
            <div className="why__list">
              {home.pillars.map((pillar, index) => (
                <article
                  key={pillar.title}
                  className={index === 0 ? "why__item why__item--lead" : "why__item"}
                  data-reveal
                >
                  <h3>{pillar.title}</h3>
                  <p>{pillar.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="py-16 md:py-24" labelledBy="cases-heading">
        <div className="mb-10 grid items-end gap-10 lg:grid-cols-[1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow" data-reveal>
              {t("results")}
            </p>
            <h2 id="cases-heading" className="mt-3 max-w-[18ch]" data-reveal>
              {home.casesTitle}
            </h2>
            <p className="text-ink-500 mt-4 max-w-[65ch]" data-reveal>
              {home.casesLead}
            </p>
          </Reveal>
          <Parallax y={32}>
            <Reveal delay={0.08} mode="fromTo">
              <MediaFrame {...siteImages.services} />
            </Reveal>
          </Parallax>
        </div>
        <Reveal stagger={0.05}>
          <ul className="case-list">
            {home.cases.map((item) => (
              <li key={item.title} className="case-line" data-reveal>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="section-surface py-16 md:py-20" labelledBy="faq-heading">
        <Reveal>
          <h2 id="faq-heading" data-reveal>
            {home.faqTitle}
          </h2>
          <dl className="faq-list">
            {home.faqs.map((faq) => (
              <div key={faq.question} className="faq-list__item" data-reveal>
                <dt>{faq.question}</dt>
                <dd>{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section className="expertise-band" labelledBy="expertise-heading">
        <h2 id="expertise-heading" className="expertise-band__title">
          {t("expertiseHeading")}
        </h2>
        <ul className="expertise-row">
          {expertiseLogos.map((logo) => (
            <li key={logo.src} className="expertise-mark">
              <Image src={logo.src} alt={logo.alt} width={220} height={120} />
            </li>
          ))}
        </ul>
      </Section>

      <Section className="section-ink py-20 md:py-24" labelledBy="cta-heading">
        <Reveal mode="fromTo">
          <h2 id="cta-heading" className="max-w-[18ch]" data-reveal>
            {home.ctaTitle}
          </h2>
          <p className="mt-4 max-w-[62ch] text-white/70" data-reveal>
            {home.ctaBody}
          </p>
          <div className="mt-9 flex flex-wrap gap-3" data-reveal>
            <Magnetic>
              <Link href="/contact" className="cta">
                {t("contactUs")}
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
