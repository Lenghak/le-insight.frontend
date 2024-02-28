import HeaderMenu from "@/modules/write/components/header-menu";
import { EDITOR_PLUGINS } from "@/modules/write/constants/editor-plugins";

import { Editor } from "@/common/components/plate-ui/editor";
import { FloatingToolbar } from "@/common/components/plate-ui/floating-toolbar";
import { FloatingToolbarButtons } from "@/common/components/plate-ui/floating-toolbar-buttons";
import { TooltipProvider } from "@/common/components/plate-ui/tooltip";

import { Plate } from "@udecode/plate-common";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function WriteEditor() {
  // const isCollapsed = useStore($isCollapsed);

  return (
    <section className="grid h-full min-h-dvh w-full grid-cols-[auto_1fr] grid-rows-[auto_1fr] divide-y overflow-x-hidden transition-all">
      <HeaderMenu className="col-span-full" />

      {/* <SideMenu></SideMenu> */}

      <section className="relative z-50 col-span-full w-full overflow-y-auto p-4 [&_.slate-selection-area]:border [&_.slate-selection-area]:border-primary [&_.slate-selection-area]:bg-primary/20">
        {/* <Button
          variant={"ghost"}
          size={"icon"}
          className="invisible fixed z-50 transition-all max-md:size-0 md:visible "
          onClick={() => setCollapsed(!isCollapsed)}
        >
          <span className="sr-only">Side Menu Toggle</span>
          <ListTreeIcon className="size-5" />
        </Button> */}

        <TooltipProvider>
          <DndProvider backend={HTML5Backend}>
            <Plate plugins={EDITOR_PLUGINS}>
              <Editor
                className="mt-12 min-h-full w-full px-48"
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
