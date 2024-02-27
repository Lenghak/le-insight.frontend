import { $isCollapsed } from "@/modules/write/stores/side-menu-store";

import { cn } from "@/common/lib/utils";

import { useStore } from "@nanostores/react";
import type { HTMLAttributes } from "react";

interface SideMenuProps extends HTMLAttributes<HTMLDivElement> {}

export default function SideMenu({
  children,
  className,
  ...props
}: SideMenuProps) {
  const isCollapsed = useStore($isCollapsed);

  return (
    <section
      className={cn(
        "relative w-0 overflow-hidden py-4 transition-all ease-linear md:w-56 md:px-4",
        isCollapsed && "w-0 md:w-0 md:px-0",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
