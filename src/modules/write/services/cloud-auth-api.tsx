import type { CloudAuthResponseType } from "@/modules/write/types/cloud-auth-schema";

import { getPublicQueryInstance } from "@/common/stores/api-store";
import type { AxiosInstance, AxiosResponse } from "axios";

export default async function getCloudAuthToken(queryInstance?: AxiosInstance) {
  return (queryInstance ?? getPublicQueryInstance()).get<
    CloudAuthResponseType,
    AxiosResponse<CloudAuthResponseType>,
    never
  >("/articles/cloud");
}
