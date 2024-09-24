import { FormEvent, ReactNode } from "react";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { ModalSpinner } from "@/shared/ui/ModalSpinner";

type Props = {
  isPending: boolean;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  variant?: "login" | "registration";
  children?: ReactNode;
};
export function AuthForm({
  onSubmit,
  isPending,
  variant = "login",
  children,
}: Props) {
  const isLogin = variant === "login";
  const title = isLogin ? "Login" : "Registration";
  const description = isLogin
    ? "Enter your email below to login to your account."
    : "Enter your name, email and password below to register new account.";
  const submitButtonTitle = isLogin ? "Sign-in" : "Register";
  return (
    <>
      <ModalSpinner isOpen={isPending} />
      <form onSubmit={onSubmit} className="p-2">
        <Card className="w-full max-w-sm m-auto">
          <CardHeader>
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {!isLogin && (
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  required
                />
              </div>
            )}
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            {children}
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              {submitButtonTitle}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
