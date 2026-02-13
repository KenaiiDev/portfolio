import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import localFont from "next/font/local";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/locales";
import { SITE_CONFIG } from "@/constants/metadata";
import { JetBrains_Mono, Fira_Code } from "next/font/google";
import { AnimationProvider } from "@/contexts/AnimationContext";
import { getBlobSources } from "@/lib/getBlobSources";
import Background from "@/components/background";
import "./globals.css";

const Renogare = localFont({
  src: "../../../public/fonts/Renogare-Regular.otf",
  display: "swap",
  variable: "--font-renogare",
});

const blobSources = await getBlobSources();

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-jetbrains",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-firacode",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: {
      default: t("homeMetaTitle"),
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: t("homeMetaDescription"),
    keywords: [
      "Full Stack Developer",
      "React",
      "Next.js",
      "TypeScript",
      "Web Development",
      "Portfolio",
      "Argentina",
    ],
    authors: [{ name: SITE_CONFIG.name }],
    creator: SITE_CONFIG.name,
    openGraph: {
      type: "website",
      locale: locale,
      url: `${SITE_CONFIG.url}/${locale}`,
      title: t("homeMetaTitle"),
      description: t("homeMetaDescription"),
      siteName: SITE_CONFIG.name,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      languages: {
        en: `${SITE_CONFIG.url}/en`,
        es: `${SITE_CONFIG.url}/es`,
      },
    },
  };
}

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${Renogare.className} ${jetBrainsMono.variable} ${firaCode.variable}`}
    >
      <body className="bg-periwinkle-gray-950">
        <NextIntlClientProvider messages={messages}>
          <AnimationProvider>
            <main className="w-full min-h-screen overflow-x-hidden relative">
              <Background blobSources={blobSources} />
              {children}
            </main>
          </AnimationProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
