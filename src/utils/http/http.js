import axios from "axios";

const pointProd = process.env.VUE_APP_POINT_PROD;
const isProd = process.env.NODE_ENV === "production";
const prodBaseURL = "https://api.refugiar.org/";

const instance = axios.create({
  baseURL: isProd || pointProd ? prodBaseURL : ""
});

export const getPersons = () => instance.get("/api/persons");
export const getPerson = id => instance.get(`/api/persons/${id}`);

export const getPets = () => instance.get("/api/pets");
export const getPet = id => instance.get(`/api/pets/${id}`);

export const getRefuges = () => instance.get("/api/refuges");
export const getRefuge = identifier =>
  instance.get(`/api/refuges/${identifier}`);

export const getVets = () => instance.get("/api/vets");
export const getVet = id => instance.get(`/api/vets/${id}`);

export const getUser = async accessToken => {
  const { data: user } = await instance.get("/api/users", {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
  return user;
};
export const updateUser = (data, accessToken) =>
  instance.patch("/api/users", data, {
    headers: { Authorization: `Bearer ${accessToken}` }
  });
