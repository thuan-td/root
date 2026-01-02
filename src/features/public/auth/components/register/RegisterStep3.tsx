import React from 'react';

interface RegisterStep3Props {
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
  };
  isRegistering: boolean;
  registerError?: { message: string } | null;
  onBack: () => void;
  onSubmit: () => void;
}

export default function RegisterStep3({
  formData,
  isRegistering,
  registerError,
  onBack,
  onSubmit,
}: RegisterStep3Props) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 md:p-12 max-w-4xl mx-auto">
      <h2 className="text-center text-lg font-medium mb-10 text-gray-800 dark:text-gray-200">
        入力内容をご確認ください。
      </h2>

      <div className="space-y-6">
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700 pb-6">
          <div className="w-full md:w-1/2 flex mb-2 md:mb-0">
            <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">
              姓：
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {formData.lastName}
            </span>
          </div>
          <div className="w-full md:w-1/2 flex">
            <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">
              名：
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {formData.firstName}
            </span>
          </div>
        </div>

        {/* Kana Fields */}
        <div className="flex flex-col md:flex-row md:items-center border-b border-gray-100 dark:border-gray-700 pb-6">
          <div className="w-full md:w-1/2 flex mb-2 md:mb-0">
            <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">
              セイ：
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {formData.lastNameKana}
            </span>
          </div>
          <div className="w-full md:w-1/2 flex">
            <span className="w-24 text-gray-500 dark:text-gray-400 font-medium">
              メイ：
            </span>
            <span className="text-gray-900 dark:text-white font-medium">
              {formData.firstNameKana}
            </span>
          </div>
        </div>

        {/* Phone Number */}
        <div className="flex items-center border-b border-gray-100 dark:border-gray-700 pb-6">
          <span className="w-32 md:w-40 text-gray-500 dark:text-gray-400 font-medium shrink-0">
            電話番号：
          </span>
          <div className="text-gray-900 dark:text-white font-medium flex gap-2">
            <span>{formData.phoneNumber1}</span>
            <span className="text-gray-400">-</span>
            <span>{formData.phoneNumber2}</span>
            <span className="text-gray-400">-</span>
            <span>{formData.phoneNumber3}</span>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center border-b border-gray-100 dark:border-gray-700 pb-6">
          <span className="w-32 md:w-40 text-gray-500 dark:text-gray-400 font-bold shrink-0">
            メールアドレス：
          </span>
          <span className="text-gray-900 dark:text-white font-medium break-all">
            {formData.email}
          </span>
        </div>

        {/* Password (masked) */}
        <div className="flex items-center border-b border-gray-100 dark:border-gray-700 pb-6">
          <span className="w-32 md:w-40 text-gray-500 dark:text-gray-400 font-medium shrink-0">
            パスワード：
          </span>
          <div className="flex items-center space-x-1">
            {Array.from({ length: formData.password.length }).map(
              (_, index) => (
                <div
                  key={index}
                  className="w-2.5 h-2.5 rounded-full bg-gray-900 dark:bg-white"
                ></div>
              ),
            )}
          </div>
        </div>
      </div>

      {/* Error Message */}
      {registerError && (
        <div className="mt-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
          {registerError.message || '会員登録に失敗しました'}
        </div>
      )}

      {/* Action Buttons */}
      <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6">
        {/* Back Button */}
        <button
          type="button"
          onClick={onBack}
          disabled={isRegistering}
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-primary hover:bg-opacity-90 transition-colors text-white font-medium flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
        >
          <span className="material-icons text-sm">arrow_back_ios</span>
          <span>入力画面に戻る</span>
        </button>

        {/* Submit Button */}
        <button
          type="button"
          onClick={onSubmit}
          disabled={isRegistering}
          className="w-full sm:w-auto px-8 py-3 rounded-full bg-red-600 dark:bg-red-700 hover:bg-red-800 transition-colors text-white font-medium flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
        >
          {isRegistering ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>登録中...</span>
            </>
          ) : (
            <>
              <span>登録完了画面へ</span>
              <span className="material-icons text-sm">arrow_forward_ios</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
