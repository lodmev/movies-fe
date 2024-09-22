import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { userApi } from "@/entities";
import { saveUserToken } from "@/entities";
import { useErrorToast } from "@/shared/lib";

export const useAuthUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const useMutationResult = useMutation({
    mutationFn: userApi.authUser,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      if (user.token) {
        saveUserToken(user.token);
      }
      router.push("/");
    },
  });
  useErrorToast(useMutationResult.error);
  return useMutationResult;
};

export const useRegisterUser = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const useMutationResult = useMutation({
    mutationFn: userApi.createUser,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      if (user.token) {
        saveUserToken(user.token);
      }
      router.push("/");
    },
  });
  useErrorToast(useMutationResult.error);
  return useMutationResult;
};
