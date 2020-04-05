import axios from "axios";

const baseURL = "https://api.refugiar.org/";

const instance = axios.create({
  baseURL
});

export const getPersons = () => instance.get("/api/persons");
export const getPerson = id => instance.get(`/api/persons/${id}`);

export const getPets = () => instance.get("/api/pets");
export const getPet = id => instance.get(`/api/pets/${id}`);

export const getRefuges = () => instance.get("/api/refuges");
export const getRefuge = id => instance.get(`/api/refuges/${id}`);

export const getVets = () => instance.get("/api/vets");
export const getVet = id => instance.get(`/api/vets/${id}`);
