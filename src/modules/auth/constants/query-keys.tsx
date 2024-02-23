export const authKeys = {
  all: ["auth"] as const,
  operations: () => [...authKeys.all, "operation"] as const,
  operation: (
    operator:
      | "sign-up"
      | "sign-in"
      | "reset-password"
      | "forgot-password"
      | "verify-email",
  ) => [...authKeys.operations(), operator] as const,
};
