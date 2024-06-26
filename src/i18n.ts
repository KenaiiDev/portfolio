import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "es"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) {
    locale = "en";
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
