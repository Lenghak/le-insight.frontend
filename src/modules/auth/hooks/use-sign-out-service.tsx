import { authKeys } from "@/modules/auth/constants/query-keys";
import postSignOut from "@/modules/auth/services/sign-out-api";

import { queryClient } from "@/common/stores/api-store";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "auth-astro/client";

export default function useSignOutService() {
  return useMutation(
    {
      mutationKey: authKeys.operation("sign-out"),
      mutationFn: async () => {
        const res = await postSignOut();

        await signOut();

        return res;
      },
    },
    queryClient,
  );
}
