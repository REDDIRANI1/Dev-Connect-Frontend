import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { createProject } from "../services/project";
import { useNavigate } from "react-router-dom";

export default function ProjectCreate() {
  const { token } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    description: "",
    link: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createProject(form, token!);
      alert("Project posted!");
      navigate("/projects");
    } catch {
      alert("Error creating project");
    }
  };

  if (!token) return <div className="p-4 text-red-600">Login required</div>;

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold text-center">Post a Project</h2>
      <input
        className="w-full border p-2 rounded"
        name="title"
        placeholder="Project Title"
        value={form.title}
        onChange={handleChange}
        required
      />
      <textarea
        className="w-full border p-2 rounded"
        name="description"
        placeholder="Project Description"
        rows={4}
        value={form.description}
        onChange={handleChange}
        required
      />
      <input
        className="w-full border p-2 rounded"
        name="link"
        placeholder="Link (GitHub, live site)"
        value={form.link}
        onChange={handleChange}
      />
      <button className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
}
