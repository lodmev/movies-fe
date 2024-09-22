import { queryOptions } from '@tanstack/react-query'
import { filterMovies } from './filter-movies'
import { getMovies } from './get-movies'

export const movieQueries = {
  all: () =>
    queryOptions({
      queryKey: ['all'],
      queryFn: getMovies,
    }),
  filter: (name?: string) => {
    if (!name) {
      return movieQueries.all()
    }
    return queryOptions({
      queryKey: [name],
      queryFn: () => filterMovies(name),
    })
  },
}
