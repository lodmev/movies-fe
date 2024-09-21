"use client";
import { useFilterQuery } from "@/feature/movie/";
import { useState } from "react";
import { MovieCard } from "@/entity/movie";
import { FilterInput } from "@/feature/movie/filter";
import { AddToFavoriteButton } from "@/feature/movie/";

export function Movies() {
  const [searchText, setSearchText] = useState("");
  const { data: movies, isSuccess } = useFilterQuery({
    name: searchText,
  });
  return (
    <div className="flex flex-col max-w-4xl gap-2 m-auto">
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
            actions={<AddToFavoriteButton movieId={movie.id} />}
            key={movie.id}
          />
        ))}
    </div>
  );
}
