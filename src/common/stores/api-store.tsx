import { env } from "@/core/env";
import { QueryClient } from "@tanstack/query-core";
import axios, { type CreateAxiosDefaults } from "axios";
import { map } from "nanostores";

export const $queryClient = map(
  new QueryClient({
    defaultOptions: {
      queries: {
        gcTime: 60 * 1000,
        refetchOnMount: true,
        refetchOnReconnect: true,
        retryOnMount: true,
      },
    },
  }),
);

export const createQueryInstance = (conf: CreateAxiosDefaults<unknown>) =>
  axios.create({
    baseURL: env.PUBLIC_API_ENDPOINT,
    ...conf,
  });

export const $queryInstance = map(
  axios.create({
    baseURL: env.PUBLIC_API_ENDPOINT,
  }),
);

export const getPublicQueryInstance = () => $queryInstance.get();
