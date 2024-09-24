import { TOKEN_KEY } from "@/shared/config";
import { Role, User } from "../model";

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getToken = (): string => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (!token) {
    throw new Error("No saved token");
  }
  return token;
};
export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
export const hasRights = (
  user: User | undefined,
  requiredRole: Role
): boolean => {
  if (!user) {
    return false;
  }
  return user.roles.some((role) => role === requiredRole);
};
