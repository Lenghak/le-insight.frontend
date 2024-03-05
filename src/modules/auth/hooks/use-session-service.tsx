import { queryClient } from "@/common/stores/api-store";
import { authKeys } from "@/modules/auth/constants/query-keys";
import getSession from "@/modules/auth/services/session-api";
import { useQuery } from "@tanstack/react-query";

export default function useSessionService() {
  return useQuery({
    queryKey: authKeys.operation("session"),
    queryFn: async () => await getSession()
  }, queryClient)
}