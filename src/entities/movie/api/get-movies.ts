import { apiClient } from '@/shared/api'
import { Movie } from '../model'

export const getMovies = () => apiClient.get<Movie[]>('movies')
