import { getLocalizedContent } from "@/i18n/content";
import { ShellPage, shellMetadata } from "@/components/layout/ShellPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = getLocalizedContent(locale);
  return shellMetadata(site.pages.privacy.title, site.pages.privacy.description);
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const { site } = getLocalizedContent(locale);

  return (
    <ShellPage
      title={site.pages.privacy.title}
      description={site.pages.privacy.description}
    >
      <p className="shell-note">{site.pages.privacy.note}</p>
    </ShellPage>
  );
}
