/* eslint-disable react-refresh/only-export-components */

import {
  createContext,
  useContext,
} from "react";

import {
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import api from "../api/axios";
import endpoints from "../api/endpoints";
import queryKeys from "../api/queryKeys";
import { fetchAuth } from "../services/authService";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();

  /*
  |------------------------------------------------------------------
  | AUTH QUERY
  |------------------------------------------------------------------
  */

  const { data, isLoading } = useQuery({
    queryKey: queryKeys.auth,

    queryFn: fetchAuth,

    staleTime: 1000 * 60 * 10,

    gcTime: 1000 * 60 * 30,

    retry: false,

    refetchOnWindowFocus: false,

    refetchOnReconnect: true,
  });

  const auth = data?.auth ?? null;

  const authType =
    data?.authType ?? null;

  const loading = isLoading;

  /*
  |------------------------------------------------------------------
  | LOGIN
  |------------------------------------------------------------------
  */

  const login = async (token) => {
    localStorage.setItem("token", token);

    await queryClient.invalidateQueries({
      queryKey: queryKeys.auth,
    });
  };

  /*
  |------------------------------------------------------------------
  | REFETCH AUTH
  |------------------------------------------------------------------
  */

  const refetchAuth = async () => {
    await queryClient.invalidateQueries({
      queryKey: queryKeys.auth,
    });
  };

  /*
  |------------------------------------------------------------------
  | LOGOUT
  |------------------------------------------------------------------
  */

  const logout = async () => {
    try {
      if (authType === "company") {
        await api.post(
          "/company/auth/logout"
        );
      } else {
        await api.post(
          endpoints.logout
        );
      }
    } catch (error) {
      console.error(error);
    }

    /*
    |--------------------------------------------------------------
    | CLEAR LOCAL DATA
    |--------------------------------------------------------------
    */

    localStorage.removeItem("token");

    queryClient.clear();

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
        refetchAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}