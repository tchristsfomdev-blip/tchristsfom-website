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
import { CountUp } from "@/components/motion/CountUp";
import { ScrambleReveal } from "@/components/motion/ScrambleReveal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = getLocalizedContent(locale);
  return shellMetadata(site.pages.about.title, site.pages.about.description);
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const { site } = getLocalizedContent(locale);
  const { about } = site;

  return (
    <>
      <Section className="py-20 md:py-28" labelledBy="about-h1">
        <HeroMotion className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow" data-hero="eyebrow">
              {about.eyebrow}
            </p>
            <h1 id="about-h1" className="mt-3 max-w-[16ch]" data-hero="title">
              {about.title}
            </h1>
            <p className="mt-6 max-w-[68ch] text-lg" data-hero="body">
              {about.story}
            </p>
            <blockquote
              className="border-line text-ink-700 mt-8 max-w-[58ch] border-l-2 pl-5"
              data-hero="body"
            >
              {about.quote}
            </blockquote>
          </div>
          <div data-hero="media">
            <Parallax y={36}>
              <MediaFrame {...siteImages.about} priority />
            </Parallax>
          </div>
        </HeroMotion>
      </Section>

      <Section className="section-surface py-16 md:py-20" labelledBy="experience-heading">
        <Reveal>
          <h2 id="experience-heading" className="max-w-[18ch]" data-reveal>
            {t("yearsExperience", { years: site.experienceYears })}
          </h2>
          <p className="text-ink-500 mt-4 max-w-[65ch]" data-reveal>
            {t("experienceSince", {
              year: site.foundedYear,
              regions: site.regions.join(", "),
            })}
          </p>
          <dl className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {site.stats.map((stat) => (
              <div key={stat.label} className="stat-card bg-white" data-reveal>
                <dt className="text-ink-500 text-sm">{stat.label}</dt>
                <CountUp
                  value={stat.value}
                  className="font-display mt-2 text-3xl tracking-tight"
                />
              </div>
            ))}
          </dl>
        </Reveal>
      </Section>

      <Section className="py-16 md:py-20" labelledBy="mission-heading">
        <Reveal mode="fromTo">
          <h2 id="mission-heading" data-reveal>
            {t("missionVision")}
          </h2>
          <div className="mt-10 grid gap-3 md:grid-cols-2">
            <article className="apple-tile" data-reveal>
              <span className="icon-well icon-well--accent">
                <Icon name="target" />
              </span>
              <div>
                <h3 className="text-xl tracking-tight">{t("mission")}</h3>
                <p className="text-ink-500 mt-2 text-sm">{about.mission}</p>
              </div>
            </article>
            <article className="apple-tile" data-reveal>
              <span className="icon-well icon-well--accent">
                <Icon name="sparkles" />
              </span>
              <div>
                <h3 className="text-xl tracking-tight">{t("vision")}</h3>
                <p className="text-ink-500 mt-2 text-sm">{about.vision}</p>
              </div>
            </article>
          </div>
        </Reveal>
      </Section>

      <Section className="section-surface py-16 md:py-20" labelledBy="industries-heading">
        <Reveal>
          <ScrambleReveal className="eyebrow" scroll>
            {t("sectors")}
          </ScrambleReveal>
          <h2 id="industries-heading" className="mt-3" data-reveal>
            {t("industries")}
          </h2>
          <ul className="mt-8 flex flex-wrap gap-2">
            {site.industries.map((industry) => (
              <li
                key={industry}
                className="text-ink-700 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm"
                data-reveal
              >
                {industry}
              </li>
            ))}
            <li
              className="text-ink-500 rounded-full border border-[var(--line)] bg-white px-4 py-2 text-sm"
              data-reveal
            >
              {t("andMore")}
            </li>
          </ul>
          <div className="mt-10 flex flex-wrap gap-3" data-reveal>
            <Magnetic>
              <Link href="/services" className="cta">
                {t("viewServices")}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/contact" className="cta-secondary">
                {t("contactUs")}
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
