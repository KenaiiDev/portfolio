import React from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { LOCALES } from "@/constants/locales";
import { SITE_CONFIG } from "@/constants/metadata";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale });

  return {
    title: t("projectsMetaTitle"),
    description: t("projectsMetaDescription"),
    openGraph: {
      title: t("projectsMetaTitle"),
      description: t("projectsMetaDescription"),
      url: `${SITE_CONFIG.url}/${locale}/projects`,
      images: [SITE_CONFIG.ogImage],
    },
  };
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
    <section className="w-full mx-auto max-w-screen-lg grid grid-cols-3 gap-4 py-6 px-4">
      {children}
    </section>
  );
}
