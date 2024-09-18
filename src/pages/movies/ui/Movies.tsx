'use client'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { movieApi, MovieCard, MoviesFilteredList } from '@/entity/movie'
import { FilteredMovies } from '@/feature/movie'

export function Movies() {
  return <FilteredMovies FilterList={MoviesFilteredList} />
}
