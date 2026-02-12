import { MetadataRoute } from "next";
import { LOCALES } from "@/constants/locales";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lucasvillanueva.tech/";

  const routes = ["", "/projects"];

  const sitemap: MetadataRoute.Sitemap = [];

  LOCALES.forEach((locale) => {
    routes.forEach((route) => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.8,
      });
    });
  });

  return sitemap;
}
