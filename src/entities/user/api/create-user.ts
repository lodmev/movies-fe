import { apiClient } from "@/shared/api";
import { RegisterDTO, User } from "../model";

export const createUser = ({ name, email, password, roles }: RegisterDTO) => {
  return apiClient.post<User, RegisterDTO>("/users", {
    name,
    email,
    password,
    roles,
  });
};
