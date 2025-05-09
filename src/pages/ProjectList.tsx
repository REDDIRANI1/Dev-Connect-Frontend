import { useEffect, useState } from "react";
import { fetchAllProjects } from "../services/project";
import ProjectCard from "../components/ProjectCard";
import SearchPage from "../pages/SearchPage";
import { Link } from "react-router-dom";

export default function ProjectList() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchAllProjects();
      setProjects(data);
    };
    load();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <SearchPage />
      <h2 className="text-2xl font-bold">All Projects</h2>
      {projects.length === 0 && <p>No projects posted yet.</p>}
      {projects.map((p) => (
        <div key={p.id}>
          <Link to={`/projects/${p.id}`} className="text-blue-600 hover:underline">
            <ProjectCard project={p} />
          </Link>
        </div>
      ))}
    </div>
  );
}
