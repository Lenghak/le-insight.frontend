import useSessionService from "@/modules/auth/hooks/use-session-service";
import useSignOutService from "@/modules/auth/hooks/use-sign-out-service";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/common/components/ui/dropdown-menu";

import { CreditCard, Keyboard, LogOut, Settings, User } from "lucide-react";

export default function ProfileDropdown() {
  const { mutate: signOut } = useSignOutService();
  const { data: res } = useSessionService();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage />
          <AvatarFallback>{res?.data?.user?.first_name[0]}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-4 w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem className="py-2">
            <User className="mr-4 h-4 w-4" />
            <span className="font-semibold">Profile</span>
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-2"
            disabled
          >
            <CreditCard className="mr-4 h-4 w-4" />
            <span className="font-semibold">Billing</span>
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem className="py-2">
            <Settings className="mr-4 h-4 w-4" />
            <span className="font-semibold">Settings</span>
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="py-2"
            disabled
          >
            <Keyboard className="mr-4 h-4 w-4" />
            <span className="font-semibold">Keyboard shortcuts</span>
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className="py-2 text-destructive hover:!bg-destructive/5 hover:!text-destructive"
          onClick={() => signOut()}
        >
          <LogOut className="mr-4 h-4 w-4" />
          <span className="font-semibold">Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
