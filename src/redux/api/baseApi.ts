import type { BaseQueryFn, DefinitionType } from "@reduxjs/toolkit/query";
import type { BaseQueryApi, FetchArgs } from "@reduxjs/toolkit/query";
import {
  createApi,
  fetchBaseQuery,
  type RootState,
} from "@reduxjs/toolkit/query/react";
import { toast } from "sonner";
import { logout, setUser } from "../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  DefinitionType
> = async (args, api, extraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 404) {
    toast.error(result.error.data?.message || "Not Found");
    console.error("Not Found", result.error);
  }

  // If unauthorized, try to refresh token
  if (result.error && result.error.status === 401) {
    const refreshResponse = await fetch(
      `${import.meta.env.VITE_API_URL}/auth/refresh-token`,
      {
        method: "POST",
        credentials: "include",
      }
    );
    const data = await refreshResponse.json();

    if (data?.data?.accessToken) {
      const user = (api.getState() as RootState).auth.user;

      api.dispatch(
        setUser({
          user: {
            ...user,
            accessToken: data.data.accessToken,
          },
        })
      );

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
});
