import api from "./api";

export const fetchAllProjects = async () => {
  const res = await api.get("/projects");
  return res.data;
};

export const createProject = async (project: any, token: string) => {
  const res = await api.post("/projects", project, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};

export const fetchProjectsByUser = async (userId: number) => {
  const res = await api.get(`/projects/${userId}`);
  return res.data;
};
