import axios from "axios";

const baseURL = "https://refugiar-api.now.sh/";

const instance = axios.create({
  baseURL
});

export const getHosts = () => instance.get("/api/hosts");
export const getHost = id => instance.get(`/api/hosts/${id}`);

export const getPets = () => instance.get("/api/pets");
export const getPet = id => instance.get(`/api/pets/${id}`);

export const getRefuges = () => instance.get("/api/refuges");
export const getRefuge = id => instance.get(`/api/refuges/${id}`);

export const getVets = () => instance.get("/api/vets");
export const getVet = id => instance.get(`/api/vets/${id}`);
