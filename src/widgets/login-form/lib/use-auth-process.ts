import { UseMutateFunction } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { LoginDTO, User } from "@/entities";
import { useAuthUser } from "@/features";
import { useErrorToast } from "@/shared/lib/";

export const useAuthProcess = (): [
  mutate: UseMutateFunction<User, Error, LoginDTO, unknown>,
  isPending: boolean,
] => {
  const { mutate, error, isPending, isSuccess } = useAuthUser();
  useErrorToast(error);
  const router = useRouter();
  if (isSuccess) {
    router.push("/");
  }

  return [mutate, isPending];
};
