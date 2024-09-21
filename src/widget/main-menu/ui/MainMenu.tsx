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
type Props = {
  adminMenu?: ReactNode;
};
export function MainMenu({ adminMenu }: Props) {
  return (
    <NavigationMenu className=" fixed bottom-0 sm:top-0 z-50 h-11 w-full">
      <NavigationMenuList className="bg-sky-400 rounded flex justify-center">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <div className="flex gap-1 justify-center items-center">
              <HomeIcon className="scale-125" />
              <span>Home</span>
              </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/login" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Log-in
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Profile
          </NavigationMenuLink>
        </NavigationMenuItem>
        {adminMenu}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
