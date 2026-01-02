import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import {
  registerUser,
  sendVerificationCode,
  verifyCode,
  registerWithSocial,
} from '../services/register.service';
import {
  RegisterRequest,
  SendVerificationCodeRequest,
  VerifyCodeRequest,
} from '../types/register.types';

/**
 * Hook for sending verification code
 */
export const useSendVerificationCode = () => {
  return useMutation({
    mutationFn: (data: SendVerificationCodeRequest) =>
      sendVerificationCode(data),
    onSuccess: () => {
      console.log('Verification code sent successfully');
    },
    onError: (error: Error) => {
      console.error('Send verification code error:', error);
    },
  });
};

/**
 * Hook for verifying code
 */
export const useVerifyCode = () => {
  return useMutation({
    mutationFn: (data: VerifyCodeRequest) => verifyCode(data),
    onSuccess: () => {
      console.log('Code verified successfully');
    },
    onError: (error: Error) => {
      console.error('Verify code error:', error);
    },
  });
};

/**
 * Hook for user registration
 */
export const useRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterRequest) => registerUser(data),
    onSuccess: data => {
      console.log('Registration successful:', data);

      // Store token if provided
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }

      // Redirect to success page or dashboard
      router.push('/register/complete');
    },
    onError: (error: Error) => {
      console.error('Registration error:', error);
    },
  });
};

/**
 * Hook for social registration
 */
export const useSocialRegister = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ provider, token }: { provider: string; token: string }) =>
      registerWithSocial(provider, token),
    onSuccess: data => {
      console.log('Social registration successful:', data);

      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }

      router.push('/');
    },
    onError: (error: Error) => {
      console.error('Social registration error:', error);
    },
  });
};
