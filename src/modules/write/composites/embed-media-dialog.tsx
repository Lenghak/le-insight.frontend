import { EDITOR_MEDIA_DIALOG_ID } from "@/modules/write/constants/dailogs-keys";
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

import URLUploadForm from "@/modules/write/components/url-upload-form";
import { useStore } from "@nanostores/react";
import type { PlateEditor } from "@udecode/plate-common";

interface EmbedMediaDialogProps {
  trigger?: React.ReactNode;
  editor: PlateEditor;
}

export default function EmbedMediaDialog({
  editor,
  trigger,
}: EmbedMediaDialogProps) {
  const mediaDialogState = useStore($mediaDialogState);


  return (
    <Dialog
      open={
        mediaDialogState.id === EDITOR_MEDIA_DIALOG_ID &&
        mediaDialogState.isOpen
      }
      onOpenChange={(open) =>
        setMediaDialogState({ id: EDITOR_MEDIA_DIALOG_ID, isOpen: open })
      }
    >
      {trigger && <DialogTrigger asChild>{trigger}</DialogTrigger>}
      <DialogContent className="w-screen sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-bold">Embed Media</DialogTitle>
          <DialogDescription>
            Copy and paste the media url in the box to embed
          </DialogDescription>
        </DialogHeader>

        <URLUploadForm editor={editor} dialogID={EDITOR_MEDIA_DIALOG_ID} hideLabel />
      </DialogContent>
    </Dialog>
  );
}
