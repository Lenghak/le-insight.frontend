import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

export default function BorderRightIcon({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("border_right_line", className)}
      {...props}
    />
  );
}
