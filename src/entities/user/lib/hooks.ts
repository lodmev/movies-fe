"use client";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { userApi } from "..";
import { Role } from "../model";
import { hasRights } from "./utils";

export const useUserHasRights = (requiredRole: Role) => {
  const { data: user } = useQuery(userApi.userQueries.current());
  return hasRights(user, requiredRole);
};

export const useNoPermissionsRedirect = (hasPermissions: boolean) => {
  useLayoutEffect(() => {
    if (!hasPermissions) {
      redirect("/");
    }
  }, [hasPermissions]);
};
