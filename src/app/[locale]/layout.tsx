import type { Metadata } from "next";
import {
  Fraunces,
  Manrope,
  Noto_Sans_Arabic,
  Noto_Sans_Malayalam,
} from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/layout/SkipLink";
import { Providers } from "@/components/motion/Providers";
import { localizeSite } from "@/i18n/content";
import { routing } from "@/i18n/routing";
import "../globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-manrope",
});

const arabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-arabic",
});

const malayalam = Noto_Sans_Malayalam({
  subsets: ["malayalam"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-malayalam",
});

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const site = localizeSite(locale);

  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.brandName,
      template: `%s | ${site.brandName}`,
    },
    description: site.description,
    applicationName: site.shortName,
  };
}

function htmlLang(locale: string) {
  if (locale === "en") return "en-GB";
  if (locale === "ar") return "ar";
  return "ml";
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={htmlLang(locale)}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`no-js ${fraunces.variable} ${manrope.variable} ${arabic.variable} ${malayalam.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-svh flex-col">
        <Script id="js-flag" strategy="beforeInteractive">
          {`document.documentElement.classList.replace("no-js","js")`}
        </Script>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <SkipLink />
            <Header />
            <main id="main" tabIndex={-1} className="flex-1 outline-none">
              {children}
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
