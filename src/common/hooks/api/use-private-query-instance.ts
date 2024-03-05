import useRefreshTokenService from "@/modules/auth/hooks/use-refresh-token-service";
import useSessionService from "@/modules/auth/hooks/use-session-service";

import {
  createQueryInstance,
  getPublicQueryInstance,
} from "@/common/stores/api-store";
import type { AxiosError, InternalAxiosRequestConfig } from "axios";
import { useEffect } from "react";

export default function usePrivateQueryInstance() {
  const { data: session } = useSessionService();
  const { mutateAsync: refreshToken } = useRefreshTokenService();

  const tokens = session?.data?.tokens;
  const instance = getPublicQueryInstance();

  useEffect(() => {
    if (session?.data?.tokens) {
      const reqInterceptor = instance.interceptors.request.use((conf) => {
        if (tokens?.at) conf.headers.Authorization = `Bearer ${tokens?.at}`;
        return conf;
      });

      const resInterceptor = instance.interceptors.response.use(
        (conf) => conf,
        async (err: AxiosError) => {
          const prevConf = err.config as InternalAxiosRequestConfig & {
            sent: boolean;
          };

          if (err.response?.status === 401 && !prevConf?.sent) {
            prevConf.sent = true;

            const { data: res } = await refreshToken(
              createQueryInstance({
                headers: { Authorization: `Bearer ${tokens?.rt}` },
              }),
            );

            // @ts-expect-error session.data is probably null
            session.data.tokens = res.data.attributes;
          }
        },
      );

      return () => {
        instance.interceptors.request.eject(reqInterceptor);
        instance.interceptors.response.eject(resInterceptor);
      };
    }
  }, [session, tokens]);

  return instance;
}
