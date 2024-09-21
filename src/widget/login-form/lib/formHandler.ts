import { LoginDTO, User } from "@/entity/user/";
import { UseMutateFunction } from "@tanstack/react-query";
import { FormEvent } from "react";

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
