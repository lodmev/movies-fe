"use client";

import { useQuery } from "@tanstack/react-query";
import { userApi } from "@/entities";
import { UsersTable } from "@/entities";

export function UserProfile() {
  const { data, isPending } = useQuery(userApi.userQueries.current());
  const user = data ? [data] : undefined;
  return (
    <UsersTable
      users={user}
      isPending={isPending}
      caption="Data of your account"
    />
  );
}
