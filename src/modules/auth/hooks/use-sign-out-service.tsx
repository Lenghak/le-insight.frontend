import { authKeys } from "@/modules/auth/constants/query-keys";
import postSignOut from "@/modules/auth/services/sign-out-api";

import usePrivateQueryInstance from "@/common/hooks/use-private-query-instance";

import { $queryClient } from "@/common/stores/api-store";
import { useStore } from "@nanostores/react";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "auth-astro/client";

export default function useSignOutService() {
  const instance = usePrivateQueryInstance();
  const queryClient = useStore($queryClient);

  return useMutation(
    {
      mutationKey: authKeys.operation("sign-out"),
      mutationFn: async () => {
        const res = await postSignOut(instance).then(async (res) => {
          await signOut();
          return res;
        });

        return res;
      },
    },
    queryClient,
  );
}
