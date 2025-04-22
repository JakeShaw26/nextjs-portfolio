"use client";

import getGitHubProfile from "@/functions/getGithubProfile";
import GithubProfile from "@/types/github-profile";
import { useEffect, useState } from "react";
import Image from "next/image";

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

  console.log(profile);

  return (
    <div className="flex">
      <main className="">
        {profile && (
          <Image
            src={profile.avatar_url}
            width={100}
            height={100}
            alt="github profile picture"
          />
        )}
      </main>
    </div>
  );
}
