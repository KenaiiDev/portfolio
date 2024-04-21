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
      title: "URL Shortener",
      description: "Shorten your URLs with ease",
    },
    es: {
      title: "Acortador de URL",
      description: "Acorta tus URLs con facilidad",
    },
    tech: [
      "ReactJS",
      "Express",
      "Typescript",
      "TailwindCSS",
      "MongoDB",
      "Prisma",
    ],
    image: "urlShortener",
    liveURL: "https://url-shortener-frontend-six.vercel.app/",
    repoURL: "https://github.com/KenaiiDev/url-shortener-frontend",
  },
  {
    en: {
      title: "Windbnb",
      description: "Find the perfect place to stay",
    },
    es: {
      title: "Windbnb",
      description: "Encuentra el lugar perfecto para quedarte",
    },
    tech: ["ReactJS", "Javascript", "CSS"],
    image: "windbnb",
    liveURL: "https://windbnb-lucasv7588.onrender.com/",
    repoURL: "https://github.com/KenaiiDev/devchallenges-windbnb",
  },
  {
    en: {
      title: "Inputs Collection",
      description: "A collection of inputs",
    },
    es: {
      title: "Coleccion de Inputs",
      description: "Una colección de inputs",
    },
    tech: ["ReactJS", "Javascript", "CSS"],
    image: "inputsCollection",
    liveURL: "https://devchallenges-inputs-lucasv7588.onrender.com/",
    repoURL: "https://github.com/KenaiiDev/devchallenges-inputs",
  },
  {
    en: {
      title: "Quotes Generator",
      description: "Generate random quotes",
    },
    es: {
      title: "Generador de Frases",
      description: "Genera frases aleatorias",
    },
    tech: ["ReactJS", "Javascript", "CSS"],
    image: "quoteGenerator",
    liveURL: "https://quote-generator-lucasv7588.onrender.com/",
    repoURL: "https://github.com/KenaiiDev/Quote-generator",
  },
];
