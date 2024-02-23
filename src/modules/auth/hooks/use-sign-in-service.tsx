import { authKeys } from "@/modules/auth/constants/query-keys";
import postSignIn from "@/modules/auth/services/sign-in-api";
import type { SignInRequestType } from "@/modules/auth/types/sign-in-schema";

import { queryClient } from "@/common/stores/api-store";
import { useMutation } from "@tanstack/react-query";

export default function useSignInService() {
  return useMutation(
    {
      mutationKey: authKeys.operation("sign-in"),
      mutationFn: async ({ email, password }: SignInRequestType) =>
        await postSignIn({ email, password }),
    },
    queryClient,
  );
}
