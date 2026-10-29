import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { formatPostDate } from "@/content/posts";
import { getLocalizedContent } from "@/i18n/content";
import { isLocale } from "@/i18n/routing";
import { shellMetadata } from "@/components/layout/ShellPage";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/motion/Reveal";
import { Magnetic } from "@/components/motion/Magnetic";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = getLocalizedContent(locale);
  return shellMetadata(site.pages.blog.title, site.pages.blog.description);
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const { site, posts } = getLocalizedContent(locale);
  const dateLocale = isLocale(locale) ? locale : "en";

  return (
    <>
      <Section className="shell-page" labelledBy="blog-h1">
        <div className="shell-page__mast">
          <h1 id="blog-h1" className="shell-page__title">
            {site.pages.blog.title}
          </h1>
          <p className="shell-page__lead">{site.pages.blog.description}</p>
        </div>
      </Section>

      <Section className="py-16 md:py-24" labelledBy="blog-list">
        <Reveal>
          <h2 id="blog-list" className="sr-only">
            {t("articles")}
          </h2>
        </Reveal>
        <Reveal stagger={0.05} mode="fromTo">
          <ul className="service-index">
            {posts.map((post) => (
              <li key={post.slug} data-reveal>
                <Link href={`/blog/${post.slug}`} className="service-index__link">
                  <h3 className="service-index__title">
                    <span className="course-number mb-2 block">
                      {formatPostDate(post.date, dateLocale)} · {post.topic} ·{" "}
                      {t("minRead", { count: post.readingMinutes })}
                    </span>
                    {post.title}
                  </h3>
                  <p className="service-index__desc">{post.excerpt}</p>
                  <span className="service-index__arrow" aria-hidden="true">
                    <Icon name="arrow-right" className="size-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section className="section-ink py-16 md:py-20" labelledBy="blog-cta">
        <Reveal mode="fromTo">
          <h2 id="blog-cta" className="max-w-[18ch]" data-reveal>
            {t("putIntoPractice")}
          </h2>
          <p className="mt-4 max-w-[62ch] text-white/75" data-reveal>
            {t("blogCta")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3" data-reveal>
            <Magnetic>
              <Link href="/courses" className="cta">
                {t("browseCourses")}
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
