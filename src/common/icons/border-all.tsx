import { cn } from "@/common/lib/utils";
import type { HTMLAttributes } from "react";

export default function BorderAllIcon({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("border_all_line", className)}
      {...props}
    />
  );
}
