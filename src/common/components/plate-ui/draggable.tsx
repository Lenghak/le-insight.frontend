import { Icons } from "@/common/components/plate-ui/icons";

import { cn, withRef } from "@udecode/cn";
import {
  type ClassNames,
  type PlateElementProps,
  type TEditor,
} from "@udecode/plate-common";
import {
  useDraggable,
  useDraggableState,
  type DragItemNode,
} from "@udecode/plate-dnd";
import { type DropTargetMonitor } from "react-dnd";

import { Button } from "./button";
import { InsertDropdownMenu } from "./insert-dropdown-menu";
import { Toolbar } from "./toolbar";
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip";

export interface DraggableProps
  extends PlateElementProps,
  ClassNames<{
    /**
     * Block and gutter.
     */
    blockAndGutter: string;

    /**
     * Block.
     */
    block: string;

    /**
     * Gutter at the left side of the editor.
     * It has the height of the block
     */
    gutterLeft: string;

    /**
     * Block toolbar wrapper in the gutter left.
     * It has the height of a line of the block.
     */
    blockToolbarWrapper: string;

    /**
     * Block toolbar in the gutter.
     */
    blockToolbar: string;

    blockWrapper: string;

    /**
     * Button to dnd the block, in the block toolbar.
     */
    dragHandle: string;

    /**
     * Icon of the drag button, in the drag icon.
     */
    dragIcon: string;

    /**
     * Show a dropline above or below the block when dragging a block.
     */
    dropLine: string;
  }> {
  /**
   * Intercepts the drop handling.
   * If `false` is returned, the default drop behavior is called after.
   * If `true` is returned, the default behavior is not called.
   */
  onDropHandler?: (
    editor: TEditor,
    props: {
      monitor: DropTargetMonitor<DragItemNode, unknown>;
      dragItem: DragItemNode;
      nodeRef: string;
      id: string;
    },
  ) => boolean;
}

const dragHandle = (
  <Tooltip>
    <TooltipTrigger asChild>
      <Button
        size={"sms"}
        variant={"ghost"}
      >
        <Icons.dragHandle className="h-4 w-4 text-muted-foreground" />
      </Button>
    </TooltipTrigger>
    <TooltipContent className="font-medium">Drag to move</TooltipContent>
  </Tooltip>
);

export const Draggable = withRef<"div", DraggableProps>(
  ({ className, classNames = {}, onDropHandler, children, ...props }, ref) => {
    const { element } = props;

    const state = useDraggableState({ element, onDropHandler });
    const { dropLine, isDragging } = state;
    const {
      groupProps,
      droplineProps,
      gutterLeftProps,
      previewRef,
      handleRef,
    } = useDraggable(state);

    return (
      <div
        ref={ref}
        className={cn(
          "relative",
          isDragging && "opacity-50",
          "group",
          className,
        )}
        {...groupProps}
      >
        <div
          className={cn(
            "pointer-events-none absolute top-0 flex h-full -translate-x-full cursor-text opacity-0 group-hover:opacity-100",
            classNames.gutterLeft,
          )}
          {...gutterLeftProps}
        >
          <div className={cn("flex h-[1.5em]", classNames.blockToolbarWrapper)}>
            <div
              className={cn(
                "pointer-events-auto mr-1 flex items-center space-x-1",
                classNames.blockToolbar,
              )}
            >

              <Toolbar>
                <InsertDropdownMenu triggerClassName="text-muted-foreground" isDropdown={false} />
              </Toolbar>

              <div
                ref={handleRef}
                className="pr-2"
              >
                {dragHandle}
              </div>
            </div>
          </div>
        </div>

        <div
          className={classNames.blockWrapper}
          ref={previewRef}
        >
          {children}

          {!!dropLine && (
            <div
              className={cn(
                "absolute inset-x-0 h-0.5 opacity-100",
                "bg-ring",
                dropLine === "top" && "-top-px",
                dropLine === "bottom" && "-bottom-px",
                classNames.dropLine,
              )}
              {...droplineProps}
            />
          )}
        </div>
      </div>
    );
  },
);
