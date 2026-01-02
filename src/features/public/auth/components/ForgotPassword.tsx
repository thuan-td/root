'use client';

import { useState } from 'react';
import Link from 'next/link';
import Breadcrumb from '@/components/common/Breadcrumb';

interface ForgotPasswordFormData {
  emailAddress: string;
  phoneNumber: string;
}

interface ValidationErrors {
  [key: string]: string;
}

export default function ForgotPassword() {
  const [formData, setFormData] = useState<ForgotPasswordFormData>({
    emailAddress: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone: string): boolean => {
    const phoneRegex = /^0\d{9,10}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: ValidationErrors = {};

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'メールアドレスを入力してください';
    } else if (!validateEmail(formData.emailAddress)) {
      newErrors.emailAddress = '有効なメールアドレスを入力してください';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Call API to send verification code via email
      console.log('Sending verification code to:', formData.emailAddress);
      setSuccessMessage('認証コードをメールで送信しました');
      setTimeout(() => {
        // Navigate to verification step
      }, 2000);
    } catch (error) {
      setErrors({
        emailAddress: 'メール送信に失敗しました。もう一度お試しください。',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitSMS = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: ValidationErrors = {};

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = '電話番号を入力してください';
    } else if (!validatePhoneNumber(formData.phoneNumber)) {
      newErrors.phoneNumber =
        '有効な電話番号を入力してください（例: 09012345678）';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Call API to send verification code via SMS
      console.log('Sending verification code to:', formData.phoneNumber);
      setSuccessMessage('認証コードをSMSで送信しました');
      setTimeout(() => {
        // Navigate to verification step
      }, 2000);
    } catch (error) {
      setErrors({
        phoneNumber: 'SMS送信に失敗しました。もう一度お試しください。',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (
    field: keyof ForgotPasswordFormData,
    value: string,
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <Breadcrumb
        items={[{ label: 'ホーム', href: '/' }, { label: 'パスワード再設定' }]}
      />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start pt-4 pb-12 px-4">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">
            パスワード再設定
          </h1>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
            (2段階認証)
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
            登録されたメールアドレスに6桁の認証コードを送信します。
            <br className="hidden md:block" />
            メールアドレスが不明な方はSMSに認証コードを送信します。
          </p>
        </div>

        {/* Success Message */}
        {successMessage && (
          <div className="w-full max-w-2xl mb-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-600 dark:text-green-400 px-4 py-3 rounded-lg text-sm">
            {successMessage}
          </div>
        )}

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {/* Email Method */}
          <div className="bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm p-8 md:p-10 flex flex-col items-center text-center">
            <div className="mb-4">
              <span className="material-icons-outlined text-5xl text-primary">
                email
              </span>
            </div>
            <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-white">
              メールで認証
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 w-full text-left">
              ご登録のメールアドレスに6桁の確認コードを送信します。
            </p>

            <form onSubmit={handleSubmitEmail} className="w-full space-y-6">
              <div className="w-full text-left">
                <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">
                  メールアドレス
                </label>
                <input
                  type="email"
                  value={formData.emailAddress}
                  onChange={e =>
                    handleInputChange('emailAddress', e.target.value)
                  }
                  placeholder="(例) example@rootstorage.jp"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded border ${
                    errors.emailAddress
                      ? 'border-red-500'
                      : 'border-gray-200 dark:border-gray-600'
                  } bg-gray-50 dark:bg-input-bg-dark text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow disabled:opacity-50`}
                />
                {errors.emailAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                    <span>送信中...</span>
                  </>
                ) : (
                  <>
                    <span>認証コードの送信</span>
                    <span className="material-icons-outlined text-sm">
                      arrow_forward_ios
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* SMS Method */}
          <div className="bg-white dark:bg-card-dark border border-gray-100 dark:border-gray-700 rounded-xl shadow-sm p-8 md:p-10 flex flex-col items-center text-center">
            <div className="mb-4">
              <span className="material-icons-outlined text-5xl text-primary">
                smartphone
              </span>
            </div>
            <h3 className="text-lg font-bold mb-6 text-gray-800 dark:text-white">
              SMSで認証
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 w-full text-left">
              ご登録の電話番号に6桁の確認コードを送信します。
            </p>

            <form onSubmit={handleSubmitSMS} className="w-full space-y-6">
              <div className="w-full text-left">
                <label className="block text-sm font-bold mb-2 text-gray-700 dark:text-gray-300">
                  電話番号
                </label>
                <input
                  type="tel"
                  value={formData.phoneNumber}
                  onChange={e =>
                    handleInputChange('phoneNumber', e.target.value)
                  }
                  placeholder="(例) 09012345678"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded border ${
                    errors.phoneNumber
                      ? 'border-red-500'
                      : 'border-gray-200 dark:border-gray-600'
                  } bg-gray-50 dark:bg-input-bg-dark text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow disabled:opacity-50`}
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center space-x-2 transition-colors disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
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
                    <span>送信中...</span>
                  </>
                ) : (
                  <>
                    <span>認証コードの送信</span>
                    <span className="material-icons-outlined text-sm">
                      arrow_forward_ios
                    </span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Help Link */}
        <div className="mt-12 text-center w-full border-t border-gray-300 dark:border-gray-700 pt-8">
          <Link
            href="/contact"
            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium underline underline-offset-4 decoration-blue-500/30"
          >
            登録のメールアドレスをお忘れですか？
          </Link>
        </div>
      </main>

      <div className="h-20"></div>
    </div>
  );
}
