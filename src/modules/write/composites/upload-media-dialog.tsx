import FileUpload from "@/modules/write/components/file-upload";
import {
  $isMediaDialogOpen,
  setMediaDialogState,
} from "@/modules/write/stores/upload-dialog-store";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/common/components/ui/dialog";

import { useStore } from "@nanostores/react";

interface UploadMediaDialogProps {
  onSubmit: (value: File | string) => unknown;
  trigger?: React.ReactNode;
}

export default function UploadMediaDialog({ trigger }: UploadMediaDialogProps) {
  const isMediaDialogOpen = useStore($isMediaDialogOpen);

  return (
    <Dialog
      open={isMediaDialogOpen}
      onOpenChange={(open) => setMediaDialogState(open)}
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold">Upload media</DialogTitle>
          <DialogDescription>
            Drag and Drop the file on the area to upload
          </DialogDescription>
        </DialogHeader>

        <FileUpload />
      </DialogContent>
    </Dialog>
  );
}
