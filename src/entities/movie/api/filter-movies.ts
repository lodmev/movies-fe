import { apiClient } from '@/shared/api'
import { Movie } from '../model'

export const filterMovies = (name: Movie['name']) =>
  apiClient.get<Movie[]>(`movies/find?name=${name}`)
