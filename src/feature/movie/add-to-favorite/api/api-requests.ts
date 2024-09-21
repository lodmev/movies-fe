import { FavoriteMovie, getUserToken } from "@/entity";
import { apiClient } from "@/shared/api";

export const addToFavorite = (movieId: string) => {
  const token = getUserToken();
  return apiClient.post<FavoriteMovie>(
    "/users/movies/favorite",
    {
      movieId,
    },
    token
  );
};

export const removeFromFavorite = (movieId: string) => {
  const token = getUserToken();
  return apiClient.delete<FavoriteMovie>(
    `/users/movies/favorite/${movieId}`,
    undefined,
    token
  );
};
