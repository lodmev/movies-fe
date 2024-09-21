export type Role = 'ADMIN' | 'USER'
export type User = {
  id: string
  name: string
  email: string
  registeredAt: Date
  updatedAt: Date
  roles: Role[]
  token?: string
}
export type LoginDTO = {
  email: string
  password: string
}
export type AuthResponse = {
  accessToken: string
}
