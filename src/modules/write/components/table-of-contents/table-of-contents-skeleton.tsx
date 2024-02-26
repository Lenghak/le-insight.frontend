import { Skeleton } from "@/common/components/ui/skeleton";

import { Fragment } from "react";

export default function TableOfContentsSkeleton() {
  return (
    <Fragment>
      <Skeleton className="mb-4 h-4 w-full" />

      <div className="flex flex-col gap-4">
        {Array({ length: 5 }).map((_, index) => (
          <Skeleton
            key={index}
            className="h-4"
          />
        ))}
      </div>
    </Fragment>
  );
}
