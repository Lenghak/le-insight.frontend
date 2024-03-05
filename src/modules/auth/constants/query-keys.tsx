export const authKeys = {
  all: ["auth"] as const,
  operations: () => [...authKeys.all, "operation"] as const,
  operation: (
    operator:
      | "sign-up"
      | "sign-in"
      | "sign-out"
      | "reset-password"
      | "forgot-password"
      | "verify-email"
      | "refresh"
      | "session"
  ) => [...authKeys.operations(), operator] as const,
};
