import { writeKeys } from "@/modules/write/constants/query-keys";
import getCloudAuthToken from "@/modules/write/services/cloud-auth-api";
import { useQuery } from "@tanstack/react-query";

export default function useAuthCloudService() {
  return useQuery({
    queryKey: writeKeys.operation("auth-cloud"),
    queryFn: async () => await getCloudAuthToken(),
    retryOnMount: true,
    refetchOnReconnect: true,
    refetchOnMount: true
  })
}