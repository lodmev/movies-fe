import { queryOptions } from '@tanstack/react-query'
import { getMovies } from './get-movies'

export const movieQueries = {
  all: () =>
    queryOptions({
      queryKey: ['all'],
      queryFn: getMovies,
    }),
}
