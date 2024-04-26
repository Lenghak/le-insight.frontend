import { useTheme } from "next-themes";
import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={(theme as ToasterProps["theme"]) ?? "system"}
      className="toaster group"
      closeButton={false}
      toastOptions={{
        classNames: {
          default:
            "bg-default group toast text-foreground group-[.toaster]:border-2 border-primary rounded-xl",
          warning:
            "warning group toast group-[.toaster]:text-warning group-[.toaster]:border-warning",
          info: "informative group toast group-[.toaster]:text-informative group-[.toaster]:border-informative",
          success:
            "successive group toast group-[.toaster]:text-successive group-[.toaster]:border-successive",
          error:
            "destructive group toast group-[.toaster]:text-destructive group-[.toaster]:border-destructive",
          toast:
            "group toast group-[.toaster]:bg-card group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:font-sans",
          description:
            "group-[.toast]:text-muted-foreground group-[.toast]:font-medium",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-foreground",
          title: "group-[.toast]:font-bold",
          closeButton:
            "group-[.toaster]:left-[95%] group-[.toaster]:-top-1 group-[.toaster]:bg-card group-[.toaster]:border-2 [&>svg]:stroke-[3] group-[.successive]:border-successive group-[.warning]:border-warning group-[.informative]:border-informative group-[.destructive]:border-destructive",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
