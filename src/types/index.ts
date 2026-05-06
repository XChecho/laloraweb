export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message: string;
}

export interface ApiError {
  success: false;
  message: string;
  statusCode: number;
  errors?: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: Role;
  companyId: string;
  isActive: boolean;
}

export type Role = 'SUPER_ADMIN' | 'ADMIN' | 'CASHIER' | 'WAITER' | 'KITCHEN';

export interface Company {
  id: string;
  name: string;
  slug: string;
  logoUrl?: string;
  isActive: boolean;
  plan: 'FREE' | 'BASIC' | 'PREMIUM';
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: Role;
  companyId: string;
  iat: number;
  exp: number;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}
