"use client";
import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { FavoriteMovie, User } from "@/entities";
import { addToFavorite, removeFromFavorite } from "./api-requests";

export const useToggleFavorite = (): [
  UseMutationResult<FavoriteMovie, Error, string, unknown>,
  Dispatch<SetStateAction<boolean>>,
] => {
  const [inFavorite, setInFavorite] = useState(false);
  const mutationFn = inFavorite ? removeFromFavorite : addToFavorite;
  const queryClient = useQueryClient();
  const mutateResult = useMutation({
    mutationFn,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], (user: User) => {
        if (!inFavorite) {
          user.favoriteMovies.push({ movieId: data.movieId });
        } else {
          user.favoriteMovies = user.favoriteMovies.filter(
            ({ movieId }) => movieId !== data.movieId
          );
        }
        return user;
      });
    },
  });
  return [mutateResult, setInFavorite];
};
