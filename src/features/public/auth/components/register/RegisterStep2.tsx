import React, { useEffect } from 'react';
import Link from 'next/link';

interface RegisterStep2Props {
  formData: {
    lastName: string;
    firstName: string;
    lastNameKana: string;
    firstNameKana: string;
    phoneNumber1: string;
    phoneNumber2: string;
    phoneNumber3: string;
    email: string;
    password: string;
    agreeToTerms: boolean;
  };
  errors: {
    [key: string]: string;
  };
  onInputChange: (field: string, value: string | boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function RegisterStep2({
  formData,
  errors,
  onInputChange,
  onSubmit,
}: RegisterStep2Props) {
  // Check sessionStorage on mount to see if user agreed from privacy/terms page
  useEffect(() => {
    const privacyAgreed = sessionStorage.getItem('privacyPolicyAgreed');
    const termsAgreed = sessionStorage.getItem('termsAgreed');

    if (privacyAgreed === 'true' && termsAgreed === 'true') {
      onInputChange('agreeToTerms', true);
      // Clear the session storage flags
      sessionStorage.removeItem('privacyPolicyAgreed');
      sessionStorage.removeItem('termsAgreed');
    }
  }, [onInputChange]);

  return (
    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-sm border border-border-light dark:border-border-dark p-8 md:p-12">
      <p className="text-center font-bold text-lg mb-10 text-gray-800 dark:text-gray-100">
        登録する会員情報を入力してください。
      </p>

      <form onSubmit={onSubmit} className="space-y-8">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Last Name */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="w-auto sm:w-28 flex items-center gap-2 font-bold text-sm whitespace-nowrap">
              姓（全角）
              <span className="bg-red-50 text-red-500 border border-red-200 text-[10px] px-1.5 py-0.5 rounded dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                必須
              </span>
            </label>
            <input
              type="text"
              value={formData.lastName}
              onChange={e => onInputChange('lastName', e.target.value)}
              className={`flex-1 rounded-md border ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              } bg-gray-50 focus:border-primary focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white shadow-sm sm:text-sm h-10 px-3`}
            />
          </div>

          {/* First Name */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="w-auto sm:w-28 flex items-center gap-2 font-bold text-sm whitespace-nowrap">
              名（全角）
              <span className="bg-red-50 text-red-500 border border-red-200 text-[10px] px-1.5 py-0.5 rounded dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                必須
              </span>
            </label>
            <input
              type="text"
              value={formData.firstName}
              onChange={e => onInputChange('firstName', e.target.value)}
              placeholder="(例) 太郎"
              className={`flex-1 rounded-md border ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              } bg-white focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow-sm sm:text-sm h-10 px-3 placeholder-gray-300 dark:placeholder-gray-500`}
            />
          </div>
        </div>

        {/* Kana Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {/* Last Name Kana */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="w-auto sm:w-28 flex items-center gap-2 font-bold text-sm whitespace-nowrap">
              セイ（全角）
              <span className="bg-red-50 text-red-500 border border-red-200 text-[10px] px-1.5 py-0.5 rounded dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                必須
              </span>
            </label>
            <input
              type="text"
              value={formData.lastNameKana}
              onChange={e => onInputChange('lastNameKana', e.target.value)}
              placeholder="(例) ヤマダ"
              className={`flex-1 rounded-md border ${
                errors.lastNameKana ? 'border-red-500' : 'border-gray-300'
              } bg-white focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow-sm sm:text-sm h-10 px-3 placeholder-gray-300 dark:placeholder-gray-500`}
            />
          </div>

          {/* First Name Kana */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <label className="w-auto sm:w-28 flex items-center gap-2 font-bold text-sm whitespace-nowrap">
              メイ（全角）
              <span className="bg-red-50 text-red-500 border border-red-200 text-[10px] px-1.5 py-0.5 rounded dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
                必須
              </span>
            </label>
            <input
              type="text"
              value={formData.firstNameKana}
              onChange={e => onInputChange('firstNameKana', e.target.value)}
              placeholder="(例) タロウ"
              className={`flex-1 rounded-md border ${
                errors.firstNameKana ? 'border-red-500' : 'border-gray-300'
              } bg-white focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow-sm sm:text-sm h-10 px-3 placeholder-gray-300 dark:placeholder-gray-500`}
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <label className="w-auto sm:w-28 flex items-center gap-2 font-bold text-sm mt-2">
            電話番号
            <span className="bg-red-50 text-red-500 border border-red-200 text-[10px] px-1.5 py-0.5 rounded dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
              必須
            </span>
          </label>
          <div className="flex items-center gap-2 flex-1">
            <input
              type="tel"
              value={formData.phoneNumber1}
              onChange={e => onInputChange('phoneNumber1', e.target.value)}
              placeholder="(例) 090"
              maxLength={3}
              className={`w-24 rounded-md border ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              } bg-white focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow-sm sm:text-sm h-10 px-3 placeholder-gray-300 dark:placeholder-gray-500 text-center`}
            />
            <input
              type="tel"
              value={formData.phoneNumber2}
              onChange={e => onInputChange('phoneNumber2', e.target.value)}
              placeholder="(例) 1234"
              maxLength={4}
              className={`w-24 rounded-md border ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              } bg-white focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow-sm sm:text-sm h-10 px-3 placeholder-gray-300 dark:placeholder-gray-500 text-center`}
            />
            <input
              type="tel"
              value={formData.phoneNumber3}
              onChange={e => onInputChange('phoneNumber3', e.target.value)}
              placeholder="(例) 5678"
              maxLength={4}
              className={`w-24 rounded-md border ${
                errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
              } bg-white focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow-sm sm:text-sm h-10 px-3 placeholder-gray-300 dark:placeholder-gray-500 text-center`}
            />
          </div>
        </div>
        {errors.phoneNumber && (
          <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
        )}

        <hr className="border-gray-200 dark:border-gray-700 my-8" />

        {/* Email (Read-only) */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <label className="w-auto sm:w-28 flex items-center gap-2 font-bold text-sm mt-1">
            メールアドレス
          </label>
          <div className="flex-1 text-sm sm:text-base text-gray-900 dark:text-gray-100 font-medium pt-1">
            {formData.email}
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
          <label className="w-auto sm:w-28 flex items-center gap-2 font-bold text-sm mt-2">
            パスワード
            <span className="bg-red-50 text-red-500 border border-red-200 text-[10px] px-1.5 py-0.5 rounded dark:bg-red-900/20 dark:border-red-800 dark:text-red-400">
              必須
            </span>
          </label>
          <div className="flex-1 max-w-md">
            <input
              type="password"
              value={formData.password}
              onChange={e => onInputChange('password', e.target.value)}
              className={`w-full rounded-md border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } bg-white focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-600 dark:text-white shadow-sm sm:text-sm h-10 px-3`}
            />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              ※小文字、大文字、数字を含む8文字以上で入力してください
            </p>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
        </div>

        {/* Submit Section */}
        <div className="pt-8 flex flex-col items-center gap-8">
          {/* Terms Checkbox */}
          <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <input
              type="checkbox"
              id="terms"
              checked={formData.agreeToTerms}
              onChange={e => onInputChange('agreeToTerms', e.target.checked)}
              className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary dark:bg-gray-700 dark:border-gray-600"
            />
            <label className="cursor-pointer" htmlFor="terms">
              <Link
                href="/terms-of-service?returnUrl=/register"
                className="text-blue-500 hover:text-blue-600 hover:underline dark:text-blue-400"
                onClick={e => e.stopPropagation()}
              >
                利用規約
              </Link>
              、
              <Link
                href="/privacy-policy?returnUrl=/register"
                className="text-blue-500 hover:text-blue-600 hover:underline dark:text-blue-400"
                onClick={e => e.stopPropagation()}
              >
                プライバシーポリシー
              </Link>
              に同意する
            </label>
          </div>
          {errors.agreeToTerms && (
            <p className="text-red-500 text-xs mt-1">{errors.agreeToTerms}</p>
          )}

          <hr className="w-full max-w-md border-gray-200 dark:border-gray-700 sm:hidden" />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!formData.agreeToTerms}
            className={`group flex items-center justify-center gap-2 font-bold py-3 px-12 rounded-full transition-all duration-300 w-full sm:w-auto ${
              formData.agreeToTerms
                ? 'bg-primary hover:bg-red-700 text-white shadow-md hover:shadow-lg'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-600 dark:text-gray-400'
            }`}
          >
            入力内容を確認する
            <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward_ios
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
