import ProfileDropdown from "@/common/components/profile";
import { Button } from "@/common/components/ui/button";
import { Separator } from "@/common/components/ui/separator";

import { cn } from "@/common/lib/utils";

import type { HTMLAttributes } from "react";

interface HeaderMenuProps extends HTMLAttributes<HTMLDivElement> { }

// million-ignore
export default function HeaderMenu({ className, ...props }: HeaderMenuProps) {
  return (
    <section
      className={cn(
        className,
        "flex min-h-16 items-center justify-between gap-4 px-4 transition-all",
      )}
      {...props}
    >
      <Button variant={"outline"} onClick={() => window.history.back()} className="bg-card font-semibold">
        Cancel
      </Button>

      <div className="flex w-fit items-center justify-end gap-4 pl-4">
        <Button
          variant={"outline"}
          className="bg-card font-semibold"
        >
          Preview
        </Button>

        <Button className="font-semibold">Publish</Button>

        <Separator className="h-4 w-[1px]" />

        <ProfileDropdown />
      </div>
    </section>
  );
}
