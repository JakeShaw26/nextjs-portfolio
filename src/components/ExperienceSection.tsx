import ExperienceSectionType from "@/types/experience";
import { useState } from "react";

export const ExperienceSection = ({
  section,
}: {
  section: ExperienceSectionType;
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="bg-gray-400 rounded-md flex flex-col p-6 max-w-1/3 sm:w-screen m-6">
      <div className="my-2">
        <p className="text-3xl">{section.employer}</p>
        {section.roles.map(
          (role) =>
            role.isCurrentRole && (
              <p className="text-xl" key={role.key}>
                Current Role: {role.roleName}
              </p>
            )
        )}
        <p>Start: {section.startDate}</p>
        <p>Finish: {section.endDate}</p>
      </div>

      <div className="my-2">
        <p className="text-2xl">Skills used:</p>
        <ul>
          {section.skillsUsed?.map((skill) => (
            <li key={skill.key}>
              {skill.skill} - {skill.proficiency}
            </li>
          ))}
        </ul>
      </div>

      <div
        onClick={() => setIsActive(!isActive)}
        className="my-2 text-xl hover:text-purple-600 cursor-pointer"
      >
        Job Description
      </div>
      {isActive && <p>{section.description}</p>}
    </div>
  );
};
