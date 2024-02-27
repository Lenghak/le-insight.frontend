import { Icons } from "@/common/components/ui/icons";

import BorderAllIcon from "@/common/icons/border-all";
import BorderBlankIcon from "@/common/icons/border-blank";
import BorderBottom from "@/common/icons/border-bottom";
import BorderLeftIcon from "@/common/icons/border-left";
import BorderRightIcon from "@/common/icons/border-right";
import BorderTopIcon from "@/common/icons/border-top";
import type * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { PopoverAnchor } from "@radix-ui/react-popover";
import { cn, withRef } from "@udecode/cn";
import {
  isSelectionExpanded,
  PlateElement,
  useEditorRef,
  useEditorSelector,
  useElement,
  useRemoveNodeButton,
  withHOC,
} from "@udecode/plate-common";
import {
  mergeTableCells,
  TableProvider,
  type TTableElement,
  unmergeTableCells,
  useTableBordersDropdownMenuContentState,
  useTableElement,
  useTableElementState,
  useTableMergeState,
} from "@udecode/plate-table";
import { useReadOnly, useSelected } from "slate-react";

import { Button } from "./button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { Popover, PopoverContent, popoverVariants } from "./popover";
import { Separator } from "./separator";

export const TableBordersDropdownMenuContent = withRef<
  typeof DropdownMenuPrimitive.Content
>((props, ref) => {
  const {
    getOnSelectTableBorder,
    hasOuterBorders,
    hasBottomBorder,
    hasLeftBorder,
    hasNoBorders,
    hasRightBorder,
    hasTopBorder,
  } = useTableBordersDropdownMenuContentState();

  return (
    <DropdownMenuContent
      ref={ref}
      className={cn("min-w-[220px]")}
      side="right"
      align="start"
      sideOffset={0}
      {...props}
    >
      <DropdownMenuCheckboxItem
        checked={hasBottomBorder}
        onCheckedChange={getOnSelectTableBorder("bottom")}
      >
        <BorderBottom className="size-3" />
        <div>Bottom Border</div>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={hasTopBorder}
        onCheckedChange={getOnSelectTableBorder("top")}
      >
        <BorderTopIcon className="size-3" />
        <div>Top Border</div>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={hasLeftBorder}
        onCheckedChange={getOnSelectTableBorder("left")}
      >
        <BorderLeftIcon className="size-3" />
        <div>Left Border</div>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={hasRightBorder}
        onCheckedChange={getOnSelectTableBorder("right")}
      >
        <BorderRightIcon className="size-3" />
        <div>Right Border</div>
      </DropdownMenuCheckboxItem>

      <Separator />

      <DropdownMenuCheckboxItem
        checked={hasNoBorders}
        onCheckedChange={getOnSelectTableBorder("none")}
      >
        <BorderBlankIcon className="size-3" />
        <div>No Border</div>
      </DropdownMenuCheckboxItem>
      <DropdownMenuCheckboxItem
        checked={hasOuterBorders}
        onCheckedChange={getOnSelectTableBorder("outer")}
      >
        <BorderAllIcon className="size-3" />
        <div>Outside Borders</div>
      </DropdownMenuCheckboxItem>
    </DropdownMenuContent>
  );
});

export const TableFloatingToolbar = withRef<typeof PopoverContent>(
  ({ children, ...props }, ref) => {
    const element = useElement<TTableElement>();
    const { props: buttonProps } = useRemoveNodeButton({ element });

    const selectionCollapsed = useEditorSelector(
      (editor) => !isSelectionExpanded(editor),
      [],
    );

    const readOnly = useReadOnly();
    const selected = useSelected();
    const editor = useEditorRef();

    const collapsed = !readOnly && selected && selectionCollapsed;
    const open = !readOnly && selected;

    const { canMerge, canUnmerge } = useTableMergeState();

    const mergeContent = canMerge && (
      <Button
        contentEditable={false}
        variant="ghost"
        isMenu
        onClick={() => mergeTableCells(editor)}
      >
        <Icons
          name="Group"
          className="mr-2 h-4 w-4"
        />
        Merge
      </Button>
    );

    const unmergeButton = canUnmerge && (
      <Button
        contentEditable={false}
        variant="ghost"
        isMenu
        onClick={() => unmergeTableCells(editor)}
      >
        <Icons
          name="Ungroup"
          className="mr-2 h-4 w-4"
        />
        Unmerge
      </Button>
    );

    const bordersContent = collapsed && (
      <>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              isMenu
            >
              <BorderAllIcon className="mr-2 h-4 w-4" />
              Borders
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuPortal>
            <TableBordersDropdownMenuContent />
          </DropdownMenuPortal>
        </DropdownMenu>

        <Button
          contentEditable={false}
          variant="ghost"
          isMenu
          {...buttonProps}
        >
          <Icons
            name="Delete"
            className="mr-2 h-4 w-4"
          />
          Delete
        </Button>
      </>
    );

    return (
      <Popover
        open={open}
        modal={false}
      >
        <PopoverAnchor asChild>{children}</PopoverAnchor>
        {(canMerge || canUnmerge || collapsed) && (
          <PopoverContent
            ref={ref}
            className={cn(
              popoverVariants(),
              "flex w-[220px] flex-col gap-1 p-1",
            )}
            onOpenAutoFocus={(e) => e.preventDefault()}
            {...props}
          >
            {unmergeButton}
            {mergeContent}
            {bordersContent}
          </PopoverContent>
        )}
      </Popover>
    );
  },
);

export const TableElement = withHOC(
  TableProvider,
  withRef<typeof PlateElement>(({ className, children, ...props }, ref) => {
    const { colSizes, isSelectingCell, minColumnWidth, marginLeft } =
      useTableElementState();
    const { props: tableProps, colGroupProps } = useTableElement();

    return (
      <TableFloatingToolbar>
        <div style={{ paddingLeft: marginLeft }}>
          <PlateElement
            ref={ref}
            asChild
            className={cn(
              "my-4 ml-px mr-0 table h-px w-full table-fixed border-collapse",
              isSelectingCell && "[&_*::selection]:bg-none",
              className,
            )}
            {...tableProps}
            {...props}
          >
            <table>
              <colgroup {...colGroupProps}>
                {colSizes.map((width, index) => (
                  <col
                    key={index}
                    style={{
                      minWidth: minColumnWidth,
                      width: width || undefined,
                    }}
                  />
                ))}
              </colgroup>

              <tbody className="min-w-full">{children}</tbody>
            </table>
          </PlateElement>
        </div>
      </TableFloatingToolbar>
    );
  }),
);
