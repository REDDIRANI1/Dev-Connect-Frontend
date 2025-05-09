import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProfile } from "../services/profile";

export default function ProfileView() {
  const { username } = useParams();
  const [profile, setProfile] = useState<any>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const data = await fetchProfile(username!);
        setProfile(data);
      } catch {
        setError("Profile not found");
      }
    };
    load();
  }, [username]);

  if (error) return <div className="p-4 text-red-600">{error}</div>;
  if (!profile) return <div className="p-4">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto bg-white p-6 mt-4 rounded shadow">
      {profile.avatar_url && (
        <img src={profile.avatar_url} className="w-24 h-24 rounded-full mx-auto mb-4" />
      )}
      <h2 className="text-2xl font-bold text-center">{profile.full_name}</h2>
      <p className="text-center text-gray-600">{profile.bio}</p>
      <div className="mt-4 space-y-2 text-center">
        {profile.website && <a className="text-blue-500" href={profile.website} target="_blank">Website</a>}
        {profile.github && <div>GitHub: {profile.github}</div>}
      </div>
    </div>
  );
}
