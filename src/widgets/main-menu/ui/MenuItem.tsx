import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import { ReactNode } from "react";
import { navigationMenuTriggerStyle } from "@/shared/ui/navigation-menu";

type Props = {
  href: string;
  title: string;
  icon?: ReactNode;
};
export function MenuItem({ href, title, icon }: Props) {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          <div className="flex gap-1 justify-center items-center">
            {icon}
            <span className="font-bold hidden sm:block">{title}</span>
          </div>
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
