import { getUserToken } from "@/entity";
import { Movie } from "@/entity/";
import { apiClient } from "@/shared/api";

export const remove = (movieId: string) => {
  const token = getUserToken();
  return apiClient.delete<Movie>(`/movies/${movieId}`, undefined, token);
};
