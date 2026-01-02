'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLogin } from '../hooks/useLogin';
import { ContactCTASection } from '../../home/components';
import Breadcrumb from '@/components/common/Breadcrumb';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface ValidationErrors {
  [key: string]: string;
}

export default function Login() {
  const { mutate: login, isPending, error } = useLogin();

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    // Validate email
    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '有効なメールアドレスを入力してください';
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = 'パスワードを入力してください';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      login({
        email: formData.email,
        password: formData.password,
        rememberMe: formData.rememberMe,
      });
    }
  };

  const handleInputChange = (
    field: keyof LoginFormData,
    value: string | boolean,
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    // Clear error for this field when user starts typing
    if (errors[field]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSocialLogin = (provider: string) => {
    // TODO: Implement social login
    console.log('Login with:', provider);
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 min-h-screen flex flex-col">
      <Breadcrumb
        items={[{ label: 'ホーム', href: '/' }, { label: 'ログイン' }]}
      />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-start pt-4 pb-12 px-4">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white tracking-wide">
          ログイン
        </h1>

        {/* Login Form Card */}
        <div className="w-full max-w-4xl bg-white dark:bg-card-dark rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-none border border-gray-100 dark:border-gray-700 p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-bold text-gray-700 dark:text-gray-300"
              >
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={e => handleInputChange('email', e.target.value)}
                placeholder="(例) example@rootstorage.jp"
                className={`w-full px-4 py-3 rounded-md border ${
                  errors.email
                    ? 'border-red-500'
                    : 'border-gray-200 dark:border-gray-600'
                } bg-gray-50 dark:bg-input-bg-dark text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-500 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-shadow`}
                disabled={isPending}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-bold text-gray-700 dark:text-gray-300"
              >
                パスワード
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={e => handleInputChange('password', e.target.value)}
                  className={`w-full px-4 py-3 rounded-md border-2 ${
                    errors.password
                      ? 'border-red-500'
                      : 'border-gray-200 dark:border-gray-600'
                  } bg-gray-50 dark:bg-input-bg-dark text-gray-900 dark:text-white placeholder-gray-400 focus:ring-2 focus:ring-teal-100 dark:focus:ring-teal-900 focus:border-teal-500 dark:focus:border-teal-500 outline-none transition-all pr-10`}
                  disabled={isPending}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400"
                >
                  <span className="material-icons-outlined text-xl">
                    {showPassword ? 'visibility' : 'visibility_off'}
                  </span>
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                ※小文字、大文字、数字を含む8文字以上で入力してください
              </p>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center justify-center mt-6 mb-6">
              <input
                type="checkbox"
                id="remember-me"
                name="remember-me"
                checked={formData.rememberMe}
                onChange={e =>
                  handleInputChange('rememberMe', e.target.checked)
                }
                className="h-5 w-5 text-gray-300 border-gray-300 rounded focus:ring-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:checked:bg-gray-500"
                disabled={isPending}
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm font-bold text-gray-600 dark:text-gray-300"
              >
                次回から自動ログインする
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg text-sm">
                {error.message || 'ログインに失敗しました'}
              </div>
            )}

            {/* Login Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isPending}
                className="w-full max-w-xs flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-bold text-white bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 transition-colors disabled:opacity-50"
              >
                {isPending ? (
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
                    <span>ログイン中...</span>
                  </>
                ) : (
                  <>
                    <span>ログイン</span>
                    <span className="material-icons-outlined text-sm ml-1 self-center">
                      chevron_right
                    </span>
                  </>
                )}
              </button>
            </div>

            {/* Forgot Password Link */}
            <div className="text-center mt-4">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 underline decoration-1 underline-offset-2"
              >
                パスワードをお忘れですか？
              </Link>
            </div>
          </form>

          <hr className="my-8 border-gray-200 dark:border-gray-700 w-full" />

          {/* Social Login Section */}
          <div className="mt-6">
            <p className="text-center text-xs font-bold text-gray-600 dark:text-gray-400 mb-4">
              外部IDでログイン
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* LINE */}
              <button
                onClick={() => handleSocialLogin('LINE')}
                disabled={isPending}
                className="flex items-center justify-center w-full px-4 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#06C755] hover:bg-[#05b34c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#06C755] transition-colors disabled:opacity-50"
              >
                <i className="fab fa-line text-2xl mr-2"></i>
                <span className="flex-grow text-center text-xs sm:text-sm">
                  LINEでログイン
                </span>
              </button>

              {/* Google */}
              <button
                onClick={() => handleSocialLogin('Google')}
                disabled={isPending}
                className="flex items-center justify-center w-full px-4 py-2.5 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-sm font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors disabled:opacity-50"
              >
                <img
                  alt="Google Logo"
                  className="w-5 h-5 mr-2"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlP_UTPQeqXTR1puDeoUKKHtNOeW2Wz2bbMjK2XPQuixgUtuKErrkKDP_LkHFLAkA3ToNbq1hiaU7RTzguDa53C4ZisliL2KW-h-X5nyoKyu6J3roEQvVi5cYyXpbQ74LaAbpeWVLivJfPGVOHD1d3m4E9mSgDzyvHihYNUa1yHDnyH2AzAvUHH8Sl5XGYsFZEJ2-jpqvr03XVxbgN5PUgv2-lkuxfpLSNrzchY-D0Xp1My4h5JSTCOp6DBq0AnvXQwwDgkTpqQCU"
                />
                <span className="flex-grow text-center text-xs sm:text-sm">
                  Googleでログイン
                </span>
              </button>

              {/* X (Twitter) */}
              <button
                onClick={() => handleSocialLogin('X')}
                disabled={isPending}
                className="flex items-center justify-center w-full px-4 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black dark:bg-black hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors disabled:opacity-50"
              >
                <i className="fa-brands fa-x-twitter text-lg mr-2"></i>
                <span className="flex-grow text-center text-xs sm:text-sm">
                  Xでログイン
                </span>
              </button>

              {/* Facebook */}
              <button
                onClick={() => handleSocialLogin('Facebook')}
                disabled={isPending}
                className="flex items-center justify-center w-full px-4 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1877F2] hover:bg-[#166fe5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1877F2] transition-colors disabled:opacity-50"
              >
                <i className="fab fa-facebook-f text-lg mr-2"></i>
                <span className="flex-grow text-center text-xs sm:text-sm">
                  Facebookでログイン
                </span>
              </button>
            </div>
          </div>

          {/* Register Link */}
          <div className="mt-12 text-center">
            <Link
              href="/register"
              className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 underline decoration-1 underline-offset-2"
            >
              新規登録の方はこちら
            </Link>
          </div>
        </div>
      </main>
      <ContactCTASection />
    </div>
  );
}
