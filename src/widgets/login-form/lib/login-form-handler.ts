import { UseMutateFunction } from "@tanstack/react-query";
import { FormEvent } from "react";
import { LoginDTO, User } from "@/entities";

export const formHandler =
  (mutateFn: UseMutateFunction<User, Error, LoginDTO, unknown>) =>
  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    const email = target.email.value;
    const password = target.password.value;
    mutateFn({ email, password });
  };
