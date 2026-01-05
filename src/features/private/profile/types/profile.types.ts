// Profile Types

export type ProfileStep = 1 | 2 | 3;

export interface ProfileFormData {
  lastName: string; // 姓（全角）
  firstName: string; // 名（全角）
  lastNameKana: string; // セイ（全角）
  firstNameKana: string; // メイ（全角）
  phone1: string; // 電話番号 (090)
  phone2: string; // 電話番号 (1234)
  phone3: string; // 電話番号 (5678)
  email: string; // メールアドレス
}

export interface ProfileData extends ProfileFormData {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface UpdateProfileRequest {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  phoneNumber: string; // Combined phone number
  email: string;
}

export interface UpdateProfileResponse {
  success: boolean;
  message: string;
  data?: ProfileData;
}

export interface ProfileValidationErrors {
  lastName?: string;
  firstName?: string;
  lastNameKana?: string;
  firstNameKana?: string;
  phone1?: string;
  phone2?: string;
  phone3?: string;
  email?: string;
}

export interface ProfileStepInfo {
  step: ProfileStep;
  label: string;
}

export interface ProfileConfirmationData {
  lastName: string;
  firstName: string;
  lastNameKana: string;
  firstNameKana: string;
  phone: string; // Formatted as "090 - 1234 - 5678"
  email: string;
}
