import { axiosInstance } from "./axiosInstance";

export const userApi = async () => {
  const token = localStorage.getItem("auth-token");
  if (JSON.parse(token) === null || JSON.parse(token) === "")
    return "No token found";
  const res = await axiosInstance.get("/users/me", {
    headers: {
      Authorization: `Bearer ${JSON.parse(token)}`,
    },
  });
  return res.data;
};
