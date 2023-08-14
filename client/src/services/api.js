import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const login = async () => {};

export const register = async (user) => {
  const response = await apiClient.post("/register", user);
  return response.data;
};

export const getConnections = () => {};

export const updateProfile = async (id, user) => {
  const response = await apiClient.patch("/api/users/" + id, user);
  return response.data;
};

export const getProfile = async (user) => {
  //use axios to make get request
  const response = await apiClient.post("/api/users", user);
  return response.data;
};
