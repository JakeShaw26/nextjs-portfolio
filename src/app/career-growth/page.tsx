"use client";

import { useContext } from "react";
import DataContext from "@/context/DataContext";
import { GrowthArea } from "@/components/GrowthArea";

export default function Career() {
  const { developmentPlanData } = useContext(DataContext);

  return (
    <div>
      <main className="flex flex-wrap w-full">
        {developmentPlanData.map((section) => {
          return <GrowthArea area={section} key={section.key} />;
        })}
      </main>
    </div>
  );
}
