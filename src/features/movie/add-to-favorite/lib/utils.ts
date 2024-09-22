import { User } from "@/entities";

export const isInFavorite = (
  user: User | undefined,
  movieId: string
): boolean => {
  if (!user || !Array.isArray(user.favoriteMovies)) {
    return false;
  }
  return user.favoriteMovies.some((value) => value.movieId === movieId);
};
