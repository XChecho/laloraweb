import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";
import { useAuthStore } from "@/store/useAuthStore";
import type { LoginDto, UserProfile } from "@/types/auth";

export function useLoginMutation() {
  const router = useRouter();

  return useMutation({
    mutationFn: async (dto: LoginDto) => {
      const result = await signIn('credentials', {
        email: dto.email,
        password: dto.password,
        redirect: false,
      });

      if (result?.error) {
        throw new Error(result.error);
      }

      return result;
    },
    onSuccess: () => {
      router.push("/admin/");
    },
  });
}

export function useGoogleLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const result = await signIn('google', { redirect: false });
      if (result?.error) {
        throw new Error(result.error);
      }
      return result;
    },
    onSuccess: () => {
      router.push("/admin/");
    },
  });
}

export function useLogoutMutation() {
  const logout = useAuthStore((s) => s.logout);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await signOut({ redirect: false });
    },
    onSettled: () => {
      queryClient.clear();
      logout();
    },
  });
}

export function useProfileQuery() {
  const { data: session } = useSession();
  const setUser = useAuthStore((s) => s.setUser);

  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const data = await api.get<UserProfile>("/auth/profile", session?.accessToken);
      setUser(data);
      return data;
    },
    enabled: !!session?.accessToken,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
}
