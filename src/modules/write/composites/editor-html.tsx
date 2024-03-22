import { EDITOR_PLUGINS } from "@/modules/write/constants/editor-plugins";
import { $editorContent } from "@/modules/write/stores/editor-store";

import { TooltipProvider } from "@/common/components/plate-ui/tooltip";

import { createPlateEditor } from "@udecode/plate-common";
import { serializeHtml } from "@udecode/plate-serializer-html";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const editor = createPlateEditor({ plugins: EDITOR_PLUGINS });

const HTML = () => {
  serializeHtml(editor, {
    nodes: $editorContent.get(),
    dndWrapper: (props) => (
      <TooltipProvider>
        <DndProvider
          backend={HTML5Backend}
          {...props}
        />
      </TooltipProvider>
    ),
    convertNewLinesToHtmlBr: true,
  });
};

export default HTML;
