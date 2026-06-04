export type ProjectType = {
  en: {
    title: string;
    description: string;
  };
  es: {
    title: string;
    description: string;
  };
  tech: string[];
  liveURL?: string;
  repoURL: string;
  image: string;
};

export const PROJECTS: ProjectType[] = [
  {
    en: {
      title: "Gluten-Free Product Verifier",
      description:
        "Search ANMAT's official ALG database to check if packaged foods are celiac-safe. Puppeteer scraper, Upstash Redis cache, debounced multi-field search, GitHub Actions cron, and a 3-state animated background.",
    },
    es: {
      title: "Verificador de Productos Sin TACC",
      description:
        "Consultá el Listado ALG oficial de ANMAT para ver si un producto es apto para celíacos. Scraper con Puppeteer, caché en Upstash Redis, búsqueda multi-campo con debounce, cron en GitHub Actions y fondo animado de 3 estados.",
    },
    tech: ["NextJS", "Typescript", "Puppeteer", "Upstash Redis", "Tailwind"],
    image: "sintacc",
    liveURL: "https://sintacc-six.vercel.app/",
    repoURL: "https://github.com/KenaiiDev/sintacc",
  },
  {
    en: {
      title: "AMBA Transit & Services Strike Checker",
      description:
        "Daily check for strikes across 10 sectors in Buenos Aires (buses, trains, subways, airlines, education, health, public sector, banks, waste collection, justice). Google News + Cheerio scraping, URL-decoder pipeline, regex extraction, Upstash Redis cache, dynamic favicon.",
    },
    es: {
      title: "Consulta de Paros AMBA",
      description:
        "Consulta diaria de paros en 10 sectores de Buenos Aires (colectivos, trenes, subtes, aeronáutico, educación, salud, administración pública, bancarios, recolección, justicia). Scraping con Google News + Cheerio, pipeline de decodificación de URLs, extracción por regex, caché en Upstash Redis, favicon dinámico.",
    },
    tech: ["NextJS", "Typescript", "Cheerio", "Upstash Redis", "Tailwind"],
    image: "elParoDeHoy",
    liveURL: "https://el-paro-de-hoy.vercel.app/",
    repoURL: "https://github.com/KenaiiDev/el-paro-de-hoy",
  },
];
