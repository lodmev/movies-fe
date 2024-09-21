"use client";
import { useAuthUser } from "@/feature/user";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { formHandler } from "../lib/formHandler";
import { ModalSpinner } from "@/shared/ui/spinner/ModalSpinner";
import { useAuthProcess } from "../lib/use-auth-process";

export function LoginForm() {
  const [setUserAuth, isPending] = useAuthProcess();

  return (
    <>
      <ModalSpinner isOpen={isPending} />
      <form onSubmit={formHandler(setUserAuth)}>
        <Card className="w-full max-w-sm m-auto">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
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
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Sign in
            </Button>
          </CardFooter>
        </Card>
      </form>
    </>
  );
}
