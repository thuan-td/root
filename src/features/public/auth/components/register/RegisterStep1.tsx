import React from 'react';

interface RegisterStep1Props {
  email: string;
  error?: string;
  isPending: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onSocialRegister: (provider: string) => void;
}

export default function RegisterStep1({
  email,
  error,
  isPending,
  onEmailChange,
  onSubmit,
  onSocialRegister,
}: RegisterStep1Props) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm p-8 md:p-12 max-w-4xl mx-auto mt-16">
      <div className="text-center mb-10">
        <h3 className="text-xl font-bold mb-6">
          メールアドレスの登録を行ってください。
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
          ご本人確認のため、メールアドレスの認証を行います。
          <br />
          下記のフォームにメールアドレスを入力し、「認証コードの送信」ボタンを押してください。
          <br />
          入力いただいたアドレス宛に6桁の認証コードを送信します。
        </p>
      </div>

      <div className="max-w-xl mx-auto mb-12">
        <form onSubmit={onSubmit}>
          <label htmlFor="email" className="block text-sm font-bold mb-2">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => onEmailChange(e.target.value)}
            placeholder="(例) example@rootstorage.jp"
            className={`w-full p-3 border ${
              error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
            } rounded-lg bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-8 text-gray-800 dark:text-gray-100 placeholder-gray-400`}
            disabled={isPending}
          />
          {error && (
            <p className="text-red-500 text-xs mt-1 -mt-7 mb-6">{error}</p>
          )}

          <div className="text-center">
            <button
              type="submit"
              disabled={isPending}
              className="bg-gray-400 hover:bg-gray-500 dark:bg-gray-600 dark:hover:bg-gray-500 text-white font-bold py-3 px-8 rounded-full transition duration-300 flex items-center justify-center mx-auto space-x-2 w-64 disabled:opacity-50"
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
                  <span>送信中...</span>
                </>
              ) : (
                <>
                  <span>認証コードの送信</span>
                  <i className="fas fa-chevron-right text-sm"></i>
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      <hr className="border-gray-200 dark:border-gray-700 mb-10" />

      <div className="text-center">
        <h3 className="text-base font-bold mb-4">外部IDで登録</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
          ソーシャルアカウントでログインすると、登録に必要な情報が自動入力されます。
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500 mb-8">
          ※選択したサービスに登録されている情報の入力を省略することができます。自動入力されない必須項目は入力が必要です。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <button
            onClick={() => onSocialRegister('LINE')}
            disabled={isPending}
            className="flex items-center justify-center bg-[#06C755] hover:bg-[#05b04d] text-white font-bold py-3 px-4 rounded transition duration-300 w-full disabled:opacity-50"
          >
            <i className="fab fa-line text-2xl mr-2"></i>
            <span className="text-sm">LINEでログイン</span>
          </button>

          <button
            onClick={() => onSocialRegister('Google')}
            disabled={isPending}
            className="flex items-center justify-center bg-white dark:bg-gray-100 hover:bg-gray-50 text-gray-700 font-bold py-3 px-4 rounded border border-gray-300 dark:border-gray-400 transition duration-300 w-full disabled:opacity-50"
          >
            <img
              alt="Google G Logo"
              className="w-5 h-5 mr-2"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjoF6I74-xBsdZiOQgqgfYKr7j9yhlOalDt9QqR0R9X05ykRC-r7HfHc1MHIK_ONNFOtLvKh2eaOcTHqBMhG1ZyYvjTHF82BuRSd5OvvCYOV8eV01uKMLB_5B7TSGnKZCd2TqwSBNq9XSI5KeF7FpIxSp47TZTX-aM5ICWwqra1g4G7Z4SstfT3I94lg5kh_q-1anatZ8ibFC0QP4Vg0GunL99HjvTTqOoa9X690DfQ2VOor0CSGmvBV0kHWMtRtp2_DVdCGpjFhc"
            />
            <span className="text-sm">Googleでログイン</span>
          </button>

          <button
            onClick={() => onSocialRegister('X')}
            disabled={isPending}
            className="flex items-center justify-center bg-black hover:bg-gray-800 text-white font-bold py-3 px-4 rounded transition duration-300 w-full disabled:opacity-50"
          >
            <i className="fa-brands fa-x-twitter text-xl mr-2"></i>
            <span className="text-sm">Xでログイン</span>
          </button>

          <button
            onClick={() => onSocialRegister('Facebook')}
            disabled={isPending}
            className="flex items-center justify-center bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold py-3 px-4 rounded transition duration-300 w-full disabled:opacity-50"
          >
            <i className="fab fa-facebook-f text-xl mr-2"></i>
            <span className="text-sm">Facebookでログイン</span>
          </button>
        </div>
      </div>
    </div>
  );
}
