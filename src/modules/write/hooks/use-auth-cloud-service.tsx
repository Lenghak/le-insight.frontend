import usePrivateQueryInstance from "@/common/hooks/api/use-private-query-instance";
import { writeKeys } from "@/modules/write/constants/query-keys";
import getCloudAuthToken from "@/modules/write/services/cloud-auth-api";
import { useQuery } from "@tanstack/react-query";

export default function useAuthCloudService() {

  const queryInstance = usePrivateQueryInstance()

  return useQuery({
    queryKey: [...writeKeys.operation("auth-cloud"), queryInstance],
    queryFn: async () => await getCloudAuthToken(queryInstance),
    retryOnMount: true,
    refetchOnReconnect: true,
    refetchOnMount: true
  })
}