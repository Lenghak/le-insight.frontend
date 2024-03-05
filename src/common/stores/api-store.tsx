import { env } from "@/core/env";
import { QueryClient } from "@tanstack/query-core";
import axios, { type CreateAxiosDefaults } from "axios";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 60 * 1000,
      refetchOnMount: true,
      refetchOnReconnect: true,
      retryOnMount: true,
    },
  },
});

export const createQueryInstance = (conf: CreateAxiosDefaults<unknown>) => axios.create({
  baseURL: env.PUBLIC_API_ENDPOINT,
  ...conf
})

const queryInstance = axios.create({
  baseURL: env.PUBLIC_API_ENDPOINT,
});

export const getPublicQueryInstance = () => queryInstance;


