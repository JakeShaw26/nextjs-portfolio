import { createContext } from "react";
import developmentData from "../../public/json/development-plan.json";
import experienceData from "../../public/json/experience.json";
import aboutData from "../../public/json/about.json";

const DataContext = createContext({
  developmentPlanData: developmentData.developmentPlan,
  experienceData: experienceData.experience,
  aboutData: aboutData.data,
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
        aboutData: aboutData.data,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
