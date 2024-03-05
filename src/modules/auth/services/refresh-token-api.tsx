import { getPublicQueryInstance } from "@/common/stores/api-store";
import type { AxiosInstance, AxiosResponse } from "axios";
import type { RefreshTokensResponseType } from "../types/refresh-token-schema";

export default async function postRefreshToken(queryInstance?: AxiosInstance) {
  return (queryInstance ?? getPublicQueryInstance()).post<
    RefreshTokensResponseType,
    AxiosResponse<RefreshTokensResponseType>,
    never
  >("/auth/refresh");
}
