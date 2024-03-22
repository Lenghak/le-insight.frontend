import { Button } from "@/common/components/ui/button";

import { type PlateCloudEditor } from "@udecode/plate-cloud";
import { useEditorRef, type Value } from "@udecode/plate-common";

export function CloudToolbarButtons() {
  const editor = useEditorRef<Value, PlateCloudEditor>();

  const finishUploads = async () => {
    await editor.cloud.finishUploads();
  };

  return (
    <>
      <Button
        type="button"
        variant={"outline"}
        className="bg-card font-semibold"
        onClick={async () => {
          await finishUploads()
          console.log(editor.cloud.getSaveValue())
        }}
      >
        Save as draft
      </Button>

      <Button
        type="button"
        className="font-semibold"
        onClick={finishUploads}
      >
        Publish
      </Button>
    </>
  );
}
