import { apiClient } from "@/shared/api";
import { User } from "../model";
import { getToken } from "../lib/utils";

export const getUser = async () => {
  const token = getToken();
  if (!token) {
    throw new Error("No token saved");
  }
  return apiClient.get<User>("/users/self", undefined, token);
};
