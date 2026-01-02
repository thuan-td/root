import Link from 'next/link';

export default function RegisterStep4() {
  return (
    <div className="w-full bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-2xl md:rounded-3xl shadow-sm p-8 md:p-16 flex flex-col items-center text-center max-w-4xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">
        ご登録ありがとうございました。
      </h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-xl">
        マイページではお客さまの登録情報の確認・変更をはじめ、
        <br className="hidden md:inline" />
        ルートが取扱う物件情報やお知らせなど、便利な情報をお届けしています。
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 shadow-md hover:shadow-lg group"
      >
        <span>マイページトップへ</span>
        <span className="material-icons ml-2 text-xl group-hover:translate-x-1 transition-transform">
          arrow_circle_right
        </span>
      </Link>
    </div>
  );
}
