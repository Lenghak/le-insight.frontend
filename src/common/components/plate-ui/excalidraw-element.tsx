import { withRef } from '@udecode/cn';
import { PlateElement } from '@udecode/plate-common';
import { useExcalidrawElement } from '@udecode/plate-excalidraw';

export const ExcalidrawElement = withRef<typeof PlateElement>(
  ({ nodeProps, children, ...props }, ref) => {
    const { element } = props;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { Excalidraw, excalidrawProps } = useExcalidrawElement({
      element,
    });

    return (
      <PlateElement ref={ref} {...props}>
        <div contentEditable={false}>
          <div className="h-[600px]">
            {Excalidraw && (
              <Excalidraw {...nodeProps} {...(excalidrawProps)} />
            )}
          </div>
        </div>
        {children}
      </PlateElement>
    );
  }
);
