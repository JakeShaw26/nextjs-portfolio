import GithubProfile from "@/types/github-profile";
import Image from "next/image";
import Link from "next/link";

export const GitHubProfile = ({ profile }: { profile: GithubProfile }) => {
  return (
    <div className="flex flex-col bg-gray-400 rounded-md h-fit">
      <div className="flex flex-row">
        <div className="p-2">
          <Image
            src={profile.avatar_url}
            width={100}
            height={100}
            alt="github profile picture"
            className="rounded-full"
          />
        </div>
        <div className="p-2">
          <p>{profile.name}</p>
          <p>{profile.bio}</p>
          <p>{profile.company}</p>
          <p>Location: {profile.location}</p>
          <p>Followers: {profile.followers}</p>
        </div>
      </div>
      <div className="flex flex-col p-2">
        <Link
          href="/github/repositories"
          className="hover:text-purple-600 cursor-pointer"
        >
          All Repos
        </Link>
        <Link
          href={profile.html_url}
          className="hover:text-purple-600 cursor-pointer"
          target="_blank"
        >
          Click here for full profile
        </Link>
      </div>
    </div>
  );
};
