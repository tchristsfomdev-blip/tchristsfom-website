import { getLocalizedContent } from "@/i18n/content";
import { ShellPage, shellMetadata } from "@/components/layout/ShellPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = getLocalizedContent(locale);
  return shellMetadata(site.pages.terms.title, site.pages.terms.description);
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = getLocalizedContent(locale);

  return (
    <ShellPage title={site.pages.terms.title} description={site.pages.terms.description}>
      <p className="text-ink-500 mt-8 max-w-[68ch]">{site.pages.terms.note}</p>
    </ShellPage>
  );
}
