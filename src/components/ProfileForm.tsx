import { useState } from "react";

type Props = {
  initialData?: any;
  onSubmit: (data: any) => void;
};

export default function ProfileForm({ initialData = {}, onSubmit }: Props) {
  const [form, setForm] = useState({
    full_name: initialData.full_name || "",
    bio: initialData.bio || "",
    avatar_url: initialData.avatar_url || "",
    website: initialData.website || "",
    github: initialData.github || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(form);
      }}
      className="max-w-xl mx-auto bg-white p-6 rounded shadow space-y-4"
    >
      <h2 className="text-2xl font-bold text-center">Edit Profile</h2>
      <input
        className="w-full border p-2 rounded"
        name="full_name"
        placeholder="Full Name"
        value={form.full_name}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full border p-2 rounded"
        name="bio"
        placeholder="Bio"
        rows={3}
        value={form.bio}
        onChange={handleChange}
      />
      <input
        className="w-full border p-2 rounded"
        name="avatar_url"
        placeholder="Avatar URL"
        value={form.avatar_url}
        onChange={handleChange}
      />
      <input
        className="w-full border p-2 rounded"
        name="website"
        placeholder="Website"
        value={form.website}
        onChange={handleChange}
      />
      <input
        className="w-full border p-2 rounded"
        name="github"
        placeholder="GitHub"
        value={form.github}
        onChange={handleChange}
      />
      <button className="bg-blue-600 text-white w-full p-2 rounded hover:bg-blue-700">
        Save Profile
      </button>
    </form>
  );
}
