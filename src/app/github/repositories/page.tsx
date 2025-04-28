"use client";

import { GitHubRepo } from "@/components/GitHubRepo";
import { getGithubRepositories } from "@/functions/github-functions";
import GithubRepo from "@/types/github-repo";
import { useEffect, useState } from "react";

export default function Repositories() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchRepos = async () => {
    setIsLoading(true);
    setError("");

    try {
      const data = await getGithubRepositories("JakeShaw26");
      setRepos(data);
    } catch (err) {
      setError(`There was an error loading the repos - ${err}`);
      console.error("Error fetching GitHub repos:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRepos();
  }, []);

  return (
    <div className="flex flex-col w-full">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {repos &&
        repos.map((repo) => {
          return <GitHubRepo repo={repo} key={repo.id} />;
        })}
    </div>
  );
}
