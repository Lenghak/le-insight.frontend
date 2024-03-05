import { authKeys } from "@/modules/auth/constants/query-keys";
import postRefreshToken from "@/modules/auth/services/refresh-token-api";

import { queryClient } from "@/common/stores/api-store";
import { useMutation } from "@tanstack/react-query";
import type { AxiosInstance } from "axios";


export default function useRefreshTokenService() {
  return useMutation(
    {
      mutationKey: authKeys.operation("refresh"),
      mutationFn: async (queryInstance?: AxiosInstance | undefined) => await postRefreshToken(queryInstance),
    },
    queryClient,
  );
}
