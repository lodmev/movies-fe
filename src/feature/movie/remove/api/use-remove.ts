"use client";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Movie } from "@/entity";
import { remove } from "./api-requests";

export const useRemove = () => {
  const queryClient = useQueryClient();
  const mutateResult = useMutation({
    mutationFn: remove,
    onSuccess: (data) => {
      queryClient.setQueryData(["all"], (movies: Movie[]) =>
        movies.filter((movie) => movie.id !== data.id)
      );
    },
  });
  return mutateResult;
};
