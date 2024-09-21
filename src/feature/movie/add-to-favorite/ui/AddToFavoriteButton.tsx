import { userApi } from "@/entity/user";
import { cn } from "@/shared/lib/utils";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { isInFavorite } from "../lib/is-in-favorite";
type Props = {
  movieId: string;
};
export function AddToFavoriteButton({ movieId }: Props) {
  const { data: user } = useQuery(userApi.userQueries.current());
  const alreadyInFavorite = isInFavorite(user, movieId);
  // console.log(isInFavorite(user));
  const classes = cn("scale-150", {
    "text-red-600": alreadyInFavorite,
    "text-bg-card": !alreadyInFavorite,
  });
  return user ? <HeartFilledIcon className={classes} /> : null;
}
