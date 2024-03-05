import { getPublicQueryInstance } from "@/common/stores/api-store";
import type { AxiosInstance, AxiosResponse } from "axios";

export default async function postSignOut(queryInstance?: AxiosInstance
) {
  return (queryInstance ?? getPublicQueryInstance()).post<unknown, AxiosResponse<unknown>, never>("/auth/sign-out");
}
