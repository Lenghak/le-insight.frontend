import {
  createQueryInstance,
  getPublicQueryInstance,
} from "@/common/stores/api-store";
import useRefreshTokenService from "@auth/hooks/use-refresh-token-service";
import useSessionService from "@auth/hooks/use-session-service";
import { signOut } from "auth-astro/client";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useEffect } from "react";

export default function usePrivateQueryInstance() {
  const { data: session } = useSessionService();
  const { mutateAsync: refreshToken } = useRefreshTokenService();

  const instance = getPublicQueryInstance();

  useEffect(() => {
    const tokens = session?.data?.tokens;

    if (tokens) {
      const reqInterceptor = instance.interceptors.request.use(
        (conf) => {
          if (tokens?.at) conf.headers.Authorization = `Bearer ${tokens?.at}`;
          return conf;
        },
        (reject) => Promise.reject(reject),
      );

      const resInterceptor = instance.interceptors.response.use(
        (conf) => conf,
        async (err: AxiosError) => {
          const prevConf = err.config as InternalAxiosRequestConfig & {
            sent: boolean;
          };

          if (err.response?.status === 401 && !prevConf?.sent) {
            prevConf.sent = true;

            if (err.config?.url === "/auth/refresh") {
              await signOut({ redirect: true, callbackUrl: "/auth/sign-in" });
              return Promise.reject(err);
            }

            const { data: res } = await refreshToken(
              createQueryInstance({
                headers: { Authorization: `Bearer ${tokens?.rt}` },
              }),
            );

            tokens.at = res.data.attributes.access_token;
            tokens.rt = res.data.attributes.refresh_token;

            prevConf.headers.Authorization = `Bearer ${tokens.at}`;
            return instance(prevConf);
          }

          return Promise.reject(err);
        },
      );

      return () => {
        instance.interceptors.request.eject(reqInterceptor);
        instance.interceptors.response.eject(resInterceptor);
      };
    }
  }, [session]);

  return instance;
}
