import React from "react";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import Link from "next/link";

import LocalSwitch from "@/components/LocalSwitch";

import pageMove from "@/images/icons/page-move.svg";
import githubIcon from "@/images/icons/github-icon.svg";
import liveIcon from "@/images/icons/live-icon.svg";
import externalLink from "@/images/icons/external-link.svg";

import { PROJECTS } from "@/constants/projects";

export default async function Page({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations();
  return (
    <>
      <Link
        href="/"
        className="relative transition-all ease-in duration-200 aspect-auto col-span-2 backdrop-blur-3xl rounded-xl bg-black/[.1] overflow-hidden cursor-pointer hover:scale-[1.02] active:scale-100 py-4 px-2"
      >
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
      </Link>
      <article className="relative flex items-center justify-center transition-all ease-in duration-200 col-span-1 backdrop-blur-3xl rounded-xl bg-black/[.1]">
        <LocalSwitch locale={locale} path="/projects" />
      </article>
      {PROJECTS.map((project, index) => {
        const lang = locale === "es" ? "es" : "en";
        const projectImage = (
          <Image
            src={`/images/projects/${project.image}.webp`}
            alt="Project image"
            width={300}
            height={168}
            className="w-full rounded-xl flex-grow my-4"
          />
        );
        // const projectDescriptionText = (
        //   <div className="text-white mx-4 flex flex-col justify-evenly max-w-full">
        //     <h2 className="text-2xl my-2 underline">{project[lang].title}</h2>
        //     <p className="text-xl my-2  font-bold">
        //       {project[lang].description}
        //     </p>
        //     <div className="w-full my-2 ">
        //       <h3>{t("techUsage")}</h3>
        //       <ul className="flex gap-1 text-sm flex-wrap">
        //         {project.tech.map((tech, index) => (
        //           <li key={index}>{tech}</li>
        //         ))}
        //       </ul>
        //     </div>
        //   </div>
        // );

        // const projectLinks = (
        //   <article className="relative flex items-center justify-center transition-all ease-in duration-200 aspect-auto w-full col-span-3 md:col-span-1 rounded-xl">
        //     <div className="w-full md:h-full flex md:flex-col justify-between">
        //       <div className="p-6 w-5/12 md:w-full lg:mb-2 backdrop-blur-3xl rounded-xl bg-black/[.1]  cursor-pointer hover:scale-[1.02] active:scale-100 transition-all ease-in">
        //         <Image
        //           src={externalLink}
        //           width={15}
        //           alt="Link"
        //           className="absolute right-3 top-3 md:w-6"
        //         />
        //         <Link
        //           href={project.repoURL}
        //           className="w-full h-full flex items-center justify-center text-white "
        //           target="_blank"
        //         >
        //           <Image
        //             src={githubIcon}
        //             alt="Github icon"
        //             width={100}
        //             height={100}
        //           />
        //         </Link>
        //       </div>
        //       {project.liveURL && (
        //         <div className="p-4 w-5/12 md:w-full backdrop-blur-3xl rounded-xl bg-black/[.1] cursor-pointer hover:scale-[1.02] active:scale-100 transition-all ease-in">
        //           <Image
        //             src={externalLink}
        //             width={15}
        //             alt="Link"
        //             className="absolute right-3 top-3 md:w-6"
        //           />
        //           <Link
        //             href={project.liveURL}
        //             className="w-full h-full flex items-center justify-center text-white "
        //             target="_blank"
        //           >
        //             <Image
        //               src={liveIcon}
        //               alt="Live icon"
        //               width={120}
        //               height={120}
        //             />
        //           </Link>
        //         </div>
        //       )}
        //     </div>
        //   </article>
        // );
        // return (
        //   <>
        //     <article className="relative transition-all ease-in duration-200 aspect-auto col-span-3 md:col-span-2 backdrop-blur-3xl rounded-xl bg-black/[.1] px-4 py-6 flex flex-col lg:flex-row items-center">
        //       {projectImage}
        //       {projectDescriptionText}
        //     </article>
        //     {projectLinks}
        //   </>
        // );
        return (
          <article
            key={index}
            className="col-span-3 backdrop-blur-3xl rounded-xl bg-black/[.1] px-4 py-6 flex"
          >
            <div className="w-full mx-4 h-auto">{projectImage}</div>
            <div className="flex flex-col mx-4 text-center w-full text-white">
              <h2 className="text-2xl my-2 underline">{project[lang].title}</h2>
              <p className="text-2xl my-2 font-bold">
                {project[lang].description}
              </p>
              <p>
                <h3 className="text-left">{t("techUsage")}</h3>
                <ul className="flex gap-1 text-sm  flex-wrap">
                  {project.tech.map((tech, index) => (
                    <li key={index}>
                      {index !== 0 ? "- " : ""}
                      {tech}
                    </li>
                  ))}
                </ul>
              </p>
              <div className="flex h-full items-center justify-evenly">
                <div className="px-14 py-6 backdrop-blur-3xl rounded-xl bg-black/[.1] cursor-pointer hover:scale-[1.02] active:scale-100 transition-all ease-in">
                  <Image
                    src={externalLink}
                    width={15}
                    alt="Link"
                    className="absolute right-3 top-3 md:w-6"
                  />
                  <Link
                    href={project.repoURL}
                    className="w-full h-full flex items-center justify-center text-white "
                    target="_blank"
                  >
                    <Image
                      src={githubIcon}
                      alt="Github icon"
                      width={50}
                      height={50}
                    />
                  </Link>
                </div>
                {project.liveURL && (
                  <div className="px-14 py-6 backdrop-blur-3xl rounded-xl bg-black/[.1] cursor-pointer hover:scale-[1.02] active:scale-100 transition-all ease-in">
                    <Image
                      src={externalLink}
                      width={15}
                      alt="Link"
                      className="absolute right-3 top-3 md:w-6"
                    />
                    <Link
                      href={project.liveURL}
                      className="w-full h-full flex items-center justify-center text-white "
                      target="_blank"
                    >
                      <Image
                        src={liveIcon}
                        alt="Live icon"
                        width={50}
                        height={50}
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </>
  );
}
