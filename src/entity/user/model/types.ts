export type Role = "ADMIN" | "USER";
export type User = {
  id: string;
  name: string;
  email: string;
  registeredAt: Date;
  updatedAt: Date;
  roles: Role[];
};
export type LoginDTO = {
  email: string;
  password: string;
};
export type AuthRequest = {
  accessToken: string;
};
