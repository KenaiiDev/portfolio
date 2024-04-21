"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  locale: string;
  path?: string;
};

export default function LocalSwitch({ locale, path = "" }: Props) {
  const router = useRouter();

  const [isChecked, setIsChecked] = useState(locale === "es");

  const handleLocaleChange = () => {
    const newLocale = isChecked ? "en" : "es";
    setIsChecked(!isChecked);
    router.replace(`/${newLocale}${path}`);
  };

  return (
    <div className="relative w-28 h-14 overflow-hidden rounded-[100px] transform scale-75 md:scale-95">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleLocaleChange}
        className="relative w-full h-full p-0 m-0 opacity-0 cursor-pointer z-30 peer"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 z-20 transition-all before:transition-all before:content-['EN'] before:absolute before:top-1.5 before:left-2 before:flex before:items-center before:justify-center before:w-11 before:h-11 before:text-sm before:font-bold before:text-center before:leading-[1px] before:py-2 before:px-1 before:rounded-[50%] before:bg-razzmatazz-800 peer-checked:before:content-['ES'] peer-checked:before:left-[60px] peer-checked:before:bg-periwinkle-gray-800 before:text-purple-haze-300"></div>
      <div className="w-full absolute top-0 left-0 right-0 bottom-0 transition-all rounded-full bg-purple-haze-300 z-10"></div>
    </div>
  );
}
