import { apiClient } from "@/shared/api";
import { AuthResponse, LoginDTO } from "../model";
import { saveToken } from "../lib/utils";
import { getUser } from "./get-user-by-token";

export const authUser = async ({ email, password }: LoginDTO) => {
  let tokenResponse: AuthResponse;
  tokenResponse = await apiClient.post<AuthResponse>("/auth/login", {
    email,
    password,
  });
  saveToken(tokenResponse.accessToken);
  return getUser();
};
