import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={(theme as ToasterProps["theme"]) ?? "system"}
      className="toaster group"
      toastOptions={{
        classNames: {
          default:
            "group group-[.toaster]:bg-default group-[.toaster]:text-foreground",
          warning: "warning group toast group-[.toaster]:text-warning",
          info: "informative group toast group-[.toaster]:text-informative",
          success: "successive group toast group-[.toaster]:text-successive",
          error: "destructive group toast group-[.toaster]:text-destructive",
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:font-sans",
          description:
            "group-[.toast]:text-muted-foreground group-[.toast]:font-medium",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-foreground",
          title: "group-[.toast]:font-bold group-[.toaster]:text-sm",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
