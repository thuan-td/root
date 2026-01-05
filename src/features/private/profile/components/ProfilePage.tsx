'use client';

import { useState, useEffect } from 'react';
import DashboardSidebar from '../../dashboard/components/DashboardSidebar';
import StepIndicator from './StepIndicator';
import ProfileConfirmation from './ProfileConfirmation';
import ProfileComplete from './ProfileComplete';
import { useProfile, useUpdateProfile } from '../hooks';
import { ProfileService } from '../services/profile.service';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import type {
  ProfileFormData,
  ProfileValidationErrors,
  ProfileStep,
} from '../types/profile.types';
import { FormButton } from '@/components/common/FormButton';

interface FormInputProps {
  id: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  className?: string;
}

function FormInput({
  id,
  label,
  required = false,
  value,
  onChange,
  error,
  type = 'text',
  className = 'sm:col-span-8',
}: FormInputProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-center">
      <div className="sm:col-span-4 flex items-center justify-between sm:justify-start gap-2">
        <label
          className="block text-sm font-bold text-text-light dark:text-text-dark"
          htmlFor={id}
        >
          {label}
        </label>
        {required && (
          <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-badge-bg text-badge-text border border-badge-border dark:bg-red-900/30 dark:text-red-300 dark:border-red-800">
            必須
          </span>
        )}
      </div>
      <div className={className}>
        <input
          className={`w-full rounded-md border ${
            error
              ? 'border-red-500 dark:border-red-500'
              : 'border-gray-300 dark:border-gray-600'
          } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary shadow-sm sm:text-sm py-2.5 px-3`}
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
      </div>
    </div>
  );
}

export default function ProfilePage() {
  const { data: profileData, isLoading, isError, error } = useProfile();
  const updateProfile = useUpdateProfile();

  const [currentStep, setCurrentStep] = useState<ProfileStep>(1);
  const [formData, setFormData] = useState<ProfileFormData>({
    lastName: '',
    firstName: '',
    lastNameKana: '',
    firstNameKana: '',
    phone1: '',
    phone2: '',
    phone3: '',
    email: '',
  });

  const [errors, setErrors] = useState<ProfileValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Populate form when profile data loads
  useEffect(() => {
    if (profileData) {
      setFormData({
        lastName: profileData.lastName,
        firstName: profileData.firstName,
        lastNameKana: profileData.lastNameKana,
        firstNameKana: profileData.firstNameKana,
        phone1: profileData.phone1,
        phone2: profileData.phone2,
        phone3: profileData.phone3,
        email: profileData.email,
      });
    }
  }, [profileData]);

  const validateForm = (): boolean => {
    const newErrors: ProfileValidationErrors = {};

    // Validate required fields
    if (!formData.lastName.trim()) {
      newErrors.lastName = '姓を入力してください';
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = '名を入力してください';
    }

    if (!formData.lastNameKana.trim()) {
      newErrors.lastNameKana = 'セイを入力してください';
    } else if (!ProfileService.isValidKatakana(formData.lastNameKana)) {
      newErrors.lastNameKana = '全角カタカナで入力してください';
    }

    if (!formData.firstNameKana.trim()) {
      newErrors.firstNameKana = 'メイを入力してください';
    } else if (!ProfileService.isValidKatakana(formData.firstNameKana)) {
      newErrors.firstNameKana = '全角カタカナで入力してください';
    }

    // Validate phone number
    if (!ProfileService.isValidPhonePart(formData.phone1, 1)) {
      newErrors.phone1 = '3桁の数字を入力してください';
    }

    if (!ProfileService.isValidPhonePart(formData.phone2, 2)) {
      newErrors.phone2 = '4桁の数字を入力してください';
    }

    if (!ProfileService.isValidPhonePart(formData.phone3, 3)) {
      newErrors.phone3 = '4桁の数字を入力してください';
    }

    // Validate email
    if (formData.email && !ProfileService.isValidEmail(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Move to confirmation step
    setCurrentStep(2);
  };

  const handleBack = () => {
    setCurrentStep(1);
  };

  const handleConfirm = async () => {
    setIsSubmitting(true);

    try {
      const updateRequest = ProfileService.formDataToUpdateRequest(formData);

      await updateProfile.mutateAsync(updateRequest);

      // Move to complete step
      setCurrentStep(3);
    } catch (err) {
      console.error('Failed to update profile:', err);
      alert(
        err instanceof Error
          ? err.message
          : '更新に失敗しました。もう一度お試しください。',
      );
      // Go back to step 1 on error
      setCurrentStep(1);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof ProfileFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background-admin))] dark:bg-background-dark">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background-admin))] dark:bg-background-dark">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            エラーが発生しました
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {error?.message || 'データの読み込みに失敗しました'}
          </p>
        </div>
      </div>
    );
  }

  const userName = `${profileData?.lastName} ${profileData?.firstName}`;

  return (
    <div className="text-gray-800 bg-[hsl(var(--background-admin))] dark:text-gray-200 min-h-screen flex flex-col font-body">
      {/* Header */}
      <header className="w-full dark:bg-surface-dark py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-center text-2xl font-bold tracking-wide text-black dark:text-white">
          会員情報変更
        </h1>
      </header>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <DashboardSidebar userName={userName} />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10 flex flex-col items-center">
          {/* Step Indicator */}
          <StepIndicator currentStep={currentStep} />

          {/* Step 1: Form Input */}
          {currentStep === 1 && (
            <div className="w-full max-w-2xl bg-white dark:bg-surface-dark rounded-xl shadow-soft p-8 sm:p-12 border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
                変更する会員情報を入力してください。
              </h2>

              <form onSubmit={handleNext} className="space-y-6">
                <FormInput
                  id="lastName"
                  label="姓（全角）"
                  required
                  value={formData.lastName}
                  onChange={value => handleInputChange('lastName', value)}
                  error={errors.lastName}
                />

                <FormInput
                  id="firstName"
                  label="名（全角）"
                  required
                  value={formData.firstName}
                  onChange={value => handleInputChange('firstName', value)}
                  error={errors.firstName}
                />

                <FormInput
                  id="lastNameKana"
                  label="セイ（全角）"
                  required
                  value={formData.lastNameKana}
                  onChange={value => handleInputChange('lastNameKana', value)}
                  error={errors.lastNameKana}
                />

                <FormInput
                  id="firstNameKana"
                  label="メイ（全角）"
                  required
                  value={formData.firstNameKana}
                  onChange={value => handleInputChange('firstNameKana', value)}
                  error={errors.firstNameKana}
                />

                {/* Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-start">
                  <div className="sm:col-span-4 flex items-center justify-between sm:justify-start gap-2">
                    <label className="block text-sm font-bold text-gray-900 dark:text-white">
                      電話番号
                    </label>
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-badge-bg text-badge-text border border-badge-border dark:bg-red-900/30 dark:text-red-300 dark:border-red-800">
                      必須
                    </span>
                  </div>
                  <div className="sm:col-span-8 flex gap-3">
                    <div className="w-1/3">
                      <input
                        className={`w-full rounded-md border ${
                          errors.phone1
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary shadow-sm sm:text-sm py-2.5 px-3 text-center`}
                        id="phone1"
                        type="text"
                        value={formData.phone1}
                        onChange={e =>
                          handleInputChange('phone1', e.target.value)
                        }
                        maxLength={3}
                      />
                      {errors.phone1 && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone1}
                        </p>
                      )}
                    </div>
                    <div className="w-1/3">
                      <input
                        className={`w-full rounded-md border ${
                          errors.phone2
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary shadow-sm sm:text-sm py-2.5 px-3 text-center`}
                        id="phone2"
                        type="text"
                        value={formData.phone2}
                        onChange={e =>
                          handleInputChange('phone2', e.target.value)
                        }
                        maxLength={4}
                      />
                      {errors.phone2 && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone2}
                        </p>
                      )}
                    </div>
                    <div className="w-1/3">
                      <input
                        className={`w-full rounded-md border ${
                          errors.phone3
                            ? 'border-red-500'
                            : 'border-gray-300 dark:border-gray-600'
                        } bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:border-primary focus:ring-primary shadow-sm sm:text-sm py-2.5 px-3 text-center`}
                        id="phone3"
                        type="text"
                        value={formData.phone3}
                        onChange={e =>
                          handleInputChange('phone3', e.target.value)
                        }
                        maxLength={4}
                      />
                      {errors.phone3 && (
                        <p className="mt-1 text-xs text-red-500">
                          {errors.phone3}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <FormInput
                  id="email"
                  label="メールアドレス"
                  type="email"
                  value={formData.email}
                  onChange={value => handleInputChange('email', value)}
                  error={errors.email}
                />

                {/* Submit Button */}
                <div className="pt-10 flex justify-center">
                  <FormButton
                    variant="secondary"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    type="submit"
                    className="relative group"
                  >
                    <span>入力内容を確認する</span>
                    {!isSubmitting && (
                      <span className="absolute right-4 w-4 h-4 bg-white rounded-full flex items-center justify-center text-button-secondary">
                        <span className="material-icons-outlined !text-[15px]">
                          chevron_right
                        </span>
                      </span>
                    )}
                  </FormButton>
                </div>
              </form>
            </div>
          )}

          {/* Step 2: Confirmation */}
          {currentStep === 2 && (
            <ProfileConfirmation
              data={ProfileService.formDataToConfirmationData(formData)}
              onBack={handleBack}
              onConfirm={handleConfirm}
              isSubmitting={isSubmitting}
            />
          )}

          {/* Step 3: Complete */}
          {currentStep === 3 && <ProfileComplete userName={userName} />}
        </main>
      </div>
    </div>
  );
}
