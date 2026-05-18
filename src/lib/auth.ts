const ACCESS_TOKEN_KEY = "access_token";
const REFRESH_TOKEN_KEY = "refresh_token";

/** @deprecated Use Next Auth session instead */
export function getToken(): string | null {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

/** @deprecated Use Next Auth signIn instead */
export function setToken(token: string): void {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

/** @deprecated Use Next Auth signOut instead */
export function removeToken(): void {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

/** @deprecated Use Next Auth session instead */
export function getRefreshToken(): string | null {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
}

/** @deprecated Use Next Auth signIn instead */
export function setRefreshToken(token: string): void {
  localStorage.setItem(REFRESH_TOKEN_KEY, token);
}

/** @deprecated Use Next Auth signOut instead */
export function removeRefreshToken(): void {
  localStorage.removeItem(REFRESH_TOKEN_KEY);
}
