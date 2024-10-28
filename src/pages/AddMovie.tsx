import { AddMovieForm } from "@/widgets";

import { useNoPermissionsRedirect, useUserHasRights } from "@/entities";
export function AddMovie() {
  const isUserAdmin = useUserHasRights("ADMIN");
  useNoPermissionsRedirect(isUserAdmin);
  return <AddMovieForm />;
}
