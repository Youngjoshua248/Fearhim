import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000", // your backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
