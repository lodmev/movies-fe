"use client";
import { useState } from "react";
import { MovieCard } from "@/entity";
import { RemoveButton as RemoveMovieButton } from "@/feature/";
import { useFilterQuery } from "@/feature/";
import { AddToFavoriteButton } from "@/feature/";
import { FilterInput } from "@/feature/";

export function Movies() {
  const [searchText, setSearchText] = useState("");
  const { data: movies, isSuccess } = useFilterQuery({
    name: searchText,
  });
  return (
    <div className="flex flex-col max-w-4xl gap-2 m-auto p-2">
      <h1 className="font-bold text-3xl text-center">The best movies</h1>
      <FilterInput inputControls={[searchText, setSearchText]} />
      {isSuccess && movies.length === 0 && (
        <div className="m-auto"> Nothing found</div>
      )}
      {isSuccess &&
        movies.map((movie) => (
          <MovieCard
            name={movie.name}
            description={movie.description}
            posterUrl={movie.posterUrl}
            actions={
              <>
                <AddToFavoriteButton movieId={movie.id} />
                <RemoveMovieButton movie={movie} />
              </>
            }
            key={movie.id}
          />
        ))}
    </div>
  );
}
