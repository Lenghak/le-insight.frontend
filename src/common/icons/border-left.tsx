import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

export default function BorderLeftIcon({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("border_left_line", className)}
      {...props}
    />
  );
}
