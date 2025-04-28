"use client";

import { getGitHubProfile } from "@/functions/github-functions";
import GithubProfile from "@/types/github-profile";
import { useEffect, useState } from "react";
import { GitHubProfile } from "@/components/GitHubProfile";

export default function GitHub() {
  const [profile, setProfile] = useState<GithubProfile>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      setError("");

      try {
        const data = await getGitHubProfile("JakeShaw26");
        setProfile(data);
      } catch (err) {
        setError(`There was an error loading the profile - ${err}`);
        console.error("Error fetching GitHub profile:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex w-full justify-center">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {profile && <GitHubProfile profile={profile} />}
    </div>
  );
}
