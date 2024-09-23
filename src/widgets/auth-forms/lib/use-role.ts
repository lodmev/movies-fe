import { useEffect, useState } from "react";
import { Role } from "@/entities";

export const useRole = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [role, setRole] = useState<Role[]>(["USER"]);
  useEffect(() => {
    setRole(() => (isAdmin ? ["ADMIN"] : ["USER"]));
  }, [isAdmin, setRole]);
  return { isAdmin, setIsAdmin, role };
};
