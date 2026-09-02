const ProfileService = {
  async saveProfile(profileData: any) {
    const response = await fetch("http://localhost:8080/api/v1/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profileData),
    });

    if (!response.ok) {
      throw new Error("Failed to save profile");
    }

    return response.json();
  },

  async updateResume(profileId: string, resumeFile: File) {
    const formData = new FormData();
    formData.append("file", resumeFile);

    const response = await fetch(
      `http://localhost:8080/api/v1/profile/${profileId}/documents`,
      {
        method: "POST",
        body: formData,
      },
    );

    if (!response.ok) {
      throw new Error("Failed to update resume");
    }

    return response.json();
  },
};

export default ProfileService;
