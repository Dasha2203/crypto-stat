import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL: "/api/proxy",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
});
