import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { expertiseLogos } from "@/content/expertise";
import { getLocalizedContent } from "@/i18n/content";
import { siteImages } from "@/config/media";
import { Section } from "@/components/ui/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Icon, pillarIcons, serviceIcons } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";
import { HeroMotion } from "@/components/motion/HeroMotion";
import { Parallax } from "@/components/motion/Parallax";
import { DrawIcon } from "@/components/motion/DrawIcon";
import { CountUp } from "@/components/motion/CountUp";
import { MotionPathAccent } from "@/components/motion/MotionPathAccent";
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
      <Section className="py-20 md:py-28" labelledBy="home-heading">
        <HeroMotion className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow" data-hero="eyebrow">
              {home.eyebrow}
            </p>
            <p
              className="text-ink-500 mt-3 max-w-[40ch] text-sm font-medium"
              data-hero="body"
            >
              {site.headline}
            </p>
            <h1 id="home-heading" className="mt-5 max-w-[16ch]" data-hero="title">
              {home.h1}
            </h1>
            <p className="mt-6 max-w-[62ch] text-lg" data-hero="body">
              {home.lead}
            </p>
            <p className="text-ink-500 mt-3 max-w-[62ch]" data-hero="body">
              {home.sublead}
            </p>
            <div className="mt-9 flex flex-wrap gap-3" data-hero="cta">
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
          <div data-hero="media">
            <Parallax y={36}>
              <MediaFrame {...siteImages.hero} priority />
            </Parallax>
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

      <Section className="py-12 md:py-16" labelledBy="stats-heading">
        <Reveal>
          <h2 id="stats-heading" className="sr-only">
            {t("impactFigures")}
          </h2>
          <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {site.stats.map((stat) => (
              <div key={stat.label} className="stat-card" data-reveal>
                <dt className="text-ink-500 text-sm">{stat.label}</dt>
                <CountUp
                  value={stat.value}
                  className="font-display text-ink-900 mt-2 text-3xl tracking-tight"
                />
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section className="py-16 md:py-24" labelledBy="intro-heading">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow" data-reveal>
              {t("ukAligned")}
            </p>
            <TextReveal
              as="h2"
              id="intro-heading"
              className="mt-3 max-w-[22ch]"
              type="words"
              scroll
            >
              {home.introTitle}
            </TextReveal>
            <p className="mt-6 max-w-[68ch]" data-reveal>
              {home.introBody}
            </p>
            <p className="text-ink-500 mt-4 max-w-[68ch]" data-reveal>
              {home.introExtra}
            </p>
          </Reveal>
          <Parallax y={40} speed={0.85}>
            <Reveal delay={0.08} mode="fromTo">
              <MediaFrame {...siteImages.courses} />
            </Reveal>
          </Parallax>
        </div>
        <MotionPathAccent className="mt-12" />
      </Section>

      <Section className="section-surface py-16 md:py-24" labelledBy="services-heading">
        <Reveal>
          <p className="eyebrow" data-reveal>
            {t("consultancy")}
          </p>
          <h2 id="services-heading" className="mt-3 max-w-[18ch]" data-reveal>
            {home.servicesTitle}
          </h2>
          <p className="text-ink-500 mt-4 max-w-[65ch]" data-reveal>
            {home.servicesLead}
          </p>
        </Reveal>
        <Reveal className="mt-10" stagger={0.05} mode="fromTo">
          <ul className="apple-group">
            {services.map((service) => (
              <li key={service.slug} data-reveal>
                <Link
                  href={`/services/${service.slug}`}
                  className="apple-row"
                  data-cursor="view"
                  data-cursor-label={t("open")}
                >
                  <DrawIcon>
                    <span className="icon-well">
                      <Icon name={serviceIcons[service.slug] ?? "briefcase"} />
                    </span>
                  </DrawIcon>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg tracking-tight">{service.title}</h3>
                    <p className="text-ink-500 mt-1 max-w-[48ch] text-sm">
                      {service.shortDescription}
                    </p>
                  </div>
                  <Icon
                    name="chevron-right"
                    className="text-ink-500 mt-2 size-4 shrink-0"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8" data-reveal>
            <Magnetic>
              <Link href="/services" className="cta-secondary">
                {t("viewAllServices")}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </Magnetic>
          </div>
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
        <Reveal className="mt-10" stagger={0.04}>
          <ol className="apple-group">
            {courses.map((course, index) => (
              <li key={course.slug} data-reveal>
                <Link
                  href={`/courses/${course.slug}`}
                  className="course-row md:grid-cols-[3rem_1fr_auto]"
                  data-cursor="view"
                  data-cursor-label={t("courseWord")}
                >
                  <span className="icon-well icon-well--accent size-10">
                    <Icon name="book" className="size-4" />
                  </span>
                  <div>
                    <p className="course-number mb-1">
                      {t("courseN", { n: String(index + 1).padStart(2, "0") })}
                    </p>
                    <h3 className="text-[clamp(1.2rem,1.05rem+0.7vw,1.5rem)] tracking-tight">
                      {course.title}
                    </h3>
                    <p className="text-ink-500 mt-2 max-w-[65ch] text-sm">
                      {course.shortDescription}
                    </p>
                  </div>
                  <span className="text-ink-500 flex items-center gap-1 self-center text-sm font-semibold">
                    {t("view")}
                    <Icon name="chevron-right" className="size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section className="section-surface py-16 md:py-24" labelledBy="why-heading">
        <Reveal>
          <p className="eyebrow" data-reveal>
            {t("whyChoose")}
          </p>
          <h2 id="why-heading" className="mt-3 max-w-[22ch]" data-reveal>
            {home.whyTitle}
          </h2>
          <p className="text-ink-500 mt-4 max-w-[65ch]" data-reveal>
            {home.whyLead}
          </p>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            {home.pillars.map((pillar, index) => (
              <article key={pillar.title} className="apple-tile" data-reveal>
                <DrawIcon>
                  <span className="icon-well icon-well--accent">
                    <Icon name={pillarIcons[index] ?? "sparkles"} />
                  </span>
                </DrawIcon>
                <div>
                  <h3 className="text-xl tracking-tight">{pillar.title}</h3>
                  <p className="text-ink-500 mt-2 max-w-[42ch] text-sm">{pillar.body}</p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
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
          <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {home.cases.map((item) => (
              <li key={item.title} className="apple-tile" data-reveal>
                <span className="icon-well">
                  <Icon name="target" />
                </span>
                <div>
                  <h3 className="text-lg tracking-tight">{item.title}</h3>
                  <p className="text-ink-500 mt-2 text-sm">{item.body}</p>
                </div>
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
          <dl className="apple-group mt-8 max-w-3xl">
            {home.faqs.map((faq) => (
              <div key={faq.question} className="apple-row" data-reveal>
                <span className="icon-well">
                  <Icon name="sparkles" />
                </span>
                <div>
                  <dt className="text-ink-900 font-semibold tracking-tight">
                    {faq.question}
                  </dt>
                  <dd className="text-ink-500 mt-1 text-sm">{faq.answer}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section className="py-16 md:py-20" labelledBy="expertise-heading">
        <h2 id="expertise-heading" className="max-w-[16ch]">
          {t("expertiseHeading")}
        </h2>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {expertiseLogos.map((logo) => (
            <li key={logo.src}>
              <div className="flex h-28 items-center justify-center rounded-[var(--radius-md)] border border-[var(--line)] bg-white p-4">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={220}
                  height={120}
                  className="max-h-16 w-auto max-w-full object-contain"
                />
              </div>
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
