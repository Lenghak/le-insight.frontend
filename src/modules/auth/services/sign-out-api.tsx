import { queryInstance } from "@/common/stores/api-store";

export default async function postSignOut() {
  return queryInstance.post("/auth/sign-out");
}
