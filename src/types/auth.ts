export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token: string;
  firstName: string;
  lastName: string;
  userType: string;
}

export interface UserProfile {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  companyId: string;
  active: boolean;
}

export interface ApiResponse<T> {
  success: true;
  data: T;
  message: string;
}

export interface ApiErrorResponse {
  success: false;
  message: string;
  statusCode: number;
  errors?: string[];
}

import "next-auth"

declare module "next-auth" {
  interface Session {
    accessToken: string;
    refreshToken: string;
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role: string;
      firstName: string;
      lastName: string;
    };
  }

  interface User {
    accessToken: string;
    refreshToken: string;
    role: string;
    firstName: string;
    lastName: string;
  }
}
