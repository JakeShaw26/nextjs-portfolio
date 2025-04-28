export async function getGitHubProfile(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("Profile not found");

    const profileData = await response.json();
    return profileData;
  } catch (error) {
    console.error(error);
  }
}

export async function getGithubRepositories(username: string) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos`
    );
    if (!response.ok) throw new Error("Repos not found");

    const repoData = await response.json();
    return repoData;
  } catch (error) {
    console.error(error);
  }
}
