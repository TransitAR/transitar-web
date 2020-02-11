import axios from "axios";

const baseURL = "http://localhost:5000";

const instance = axios.create({
  baseURL
});

export const getHosts = () => instance.get("/api/v1/hosts");
