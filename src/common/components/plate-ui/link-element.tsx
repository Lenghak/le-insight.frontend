import { cn, withRef } from "@udecode/cn";
import { PlateElement, useElement } from "@udecode/plate-common";
import { type TLinkElement, useLink } from "@udecode/plate-link";

export const LinkElement = withRef<typeof PlateElement>(
  ({ className, children, ...props }, ref) => {
    const element = useElement<TLinkElement>();
    const { props: linkProps } = useLink({ element });

    return (
      // @ts-expect-error cannot assign two types of elements event listeners to PlateElement
      <PlateElement
        ref={ref}
        asChild
        className={cn(
          "font-medium text-primary underline decoration-primary underline-offset-4",
          className,
        )}
        {...linkProps}
        {...props}
      >
        <a>{children}</a>
      </PlateElement>
    );
  },
);
