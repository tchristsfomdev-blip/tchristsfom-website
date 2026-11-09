import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { siteConfig } from "@/config/site";
import { siteImages } from "@/config/media";
import { Section } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";

export async function RabgaAssociation() {
  const t = await getTranslations("ui");

  return (
    <Section className="rabga-band" labelledBy="rabga-heading">
      <div className="rabga-band__inner">
        <a
          className="rabga-band__logo"
          href="https://rabga.co.uk/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image {...siteImages.rabga} />
        </a>
        <div className="rabga-band__copy">
          <p className="rabga-band__meta">{t("rabgaAnnouncementMeta")}</p>
          <h2 id="rabga-heading">{t("rabgaAnnouncement")}</h2>
          <p className="rabga-band__note">{t("rabgaAssociation")}</p>
          <a
            className="rabga-band__go"
            href={siteConfig.rabga.coursesUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("rabgaCourses")}
            <Icon name="arrow-right" className="size-4" />
          </a>
        </div>
      </div>
    </Section>
  );
}
