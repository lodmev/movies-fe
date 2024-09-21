import { User } from "@/entity/user";

export const isInFavorite = (
  user: User | undefined,
  movieId: string
): boolean => {
  if (!user) {
    return false;
  }
  return user.favoriteMovies.some((value) => value.movieId === movieId);
};
