"use client";

import { useQuery } from "@tanstack/react-query";
import {
  useNoPermissionsRedirect,
  userApi,
  useUserHasRights,
} from "@/entities";
import { UsersTable } from "@/entities";

export function UsersList() {
  const isUserAdmin = useUserHasRights("ADMIN");
  useNoPermissionsRedirect(isUserAdmin);
  const { data: users, isPending } = useQuery(userApi.userQueries.allUsers());
  return (
    <UsersTable
      users={users}
      isPending={isPending}
      caption="A list of all users in system."
    />
  );
}
