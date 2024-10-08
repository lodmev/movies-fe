import { apiClient } from "@/shared/api";
import { saveToken } from "../lib/";
import { AuthResponse, LoginDTO } from "../model";
import { getUser } from "./get-user-by-token";

export const authUser = async ({ email, password }: LoginDTO) => {
  const tokenResponse = await apiClient.post<AuthResponse>("/auth/login", {
    email,
    password,
  });
  saveToken(tokenResponse.accessToken);
  return getUser();
};
