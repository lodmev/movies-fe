"use client";

import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { removeUserToken, userApi } from "@/entities";

export const useUserQuery = () => {
  const { data: user } = useQuery(userApi.userQueries.current());
  const queryClient = useQueryClient();
  const router = useRouter();
  const logout = () => {
    removeUserToken();
    queryClient.resetQueries({ queryKey: ["user"], exact: true }).then(() => {
      router.replace("/");
    });
  };
  return { user, logout };
};
