import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/shared/ui/dropdown-menu";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/shared/ui/navigation-menu";

export function AdminMenu() {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        <DropdownMenu>
          <DropdownMenuTrigger className={"outline-none"}>
            <span className="font-bold">Admin</span>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="/movies/add">Add movie</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/users">Users list</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
