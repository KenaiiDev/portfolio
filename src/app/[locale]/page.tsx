import { Suspense } from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import HomeContent from "@/components/HomeContent";
import HomeSkeleton from "@/components/HomeSkeleton";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <Suspense fallback={<HomeSkeleton />}>
      <HomeContent
        lang={locale === "es" ? "es" : "en"}
        translations={{
          greetings: t("greetings"),
          name: t("name"),
          lastName: t("lastName"),
          subtitle: t("subtitle"),
          cvLink: t("cvLink"),
          cvAlt: t("cvAlt"),
          aboutMe: t("aboutMe"),
          aboutMeText: t("aboutMeText"),
          experienceTitle: t("experienceTitle"),
          expFreelanceRole: t("expFreelanceRole"),
          expFreelanceCompany: t("expFreelanceCompany"),
          expFreelanceDate: t("expFreelanceDate"),
          expMsaRole: t("expMsaRole"),
          expMsaCompany: t("expMsaCompany"),
          expMsaDate: t("expMsaDate"),
          expMsaDesc: t("expMsaDesc"),
          expMmRole: t("expMmRole"),
          expMmCompany: t("expMmCompany"),
          expMmDate: t("expMmDate"),
          projectsTitle: t("projectsTitle"),
        }}
      />
    </Suspense>
  );
}
