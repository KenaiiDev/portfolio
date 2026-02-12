import Image from "next/image";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

import Age from "@/components/Age";
import LocalSwitch from "@/components/LocalSwitch";
import { Link } from "@/navigation";
import AnimatedArticle from "@/components/AnimatedArticle";
import { TECHNOLOGIES } from "@/constants/technologies";

import ProfileImage from "@/images/profile.webp";
import linkedinIcon from "@/images/icons/linkedin-icon.svg";
import githubIcon from "@/images/icons/github-icon.svg";
import cvIcon from "@/images/icons/cv-icon.svg";
import emailIcon from "@/images/icons/email-icon.svg";
import externalLink from "@/images/icons/external-link.svg";
import projectsBg from "@/images/bg/projects.gif";
import pageMove from "@/images/icons/page-move.svg";

import TransitionLink from "@/components/TransitionLink";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations();

  return (
    <section className="w-full px-4 py-6 mx-auto max-w-screen-lg grid grid-cols-3 md:grid-cols-4 gap-4">
      {/*PRESENTATION */}
      <AnimatedArticle
        direction="left"
        className="order-1 relative justify-between px-6 py-6 overflow-hidden duration-200 aspect-[2/1] md:aspect-auto col-span-3 row-span-2 backdrop-blur-3xl rounded-xl bg-black/[.1]"
      >
        <div className="mx-auto h-full z-10 flex flex-col justify-center items-start text-purple-haze-100 font-reno">
          <span className="font-mono md:text-xl lg:text-xl">
            {t("greetings")}
          </span>
          <h1 className="flex flex-col items-start text-3xl md:text-4xl lg:text-6xl font-firacode font-bold">
            <span>{t("name")}</span>
            <span>{t("lastName")}</span>
          </h1>
          <span className="font-mono md:text-xl lg:text-xl">
            {t("subtitle")}
          </span>
        </div>
        <Image
          className="absolute -bottom-14 -right-14 md:-right-16 lg:-right-24 w-7/12 md:w-4/6 z-30 image-gradient"
          src={ProfileImage}
          width={300}
          height={300}
          alt="Lucas Villanueva"
        />
      </AnimatedArticle>
      {/*LANG SWITCH */}
      <AnimatedArticle
        direction="right"
        className="order-2 relative flex items-center justify-center px-4 py-4 md:px-6 md:py-6 duration-200 aspect-square col-span-1 backdrop-blur-3xl rounded-xl bg-black/[.1]"
      >
        <LocalSwitch locale={locale} />
      </AnimatedArticle>
      {/* AGE */}
      <AnimatedArticle
        direction="right"
        className="order-3 relative flex items-center justify-center px-4 py-4 md:px-6 md:py-6 duration-200 aspect-square col-span-1 backdrop-blur-3xl rounded-xl bg-black/[.1]"
      >
        <Age locale={locale} />
      </AnimatedArticle>
      {/*CV */}
      <AnimatedArticle
        direction="left"
        className="order-4 relative flex items-center justify-center px-4 py-4 md:px-6 md:py-6 duration-200 aspect-square col-span-1 backdrop-blur-3xl rounded-xl bg-black/[.1] overflow-hidden cursor-pointer hover:scale-[1.02] active:scale-100"
      >
        <Image
          src={externalLink}
          width={15}
          alt="Link"
          className="absolute right-3 top-3 md:w-6"
        />
        <Link
          target="_blank"
          href={t("cvLink")}
          className="relative w-full h-full flex justify-center items-center transition-all ease-in duration-200"
        >
          <Image src={cvIcon} width={60} className="md:w-20" alt={t("cvAlt")} />
        </Link>
      </AnimatedArticle>
      {/*ABOUT ME */}
      <AnimatedArticle
        direction="right"
        className="order-5 relative px-6 py-6 duration-200 aspect-auto col-span-3 backdrop-blur-3xl rounded-xl bg-black/[.1]"
      >
        <div className="mx-auto w-full h-full z-10 flex flex-col justify-evenly text-purple-haze-100 font-reno">
          <h2 className="text-3xl my-1">{t("aboutMe")}</h2>
          <p className="text-base font-mono">{t("aboutMeText")}</p>
        </div>
      </AnimatedArticle>
      {/*PROJECTS */}
      <AnimatedArticle
        direction="left"
        className="order-6 relative px-6 py-6 duration-200 aspect-auto col-span-3 backdrop-blur-3xl rounded-xl bg-black/[.1] overflow-hidden cursor-pointer hover:scale-[1.02] active:scale-100"
      >
        <TransitionLink href="/projects">
          <Image
            src={projectsBg}
            alt="Projects"
            className="absolute h-full w-full inset-0 object-cover z-[-1] filter opacity-50"
          />
          <Image
            src={pageMove}
            width={25}
            alt="Link"
            className="absolute right-3 top-3"
          />
          <div className="mx-auto px-3 py-5 w-full h-full z-30 text-purple-haze-100 font-reno">
            <h2 className="text-3xl">{t("projectsTitle")}</h2>
            <p className="text-lg my-5 font-mono">{t("projectsParagraph")}</p>
          </div>
        </TransitionLink>
      </AnimatedArticle>

      {/*LINKEDIN */}
      <AnimatedArticle
        direction="right"
        className="order-7 relative px-6 py-6 duration-200 aspect-square col-span-1 backdrop-blur-3xl rounded-xl bg-black/[.1] overflow-hidden cursor-pointer hover:scale-[1.02] active:scale-100"
      >
        <Image
          src={externalLink}
          width={15}
          alt="Link"
          className="absolute right-3 top-3 md:w-6"
        />
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/lucasvillanueva1999/"
          className="relative w-full h-full flex justify-center items-center transition-all ease-in duration-200"
        >
          <Image
            src={linkedinIcon}
            className="md:w-20"
            width={60}
            alt="Linkedin"
          />
        </Link>
      </AnimatedArticle>
      {/*GITHUB */}
      <AnimatedArticle
        direction="left"
        className="order-8 relative px-6 py-6 duration-200 aspect-square col-span-1 backdrop-blur-3xl rounded-xl bg-black/[.1] cursor-pointer hover:scale-[1.02] active:scale-100"
      >
        <Image
          src={externalLink}
          width={15}
          alt="Link"
          className="absolute right-3 top-3 md:w-6"
        />
        <Link
          target="_blank"
          href="https://github.com/KenaiiDev/"
          className="relative w-full h-full flex justify-center items-center transition-all ease-in duration-200"
        >
          <Image src={githubIcon} className="md:w-20" width={60} alt="Github" />
        </Link>
      </AnimatedArticle>
      {/*EMAIL */}
      <AnimatedArticle
        direction="left"
        className="order-9 relative px-6 py-6 duration-200 aspect-square col-span-1 backdrop-blur-3xl rounded-xl bg-black/[.1] cursor-pointer hover:scale-[1.02] active:scale-100"
      >
        <Image
          src={externalLink}
          width={15}
          alt="Link"
          className="absolute right-3 top-3 md:w-6"
        />
        <Link
          target="_blank"
          href="mailto:lucasvillanueva.dev@gmail.com"
          className="relative w-full h-full flex justify-center items-center transition-all ease-in duration-200"
        >
          <Image src={emailIcon} className="md:w-20" width={60} alt="Email" />
        </Link>
      </AnimatedArticle>
      {/*TECHNOLOGIES */}
      <AnimatedArticle
        direction="right"
        className="order-10 relative px-6 py-6 duration-200 aspect-auto col-span-3 md:col-span-2 backdrop-blur-3xl rounded-xl bg-black/[.1]"
      >
        <div className="flex flex-wrap w-full h-full justify-evenly items-center">
          {TECHNOLOGIES.map((tech) => (
            <Image
              key={tech.name}
              src={tech.icon}
              alt={tech.name}
              width={30}
              height={30}
              className="m-2 md:w-9 md:h-9 lg:w-12 lg:h-12"
            />
          ))}
        </div>
      </AnimatedArticle>
    </section>
  );
}
