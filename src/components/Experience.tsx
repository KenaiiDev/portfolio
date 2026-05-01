"use client";

import React from "react";

type ExperienceItem = {
  role: string;
  company: string;
  date: string;
  description?: string;
};

type Props = {
  title: string;
  experiences: ExperienceItem[];
};

function Experience({ title, experiences }: Props) {
  return (
    <div className="w-full h-full z-10 flex flex-col justify-start text-purple-haze-100 font-reno overflow-hidden">
      <h2 className="text-3xl my-2 shrink-0">{title}</h2>
      <div className="flex flex-col gap-4 mt-2 font-mono overflow-y-auto pr-2 pb-2">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex flex-col border-l-2 border-purple-haze-100/30 pl-4 py-1"
          >
            <h3 className="text-xl font-bold text-razzmatazz-400">{exp.role}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-sm text-purple-haze-100/80">
              <span className="font-semibold">{exp.company}</span>
              <span className="hidden sm:inline">•</span>
              <span>{exp.date}</span>
            </div>
            {exp.description && (
              <p className="text-sm mt-2 text-purple-haze-100/90">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
