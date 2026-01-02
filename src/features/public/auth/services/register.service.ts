import axios from 'axios';
import {
  RegisterRequest,
  RegisterResponse,
  SendVerificationCodeRequest,
  SendVerificationCodeResponse,
  VerifyCodeRequest,
  VerifyCodeResponse,
} from '../../../public/auth/types/register.types';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';

/**
 * Send verification code to email
 */
export const sendVerificationCode = async (
  data: SendVerificationCodeRequest,
): Promise<SendVerificationCodeResponse> => {
  try {
    const response = await axios.post<SendVerificationCodeResponse>(
      `${API_BASE_URL}/auth/send-verification-code`,
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || 'コードの送信に失敗しました',
      );
    }
    throw new Error('コードの送信に失敗しました');
  }
};

/**
 * Verify email verification code
 */
export const verifyCode = async (
  data: VerifyCodeRequest,
): Promise<VerifyCodeResponse> => {
  try {
    const response = await axios.post<VerifyCodeResponse>(
      `${API_BASE_URL}/auth/verify-code`,
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || '認証コードが無効です');
    }
    throw new Error('認証コードが無効です');
  }
};

/**
 * Register new user
 */
export const registerUser = async (
  data: RegisterRequest,
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${API_BASE_URL}/auth/register`,
      data,
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || '会員登録に失敗しました');
    }
    throw new Error('会員登録に失敗しました');
  }
};

/**
 * Register with social provider
 */
export const registerWithSocial = async (
  provider: string,
  token: string,
): Promise<RegisterResponse> => {
  try {
    const response = await axios.post<RegisterResponse>(
      `${API_BASE_URL}/auth/register/social`,
      { provider, token },
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || 'ソーシャルログインに失敗しました',
      );
    }
    throw new Error('ソーシャルログインに失敗しました');
  }
};
