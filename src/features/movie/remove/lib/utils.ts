import { User } from "@/entity";

export const hasRights = (user: User | undefined): boolean => {
  if (!user) {
    return false;
  }
  return user.roles.some((role) => role === "ADMIN");
};
