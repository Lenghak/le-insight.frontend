import { getPublicQueryInstance } from "@/common/stores/api-store";
import type { Session } from "@auth/core/types";

export default async function getSession() {
  return getPublicQueryInstance().get<Session | null>("/api/auth/session", { baseURL: "/" })
}