import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { addMovie } from "@/features";
import { useErrorToast } from "@/shared/lib/";

export const useAddMovie = () => {
  const router = useRouter();
  const useMutationResult = useMutation({
    mutationFn: addMovie,
    onSuccess: () => {
      router.push("/");
    },
  });
  useErrorToast(useMutationResult.error);
  return useMutationResult;
};
