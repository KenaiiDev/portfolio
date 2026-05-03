"use client";

import React from "react";

type Props = {
  location: string;
};

function Location({ location }: Props) {
  return (
    <div className="w-full h-full text-center flex flex-col justify-center items-center text-purple-haze-100">
      <h2 className="mx-1 text-xl md:text-2xl lg:text-4xl">{location}</h2>
    </div>
  );
}

export default Location;
