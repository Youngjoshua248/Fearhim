import API from "./api";

// Signup a user
export async function registerUser({ email, password }) {
  const response = await API.post("/auth/register", { email, password });
  return response.data;
}

// Login a user and get token
export async function loginUser({ email, password }) {
  const response = await API.post("/auth/login", { email, password });
  return response.data;
}
