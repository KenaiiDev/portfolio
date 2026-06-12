"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import LocalSwitch from "@/components/LocalSwitch";
import Experience from "@/components/Experience";
import { PROJECTS } from "@/constants/projects";
import { TECH_CATEGORIES } from "@/constants/technologies";
import { SITE_CONFIG } from "@/constants/metadata";

type Props = {
  lang: "en" | "es";
  translations: {
    greetings: string;
    name: string;
    lastName: string;
    subtitle: string;
    cvLink: string;
    cvAlt: string;
    aboutMe: string;
    aboutMeText: string;
    experienceTitle: string;
    expFreelanceRole: string;
    expFreelanceCompany: string;
    expFreelanceDate: string;
    expMsaRole: string;
    expMsaCompany: string;
    expMsaDate: string;
    expMsaDesc: string;
    expMmRole: string;
    expMmCompany: string;
    expMmDate: string;
    projectsTitle: string;
  };
};

export default function HomeContent({ lang, translations: t }: Props) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-screen text-white animate-pulse">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <div className="h-96 bg-periwinkle-gray-900 rounded-2xl" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <header className="mb-16">
          <div className="flex items-center justify-end mb-6">
            <LocalSwitch locale={lang} />
          </div>

          <div className="text-center mb-10">
            <p className="text-periwinkle-gray-500 text-base mb-3">
              {t.greetings}
            </p>
            <h1 className="text-8xl font-bold text-white mb-1">
              {t.name}
            </h1>
            <h1 className="text-8xl font-bold text-purple-haze-400">
              {t.lastName}
            </h1>
            <p className="text-periwinkle-gray-300 mt-3 text-2xl">
              {t.subtitle}
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-10">
            <a
              href={t.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-periwinkle-gray-700 text-periwinkle-gray-400 hover:text-white hover:border-periwinkle-gray-500 transition-colors text-base rounded-xl"
            >
              {t.cvAlt}
            </a>
            <a
              href={`mailto:${SITE_CONFIG.links.email}`}
              className="px-6 py-3 bg-purple-haze-600 hover:bg-purple-haze-500 text-white text-base rounded-xl transition-colors"
            >
              Get in touch
            </a>
          </div>

          <div className="flex flex-row gap-4 items-stretch">
            <div className="flex-1 bg-periwinkle-gray-900 border border-periwinkle-gray-800 rounded-2xl p-6">
              <p className="text-sm uppercase tracking-widest text-periwinkle-gray-500 mb-4">
                {t.aboutMe}
              </p>
              <p className="text-periwinkle-gray-300 text-lg leading-relaxed">
                {t.aboutMeText}
              </p>
            </div>
            <div className="flex-1 max-w-xs bg-periwinkle-gray-900 border border-periwinkle-gray-800 rounded-2xl p-6">
              <p className="text-sm uppercase tracking-widest text-periwinkle-gray-500 mb-4">
                Stack
              </p>
              <div className="space-y-4">
                {TECH_CATEGORIES.map((category) => (
                  <div key={category.name}>
                    <p className="text-xs text-periwinkle-gray-600 mb-2">
                      {category.label}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-periwinkle-gray-800 text-periwinkle-gray-300 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-periwinkle-gray-500 mb-6">
            {t.experienceTitle}
          </h2>
          <Experience
            title={t.experienceTitle}
            experiences={[
              {
                role: t.expFreelanceRole,
                company: t.expFreelanceCompany,
                date: t.expFreelanceDate,
              },
              {
                role: t.expMsaRole,
                company: t.expMsaCompany,
                date: t.expMsaDate,
                description: t.expMsaDesc,
              },
              {
                role: t.expMmRole,
                company: t.expMmCompany,
                date: t.expMmDate,
              },
            ]}
          />
        </section>

        <section className="mb-16">
          <h2 className="text-sm uppercase tracking-widest text-periwinkle-gray-500 mb-6">
            {t.projectsTitle}
          </h2>
          <div className="grid grid-cols-2 gap-6">
            {PROJECTS.map((project) => (
              <div
                key={project.image}
                className="bg-periwinkle-gray-900 border border-periwinkle-gray-800 rounded-2xl p-6 hover:border-periwinkle-gray-700 transition-colors"
              >
                <div className="max-w-[300px] rounded-xl mb-4 overflow-hidden">
                  <Image
                    src={`/images/projects/${project.image}.webp`}
                    alt={project[lang].title}
                    width={300}
                    height={168}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white font-medium text-lg mb-2">
                  {project[lang].title}
                </h3>
                <p className="text-periwinkle-gray-400 text-sm mb-4">
                  {project[lang].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-periwinkle-gray-800 text-periwinkle-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.repoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-periwinkle-gray-400 hover:text-white transition-colors"
                  >
                    Repo →
                  </a>
                  {project.liveURL && (
                    <a
                      href={project.liveURL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-purple-haze-400 hover:text-purple-haze-300 transition-colors"
                    >
                      Live →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-periwinkle-gray-800 pt-12">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-periwinkle-gray-500 mb-2">
                Contact
              </p>
              <p className="text-periwinkle-gray-400 text-base">
                {SITE_CONFIG.links.email}
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-periwinkle-gray-400 hover:text-white transition-colors text-base"
              >
                GitHub
              </a>
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-periwinkle-gray-400 hover:text-white transition-colors text-base"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
