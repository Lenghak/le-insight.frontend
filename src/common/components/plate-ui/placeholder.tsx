import { cn } from "@udecode/cn";
import {
  createNodeHOC,
  createNodesHOC,
  usePlaceholderState,
  type PlaceholderProps,
} from "@udecode/plate-common";
import { ELEMENT_H1 } from "@udecode/plate-heading";
import { ELEMENT_PARAGRAPH } from "@udecode/plate-paragraph";
import React from "react";

export const Placeholder = (props: PlaceholderProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { children, placeholder, nodeProps } = props;

  const { enabled } = usePlaceholderState(props);

  return React.Children.map(children, (child) => {
    return React.cloneElement(child as React.ReactElement, {
      className: (
        (child as React.ReactElement)?.props as Record<string, unknown>
      ).className as string,
      nodeProps: {
        ...nodeProps,
        className: cn(
          enabled &&
          "before:absolute before:cursor-text before:opacity-30 before:content-[attr(placeholder)]",
        ),
        placeholder,
      },
    });
  }) as React.ReactNode;
};

export const withPlaceholder = createNodeHOC(Placeholder);
export const withPlaceholdersPrimitive = createNodesHOC(Placeholder);

export const withPlaceholders = (components: unknown) =>
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  withPlaceholdersPrimitive(components, [
    {
      key: ELEMENT_PARAGRAPH,
      placeholder: "Describe your paragraph with some context",
      hideOnBlur: true,
      query: {
        maxLevel: 1,
      },
    },
    {
      key: ELEMENT_H1,
      placeholder: "What is the title?",
      hideOnBlur: false,
      query: { maxLevel: 1 },
    },
  ]);
