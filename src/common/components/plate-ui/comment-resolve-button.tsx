import { Icons } from "@/common/components/ui/icons";

import { cn } from "@udecode/cn";
import {
  CommentResolveButton as CommentResolveButtonPrimitive,
  useComment,
} from "@udecode/plate-comments";

import { buttonVariants } from "./button";

export function CommentResolveButton() {
  const comment = useComment()!;

  return (
    <CommentResolveButtonPrimitive
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "h-6 p-1 text-muted-foreground",
      )}
    >
      {comment.isResolved ? (
        <Icons
          name="RefreshCcw"
          className="h-4 w-4"
        />
      ) : (
        <Icons
          name="Check"
          className="h-4 w-4"
        />
      )}
    </CommentResolveButtonPrimitive>
  );
}
