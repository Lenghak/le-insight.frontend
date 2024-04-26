import { authKeys } from "@/modules/auth/constants/query-keys";
import type { SignInRequestType } from "@/modules/auth/types/sign-in-schema";

import { $queryClient } from "@/common/stores/api-store";
import { useStore } from "@nanostores/react";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "auth-astro/client";
import { AxiosError } from "axios";
import { toast } from "sonner";

export default function useSignInService() {
  const queryClient = useStore($queryClient);

  return useMutation(
    {
      mutationKey: authKeys.operation("sign-in"),
      mutationFn: async (signInRequest: SignInRequestType) =>
        await signIn("credentials", {
          redirect: false,
          callbackUrl: "/auth/sign-in",
          ...signInRequest,
        })
          .then(async (res) => {
            const json = (await res?.json()) as { url?: string };
            if (json?.url?.includes("?"))
              toast.error("Incorrect Email or Password", {
                duration: 10 * 1000,
                description:
                  "The email and password are invalid. Please check and try again.",
                closeButton: true,
              });
          })
          .catch((err) => {
            toast.error(
              err instanceof AxiosError && err.response?.status === 401
                ? "Incorrect Email or Password"
                : "Sign in failed",
              {
                duration: 10 * 1000,
                description:
                  err instanceof AxiosError && err.response?.status === 401
                    ? "The email and password are invalid. Please check and try again."
                    : "There was a technical problem while signing you in. Please try again later.",
                closeButton: true,
              },
            );
          }),
    },

    queryClient,
  );
}
