import { apiClient } from "@/shared/api";
import { getToken } from "../lib";
import { User } from "../model";

export const getUser = async () => {
  const token = getToken();
  if (!token) {
    throw new Error("No token saved");
  }
  return apiClient.get<User>("/users/self", undefined, token);
};
