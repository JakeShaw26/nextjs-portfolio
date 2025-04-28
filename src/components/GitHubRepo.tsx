import GithubRepo from "@/types/github-repo";
import Link from "next/link";

export const GitHubRepo = ({ repo }: { repo: GithubRepo }) => {
  return (
    <div className="bg-gray-400 p-2 m-6 h-fit rounded-md flex-1">
      <Link href={`/github/repositories/${repo.id}`}>{repo.name}</Link>
    </div>
  );
};
