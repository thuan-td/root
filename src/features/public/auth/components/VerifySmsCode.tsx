'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Breadcrumb from '@/components/common/Breadcrumb';

interface VerifySmsCodeProps {
  phoneNumber?: string;
}

export default function VerifySmsCode({ phoneNumber }: VerifySmsCodeProps) {
  const router = useRouter();
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!verificationCode.trim()) {
      setError('認証コードを入力してください');
      return;
    }

    if (!/^\d{6}$/.test(verificationCode)) {
      setError('6桁の認証コードを入力してください');
      return;
    }

    setIsLoading(true);
    try {
      // TODO: Call API to verify SMS code
      console.log('Verifying SMS code:', verificationCode);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // On success, navigate to password reset page
      // router.push('/auth/reset-password');
    } catch (error) {
      setError('認証に失敗しました。もう一度お試しください。');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (value: string) => {
    // Only allow digits
    const sanitizedValue = value.replace(/\D/g, '').slice(0, 6);
    setVerificationCode(sanitizedValue);

    if (error) {
      setError('');
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <Breadcrumb
        items={[
          { label: 'ホーム', href: '/' },
          { label: 'パスワード再設定', href: '/auth/forgot-password' },
          { label: '認証コードの入力' },
        ]}
      />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center py-12 px-4 sm:px-6">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            パスワード再設定
          </h1>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            (認証コードの入力)
          </h2>
        </div>

        {/* Verification Card */}
        <div className="w-full max-w-2xl bg-white dark:bg-card-dark rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 sm:p-12 transition-all">
          <div className="flex flex-col items-center text-center mb-8">
            <p className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              認証コードを入力してください
            </p>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1 leading-relaxed">
              <p>送信された6桁の認証コードを入力して下さい。</p>
              <p>
                認証が完了すると、登録のメールアドレスに再設定登録用のURLが送られます。
              </p>
              {phoneNumber && (
                <p className="mt-4 font-medium text-gray-700 dark:text-gray-300">
                  送信先: {phoneNumber}
                </p>
              )}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
            <div className="mb-8">
              <label
                htmlFor="auth-code"
                className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2 text-left"
              >
                認証コード
              </label>
              <div className="relative">
                <input
                  id="auth-code"
                  name="auth-code"
                  type="text"
                  inputMode="numeric"
                  maxLength={6}
                  value={verificationCode}
                  onChange={e => handleInputChange(e.target.value)}
                  placeholder="認証コードの入力"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded border ${
                    error
                      ? 'border-red-500'
                      : 'border-gray-200 dark:border-gray-600'
                  } bg-gray-50 dark:bg-input-bg-dark text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow disabled:opacity-50 text-center text-2xl tracking-widest`}
                />
              </div>
              {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading || verificationCode.length !== 6}
                className="group relative flex items-center justify-center py-3 px-12 border border-transparent text-sm font-bold rounded-full text-white bg-gray-300 dark:bg-gray-600 hover:bg-primary dark:hover:bg-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary w-full sm:w-auto min-w-[200px] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-300 dark:disabled:hover:bg-gray-600"
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
                    <span className="ml-2">認証中...</span>
                  </>
                ) : (
                  <>
                    <span>認証する</span>
                    <span className="material-icons-outlined ml-2 text-base group-hover:translate-x-1 transition-transform">
                      arrow_forward_ios
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Resend Code Section */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              認証コードが届かない場合
            </p>
            <button
              type="button"
              onClick={() => router.back()}
              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium underline underline-offset-4 decoration-blue-500/30"
            >
              前の画面に戻る
            </button>
          </div>
        </div>
      </main>

      <div className="h-12"></div>
    </div>
  );
}
