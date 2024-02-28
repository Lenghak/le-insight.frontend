import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

export default function BorderBottomIcon({
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn("border_bottom_line", className)}
      {...props}
    />
  );
}
