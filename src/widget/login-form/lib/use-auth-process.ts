import { LoginDTO, User } from "@/entity/user";
import { useAuthUser } from "@/feature/user";
import { useToast } from "@/shared/lib/hooks/use-toast";
import { UseMutateFunction } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthProcess = (): [
  mutate: UseMutateFunction<User, Error, LoginDTO, unknown>,
  isPending: boolean,
] => {
  const { mutate, error, isPending, isSuccess } = useAuthUser();
  const router = useRouter();
  const { toast } = useToast();
  if (isSuccess) {
    router.push("/");
  }
  useEffect(() => {
    if (error) {
      console.log(error);
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  }, [error]);
  return [mutate, isPending];
};
