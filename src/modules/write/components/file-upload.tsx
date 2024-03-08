import { Form } from "@/common/components/ui/form";
import { Input } from "@/common/components/ui/input";
import { Muted } from "@/common/components/ui/muted";

import { cn } from "@/common/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { ImageUpIcon } from "lucide-react";
import type { HTMLAttributes } from "react";
import { useDropzone } from "react-dropzone";
import { useForm } from "react-hook-form";
import { z } from "zod";

type FileUploadFormProps = HTMLAttributes<HTMLFormElement>;

const FileUploadSchema = z.object({});

export default function FileUpload({
  className,
  ...props
}: FileUploadFormProps) {
  const dropzone = useDropzone({
    accept: {
      "image/*": ["*"]
    }
  });
  const form = useForm({
    resolver: zodResolver(FileUploadSchema),
    defaultValues: {},
  });

  return (
    <Form {...form}>
      <form
        className={cn("relative min-h-[20rem] w-full space-y-6", className)}
        {...props}
      >
        {/* {!uploadDraft.fileReadResult ? ( */}
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
              strokeWidth={1.25}
              className={cn(
                "text-primary",
                dropzone.isDragAccept ? "text-success" : "",
                dropzone.isDragReject ? "text-destructive" : "",
                dropzone.isDragActive ? "animate-bounce" : "",
              )}
            />

            <Muted
              className={cn(
                "transition-all max-w-48",
                dropzone.isDragActive ? "hidden" : "",
              )}
            >
              Drop an image here to upload
            </Muted>
          </div>
        </div>
        {/* ) : (
        <FileUploadPreview upload={uploadDraft} />
      )} */}
      </form>
    </Form>
  );
}
