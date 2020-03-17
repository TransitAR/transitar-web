import axios from "axios";

const baseURL = "https://transitar-api.now.sh/";

const instance = axios.create({
  baseURL
});

export const getHosts = () => instance.get("/api/hosts");
export const getPets = () => instance.get("/api/pets");
export const getRefuges = () => instance.get("/api/refuges");
export const getVets = () => instance.get("/api/vets");
