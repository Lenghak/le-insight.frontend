import { EDITOR_PLUGINS } from "@/modules/write/constants/editor-plugins";


import { FloatingToolbar } from "@/common/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/common/components/plate-ui/floating-toolbar-buttons";
import { TooltipProvider } from "@/common/components/plate-ui/tooltip";

import { Plate } from "@udecode/plate-common";
import { Suspense, lazy } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const initialValue = [
  { type: "h1", children: [{ text: "" }] },
  {
    type: "p",
    children: [{ text: "" }],
  },
];

const Editor = lazy(() => import("@/common/components/plate-ui/editor"))

export default function WriteEditor() {
  return (
    <section className="relative col-span-full mt-14 w-full overflow-y-auto p-4 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/20">
      <TooltipProvider
        disableHoverableContent
        delayDuration={500}
        skipDelayDuration={0}
      >
        <DndProvider backend={HTML5Backend}>
          <Plate
            plugins={EDITOR_PLUGINS}
            initialValue={initialValue}
          >
            <Suspense fallback={<>Loading...</>}>
              <Editor
                className="min-h-full w-full overflow-hidden px-8 pt-12 sm:px-24 md:px-48 lg:px-64"
                variant={"ghost"}
                focusRing={false}
                size={"md"}
                autoFocus
              />
            </Suspense>

            <FloatingToolbar>
              <FloatingToolbarButtons />
            </FloatingToolbar>
          </Plate>
        </DndProvider>
      </TooltipProvider>
    </section>
  );
}
