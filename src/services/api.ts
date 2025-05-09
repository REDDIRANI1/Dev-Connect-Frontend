import axios from "axios";

const api = axios.create({
  baseURL: "https://dev-connect-backend-r8e9.onrender.com", // Adjust if needed
});

export default api;
