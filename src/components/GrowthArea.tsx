import DevelopmentPlanSection from "@/types/growth-area";
import Link from "next/link";

export const GrowthArea = ({ area }: { area: DevelopmentPlanSection }) => {
  return (
    <div className="bg-gray-400 rounded-md flex flex-col p-6 max-w-1/3 sm:w-screen m-6 ">
      <div className="my-2">
        <p className="text-3xl">{area.title}</p>
        <p>{area.objective}</p>
      </div>

      <div className="my-2">
        <p className="text-2xl">Topics:</p>
        <ul>
          {area.topics?.map((topic) => {
            return <li key={topic.key}>{topic.title}</li>;
          })}
        </ul>
      </div>
      <div className="my-2">
        <p className="text-2xl">Learning Resources:</p>
        <div className="flex flex-col">
          {area.resources.map((resource) => {
            return (
              <Link
                href={resource.URL}
                key={resource.key}
                target="_blank"
                className="text-blue-700 visited:text-purple-900 hover:text-yellow-400 hover:underline"
              >
                {resource.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
