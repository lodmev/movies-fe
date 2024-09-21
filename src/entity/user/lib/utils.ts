const KEY = 'token'

export const saveToken = (token: string) => {
  localStorage.setItem(KEY, token)
}

export const getToken = () => {
  return localStorage.getItem(KEY)
}