import { cn } from "@/common/lib/utils";

import { useTheme } from "next-themes";
import { type HTMLAttributes } from "react";

interface LogoProps extends HTMLAttributes<HTMLImageElement> {}

export default function Logo({ className, ...props }: LogoProps) {
  const { resolvedTheme } = useTheme();

  return (
    <img
      src={
        resolvedTheme === "dark" ? "/svg/logo-dark.svg" : "/svg/logo-light.svg"
      }
      alt="Logo"
      className={cn("h-10 min-h-10 w-10 min-w-10", className)}
      {...props}
    />
  );
}
