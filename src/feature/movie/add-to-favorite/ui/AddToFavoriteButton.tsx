"use client";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/entity";
import { cn } from "@/shared/lib/utils";
import { Spinner } from "@/shared/ui/Spinner";
import { useToggleFavorite } from "../api/";
import { isInFavorite } from "../lib/";
type Props = {
  movieId: string;
};
export function AddToFavoriteButton({ movieId }: Props) {
  const { data: user } = useQuery(userApi.userQueries.current());
  const [useMutationResult, toggleFavorite] = useToggleFavorite();
  if (!user) {
    return null;
  }
  const alreadyInFavorite = isInFavorite(user, movieId);
  const classes = cn("scale-150", {
    "text-red-600": alreadyInFavorite,
    "text-card stroke-card-foreground": !alreadyInFavorite,
  });
  return (
    <div className="min-h-4 min-w-4">
      {useMutationResult.isPending ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <HeartFilledIcon
          className={classes}
          onClick={() => {
            toggleFavorite(alreadyInFavorite);
            useMutationResult.mutate(movieId);
          }}
        />
      )}
    </div>
  );
}
