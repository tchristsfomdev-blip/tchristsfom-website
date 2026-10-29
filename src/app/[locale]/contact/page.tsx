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
          <Suspense fallback={<ContactForm options={options} />}>
            <ContactFormLoader options={options} />
          </Suspense>

          <aside className="contact-facts" aria-labelledby="contact-details-heading">
            <div className="contact-facts__lead">
              <h2 id="contact-details-heading">{t("contactDetails")}</h2>
              <p>{site.pages.contact.formNote}</p>
              <p>{site.contact.hours}</p>
            </div>

            <div className="contact-facts__block">
              <h3>{t("email")}</h3>
              <ul>
                {site.contact.emails.map((email) => (
                  <li key={email}>
                    <a href={`mailto:${email}`}>{email}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-facts__block">
              <h3>{t("telephone")}</h3>
              <ul className="contact-phones">
                {site.contact.phones.map((phone) => (
                  <li key={`${phone.label}-${phone.value}`}>
                    <a href={phone.href}>
                      <span>{phone.label}</span>
                      {phone.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="contact-facts__block">
              <h3>{t("office")}</h3>
              <address>
                {site.contact.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
                <span>{site.contact.offices}</span>
              </address>
            </div>

            <div className="contact-facts__actions">
              <Magnetic>
                <a href={`mailto:${site.contact.email}`} className="cta-secondary">
                  {t("email")}
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={site.contact.whatsapp}
                  className="cta"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon name="message" className="size-4" />
                  WhatsApp
                </a>
              </Magnetic>
            </div>

            <ul className="contact-social" aria-label={t("social")}>
              {site.social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} rel="noopener noreferrer" target="_blank">
                    <Icon name={socialIcons[item.label] ?? "globe"} className="size-4" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Section>
    </>
  );
}
