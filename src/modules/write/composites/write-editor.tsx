import { EDITOR_PLUGINS } from "@/modules/write/constants/editor-plugins";

import HeaderMenu from "@/modules/write/components/header-menu";
import { Plate } from "@udecode/plate-common";
import { Suspense, lazy } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import EditorSkeletons from "./editor-skeleton";

const initialValue = [
  { type: "h1", children: [{ text: "" }] },
  {
    type: "p",
    children: [{ text: "" }],
  },
];

const TooltipProvider = lazy(() => import("@/common/components/plate-ui/tooltip").then(module => ({ default: module.TooltipProvider })));
const FloatingToolbarButtons = lazy(() => import("@/common/components/plate-ui/floating-toolbar-buttons").then(module => ({ default: module.FloatingToolbarButtons })));
const FloatingToolbar = lazy(() => import("@/common/components/plate-ui/floating-toolbar").then(module => ({ default: module.FloatingToolbar })));
const Editor = lazy(() => import("@/common/components/plate-ui/editor").then(module => ({ default: module.Editor })))

export default function WriteEditor() {
  return (
    <section className="col-span-full mt-14 w-full overflow-y-auto p-4 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/20 max-w-screen-xl">
      <Suspense fallback={<EditorSkeletons />}>
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
              <HeaderMenu
                className="fixed top-0 z-50 col-span-full w-full max-w-screen-xl backdrop-blur-md"
              />

              <Editor
                className="min-h-full w-full overflow-hidden px-8 pt-12 sm:px-24 md:px-48 lg:px-64"
                variant={"ghost"}
                focusRing={false}
                size={"md"}
                autoFocus
              />

              <FloatingToolbar>
                <FloatingToolbarButtons />
              </FloatingToolbar>
            </Plate>
          </DndProvider>
        </TooltipProvider>
      </Suspense>
    </section >
  );
}
