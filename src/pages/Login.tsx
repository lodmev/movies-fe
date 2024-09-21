import { LoginForm } from "@/widget/login-form";

export const description =
  "A simple login form with email and password. The submit button says 'Sign in'.";
export function Login() {
  return (
    <main className="">
      <LoginForm />
    </main>
  );
}
