import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { movieApi } from "@/entity/";
import { useErrorToast } from "@/shared/lib/";

type Props = {
  name: string;
};
export const useFilterQuery = ({ name }: Props) => {
  const [debounce] = useDebounce(name, 500);
  const queryResult = useQuery(movieApi.moviesQueries.filter(debounce));
  useErrorToast(queryResult.error);
  return queryResult;
};
