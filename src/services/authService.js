import api from "../api/axios";
import endpoints from "../api/endpoints";

export const fetchAuth = async () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return {
      auth: null,
      authType: null,
    };
  }

  try {
    const response = await api.get(
      endpoints.home
    );

    return {
      auth: response.data.auth,
      authType: response.data.auth_type,
    };
  } catch {
    localStorage.removeItem("token");

    return {
      auth: null,
      authType: null,
    };
  }
};