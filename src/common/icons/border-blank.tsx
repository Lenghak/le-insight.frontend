import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

export default function BorderBlankIcon({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("border_blank_line", className)}
      {...props}
    />
  );
}
