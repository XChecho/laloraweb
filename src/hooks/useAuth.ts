import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { setToken, setRefreshToken } from "@/lib/auth";
import { useAuthStore } from "@/store/useAuthStore";
import type { LoginDto, AuthResponse, UserProfile } from "@/types/auth";

export function useLoginMutation() {
  const router = useRouter();
  const setUser = useAuthStore((s) => s.setUser);
  const storeSetToken = useAuthStore((s) => s.setToken);

  return useMutation({
    mutationFn: (dto: LoginDto) =>
      api.post<AuthResponse>(
        "/auth/login",
        dto as unknown as Record<string, unknown>,
      ),
    onSuccess: (data) => {
      setToken(data.access_token);
      setRefreshToken(data.refresh_token);
      storeSetToken(data.access_token);

      setUser({
        id: "",
        email: "",
        firstName: data.firstName,
        lastName: data.lastName,
        role: data.userType,
        companyId: "",
        active: true,
      });

      router.push("/admin/");
    },
  });
}

export function useLogoutMutation() {
  const logout = useAuthStore((s) => s.logout);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => api.post("/auth/logout"),
    onSettled: () => {
      queryClient.clear();
      logout();
    },
  });
}

export function useProfileQuery() {
  const token = useAuthStore((s) => s.token);
  const setUser = useAuthStore((s) => s.setUser);

  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const data = await api.get<UserProfile>("/auth/profile");
      setUser(data);
      return data;
    },
    enabled: !!token,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
