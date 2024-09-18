import { useQuery } from '@tanstack/react-query'
import { movieApi } from '../../../entity/movie'
import { MovieCard } from '../../../entity/movie/ui/MovieCard'

type Props = {
  searchString: string
}

export function MoviesFilteredList({ searchString }: Props) {
  const { data, error, isError, isLoading } = useQuery(
    movieApi.moviesQueries.filter(searchString)
  )
  if (isLoading) {
    return <div>Loading...</div>
  }
  if (isError) {
    return <pre>{error.message}</pre>
  }
  return (
    <>
      {data?.map((movie) => (
        <MovieCard
          name={movie.name}
          description={movie.description}
          posterUrl={movie.posterUrl}
          key={movie.id}
        />
      ))}
    </>
  )
}
