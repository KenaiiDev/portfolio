"use client";

import React from "react";

type Props = {
  locale: string;
  ageLabel: string;
  yearsLabel: string;
};

function Age({ locale, ageLabel, yearsLabel }: Props) {
  const birthDate = new Date("1999-11-1");
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="w-full h-full text-center flex flex-col justify-center items-center text-purple-haze-100">
      <span className="text-lg md:text-xl lg:text-2xl lg:my-2">{ageLabel}</span>
      <h2 className="mx-1 text-xl md:text-2xl lg:text-4xl">{age}</h2>
      <span className="text-lg md:text-xl lg:text-2xl lg:my-2">
        {yearsLabel}
      </span>
    </div>
  );
}

export default Age;
