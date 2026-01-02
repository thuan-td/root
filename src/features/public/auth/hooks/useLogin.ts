'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { login } from '../services/auth.service';
import { AUTH_CONFIG, ROUTES } from '@/constants';
import type { LoginRequest } from '../types/auth.types';

export function useLogin() {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: LoginRequest) => login(data),
    onSuccess: response => {
      // Save token to localStorage
      localStorage.setItem(AUTH_CONFIG.tokenKey, response.token);
      if (response.refreshToken) {
        localStorage.setItem(
          AUTH_CONFIG.refreshTokenKey,
          response.refreshToken,
        );
      }

      // Save user data
      localStorage.setItem(AUTH_CONFIG.userKey, JSON.stringify(response.user));

      // Redirect to dashboard or home
      router.push(ROUTES.HOME);
    },
    onError: error => {
      console.error('Login error:', error);
    },
  });
}
