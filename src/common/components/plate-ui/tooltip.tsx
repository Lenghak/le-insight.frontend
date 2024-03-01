import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { withCn, withProps } from "@udecode/cn";
import React from "react";

export const TooltipProvider = TooltipPrimitive.Provider;
export const Tooltip = TooltipPrimitive.Root;
export const TooltipTrigger = TooltipPrimitive.Trigger;
export const TooltipPortal = TooltipPrimitive.Portal;

export const TooltipContent = withCn(
  withProps(TooltipPrimitive.Content, {
    sideOffset: 4,
  }),
  "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md",
);

export function withTooltip<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  T extends React.ComponentType<any> | keyof HTMLElementTagNameMap,
>(Component: T) {
  return React.forwardRef<
    // @ts-expect-error T cannot satifies the types
    React.ElementRef<T>,
    // @ts-expect-error T cannot satifies the types
    React.ComponentPropsWithoutRef<T> & {
      tooltip?: React.ReactNode;
      tooltipContentProps?: Omit<
        React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
        "children"
      >;
      tooltipProps?: Omit<
        React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Root>,
        "children"
      >;
    }
  >(function ExtendComponent(
    { tooltip, tooltipContentProps, tooltipProps, ...props },
    ref,
  ) {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    const component = (
      // @ts-expect-error astro-dev-* components error in props
      <Component
        ref={ref}
        {...props}
      />
    );

    if (tooltip && mounted) {
      return (
        <Tooltip {...tooltipProps}>
          <TooltipTrigger asChild>{component}</TooltipTrigger>

          <TooltipPortal>
            <TooltipContent {...tooltipContentProps}>{tooltip}</TooltipContent>
          </TooltipPortal>
        </Tooltip>
      );
    }

    return component;
  });
}
