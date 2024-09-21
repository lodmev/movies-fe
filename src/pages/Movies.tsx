"use client";
import { useFilterQuery } from "@/feature/movie/";
import { useState } from "react";
import { MovieCard } from "@/entity/movie";
import { FilterInput } from "@/feature/movie/filter";
import { LoadingSkeleton } from "@/shared/ui/LoadingSkeleton";
import { IsVisible } from "@/shared/ui/IsVisible";

export function Movies() {
  const [searchText, setSearchText] = useState("");
  const { data, error, isSuccess } = useFilterQuery({
    name: searchText,
  });
  return (
    <div className="flex flex-col max-w-4xl gap-2 m-auto">
      <FilterInput inputControls={[searchText, setSearchText]} />
      {isSuccess && data.length === 0 && (
        <div className="m-auto"> Nothing found</div>
      )}
      {isSuccess &&
        data.map((movie) => (
          <MovieCard
            name={movie.name}
            description={movie.description}
            posterUrl={movie.posterUrl}
            key={movie.id}
          />
        ))}
      {error && <pre className="text-red-600">{error.message}</pre>}
    </div>
  );
}
