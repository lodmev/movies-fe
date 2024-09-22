const KEY = "token";

export const saveToken = (token: string) => {
  localStorage.setItem(KEY, token);
};

export const getToken = (): string => {
  const token = localStorage.getItem(KEY);
  if (!token) {
    throw new Error("No saved token");
  }
  return token;
};
