import { env } from "@/core/env";
import { QueryClient } from "@tanstack/query-core";
import axios from "axios";

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

export const queryInstance = axios.create({
  baseURL: env.PUBLIC_API_ENDPOINT,
});
