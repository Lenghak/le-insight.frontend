import { Button } from "@/common/components/ui/button";

import { MoveLeftIcon } from "lucide-react";

export function BackButton() {
  return (
    <Button
      size={"lg"}
      className="items-center gap-2 rounded-full font-bold"
      onClick={() => history.back()}
    >
      <MoveLeftIcon size={18} />
      <span>Go back</span>
    </Button>
  );
}
