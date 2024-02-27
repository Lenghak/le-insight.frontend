import { Icon } from "@/common/components/ui/icon";
import { Surface } from "@/common/components/ui/surface";
import { Toolbar } from "@/common/components/ui/toolbar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/common/components/ui/tooltip";

export type LinkPreviewPanelProps = {
  url: string;
  onEdit: () => void;
  onClear: () => void;
};

export const LinkPreviewPanel = ({
  onClear,
  onEdit,
  url,
}: LinkPreviewPanelProps) => {
  return (
    <Surface className="flex items-center gap-2 p-2">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm underline"
      >
        {url}
      </a>
      <Toolbar.Divider />
      <TooltipProvider>
        <Tooltip>
          <Toolbar.Button onClick={onEdit}>
            <Icon name="Pen" />
          </Toolbar.Button>
          <TooltipContent>Edit Link</TooltipContent>
        </Tooltip>
        <Tooltip>
          <Toolbar.Button onClick={onClear}>
            <Icon name="Trash2" />
          </Toolbar.Button>
          <TooltipContent>Remove link</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Surface>
  );
};
