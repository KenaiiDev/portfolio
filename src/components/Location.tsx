"use client";

import React from "react";

type Props = {
  locationLabel: string;
  location: string;
};

function Location({ locationLabel, location }: Props) {
  return (
    <div className="w-full h-full text-center flex flex-col justify-center items-center text-purple-haze-100">
      <span className="text-lg md:text-xl lg:text-2xl lg:my-2">
        {locationLabel}
      </span>
      <h2 className="mx-1 text-xl md:text-2xl lg:text-4xl">{location}</h2>
    </div>
  );
}

export default Location;
