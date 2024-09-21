import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDebounce } from "use-debounce";
import { movieApi } from "@/entity/";
import { useToast } from "@/shared/lib/";

type Props = {
  name: string;
};
export const useFilterQuery = ({ name }: Props) => {
  const [debounce] = useDebounce(name, 500);
  const { toast } = useToast();
  const queryResult = useQuery(movieApi.moviesQueries.filter(debounce));
  const error = queryResult.error;
  useEffect(() => {
    if (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  }, [error]);
  return queryResult;
};
