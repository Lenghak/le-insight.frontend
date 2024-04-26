import { authKeys } from "@/modules/auth/constants/query-keys";
import getSession from "@/modules/auth/services/session-api";

import { $queryClient } from "@/common/stores/api-store";
import { useStore } from "@nanostores/react";
import { useQuery } from "@tanstack/react-query";

export default function useSessionService() {
  const queryClient = useStore($queryClient);
  return useQuery(
    {
      queryKey: authKeys.operation("session"),
      queryFn: async () => await getSession(),
    },
    queryClient,
  );
}
