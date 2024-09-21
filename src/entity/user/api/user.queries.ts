import { queryOptions } from "@tanstack/react-query";
import { getUser } from "./get-user-by-token";

export const userQueries = {
  current: () =>
    queryOptions({
      queryKey: ["user"],
      queryFn: getUser,
      staleTime: Infinity,
    }),
};
