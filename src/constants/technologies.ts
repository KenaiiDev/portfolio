export type TechCategory = {
  name: string;
  label: string;
  items: readonly string[];
};

export const TECH_CATEGORIES: TechCategory[] = [
  {
    name: "frontend",
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Shadcn/ui", "Storybook"],
  },
  {
    name: "backend",
    label: "Backend",
    items: ["Node.js", "NestJS", "Express", "Prisma ORM", "MongoDB", "MySQL"],
  },
  {
    name: "testing",
    label: "Testing",
    items: ["Vitest", "Playwright", "Puppeteer", "Testing Library"],
  },
  {
    name: "tools",
    label: "Tools",
    items: ["Git", "Docker", "ESLint", "Figma"],
  },
];

export const TECHNOLOGIES = [
  { name: "React", icon: "/images/tech/05-react.svg" },
  { name: "Next.js", icon: "/images/tech/06-nextjs.svg" },
  { name: "TypeScript", icon: "/images/tech/04-typescript.svg" },
  { name: "JavaScript", icon: "/images/tech/03-javascript.svg" },
  { name: "Tailwind CSS", icon: "/images/tech/07-tailwind.svg" },
  { name: "Shadcn/ui", icon: "/images/tech/shadcnui.svg" },
  { name: "Storybook", icon: "/images/tech/storybook.svg" },
  { name: "Node.js", icon: "/images/tech/09-nodejs.svg" },
  { name: "NestJS", icon: "/images/tech/nestjs.svg" },
  { name: "Express", icon: "/images/tech/express.svg" },
  { name: "Prisma ORM", icon: "/images/tech/10-prisma.svg" },
  { name: "MongoDB", icon: "/images/tech/12-mongodb.svg" },
  { name: "MySQL", icon: "/images/tech/mysql.svg" },
  { name: "Vitest", icon: "/images/tech/vitest.svg" },
  { name: "Playwright", icon: "/images/tech/playwright.svg" },
  { name: "Puppeteer", icon: "/images/tech/puppeteer.svg" },
  { name: "Testing Library", icon: "/images/tech/testinglibrary.svg" },
  { name: "Git", icon: "/images/tech/14-git.svg" },
  { name: "Docker", icon: "/images/tech/docker.svg" },
  { name: "ESLint", icon: "/images/tech/eslint.svg" },
  { name: "Figma", icon: "/images/tech/figma.svg" },
] as const;
