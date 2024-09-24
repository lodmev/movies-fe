import { UseMutateFunction } from "@tanstack/react-query";
import { FormEvent } from "react";
import { RegisterDTO, Role, User } from "@/entities";

export const registrationFormHandler =
  (
    mutateFn: UseMutateFunction<User, Error, RegisterDTO, unknown>,
    roles: Role[]
  ) =>
  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };
    const name = target.name.value;
    const email = target.email.value;
    const password = target.password.value;
    console.log({ name, email, password, roles });
    mutateFn({ name, email, password, roles });
  };
