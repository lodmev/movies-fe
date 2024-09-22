import { useQuery } from "@tanstack/react-query";
import { userApi } from "..";
import { Role } from "../model";
import { hasRights } from "./utils";

export const useUserHasRights = (requiredRole: Role) => {
  const { data: user } = useQuery(userApi.userQueries.current());
  return hasRights(user, requiredRole);
};
