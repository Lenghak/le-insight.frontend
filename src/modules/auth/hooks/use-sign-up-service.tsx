import { authKeys } from "@/modules/auth/constants/query-keys";
import postSignUp from "@/modules/auth/services/sign-up-api";
import type { SignUpRequestType } from "@/modules/auth/types/sign-up-schema";

import { queryClient } from "@/common/stores/api-store";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "auth-astro/client";
import { AxiosError } from "axios";
import { toast } from "sonner";

export default function useSignUpService() {
  return useMutation(
    {
      mutationKey: authKeys.operation("sign-up"),
      mutationFn: async (signUpRequest: SignUpRequestType) => {
        try {
          await postSignUp(signUpRequest);
        } catch (err) {
          if (err instanceof AxiosError) {
            toast.error(
              err.response?.status === 409
                ? "Account Already Exist"
                : "Sign Up Error",
              {
                closeButton: true,
                duration: 10 * 1000,
                description:
                  err.response?.status === 409
                    ? "There is an account that already exist with the email. Please input another one."
                    : "There was a technical problem while creating your account. Please try again later.",
              },
            );
          }
        }

        return await signIn("credentials", {
          redirect: false,
          callbackUrl: "/auth/sign-up",
          ...signUpRequest,
        });
      },
    },
    queryClient,
  );
}
