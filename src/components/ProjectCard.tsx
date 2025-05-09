type Props = {
  project: {
    title: string;
    description: string;
    link?: string;
    created_at: string;
  };
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="bg-white shadow rounded p-4 space-y-2">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          className="text-blue-500 underline"
        >
          Project Link
        </a>
      )}
      <p className="text-sm text-gray-400">
        Posted on {new Date(project.created_at).toLocaleDateString()}
      </p>
    </div>
  );
}
