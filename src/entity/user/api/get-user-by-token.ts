import { apiClient } from "@/shared/api";
import { User } from "../model";

export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return undefined;
  }
  return apiClient.get<User>("/users/self", undefined, token);
};
