import { apiClient } from '@/lib/api/client';
import { API_ROUTES } from '@/constants';
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
  ForgotPasswordRequest,
  ResetPasswordRequest,
  SocialLoginRequest,
} from '../types/auth.types';

// Login with email and password
export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>(API_ROUTES.LOGIN, data);
  return response.data;
}

// Register new user
export async function register(
  data: RegisterRequest,
): Promise<RegisterResponse> {
  const response = await apiClient.post<RegisterResponse>(
    API_ROUTES.REGISTER,
    data,
  );
  return response.data;
}

// Logout
export async function logout(): Promise<void> {
  await apiClient.post(API_ROUTES.LOGOUT);
}

// Verify email with code
export async function verifyEmail(
  data: VerifyEmailRequest,
): Promise<VerifyEmailResponse> {
  const response = await apiClient.post<VerifyEmailResponse>(
    API_ROUTES.VERIFY_EMAIL,
    data,
  );
  return response.data;
}

// Send password reset email
export async function forgotPassword(
  data: ForgotPasswordRequest,
): Promise<{ message: string }> {
  const response = await apiClient.post('/auth/forgot-password', data);
  return response.data;
}

// Reset password with token
export async function resetPassword(
  data: ResetPasswordRequest,
): Promise<{ message: string }> {
  const response = await apiClient.post('/auth/reset-password', data);
  return response.data;
}

// Social login (Google, Facebook, etc.)
export async function socialLogin(
  data: SocialLoginRequest,
): Promise<LoginResponse> {
  const response = await apiClient.post<LoginResponse>(
    `/auth/social/${data.provider}`,
    { accessToken: data.accessToken },
  );
  return response.data;
}

// Refresh access token
export async function refreshToken(
  refreshToken: string,
): Promise<{ token: string }> {
  const response = await apiClient.post<{ token: string }>(API_ROUTES.REFRESH, {
    refreshToken,
  });
  return response.data;
}

// Get current user profile
export async function getCurrentUser() {
  const response = await apiClient.get(API_ROUTES.USER_PROFILE);
  return response.data;
}
