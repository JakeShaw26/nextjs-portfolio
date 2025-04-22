"use client";

import { useContext } from "react";
import DataContext from "@/context/DataContext";
import { ExperienceSection } from "@/components/ExperienceSection";

export default function Experience() {
  const { experienceData } = useContext(DataContext);

  return (
    <div>
      <main className="flex flex-wrap w-full">
        {experienceData.map((section) => {
          return <ExperienceSection section={section} key={section.key} />;
        })}
      </main>
    </div>
  );
}
