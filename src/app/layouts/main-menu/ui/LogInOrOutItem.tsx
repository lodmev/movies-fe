import { EnterIcon, ExitIcon } from "@radix-ui/react-icons";
import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { cn } from "@/shared/lib";
import { navigationMenuTriggerStyle } from "@/shared/ui/navigation-menu";
import { useUserQuery } from "../lib";
import { MenuItem } from "./MenuItem";
export function LogInOrOutItem() {
  const { user, logout } = useUserQuery();
  return !user ? (
    <MenuItem
      href="/login"
      title="Log-in"
      icon={<EnterIcon className="scale-125 stroke-2" />}
    />
  ) : (
    <NavigationMenuItem>
      <NavigationMenuLink
        onClick={() => {
          logout();
        }}
        className={cn("cursor-pointer", navigationMenuTriggerStyle())}
      >
        <div className="flex gap-1 justify-center items-center">
          <ExitIcon className="scale-125 stroke-2" />
          <span className="font-bold hidden sm:block">Log-out</span>
        </div>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
