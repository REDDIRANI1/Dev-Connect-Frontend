import api from "./api";

export const fetchComments = async (projectId: number) => {
  const res = await api.get(`/projects/${projectId}/comments`);
  return res.data;
};

export const postComment = async (projectId: number, content: string, token: string) => {
  const res = await api.post(
    `/projects/${projectId}/comments`,
    { content },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return res.data;
};
