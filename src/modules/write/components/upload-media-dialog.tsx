import {
  $isMediaDialogOpen,
  setMediaDialogState,
} from "@/modules/write/stores/upload-dialog-store";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/common/components/plate-ui/dialog";
import { Button } from "@/common/components/ui/button";

import { useStore } from "@nanostores/react";

interface UploadMediaDialogProps {
  onSubmit: (value: File | string) => unknown
}

export default function UploadMediaDialog({ }: UploadMediaDialogProps) {
  const isMediaDialogOpen = useStore($isMediaDialogOpen);

  return (
    <Dialog
      modal={true}
      open={isMediaDialogOpen}
      onOpenChange={(open) => setMediaDialogState(open)}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Upload media</DialogTitle>
          <DialogDescription>
            Drag and Drop the file on the area to upload
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <Button type="submit">Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
