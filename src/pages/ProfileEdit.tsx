import { useEffect, useState } from "react";
import ProfileForm from "../components/ProfileForm";
import { saveProfile, fetchProfile } from "../services/profile";
import { useAuth } from "../contexts/AuthContext";

export default function ProfileEdit() {
  const { token } = useAuth();
  const [initialData, setInitialData] = useState<any>(null);

  useEffect(() => {
    const fetchMyProfile = async () => {
      try {
        const username = JSON.parse(atob(token!.split(".")[1])).sub;
        const data = await fetchProfile(username);
        setInitialData(data);
      } catch (err) {
        setInitialData({}); // fallback for new user
      }
    };
    if (token) fetchMyProfile();
  }, [token]);

  const handleSubmit = async (data: any) => {
    try {
      await saveProfile(data, token!);
      alert("Profile saved");
    } catch {
      alert("Error saving profile");
    }
  };

  if (!token) return <div className="p-4 text-red-600">Login required</div>;
  if (initialData === null) return <div className="p-4">Loading...</div>;

  return <ProfileForm initialData={initialData} onSubmit={handleSubmit} />;
}
