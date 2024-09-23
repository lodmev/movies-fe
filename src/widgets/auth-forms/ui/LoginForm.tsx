"use client";
import Link from "next/link";
import { useAuthUser } from "@/features";
import { formHandler } from "../lib";
import { AuthForm } from "./AuthForm";

export function LoginForm() {
  const { mutate: setUserAuth, isPending } = useAuthUser();

  return (
    <AuthForm isPending={isPending} onSubmit={formHandler(setUserAuth)}>
      <div className="text-xs">
        {`Haven't account? `}
        <Link href="/registration" className="font-medium text-sky-900">
          Register
        </Link>
      </div>
    </AuthForm>
  );
}
