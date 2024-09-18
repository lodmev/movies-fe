'use client'
import { MoviesFilteredList } from '@/widget/movie'
import { FilteredMovies } from '@/feature/movie'

export function Movies() {
  return <FilteredMovies FilteredComponent={MoviesFilteredList} />
}
