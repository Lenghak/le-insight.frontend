import type { RefreshTokensResponseType } from "@/modules/auth/types/refresh-token-schema";

import { getPublicQueryInstance } from "@/common/stores/api-store";
import type { AxiosInstance, AxiosResponse } from "axios";

export default async function postRefreshToken(queryInstance?: AxiosInstance) {
  return (queryInstance ?? getPublicQueryInstance()).post<
    RefreshTokensResponseType,
    AxiosResponse<RefreshTokensResponseType>,
    never
  >("/auth/refresh");
}
