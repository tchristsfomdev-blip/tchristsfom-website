import { getLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getLocalizedContent } from "@/i18n/content";
import { ShellPage, shellMetadata } from "@/components/layout/ShellPage";

export async function generateMetadata() {
  const { site } = getLocalizedContent(await getLocale());
  return shellMetadata(site.pages.notFound.title, site.pages.notFound.description);
}

export default async function NotFound() {
  const { site } = getLocalizedContent(await getLocale());

  return (
    <ShellPage
      title={site.pages.notFound.title}
      description={site.pages.notFound.description}
    >
      <p className="flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="cta w-fit">
          {site.pages.notFound.homeLabel}
        </Link>
        <Link href="/courses" className="cta-secondary w-fit">
          {site.pages.notFound.coursesLabel}
        </Link>
      </p>
    </ShellPage>
  );
}
