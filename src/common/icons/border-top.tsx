import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

export default function BorderTopIcon({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("border_top_line", className)}
      {...props}
    />
  );
}
