import { AuthTokens, User, JwtPayload } from '@/types';
import api from './api';

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

export function setToken(token: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('token', token);
  // Also set as cookie for server-side middleware
  document.cookie = `token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Strict`;
}

export function removeToken(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('token');
  // Also remove cookie
  document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

export function decodeJwt(token: string): JwtPayload | null {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  const token = getToken();
  if (!token) return false;
  
  const payload = decodeJwt(token);
  if (!payload) return false;
  
  return payload.exp > Date.now() / 1000;
}

export function getUserFromToken(): User | null {
  const token = getToken();
  if (!token) return null;
  
  const payload = decodeJwt(token);
  if (!payload) return null;
  
  return {
    id: payload.sub,
    email: payload.email,
    name: payload.email.split('@')[0],
    role: payload.role,
    companyId: payload.companyId,
    isActive: true,
  };
}

export async function login(email: string, password: string): Promise<AuthTokens> {
  const response = await api.post<AuthTokens>('/auth/login', { email, password });
  const tokens = response.data;
  setToken(tokens.accessToken);
  if (tokens.refreshToken) {
    localStorage.setItem('refreshToken', tokens.refreshToken);
  }
  return tokens;
}

export async function logout(): Promise<void> {
  const refreshToken = localStorage.getItem('refreshToken');
  removeToken();
  localStorage.removeItem('refreshToken');
  
  try {
    await api.post('/auth/logout', { refreshToken });
  } catch {
    // Ignore logout errors
  }
}

export async function refreshToken(): Promise<string> {
  const refreshTokenValue = localStorage.getItem('refreshToken');
  if (!refreshTokenValue) {
    throw new Error('No refresh token available');
  }
  
  const response = await api.post<{ accessToken: string }>('/auth/refresh', {
    refreshToken: refreshTokenValue,
  });
  
  setToken(response.data.accessToken);
  return response.data.accessToken;
}
