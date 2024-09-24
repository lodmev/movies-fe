"use client";
import { HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/shared/ui/navigation-menu";
import { useUserQuery } from "../lib";
import { LogInOrOutItem } from "./LogInOrOutItem";
import { MenuItem } from "./MenuItem";

export function MainMenu() {
  const { user } = useUserQuery();
  return (
    <div className="fixed flex justify-center bottom-0 sm:top-0 z-50 sm:h-9 w-screen bg-sky-400">
      <NavigationMenu>
        <NavigationMenuList>
          <MenuItem
            href="/"
            title="Home"
            icon={<HomeIcon className="scale-125 stroke-2" />}
          />
          <LogInOrOutItem />
          {!!user && (
            <MenuItem
              href="/profile"
              title="Profile"
              icon={<PersonIcon className="scale-125 stroke-2" />}
            />
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
