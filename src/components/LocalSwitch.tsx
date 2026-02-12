"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAnimation } from "@/contexts/AnimationContext";

type Props = {
  locale: string;
  path?: string;
};

export default function LocalSwitch({ locale, path = "" }: Props) {
  const router = useRouter();
  const { pauseAnimations } = useAnimation();

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale !== locale) {
      pauseAnimations();
      router.replace(`/${newLocale}${path}`);
    }
  };

  return (
    <div className="flex gap-2 p-1 bg-black/[.3] backdrop-blur-sm rounded-lg">
      <button
        onClick={() => handleLocaleChange("en")}
        className={`px-4 py-2 rounded-md font-mono text-sm transition-all duration-200 ${
          locale === "en"
            ? "bg-purple-haze-600 text-white shadow-lg"
            : "text-purple-haze-200 hover:text-purple-haze-100 hover:bg-white/[.05]"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => handleLocaleChange("es")}
        className={`px-4 py-2 rounded-md font-mono text-sm transition-all duration-200 ${
          locale === "es"
            ? "bg-purple-haze-600 text-white shadow-lg"
            : "text-purple-haze-200 hover:text-purple-haze-100 hover:bg-white/[.05]"
        }`}
      >
        ES
      </button>
    </div>
  );
}
