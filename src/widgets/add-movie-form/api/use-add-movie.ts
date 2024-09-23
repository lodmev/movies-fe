import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { addMovie } from "@/features";
import { Movie } from "@/entities";
import { useErrorToast } from "@/shared/lib/";

export const useAddMovie = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const useMutationResult = useMutation({
    mutationFn: addMovie,
    onSuccess: (movie) => {
      queryClient.setQueryData(["all"], (movies: Movie[]) => {
        if (!Array.isArray(movies)) {
          return [movie];
        } else {
          movies.push(movie);
          return movies;
        }
      });
      router.push("/");
    },
  });
  useErrorToast(useMutationResult.error);
  return useMutationResult;
};
