type Resource = {
  title: string;
  URL: string;
  key: number;
};

type Topic = {
  title: string;
  key: number;
};

type DevelopmentPlanSection = {
  title: string;
  objective: string;
  topics: Topic[];
  resources: Resource[];
  key: number;
};

export default DevelopmentPlanSection;
