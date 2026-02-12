import { getTranslations } from "next-intl/server";
import localFont from "next/font/local";
import { unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/locales";
import { JetBrains_Mono, Fira_Code } from "next/font/google";

import { getBlobSources } from "@/lib/getBlobSources";

import "./globals.css";
import Background from "@/components/background";

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
    title: t("homeMetaTitle"),
    description: t("homeMetaDescription"),
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

  return (
    <html
      lang={locale}
      className={`${Renogare.className} ${jetBrainsMono.variable} ${firaCode.variable}`}
    >
      <body className="bg-periwinkle-gray-950">
        <main className="w-full min-h-screen overflow-x-hidden relative">
          <Background blobSources={blobSources} />
          {children}
        </main>
      </body>
    </html>
  );
}
