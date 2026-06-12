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
  type?: "web" | "cli";
};

export const PROJECTS: ProjectType[] = [
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
      title: "TypeRush — Code Typing Practice",
      description:
        "A monkeytype for code. Practice with real snippets in 3 languages and get detailed stats when you finish.",
    },
    es: {
      title: "TypeRush — Practicá Tipeo de Código",
      description:
        "Un monkeytype pero para código. Practicá con snippets reales en 3 lenguajes y obtené estadísticas al terminar.",
    },
    tech: ["NextJS", "Typescript", "React", "Tailwind"],
    image: "typerush",
    liveURL: "https://typerush-frontend.vercel.app/",
    repoURL: "https://github.com/KenaiiDev/typerush",
  },
  {
    en: {
      title: "Slicer — Board Cutting Optimizer",
      description:
        "Design cutting boards and export PDF plans with piece measurements. Full side-to-side or free straight cuts — optimize your material usage.",
    },
    es: {
      title: "Slicer — Optimizador de Cortes",
      description:
        "Diseñá tableros y exportá planos en PDF con mediciones de piezas. Cortes completos o libres — optimizá el uso de material.",
    },
    tech: ["NextJS", "Typescript", "React", "Canvas API", "jsPDF"],
    image: "slicer",
    liveURL: "https://slicer-ecru.vercel.app/",
    repoURL: "https://github.com/KenaiiDev/slicer",
  },
  {
    en: {
      title: "CV Adapter — Job-Offer-Tailored CVs with AI",
      description:
        "TypeScript CLI that adapts your existing CV to specific job offers using multi-provider AI (Groq, Gemini, OpenAI, Anthropic, Ollama). Outputs ATS-friendly Harvard-format PDFs directly via pdfmake — no browser dependencies, fully local.",
    },
    es: {
      title: "CV Adapter — CVs Adaptados a Ofertas con IA",
      description:
        "CLI en TypeScript que adapta tu CV existente a ofertas de trabajo específicas usando IA multi-provider (Groq, Gemini, OpenAI, Anthropic, Ollama). Produce PDFs ATS-friendly en formato Harvard directamente con pdfmake — sin dependencias de navegador, 100% local.",
    },
    tech: ["TypeScript", "Node.js", "AI"],
    repoURL: "https://github.com/KenaiiDev/cv-adapter",
    image: "cvAdapter",
    type: "cli",
  },
];
