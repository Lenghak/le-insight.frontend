import { Skeleton } from "@/common/components/ui/skeleton";
import { cn } from "@/common/lib/utils";
import { For } from 'million/react';

export default function EditorSkeletons() {
  return <div className="min-h-full space-y-16 w-full overflow-hidden px-8 pt-12 sm:px-24 md:px-48 lg:px-64">
    {/* title */}
    <div className="flex flex-col gap-4">
      <Skeleton className="w-full h-12" />
      <Skeleton className="w-3/4 h-4" />
      <Skeleton className="w-2/3 h-4" />
    </div>

    <div className="flex flex-col gap-4">
      <Skeleton className="h-[30dvh] w-full aspect-video" />
    </div>

    <div className="flex flex-col gap-4">
      <For each={Array(3)} memo>
        {(_, index) => <Skeleton className={cn(`w-1/${index + 2} h-4`)} />}
      </For>
    </div>
  </div>;
}
