import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { getLocalizedContent } from "@/i18n/content";
import { siteImages } from "@/config/media";
import { shellMetadata } from "@/components/layout/ShellPage";
import { Section } from "@/components/ui/Section";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { Icon, socialIcons } from "@/components/ui/Icon";
import { Magnetic } from "@/components/motion/Magnetic";
import { HeroMotion } from "@/components/motion/HeroMotion";
import { Parallax } from "@/components/motion/Parallax";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactFormLoader } from "@/components/contact/ContactFormLoader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = getLocalizedContent(locale);
  return shellMetadata(site.pages.contact.title, site.pages.contact.description);
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ui" });
  const form = await getTranslations({ locale, namespace: "form" });
  const { site, services, courses } = getLocalizedContent(locale);
  const options = [
    { value: "", label: form("selectTopic") },
    ...services.map((service) => ({
      value: `service:${service.slug}`,
      label: form("serviceOption", { title: service.title }),
    })),
    ...courses.map((course) => ({
      value: `course:${course.slug}`,
      label: form("courseOption", { title: course.title }),
    })),
    { value: "general", label: form("general") },
  ];

  return (
    <>
      <Section className="border-line border-b py-16 md:py-24" labelledBy="contact-h1">
        <HeroMotion className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow" data-hero="eyebrow">
              {t("getInTouch")}
            </p>
            <h1 id="contact-h1" className="mt-4 max-w-[12ch]" data-hero="title">
              {site.pages.contact.title}
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg" data-hero="body">
              {site.pages.contact.description}
            </p>
          </div>
          <div data-hero="media">
            <Parallax y={36}>
              <MediaFrame {...siteImages.contact} priority />
            </Parallax>
          </div>
        </HeroMotion>
      </Section>

      <Section className="py-16 md:py-20" labelledBy="contact-form-heading">
        <div className="contact-layout">
          <aside className="contact-details">
            <div>
              <h2 className="text-2xl tracking-tight">{t("contactDetails")}</h2>
              <p className="text-ink-500 mt-3 max-w-[42ch] text-sm">
                {site.pages.contact.formNote}
              </p>
              <p className="text-ink-500 mt-3 text-sm">{site.contact.hours}</p>
            </div>

            <div>
              <h3 className="text-lg tracking-tight">{t("email")}</h3>
              <ul className="mt-2 space-y-1">
                {site.contact.emails.map((email) => (
                  <li key={email}>
                    <a className="footer-link" href={`mailto:${email}`}>
                      {email}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg tracking-tight">{t("telephone")}</h3>
              <ul className="mt-2 space-y-1">
                {site.contact.phones.map((phone) => (
                  <li key={`${phone.label}-${phone.value}`}>
                    <a className="footer-link" href={phone.href}>
                      {phone.label}: {phone.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg tracking-tight">{t("office")}</h3>
              <ul className="text-ink-700 mt-2 space-y-1 text-sm">
                {site.contact.addressLines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
                <li className="text-ink-500">{site.contact.offices}</li>
              </ul>
            </div>

            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <a href={`mailto:${site.contact.email}`} className="cta-secondary">
                  {t("email")}
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={site.contact.whatsapp}
                  className="cta-secondary"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="message" className="size-4" />
                  WhatsApp
                </a>
              </Magnetic>
            </div>

            <div>
              <h3 className="text-lg tracking-tight">{t("social")}</h3>
              <ul className="mt-3 max-w-xs">
                {site.social.map((item) => (
                  <li key={item.label} className="border-line border-t first:border-t-0">
                    <a
                      className="social-link"
                      href={item.href}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <span className="social-link__icon" aria-hidden="true">
                        <Icon
                          name={socialIcons[item.label] ?? "globe"}
                          className="size-4"
                        />
                      </span>
                      <span className="social-link__label">{item.label}</span>
                      <Icon name="chevron-right" className="social-link__chevron" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <Suspense fallback={<ContactForm options={options} />}>
            <ContactFormLoader options={options} />
          </Suspense>
        </div>
      </Section>
    </>
  );
}
