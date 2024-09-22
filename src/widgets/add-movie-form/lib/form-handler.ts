import { UseMutateFunction } from "@tanstack/react-query";
import { FormEvent } from "react";
import { Movie } from "@/entities/";

export const formHandler =
  (mutateFn: UseMutateFunction<Movie, Error, Omit<Movie, "id">, unknown>) =>
  (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
      desc: { value: string };
      posterUrl: { value: string };
    };
    const name = target.name.value;
    const description = target.desc.value;
    const posterUrl = target.posterUrl.value;
    mutateFn({ name, description, posterUrl });
  };
