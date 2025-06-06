async function getGitHubProfile(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error("Profile not found");

    const profileData = await response.json();
    return profileData;
  } catch (error) {
    console.error(error);
  }
}

export default getGitHubProfile;
