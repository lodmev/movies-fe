export type Movie = {
  id: string;
  name: string;
  description: string;
  posterUrl: string;
};
export type MovieDTO = Omit<Movie, "id">;
