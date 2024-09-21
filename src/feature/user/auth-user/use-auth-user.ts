"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginDTO } from "@/entity/user";
import { userApi } from "@/entity/user";

export const useAuthUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.authUser,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
    },
  });
};
