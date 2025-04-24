"use client";

import getGitHubProfile from "@/functions/getGithubProfile";
import GithubProfile from "@/types/github-profile";
import { useEffect, useState } from "react";
import { GitHubProfile } from "@/components/GitHubProfile";

export default function Contact() {
  const [profile, setProfile] = useState<GithubProfile>();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getGitHubProfile("JakeShaw26");
        setProfile(data);
      } catch (error) {
        console.error("Error fetching GitHub profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex w-full justify-center">
      {profile ? (
        <GitHubProfile profile={profile} />
      ) : (
        <p>Failed to pull profile data.</p>
      )}
    </div>
  );
}
