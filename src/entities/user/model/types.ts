export type Role = "ADMIN" | "USER";
export type FavoriteMovie = {
  movieId: string;
};
export type User = {
  id: string;
  name: string;
  email: string;
  registeredAt: Date;
  updatedAt: Date;
  roles: Role[];
  favoriteMovies: FavoriteMovie[];
  token?: string;
};
export type LoginDTO = {
  email: string;
  password: string;
};
export type RegisterDTO = LoginDTO & {
  name: string;
  roles?: Role[];
};
export type AuthResponse = {
  accessToken: string;
};
