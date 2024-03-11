import FileUploadForm from "@/modules/write/components/file-upload-form";
import URLUploadForm from "@/modules/write/components/url-upload-form";
import { EDITOR_IMAGE_DIALOG_ID } from "@/modules/write/constants/dailogs-keys";
import {
  $mediaDialogState,
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
import { Muted } from "@/common/components/ui/muted";
import { Separator } from "@/common/components/ui/separator";

import { useStore } from "@nanostores/react";
import type { PlateEditor } from "@udecode/plate-common";

interface UploadMediaDialogProps {
  trigger?: React.ReactNode;
  editor: PlateEditor;
}

export default function UploadMediaDialog({
  editor,
  trigger,
}: UploadMediaDialogProps) {
  const mediaDialogState = useStore($mediaDialogState);

  return (
    <Dialog
      open={
        mediaDialogState.id === EDITOR_IMAGE_DIALOG_ID &&
        mediaDialogState.isOpen
      }
      onOpenChange={(open) =>
        setMediaDialogState({ id: EDITOR_IMAGE_DIALOG_ID, isOpen: open })
      }
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="w-screen sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold">Upload media</DialogTitle>
          <DialogDescription>
            Drag and Drop the file on the area to upload
          </DialogDescription>
        </DialogHeader>

        <FileUploadForm editor={editor} />

        <div className="grid w-full grid-cols-[1fr,_auto,_1fr] grid-rows-1 items-center justify-center gap-4">
          <Separator
            className="h-[0.5px] w-full"
            orientation="horizontal"
          />
          <Muted>Or</Muted>
          <Separator
            className="h-[0.5px] w-full"
            orientation="horizontal"
          />
        </div>

        <URLUploadForm editor={editor} dialogID={EDITOR_IMAGE_DIALOG_ID} />
      </DialogContent>
    </Dialog>
  );
}
