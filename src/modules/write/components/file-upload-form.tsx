import useFileUploadHandler from "@/modules/write/hooks/use-file-upload-handler";

import { Button } from "@/common/components/ui/button";
import { Form } from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { Muted } from "@/common/components/ui/muted";
import { Separator } from "@/common/components/ui/separator";

import { cn } from "@/common/lib/utils";

import { EDITOR_IMAGE_DIALOG_ID } from "@/modules/write/constants/dailogs-keys";
import type { PlateEditor } from "@udecode/plate-common";
import { ImageUpIcon } from "lucide-react";
import type { HTMLAttributes } from "react";

type FileUploadFormProps = HTMLAttributes<HTMLFormElement> & {
  editor: PlateEditor;
};

export default function FileUploadForm({
  editor,
  className,
  ...props
}: FileUploadFormProps) {
  const { dropzone, form } = useFileUploadHandler({ editor, dialogID: EDITOR_IMAGE_DIALOG_ID });

  return (
    <Form {...form}>
      <form
        className={cn("relative min-h-[20rem] w-full space-y-6", className)}
        {...props}
      >
        <div
          className={cn(
            "group relative flex h-full w-full items-center justify-center rounded-md border-2 border-dashed border-border border-opacity-50 p-6 hover:border-opacity-100 focus-visible:border-opacity-100 focus-visible:outline-0",
            dropzone.isDragAccept ? "border-success hover:border-success" : "",
            dropzone.isDragReject
              ? "cursor-not-allowed border-destructive hover:border-destructive"
              : "",
          )}
          {...dropzone.getRootProps()}
        >
          <Input
            type="file"
            name="files"
            {...dropzone.getInputProps()}
          />

          <div
            className={
              "flex h-full w-full flex-col items-center justify-center gap-4 text-center"
            }
          >
            <ImageUpIcon
              size={56}
              strokeWidth={1}
              className={cn(
                "text-muted-foreground",
                dropzone.isDragAccept ? "text-success" : "",
                dropzone.isDragReject ? "text-destructive" : "",
                dropzone.isDragActive ? "animate-bounce" : "",
              )}
            />

            <Muted
              className={cn(
                "transition-all max-w-56",
                dropzone.isDragActive ? "hidden" : "",
              )}
            >
              Drop an drop an image file here to upload
            </Muted>

            <div className="flex w-full items-center justify-center gap-4">
              <Separator
                className="w-full max-w-10"
                orientation="horizontal"
              />
              <Muted>Or</Muted>
              <Separator
                className="w-full max-w-10"
                orientation="horizontal"
              />
            </div>

            <Button
              onClick={(e) => {
                e.stopPropagation();
                dropzone.open();
              }}
              type="button"
              className="font-semibold rounded-lg"
            >
              Browse File
            </Button>
          </div>
        </div>

      </form>
    </Form>
  );
}
