"use client";

import getGitHubProfile from "@/functions/getGithubProfile";
import GithubProfile from "@/types/github-profile";
import { useEffect, useState } from "react";
import { GitHubProfile } from "@/components/GitHubProfile";

export default function Contact() {
  const [profile, setProfile] = useState<GithubProfile>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getGitHubProfile("JakeShaw26");
        setProfile(data);
      } catch (error) {
        setError(`There was an error loading the profile - ${error}`);
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex w-full justify-center">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {profile ? (
        <GitHubProfile profile={profile} />
      ) : (
        !isLoading && !error && <p>Failed to pull profile data.</p>
      )}
    </div>
  );
}
