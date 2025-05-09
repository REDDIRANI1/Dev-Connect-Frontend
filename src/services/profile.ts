import api from "./api";

export const fetchProfile = async (username: string) => {
  const res = await api.get(`/profile/${username}`);
  return res.data;
};

export const saveProfile = async (profileData: any, token: string) => {
  const res = await api.post("/profile", profileData, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
};
