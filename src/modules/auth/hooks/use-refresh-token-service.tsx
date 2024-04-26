import { authKeys } from "@/modules/auth/constants/query-keys";
import postRefreshToken from "@/modules/auth/services/refresh-token-api";

import { $queryClient } from "@/common/stores/api-store";
import { useStore } from "@nanostores/react";
import { useMutation } from "@tanstack/react-query";
import type { AxiosInstance } from "axios";

export default function useRefreshTokenService() {
  const queryClient = useStore($queryClient);
  return useMutation(
    {
      mutationKey: authKeys.operation("refresh"),
      mutationFn: async (queryInstance?: AxiosInstance | undefined) =>
        await postRefreshToken(queryInstance),
    },
    queryClient,
  );
}
