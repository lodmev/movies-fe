"use client";
import { useState } from "react";
import { MovieCard } from "@/entities";
import { RemoveButton as RemoveMovieButton } from "@/features";
import { useFilterQuery } from "@/features";
import { AddToFavoriteButton } from "@/features";
import { FilterInput } from "@/features";

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
