import api from "@config/api";

export async function userRegister(formData: FormData) {
  const response = await api.post(`/api/auth/local/register`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
}
