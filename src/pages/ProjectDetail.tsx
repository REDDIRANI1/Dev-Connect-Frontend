import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import CommentSection from "../components/CommentSection";

export default function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await api.get(`/projects/${id}`);
        setProject(res.data); // Ensure all fields are returned
      } catch (err) {
        console.error("Failed to load project", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  if (loading) return <p className="p-4">Loading project...</p>;
  if (!project) return <p className="p-4 text-red-500">Project not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
      {/* Displaying Selected Project Details */}
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="text-gray-700">{project.description}</p>
      {project.link && (
        <p>
          <strong>Project Link:</strong>{" "}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            {project.link}
          </a>
        </p>
      )}

      {/* Comments Section */}
      
      <CommentSection projectId={parseInt(id!)} />
    </div>
  );
}
