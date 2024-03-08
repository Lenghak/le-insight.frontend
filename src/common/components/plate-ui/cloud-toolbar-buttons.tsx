import { Button } from "@/common/components/ui/button";

import { type PlateCloudEditor } from "@udecode/plate-cloud";
import { useEditorRef, type Value } from "@udecode/plate-common";

export function CloudToolbarButtons() {
  const editor = useEditorRef<Value, PlateCloudEditor>();
  // const getSaveValue = () => {
  //   console.info("editor.children", editor.children);
  //   console.info("editor.cloud.getSaveValue()", editor.cloud.getSaveValue());
  // };

  const finishUploads = async () => {
    await editor.cloud.finishUploads();
  };

  return (
    <>
      <Button
        type="button"
        variant={"outline"}
        className="bg-card font-semibold"
        onClick={() => console.debug(JSON.stringify(editor.cloud.getSaveValue()))}
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
