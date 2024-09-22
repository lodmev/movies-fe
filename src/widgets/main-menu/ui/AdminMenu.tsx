import { description } from "@/pages";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  ListItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/shared/ui/navigation-menu";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectItem,
} from "@/shared/ui/select";

export function AdminMenu() {
  const components = [
    {
      title: "Add movie",
      href: "/movies/add",
      description: "Add new movie",
    },
    {
      title: "Users list",
      href: "/users",
      description: "List of all app users",
    },
  ];
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Admin Menu</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink asChild>HOba</NavigationMenuLink>
        {/* {components.map((component) => (
          <ListItem
            key={component.title}
            title={component.title}
            href={component.href}
          >
            {component.description}
          </ListItem>
        ))} */}
        {/* <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Fruits</SelectLabel>
              <SelectItem value="apple">Apple</SelectItem>
              <SelectItem value="banana">Banana</SelectItem>
              <SelectItem value="blueberry">Blueberry</SelectItem>
              <SelectItem value="grapes">Grapes</SelectItem>
              <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select> */}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
