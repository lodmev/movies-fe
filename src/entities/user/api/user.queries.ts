import { queryOptions } from "@tanstack/react-query";
import { getUser } from "./get-user-by-token";
import { getUsers } from "./get-users";

export const userQueries = {
  current: () =>
    queryOptions({
      queryKey: ["user"],
      queryFn: getUser,
      staleTime: Infinity,
    }),
  allUsers: () =>
    queryOptions({
      queryKey: ["users", "all"],
      queryFn: getUsers,
    }),
};
