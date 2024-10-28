"use client";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { LoginForm } from "@/features";
import { userApi } from "@/entities";

export function Login() {
  const { data: user } = useQuery(userApi.userQueries.current());
  useLayoutEffect(() => {
    if (!!user) {
      redirect("/");
    }
  }, [user]);
  return (
    <main className="">
      <LoginForm />
    </main>
  );
}
