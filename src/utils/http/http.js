import axios from "axios";

const baseURL = "https://transitar-api.now.sh/";

const instance = axios.create({
  baseURL
});

export const getHosts = () => instance.get("/api/hosts");
