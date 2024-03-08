export const writeKeys = {
  all: ["write"] as const,
  operations: () => [...writeKeys.all, "operation"] as const,
  operation: (
    operator: "auth-cloud"
  ) => [...writeKeys.operations(), operator] as const,
};
