import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { notFound } from "next/navigation";
import { formatPostDate, posts } from "@/content/posts";
import { getLocalizedContent } from "@/i18n/content";
import { isLocale } from "@/i18n/routing";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

type PageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const post = getLocalizedContent(locale).posts.find((item) => item.slug === slug);
  if (!post) {
    return { title: t("articleNotFound") };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const { site, courses, posts: localized } = getLocalizedContent(locale);
  const post = localized.find((item) => item.slug === slug);
  if (!post) {
    notFound();
  }

  const course = post.courseSlug
    ? courses.find((item) => item.slug === post.courseSlug)
    : undefined;
  const related = localized.filter((item) => item.slug !== post.slug).slice(0, 2);
  const dateLocale = isLocale(locale) ? locale : "en";

  return (
    <>
      <Section className="border-line border-b py-12 md:py-16" labelledBy="article-h1">
        <nav aria-label={t("breadcrumb")} className="text-ink-500 text-sm">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-gold-800">
                {t("home")}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/blog" className="hover:text-gold-800">
                {t("insights")}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink-900">{post.title}</li>
          </ol>
        </nav>
        <p className="course-number mt-6">
          {formatPostDate(post.date, dateLocale)} · {post.topic} ·{" "}
          {t("minRead", { count: post.readingMinutes })}
        </p>
        <h1 id="article-h1" className="mt-4 max-w-[22ch]">
          {post.title}
        </h1>
        <p className="text-ink-500 mt-6 max-w-[68ch] text-lg">{post.excerpt}</p>
      </Section>

      <Section
        className="py-16 md:py-20"
        containerClassName="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem]"
      >
        <article className="max-w-[68ch] space-y-10">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </article>

        <aside className="apple-tile h-fit gap-4 p-6 lg:sticky lg:top-24">
          <span className="icon-well icon-well--accent">
            <Icon name="book" />
          </span>
          <h2 className="text-xl tracking-tight">
            {course ? t("relatedCourse") : t("workWithUs")}
          </h2>
          {course ? (
            <>
              <p className="text-ink-500 text-sm">{course.title}</p>
              <p className="text-ink-500 text-sm">{course.shortDescription}</p>
              <Link href={`/courses/${course.slug}`} className="cta w-full">
                {t("viewCourse")}
                <Icon name="arrow-right" className="size-4" />
              </Link>
            </>
          ) : null}
          <Magnetic className="block w-full">
            <Link href="/contact" className="cta-secondary w-full">
              {t("enquire")}
            </Link>
          </Magnetic>
        </aside>
      </Section>

      {related.length ? (
        <Section className="section-surface py-16" labelledBy="more-insights">
          <h2 id="more-insights">{t("moreInsights")}</h2>
          <ul className="service-index mt-8">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/blog/${item.slug}`} className="service-index__link">
                  <h3 className="service-index__title">{item.title}</h3>
                  <p className="service-index__desc">{item.excerpt}</p>
                  <span className="service-index__arrow" aria-hidden="true">
                    <Icon name="arrow-right" className="size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      <Section className="section-ink py-16 md:py-20" labelledBy="article-cta">
        <Reveal mode="fromTo">
          <h2 id="article-cta" className="max-w-[16ch]" data-reveal>
            {site.home.ctaTitle}
          </h2>
          <p className="mt-4 max-w-[62ch] text-white/75" data-reveal>
            {site.home.ctaBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-3" data-reveal>
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
