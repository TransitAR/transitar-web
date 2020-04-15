import axios from "axios";

export const getPersons = () => axios.get("/api/persons");
export const getPerson = id => axios.get(`/api/persons/${id}`);

export const getPets = () => axios.get("/api/pets");
export const getPet = id => axios.get(`/api/pets/${id}`);

export const getRefuges = () => axios.get("/api/refuges");
export const getRefuge = id => axios.get(`/api/refuges/${id}`);

export const getVets = () => axios.get("/api/vets");
export const getVet = id => axios.get(`/api/vets/${id}`);

export const updateUser = (data, accessToken) =>
  axios.patch("/api/users", data, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
