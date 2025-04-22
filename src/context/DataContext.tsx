import React, { createContext } from "react";
import developmentData from "../../public/json/development-plan.json";
import experienceData from "../../public/json/experience.json";

const DataContext = createContext({
  developmentPlanData: developmentData.developmentPlan,
  experienceData: experienceData.experience,
});

export const DataProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <DataContext.Provider
      value={{
        developmentPlanData: developmentData.developmentPlan,
        experienceData: experienceData.experience,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
