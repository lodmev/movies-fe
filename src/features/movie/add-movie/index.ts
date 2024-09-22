import { Movie } from "@/entities/";
import { getUserToken } from "@/entities/";
import { MovieDTO } from "@/entities/";
import { apiClient } from "@/shared/api";

export const addMovie = ({ name, description, posterUrl }: MovieDTO) => {
  const token = getUserToken();
  return apiClient.post<Movie, MovieDTO>(
    "/movies",
    {
      name,
      description,
      posterUrl,
    },
    token
  );
};
