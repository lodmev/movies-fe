"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userApi } from "@/entity/";

export const useAuthUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.authUser,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
    },
  });
};
