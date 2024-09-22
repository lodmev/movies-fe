import { getUserToken } from "@/entities";
import { Movie } from "@/entities";
import { apiClient } from "@/shared/api";

export const remove = (movieId: string) => {
  const token = getUserToken();
  return apiClient.delete<Movie>(`/movies/${movieId}`, undefined, token);
};
