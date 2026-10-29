import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getLocalizedContent } from "@/i18n/content";
import { siteImages } from "@/config/media";
import { shellMetadata } from "@/components/layout/ShellPage";
import { Section } from "@/components/ui/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";
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
  return shellMetadata(site.pages.courses.title, site.pages.courses.description);
}

export default async function CoursesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const { site, courses } = getLocalizedContent(locale);
  const page = site.pages.courses;
  const { home } = site;

  return (
    <>
      <Section className="border-line border-b py-16 md:py-24" labelledBy="courses-h1">
        <HeroMotion className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow" data-hero="eyebrow">
              {t("courseDirectory")}
            </p>
            <h1 id="courses-h1" className="mt-4 max-w-[18ch]" data-hero="title">
              {page.title}
            </h1>
            <p className="mt-6 max-w-[68ch] text-lg" data-hero="body">
              {page.description}
            </p>
          </div>
          <div data-hero="media">
            <Parallax y={36}>
              <MediaFrame {...siteImages.courses} priority />
            </Parallax>
          </div>
        </HeroMotion>
      </Section>

      <Section className="section-ink statement-band" labelledBy="courses-intro">
        <Reveal className="statement-band__grid">
          <h2 id="courses-intro" className="statement-band__title" data-reveal>
            {page.introTitle}
          </h2>
          <p className="statement-band__body" data-reveal>
            {page.introBody}
          </p>
        </Reveal>
      </Section>

      <Section className="section-surface py-16 md:py-24" labelledBy="courses-list">
        <Reveal>
          <h2 id="courses-list" className="max-w-[20ch]" data-reveal>
            {page.offeringsTitle}
          </h2>
        </Reveal>
        <Reveal className="mt-10" stagger={0.05} mode="fromTo">
          <ol>
            {courses.map((course, index) => (
              <li key={course.slug} id={course.slug} data-reveal>
                <Link
                  href={`/courses/${course.slug}`}
                  className="course-row md:grid-cols-[5rem_1fr_auto]"
                >
                  <span className="course-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.35rem,1.1rem+1vw,1.75rem)]">
                      {course.title}
                    </h3>
                    <p className="text-ink-500 mt-3 max-w-[70ch]">
                      {course.shortDescription}
                    </p>
                  </div>
                  <span className="text-gold-800 self-center text-sm font-semibold">
                    {t("courseDetails")} →
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </Section>

      <Section className="py-16 md:py-24" labelledBy="courses-why">
        <Reveal>
          <div className="why__intro">
            <p className="eyebrow" data-reveal>
              {t("whyChoose")}
            </p>
            <h2 id="courses-why" className="mt-3 max-w-[18ch]" data-reveal>
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

      <Section className="section-ink py-16 md:py-20" labelledBy="courses-cta">
        <Reveal mode="fromTo">
          <h2 id="courses-cta" className="max-w-[18ch]" data-reveal>
            {home.ctaTitle}
          </h2>
          <p className="mt-4 max-w-[62ch] text-white/75" data-reveal>
            {home.ctaBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3" data-reveal>
            <Magnetic>
              <Link href="/contact" className="cta">
                {t("contactUs")}
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/courses"
                className="cta-secondary border-white text-white hover:bg-white/10"
              >
                {t("browseCourses")}
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
