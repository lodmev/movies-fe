"use client";
import { TrashIcon } from "@radix-ui/react-icons";
import { useQuery } from "@tanstack/react-query";
import { Movie, userApi } from "@/entities";
import { useErrorToast } from "@/shared/lib";
import { cn } from "@/shared/lib/utils";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
  AlertDialogHeader,
  AlertDialogFooter,
} from "@/shared/ui/alert-dialog";
import { Spinner } from "@/shared/ui/Spinner";
import { useRemove } from "../api";
import { hasRights } from "../lib";
type Props = {
  movie: Movie;
};
export function RemoveButton({ movie }: Props) {
  const { data: user } = useQuery(userApi.userQueries.current());
  const { mutate: deleteMovie, isPending, error } = useRemove();
  useErrorToast(error);
  const userHasRights = hasRights(user);
  if (!userHasRights) {
    return null;
  }
  const classes = cn("scale-150");
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <div className="min-h-4 min-w-4">
          {isPending ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <TrashIcon className={classes} onClick={() => {}} />
          )}
        </div>
      </AlertDialogTrigger>
      <AlertDialogContent className="bg-card">
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            {`This action cannot be undone. This will permanently delete movie "${movie.name}" from our servers.`}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              deleteMovie(movie.id);
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
