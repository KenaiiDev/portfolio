import React from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import LocalSwitch from "@/components/LocalSwitch";
import AnimatedArticle from "@/components/AnimatedArticle";

import pageMove from "@/images/icons/page-move.svg";
import githubIcon from "@/images/icons/github-icon.svg";
import liveIcon from "@/images/icons/live-icon.svg";
import externalLink from "@/images/icons/external-link.svg";

import { PROJECTS } from "@/constants/projects";
import TransitionLink from "@/components/TransitionLink";

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      {/* BACK BUTTON */}
      <AnimatedArticle className="relative aspect-auto col-span-2 backdrop-blur-3xl rounded-xl bg-black/[.1] overflow-hidden cursor-pointer hover:scale-[1.02] active:scale-100 py-4 px-2">
        <TransitionLink href="/">
          <div className="w-full flex justify-evenly">
            <Image
              src={pageMove}
              alt="Page move"
              width={30}
              height={30}
              className="transform rotate-180"
            />
            <h1 className="flex items-center text-white text-3xl w-full mx-6">
              {t("projectsTitle")}
            </h1>
          </div>
        </TransitionLink>
      </AnimatedArticle>
      {/* LANG SWITCH */}
      <AnimatedArticle
        direction="right"
        className="relative flex items-center justify-center col-span-1 backdrop-blur-3xl rounded-xl bg-black/[.1]"
      >
        <LocalSwitch locale={locale} path="/projects" />
      </AnimatedArticle>
      {PROJECTS.map((project, index) => {
        const lang = locale === "es" ? "es" : "en";
        const direction = index % 2 === 0 ? "left" : "right";
        const projectImage = (
          <Image
            src={`/images/projects/${project.image}.webp`}
            alt="Project image"
            width={300}
            height={168}
            className="w-full rounded-xl flex-grow my-4"
          />
        );
        const linkStyles =
          "flex-1 py-4 backdrop-blur-3xl rounded-xl bg-black/[.1] cursor-pointer hover:scale-[1.02] active:scale-100 transition-all ease-in flex items-center justify-center";
        return (
          <AnimatedArticle
            key={index}
            direction={direction}
            className="col-span-3 backdrop-blur-3xl rounded-xl bg-black/[.1] px-4 py-6 flex flex-col md:flex-row items-center gap-4"
            hoverScale={false}
          >
            {/* PROJECT IMAGE */}
            <div className="w-full h-auto flex items-center justify-center">
              {projectImage}
            </div>
            {/* PROJECT DESCRIPTION */}
            <div className="flex flex-col text-center w-full max-w-lg text-white font-firacode">
              <h2 className="text-2xl my-2 underline">{project[lang].title}</h2>
              <p className="text-base my-2 font-bold">
                {project[lang].description}
              </p>
              <p>
                <h3 className="text-left text-sm">{t("techUsage")}</h3>
                <ul className="flex gap-1 text-xs flex-wrap">
                  {project.tech.map((tech, index) => (
                    <li key={index}>
                      {index !== 0 ? "- " : ""}
                      {tech}
                    </li>
                  ))}
                </ul>
              </p>
              {/* PROJECT LINKS */}
              <div className="w-full max-w-lg h-full mx-auto mt-4 items-center justify-evenly flex gap-8">
                <Link
                  href={project.repoURL}
                  target="_blank"
                  className={linkStyles}
                >
                  <Image
                    src={externalLink}
                    width={15}
                    alt="Link"
                    className="absolute right-3 top-3 md:w-6"
                  />
                  <Image
                    src={githubIcon}
                    alt="Github icon"
                    width={50}
                    height={50}
                  />
                </Link>
                {project.liveURL && (
                  <Link
                    href={project.liveURL}
                    target="_blank"
                    className={linkStyles}
                  >
                    <Image
                      src={externalLink}
                      width={15}
                      alt="Link"
                      className="absolute right-3 top-3 md:w-6"
                    />
                    <Image
                      src={liveIcon}
                      alt="Live icon"
                      width={50}
                      height={50}
                    />
                  </Link>
                )}
              </div>
            </div>
          </AnimatedArticle>
        );
      })}
    </>
  );
}
