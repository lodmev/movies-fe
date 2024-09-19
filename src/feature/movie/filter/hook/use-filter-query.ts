import { movieApi } from '@/entity/movie'
import { useQuery } from '@tanstack/react-query'
import { useDebounce } from 'use-debounce'

type Props = {
  name: string
}
export const useFilterQuery = ({ name }: Props) => {
  const [debounce] = useDebounce(name, 500)
  return useQuery(movieApi.moviesQueries.filter(debounce))
}
