import { apiClient } from "@/shared/api";
import { LoginDTO } from "../model";

export const authUser = ({ email, password }: LoginDTO) => {
  return apiClient.post("/auth", { email, password });
};
