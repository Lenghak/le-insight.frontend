import { Skeleton } from "@/common/components/ui/skeleton";

export default function ProfileSkeleton() {
  return (
    <div className={"flex items-center gap-2"}>
      <Skeleton className="size-16 rounded-full" />
      <div className="flex flex-col justify-between gap-2">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-24" />
      </div>
    </div>
  );
}
