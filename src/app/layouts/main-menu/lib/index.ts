"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { removeUserToken, userApi } from "@/entities";

export const useUserQuery = () => {
  const { data: user } = useQuery(userApi.userQueries.current());
  const queryClient = useQueryClient();
  const logout = () => {
    removeUserToken();
    queryClient.resetQueries({ queryKey: ["user"], exact: true });
  };
  return { user, logout };
};
