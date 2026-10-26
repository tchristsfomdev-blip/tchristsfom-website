import { getTranslations } from "next-intl/server";

export async function SkipLink() {
  const t = await getTranslations("ui");

  return (
    <a className="skip-link" href="#main">
      {t("skip")}
    </a>
  );
}
