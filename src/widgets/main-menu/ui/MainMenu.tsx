import { EnterIcon, HomeIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/shared/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/shared/ui/navigation-menu";
import { AdminMenu } from "./AdminMenu";
import { MenuItem } from "./MenuItem";

export function MainMenu() {
  return (
    <div className="fixed flex justify-center bottom-0 sm:top-0 z-50 sm:h-9 w-screen bg-sky-400">
      <NavigationMenu>
        <NavigationMenuList>
          <MenuItem
            href="/"
            title="Home"
            icon={<HomeIcon className="scale-125 stroke-2" />}
          />
          <MenuItem
            href="/login"
            title="Log-in"
            icon={<EnterIcon className="scale-125 stroke-2" />}
          />
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className="font-bold">Profile</span>
            </NavigationMenuLink>
          </NavigationMenuItem>
          {<AdminMenu />}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
