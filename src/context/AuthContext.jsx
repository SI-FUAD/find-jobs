import { createContext, useContext, useEffect, useState } from "react";

import api from "../api/axios";
import endpoints from "../api/endpoints";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);

  const [authType, setAuthType] = useState(null);

  const [loading, setLoading] = useState(true);

  /*
  |--------------------------------------------------------------------------
  | CHECK AUTH
  |--------------------------------------------------------------------------
  */

  const checkAuth = async () => {
  try {
    const token = localStorage.getItem("token");

    /*
    |------------------------------------------------------------------
    | NO TOKEN
    |------------------------------------------------------------------
    */

    if (!token) {
      setAuth(null);
      setAuthType(null);

      return;
    }

    /*
    |------------------------------------------------------------------
    | REQUEST
    |------------------------------------------------------------------
    */

    const response = await api.get(endpoints.home);

    /*
    |------------------------------------------------------------------
    | AUTH FOUND
    |------------------------------------------------------------------
    */

    if (response.data.auth) {
      setAuth(response.data.auth);

      setAuthType(response.data.auth_type);
    } else {
      setAuth(null);

      setAuthType(null);
    }
  } catch (error) {
    console.error(error);

    localStorage.removeItem("token");

    setAuth(null);

    setAuthType(null);
  }
};

  /*
  |--------------------------------------------------------------------------
  | INITIAL LOAD
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    const initializeAuth = async () => {
      await checkAuth();

      setLoading(false);
    };

    initializeAuth();
  }, []);

  /*
  |--------------------------------------------------------------------------
  | LOGIN
  |--------------------------------------------------------------------------
  */

  const login = async (token) => {
    localStorage.setItem("token", token);

    await checkAuth();
  };

  /*
  |--------------------------------------------------------------------------
  | LOGOUT
  |--------------------------------------------------------------------------
  */

  const logout = async () => {
  try {
    /*
    |------------------------------------------------------------------
    | COMPANY
    |------------------------------------------------------------------
    */

    if (authType === "company") {
      await api.post("/company/auth/logout");
    }

    /*
    |------------------------------------------------------------------
    | USER / ADMIN
    |------------------------------------------------------------------
    */

    else {
      await api.post(endpoints.logout);
    }
  } catch (error) {
    console.error(error);
  }

  /*
  |--------------------------------------------------------------------
  | CLEAR LOCAL
  |--------------------------------------------------------------------
  */

  localStorage.removeItem("token");

  setAuth(null);

  setAuthType(null);

  window.location.href = "/";
};

  return (
    <AuthContext.Provider
      value={{
        auth,
        authType,
        loading,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);