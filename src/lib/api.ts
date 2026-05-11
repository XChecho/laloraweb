import { getToken, removeToken, removeRefreshToken } from "./auth";
import type { ApiResponse, ApiErrorResponse } from "@/types/auth";

class ApiError extends Error {
  statusCode: number;
  errors?: string[];

  constructor(response: ApiErrorResponse) {
    super(response.message);
    this.name = "ApiError";
    this.statusCode = response.statusCode;
    this.errors = response.errors;
  }
}

async function request<T>(
  method: string,
  path: string,
  body?: Record<string, unknown>,
): Promise<T> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config: RequestInit = {
    method,
    headers,
  };

  if (body) {
    config.body = JSON.stringify(body);
  }

  const response = await fetch(`${baseUrl}${path}`, config);

  if (response.status === 401) {
    removeToken();
    removeRefreshToken();
    if (typeof window !== "undefined") {
      window.location.href = "/login/";
    }
    throw new Error("Sesión expirada");
  }

  const json = await response.json();

  if (!json.success) {
    throw new ApiError(json as ApiErrorResponse);
  }

  return (json as ApiResponse<T>).data;
}

export const api = {
  get<T>(path: string): Promise<T> {
    return request<T>("GET", path);
  },
  post<T>(path: string, body?: Record<string, unknown>): Promise<T> {
    return request<T>("POST", path, body);
  },
  put<T>(path: string, body?: Record<string, unknown>): Promise<T> {
    return request<T>("PUT", path, body);
  },
  delete<T>(path: string): Promise<T> {
    return request<T>("DELETE", path);
  },
};

export { ApiError };
