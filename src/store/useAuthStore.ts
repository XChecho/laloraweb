import { create } from "zustand";
import type { UserProfile } from "@/types/auth";
import { getToken, removeToken, removeRefreshToken } from "@/lib/auth";

const getInitialToken = () => {
  if (typeof window === "undefined") return null;
  return getToken();
};

interface AuthState {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  setUser: (user: UserProfile | null) => void;
  setToken: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  token: getInitialToken(),
  isAuthenticated: !!getInitialToken(),
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token, isAuthenticated: true }),
  logout: () => {
    removeToken();
    removeRefreshToken();
    set({ user: null, token: null, isAuthenticated: false });
    if (typeof window !== "undefined") {
      window.location.href = "/";
    }
  },
}));
