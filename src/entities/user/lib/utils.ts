import { Role, User } from "../model";

const KEY = "token";

export const saveToken = (token: string) => {
  localStorage.setItem(KEY, token);
};

export const getToken = (): string => {
  const token = localStorage.getItem(KEY);
  if (!token) {
    throw new Error("No saved token");
  }
  return token;
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
