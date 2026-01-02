// Register form data types
export interface RegisterStep1Data {
  email: string;
  verificationCode?: string;
}

export interface RegisterStep2Data {
  lastName: string; // 姓（全角）
  firstName: string; // 名（全角）
  lastNameKana: string; // セイ（全角）
  firstNameKana: string; // メイ（全角）
  phoneNumber1: string; // 電話番号 1
  phoneNumber2: string; // 電話番号 2
  phoneNumber3: string; // 電話番号 3
  password: string;
  passwordConfirm?: string;
  agreeToTerms: boolean;
}

export interface RegisterFormData
  extends RegisterStep1Data, RegisterStep2Data {}

export interface RegisterRequest {
  email: string;
  verificationCode?: string;
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  phoneNumber: string; // Combined phone number
  password: string;
  agreeToTerms: boolean;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  userId?: string;
  token?: string;
}

export interface SendVerificationCodeRequest {
  email: string;
}

export interface SendVerificationCodeResponse {
  success: boolean;
  message: string;
}

export interface VerifyCodeRequest {
  email: string;
  code: string;
}

export interface VerifyCodeResponse {
  success: boolean;
  message: string;
}
