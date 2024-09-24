"use client";
import { useRegisterUser } from "@/features";
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";
import { registrationFormHandler, useRole } from "../lib";
import { AuthForm } from "./AuthForm";

export function RegistrationForm() {
  const { mutate: setUserAuth, isPending } = useRegisterUser();
  const { isAdmin, setIsAdmin, role } = useRole();
  return (
    <AuthForm
      isPending={isPending}
      onSubmit={registrationFormHandler(setUserAuth, role)}
      variant={"registration"}
    >
      <div className="flex items-center space-x-2">
        <Checkbox
          id="makeAdmin"
          checked={isAdmin}
          onCheckedChange={() => {
            setIsAdmin((prev) => !prev);
          }}
        />
        <Label htmlFor="makeAdmin">Register as admin</Label>
      </div>
    </AuthForm>
  );
}
