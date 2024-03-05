import { authKeys } from "@/modules/auth/constants/query-keys";
import postSignOut from "@/modules/auth/services/sign-out-api";

import usePrivateQueryInstance from "@/common/hooks/api/use-private-query-instance";
import { queryClient } from "@/common/stores/api-store";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "auth-astro/client";

export default function useSignOutService() {

  const instance = usePrivateQueryInstance()

  return useMutation(
    {
      mutationKey: authKeys.operation("sign-out"),
      mutationFn: async () => {
        const res = await postSignOut(instance);

        await signOut();

        return res;
      },
    },
    queryClient,
  );
}
