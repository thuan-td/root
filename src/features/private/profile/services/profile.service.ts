import type {
  ProfileData,
  ProfileFormData,
  ProfileConfirmationData,
  ProfileStepInfo,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from '../types/profile.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * Profile Service
 * Handles all profile-related API calls
 */
export class ProfileService {
  /**
   * Fetch user profile data
   * @returns Promise with profile data
   */
  static async getProfile(): Promise<ProfileData> {
    try {
      // In development, use mock data
      if (process.env.NODE_ENV === 'development') {
        return await this.getMockProfile();
      }

      // In production, call actual API
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add auth token from cookies or localStorage
          // 'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch profile: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching profile:', error);
      // Fallback to mock data on error
      return await this.getMockProfile();
    }
  }

  /**
   * Update user profile
   * @param data - Profile data to update
   * @returns Promise with update response
   */
  static async updateProfile(
    data: UpdateProfileRequest,
  ): Promise<UpdateProfileResponse> {
    try {
      // In development, simulate API call
      if (process.env.NODE_ENV === 'development') {
        return await this.mockUpdateProfile(data);
      }

      // In production, call actual API
      const response = await fetch(`${API_BASE_URL}/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Add auth token from cookies or localStorage
          // 'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Failed to update profile: ${response.status}`,
        );
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error updating profile:', error);
      throw error;
    }
  }

  /**
   * Mock profile data for development
   */
  private static async getMockProfile(): Promise<ProfileData> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      id: 'user-123',
      lastName: '山田',
      firstName: '太郎',
      lastNameKana: 'ヤマダ',
      firstNameKana: 'タロウ',
      phone1: '090',
      phone2: '1234',
      phone3: '5678',
      email: 'example@rootstorage.jp',
      createdAt: '2024-01-01T00:00:00Z',
      updatedAt: '2024-01-15T00:00:00Z',
    };
  }

  /**
   * Mock update profile for development
   */
  private static async mockUpdateProfile(
    data: UpdateProfileRequest,
  ): Promise<UpdateProfileResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Split phone number back into parts for mock data
    const phoneNumber = data.phoneNumber.replace(/-/g, '');
    const phone1 = phoneNumber.slice(0, 3);
    const phone2 = phoneNumber.slice(3, 7);
    const phone3 = phoneNumber.slice(7, 11);

    return {
      success: true,
      message: '会員情報が正常に更新されました',
      data: {
        id: 'user-123',
        lastName: data.lastName,
        firstName: data.firstName,
        lastNameKana: data.lastNameKana,
        firstNameKana: data.firstNameKana,
        phone1,
        phone2,
        phone3,
        email: data.email,
        createdAt: '2024-01-01T00:00:00Z',
        updatedAt: new Date().toISOString(),
      },
    };
  }

  /**
   * Validate email format
   */
  static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate full-width katakana
   */
  static isValidKatakana(text: string): boolean {
    const katakanaRegex = /^[ァ-ヶー]+$/;
    return katakanaRegex.test(text);
  }

  /**
   * Validate phone number part
   */
  static isValidPhonePart(part: string, partNumber: 1 | 2 | 3): boolean {
    if (!part) return false;
    const digitRegex = /^\d+$/;
    if (!digitRegex.test(part)) return false;

    // Validate length based on part number
    if (partNumber === 1) return part.length === 3;
    if (partNumber === 2) return part.length === 4;
    if (partNumber === 3) return part.length === 4;

    return false;
  }

  /**
   * Get step information
   */
  static getStepInfo(): ProfileStepInfo[] {
    return [
      { step: 1, label: '会員情報の入力' },
      { step: 2, label: '入力内容の確認' },
      { step: 3, label: '変更の完了' },
    ];
  }

  /**
   * Format phone number for display (090 - 1234 - 5678)
   */
  static formatPhoneNumber(
    phone1: string,
    phone2: string,
    phone3: string,
  ): string {
    return `${phone1} - ${phone2} - ${phone3}`;
  }

  /**
   * Combine phone number parts (090-1234-5678)
   */
  static combinePhoneNumber(
    phone1: string,
    phone2: string,
    phone3: string,
  ): string {
    return `${phone1}-${phone2}-${phone3}`;
  }

  /**
   * Convert form data to confirmation data
   */
  static formDataToConfirmationData(
    formData: ProfileFormData,
  ): ProfileConfirmationData {
    return {
      lastName: formData.lastName,
      firstName: formData.firstName,
      lastNameKana: formData.lastNameKana,
      firstNameKana: formData.firstNameKana,
      phone: this.formatPhoneNumber(
        formData.phone1,
        formData.phone2,
        formData.phone3,
      ),
      email: formData.email,
    };
  }

  /**
   * Convert form data to update request
   */
  static formDataToUpdateRequest(
    formData: ProfileFormData,
  ): UpdateProfileRequest {
    return {
      lastName: formData.lastName,
      firstName: formData.firstName,
      lastNameKana: formData.lastNameKana,
      firstNameKana: formData.firstNameKana,
      phoneNumber: this.combinePhoneNumber(
        formData.phone1,
        formData.phone2,
        formData.phone3,
      ),
      email: formData.email,
    };
  }
}
