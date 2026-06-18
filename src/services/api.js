import axios from "axios";

const API = axios.create({
  baseURL: "https://fakestoreapi.com",
});
// trying out alt fake store site:
// const API = axios.create({
//   baseURL: "https://fakeapi.platzi.com",
// });
// const API = axios.create({
//   baseURL: "https://api.escuelajs.co/api/v1/",
// });



// 👇 centralizing endpoints keeps components clean
export const getProducts = () => API.get("/products");

export const getCategories = () => API.get("/products/categories");

export const getProductsByCategory = (category) =>
  API.get(`/products/category/${category}`);

export const getProduct = (id) => API.get(`/products/${id}`);

export const addProduct = (data) => API.post("/products", data);

export const updateProduct = (id, data) => API.put(`/products/${id}`, data);

export const deleteProduct = (id) => API.delete(`/products/${id}`);
