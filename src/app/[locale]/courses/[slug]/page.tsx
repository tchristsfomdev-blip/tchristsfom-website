import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { courses } from "@/content/courses";
import { getLocalizedContent, localizeCourses } from "@/i18n/content";
import { siteImages } from "@/config/media";
import { Section } from "@/components/ui/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const course = localizeCourses(locale).find((item) => item.slug === slug);
  if (!course) {
    return { title: t("courseNotFound") };
  }

  return {
    title: course.title,
    description: course.shortDescription.slice(0, 160),
  };
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const { site, courses: localized } = getLocalizedContent(locale);
  const course = localized.find((item) => item.slug === slug);
  if (!course) {
    notFound();
  }

  const related = localized.filter((item) => item.slug !== course.slug).slice(0, 3);

  return (
    <>
      <Section
        className="border-line border-b py-12 md:py-16"
        labelledBy="course-h1"
        containerClassName="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <Reveal>
          <nav aria-label="Breadcrumb" className="text-ink-500 text-sm" data-reveal>
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-gold-800">
                  {t("home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/courses" className="hover:text-gold-800">
                  {t("courses")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink-900">{course.title}</li>
            </ol>
          </nav>
          <h1 id="course-h1" className="mt-6 max-w-[20ch]" data-reveal>
            {course.title}
          </h1>
          <p className="mt-6 max-w-[68ch] text-lg" data-reveal>
            {course.shortDescription}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <MediaFrame {...siteImages.courses} priority />
        </Reveal>
      </Section>

      <Section
        className="py-16 md:py-20"
        containerClassName="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]"
      >
        <Reveal className="space-y-12" stagger={0.06}>
          <div data-reveal>
            <h2 className="text-2xl">{t("overview")}</h2>
            <p className="mt-4 max-w-[68ch]">{course.overview}</p>
          </div>
          <div data-reveal>
            <h2 className="text-2xl">{t("whoFor")}</h2>
            <ul className="text-ink-700 mt-4 list-disc space-y-2 pl-5">
              {course.whoFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div data-reveal>
            <h2 className="text-2xl">{t("learn")}</h2>
            <ul className="text-ink-700 mt-4 list-disc space-y-2 pl-5">
              {course.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="muted mt-6 text-sm">{t("courseTodo")}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <aside className="apple-tile h-fit gap-4 p-6 lg:sticky lg:top-24">
            <span className="icon-well icon-well--accent">
              <Icon name="graduation" />
            </span>
            <h2 className="text-xl tracking-tight">{t("enquireCourse")}</h2>
            <p className="text-ink-500 text-sm">{t("enquireCourseBody")}</p>
            <Magnetic className="mt-2 block w-full">
              <Link href={`/contact?course=${course.slug}`} className="cta w-full">
                {t("enquire")}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </Magnetic>
            <Magnetic className="block w-full">
              <Link href="/courses" className="cta-secondary w-full">
                {t("allCourses")}
              </Link>
            </Magnetic>
          </aside>
        </Reveal>
      </Section>

      <Section className="section-surface py-16" labelledBy="related-heading">
        <Reveal>
          <h2 id="related-heading" data-reveal>
            {t("relatedCourses")}
          </h2>
        </Reveal>
        <Reveal className="mt-8" stagger={0.06}>
          <ul className="grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <li key={item.slug} data-reveal>
                <Link
                  href={`/courses/${item.slug}`}
                  className="block no-underline"
                  data-cursor="view"
                  data-cursor-label={t("courseWord")}
                >
                  <h3 className="text-ink-900 hover:text-gold-800 text-lg">
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

      <Section className="section-ink py-20" labelledBy="course-cta">
        <Reveal>
          <h2 id="course-cta" className="max-w-[18ch]" data-reveal>
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
              <Link href="/courses" className="cta-secondary">
                {t("browseCourses")}
              </Link>
            </Magnetic>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
