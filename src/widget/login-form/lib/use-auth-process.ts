import { UseMutateFunction } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { LoginDTO, User } from "@/entity/";
import { useAuthUser } from "@/feature";
import { useToast } from "@/shared/lib/";

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
  }, [error, toast]);
  return [mutate, isPending];
};
