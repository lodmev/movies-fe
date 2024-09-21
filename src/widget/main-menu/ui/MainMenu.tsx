import { HomeIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ReactNode } from "react";
import { navigationMenuTriggerStyle } from "@/shared/ui/navigation-menu";
import { MenuItem } from "./MenuItem";
type Props = {
  adminMenu?: ReactNode;
};
export function MainMenu({ adminMenu }: Props) {
  return (
    <NavigationMenu className=" fixed bottom-0 sm:top-0 z-50 sm:h-9 w-screen">
      <NavigationMenuList className="bg-sky-400 flex justify-center">
        <MenuItem
          href="/"
          title="Home"
          icon={<HomeIcon className="scale-125 stroke-2" />}
        />
        <MenuItem href="/login" title="Log-in" />
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            <span className="font-bold">Profile</span>
          </NavigationMenuLink>
        </NavigationMenuItem>
        {adminMenu}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
