import HeaderMenu from "@/modules/write/components/header-menu";
import { EDITOR_PLUGINS } from "@/modules/write/constants/editor-plugins";

import { Editor } from "@/common/components/plate-ui/editor";
import { FloatingToolbar } from "@/common/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/common/components/plate-ui/floating-toolbar-buttons";
import { TooltipProvider } from "@/common/components/plate-ui/tooltip";

import { Plate } from "@udecode/plate-common";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const initialValue = [
  { type: "h1", children: [{ text: "" }] },
  {
    type: "p",
    children: [{ text: "" }],
  },
];

export default function WriteEditor() {
  // const isCollapsed = useStore($isCollapsed);

  return (
    <section className="relative flex h-full min-h-dvh w-full flex-col items-center overflow-x-hidden transition-all">
      <HeaderMenu className="fixed top-0 z-50 col-span-full w-full max-w-screen-2xl backdrop-blur-md" />

      {/* <SideMenu></SideMenu> */}

      <section className="relative col-span-full mt-14 w-full overflow-y-auto p-4 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/20">
        {/* <Button
          variant={"ghost"}
          size={"icon"}
          className="invisible fixed z-50 transition-all max-md:size-0 md:visible "
          onClick={() => setCollapsed(!isCollapsed)}
        >
          <span className="sr-only">Side Menu Toggle</span>
          <ListTreeIcon className="size-5" />
        </Button> */}

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
      </section>
    </section>
  );
}
