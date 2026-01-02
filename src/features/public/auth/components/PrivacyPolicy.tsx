'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface PrivacyPolicyProps {
  onAgree?: () => void;
  showAgreeButton?: boolean;
  returnUrl?: string;
}

export default function PrivacyPolicy({
  onAgree,
  showAgreeButton = true,
  returnUrl = '/register',
}: PrivacyPolicyProps) {
  const router = useRouter();

  const handleAgree = () => {
    if (onAgree) {
      onAgree();
    } else {
      router.push(returnUrl);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col font-sans">
      {/* Header */}
      <header className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 py-3 px-6 md:px-12 flex items-center justify-between">
        <nav className="flex items-center space-x-6 text-sm">
          <a
            href="/"
            className="text-primary hover:text-red-700 dark:text-red-400 font-medium transition-colors duration-200 flex items-center gap-1"
          >
            ホーム
          </a>
          <span className="text-gray-300 dark:text-gray-600">|</span>
          <a
            href="/register"
            className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-red-400 transition-colors duration-200"
          >
            会員登録
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-8 lg:p-12">
        <div className="bg-white dark:bg-gray-800 w-full max-w-[900px] rounded-xl shadow-lg border border-gray-200 dark:border-gray-600 p-8 md:p-16 lg:p-20">
          <h1 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            プライバシーポリシーとウェブサイト利用規約
          </h1>

          <div className="space-y-12 text-sm md:text-base leading-relaxed text-gray-700 dark:text-gray-300">
            {/* Section 1 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 border-l-4 border-gray-300 dark:border-gray-500 pl-3">
                1. 個人情報の保護についての考え方
              </h2>
              <p className="mb-6">
                当社は、当社の業務を円滑に行う為、お客さまの氏名、住所、電話番号、Eメールアドレス等の情報を取得・利用させて頂いております。
              </p>
              <p className="mb-6">
                当社は、これらのお客さまの個人情報（以下「個人情報」）の適正な保護を重大な責務と認識し、その責務を果たす為に、次の方針のもとで個人情報を取り扱います。
              </p>
              <ol className="list-decimal list-outside ml-6 space-y-3 pl-2">
                <li>
                  個人情報に適用される個人情報の保護に関する法律その他の関係法令を遵守すると共に、一般に公正妥当と認められる個人情報の取扱いに関する慣行に準拠し適切に取り扱います。
                  <br />
                  また、適宜、取扱いの改善に努めます。
                </li>
                <li>
                  個人情報の取扱いに関する規程を明確にし、従業員に周知徹底します。また、取引先等に対しても、適切に個人情報を取り扱うように要請します。
                </li>
                <li>
                  個人情報の取得に際しては、利用目的を特定して通知または公表し、その利用目的に従って個人情報を取り扱います。
                </li>
                <li>
                  個人情報の漏洩、紛失、改ざん等を防止するため、必要な対策を講じて適切な管理を行います。
                </li>
                <li>
                  保有する個人情報について、お客さま本人からの開示、訂正、削除、利用停止の依頼を所定の窓口でお受けして、誠意をもって対応します。
                </li>
              </ol>
              <p className="mt-6">
                具体的には、以下の内容に従って個人情報を取り扱います。
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-lg md:text-xl font-bold mb-4 text-gray-900 dark:text-gray-100 border-l-4 border-gray-300 dark:border-gray-500 pl-3">
                2. 利用目的等
              </h2>
              <p className="mb-6">
                当社は、レンタル収納スペース、レンタルオフィス、ガレージ、駐車場の賃貸、運営及び管理、工事の設計・施工・監理・請負に関する業務を行うことに伴い、事業運行上必要となる個人情報を取得します。これらの個人情報は上記の目的で利用させて頂きます。
              </p>
              <p className="mb-6">
                また、当社は、業務を円滑に進める為、業務の一部を委託し、業務委託先に対して、必要な範囲で個人情報を提供することがあります。この場合、当社は、これらの業務委託先との間で取扱いに関する契約の締結をはじめ、適切な監督を行います。
              </p>
            </section>
          </div>

          {/* Agree Button */}
          {showAgreeButton && (
            <div className="mt-16 flex justify-center">
              <button
                onClick={handleAgree}
                className="bg-primary hover:bg-red-700 text-white font-bold py-3 px-12 rounded-full shadow-md transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full max-w-xs text-center group"
              >
                <span>同意する</span>
                <span className="material-icons text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward_ios
                </span>
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Bottom Bar */}
      <div className="w-full h-2 bg-blue-500 dark:bg-blue-700"></div>
    </div>
  );
}
