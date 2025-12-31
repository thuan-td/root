/**
 * ROOT Storage Landing Page
 *
 * Main landing page for ROOT Storage service
 * Optimized for SEO with metadata and structured data
 */

import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import Link from 'next/link';
import {
  StorageTypeCard,
  CampaignStoreCard,
  NewsCard,
  UseCaseCardLanding,
  TestimonialCard,
  FAQItem,
} from '@/features/service-detail/components';
import { SearchSection } from '@/features/service-detail/components/search-section';
import { LANDING_PAGE_DATA } from '@/features/service-detail/data/dummy';

/**
 * Generate metadata for SEO
 */
export const metadata: Metadata = {
  title: 'ルートストレージ - トランクルーム・レンタル収納 | ROOT STORAGE',
  description:
    '季節の品、趣味のアイテム、思い出の品...ルートストレージは、お部屋に入りきらない大切なものを保管できる屋内型トランクルームです。低価格が魅力のロッカーサイズから4畳以上のXLタイプまで、多彩な収納ニーズに対応。関東一円に約350拠点。',
  keywords: [
    'トランクルーム',
    'レンタル収納',
    'ルートストレージ',
    '収納スペース',
    '保管サービス',
    '24時間利用',
    'セキュリティ',
    '関東',
    '東京',
  ],
  openGraph: {
    title: 'ルートストレージ - トランクルーム・レンタル収納 | ROOT STORAGE',
    description:
      '季節の品、趣味のアイテム、思い出の品を安心して保管。24時間利用可能な屋内型トランクルーム。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ROOT STORAGE',
  },
};

/**
 * Generate structured data for SEO
 */
function generateStructuredData() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: '/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'ルートストレージ',
      },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'ルートストレージ',
    description:
      '24時間利用可能な屋内型トランクルーム。多彩なサイズ展開で個人から法人まで対応。',
    provider: {
      '@type': 'Organization',
      name: 'ルート株式会社',
    },
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}

/**
 * Landing Page Component
 */
export default function StorageLandingPage() {
  const data = LANDING_PAGE_DATA;

  return (
    <>
      {/* Structured Data */}
      {generateStructuredData()}

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-2 text-xs text-gray-500 dark:text-gray-400">
        <Link href="/" className="hover:underline">
          ホーム
        </Link>
        <span className="mx-1">&gt;</span>
        <span>ルートストレージ</span>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-black mb-1">
            {data.heroTitle}
          </h1>
          <div className="inline-block bg-primary text-white text-xs font-bold px-2 py-0.5 tracking-widest mb-6">
            STORAGE
          </div>
          <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-lg">
            <Image
              alt="Family moving items in living room"
              src={data.heroImage}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full bg-primary bg-opacity-90 py-6 text-center text-white px-4">
              <h2 className="text-lg md:text-2xl font-bold leading-relaxed">
                季節の模様替えから引っ越し荷物の仮置き場などに、
                <br className="hidden md:inline" />
                目的に応じて多彩な利用シーンをサポートします。
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-primary inline-block pb-1">
            ルートストレージとは
          </h2>
          <p className="mb-12 text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl">
            季節の品、趣味のアイテム、思い出の品...「ルートストレージ」は、お部屋に入りきらない大切なものを保管できる屋内型トランクルームです。
            <br />
            低価格が魅力のロッカーサイズから4畳以上のXLタイプまで、多彩な収納ニーズに対応。
            <br />
            ご家族の利用はもちろん、法人様の書類・在庫保管としてもご活用いただけます。
            <br />
            関東一円に約350拠点ありますので、お近くのルートストレージを探してみてください。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.features.map(feature => (
              <div key={feature.id} className="flex flex-col">
                <Image
                  alt={feature.title}
                  src={feature.imageUrl}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage Types Section */}
      <section className="py-16 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-b-2 border-primary inline-block pb-1">
            用途に応じたタイプが豊富
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {data.storageTypes.slice(0, 3).map(storageType => (
              <StorageTypeCard key={storageType.id} storageType={storageType} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.storageTypes.slice(3).map(storageType => (
              <StorageTypeCard key={storageType.id} storageType={storageType} />
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <SearchSection />

      {/* Contract Flow Section */}
      <section className="py-16 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2 text-left md:text-center">
            ご契約の流れ
          </h2>
          <p className="text-xs text-gray-500 mb-8 text-left md:text-center">
            お申込みから鍵の受け渡しまでは簡単3ステップ。
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center max-w-4xl mx-auto gap-4">
            {data.contractSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                {step.isMainStep ? (
                  <div className="flex flex-col items-center">
                    <span className="border border-primary text-primary text-xs px-2 py-0.5 rounded-full mb-2">
                      ステップ {String(step.stepNumber).padStart(2, '0')}
                    </span>
                    <div className="w-24 h-24 bg-surface-light dark:bg-surface-dark rounded-full flex items-center justify-center mb-2 shadow-sm border border-gray-100 dark:border-gray-700">
                      <span className="material-icons text-4xl text-gray-700 dark:text-gray-300">
                        {step.icon}
                      </span>
                    </div>
                    <span className="font-bold text-sm whitespace-pre-line">
                      {step.label}
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center">
                      <span className="material-icons text-4xl text-gray-700 dark:text-gray-300 mb-2">
                        {step.icon}
                      </span>
                      <div className="font-bold text-sm">{step.label}</div>
                    </div>
                  </div>
                )}
                {index < data.contractSteps.length - 1 && (
                  <span className="material-icons text-primary text-3xl transform rotate-90 md:rotate-0">
                    navigate_next
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="#"
              className="bg-primary text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-red-700 transition inline-flex items-center"
            >
              詳しくはこちらから{' '}
              <span className="material-icons text-sm ml-1">
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Usage Guide Section */}
      <section className="py-16 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-left">ご利用ガイド</h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-1/2">
              <Image
                alt="Usage Guide"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtCQ2vCqSy61ur_fXj61wZaVS-uFx_8o4fJ_vZenIv9XC54R_WoZAPbVOyfqYE-J8_y5ejR4nPPrbhAe0WyVdbqbNh0kbCaXQvKmjoL-RIH52lUSaigRoNTU-DoJ5suPjIcug3_73w_-WPf5yHwKEMVUxwY0DsmqrM6Hu06XUxC6uUw_rMhvFC1h_NjmAWue8RfDUAsINaGyiqx1JJ-YC-oiWaxgzwViw4sX1rY0mxpOdKorIFUDc7aMTcp5_8vadXsfANDpOJSsQ"
                width={600}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-bold mb-4">
                トランクルーム選びで知っておくべきポイント
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                トランクルームのサイズはさまざまです。保管するアイテムの大きさに応じて、適切なスペースを選びましょう。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                また、駅からのアクセスや駐車場の設備が大切です。電車での利用か車でのアクセスを考えると、そのあたりのポイントを確認することがおすすめです。
              </p>
              <Link
                href="#"
                className="bg-primary text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-red-700 transition inline-flex items-center"
              >
                詳しくはコチラから{' '}
                <span className="material-icons text-sm ml-1">
                  arrow_forward_ios
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Stores Section */}
      <section className="py-16 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">
            キャンペーン中のおすすめ店舗
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.campaignStores.map(store => (
              <CampaignStoreCard key={store.id} store={store} />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">新規オープン店舗</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.newsItems.map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">活用事例</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {data.useCases.map(useCase => (
              <UseCaseCardLanding key={useCase.id} useCase={useCase} />
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/use-cases"
              className="bg-primary text-white px-8 py-2 rounded-full text-xs font-bold hover:bg-red-700 transition inline-flex items-center"
            >
              一覧を見る{' '}
              <span className="material-icons text-sm ml-1">
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white dark:bg-background-dark">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">お客さまの声</h2>
          <div className="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
            {data.testimonials.map(testimonial => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="#"
              className="border border-primary text-primary px-12 py-3 rounded-full text-xs font-bold hover:bg-red-50 dark:hover:bg-gray-800 transition inline-block"
            >
              もっと見る
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-surface-light dark:bg-surface-dark">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold mb-8 text-center">よくある質問</h2>
          <div className="space-y-4">
            {data.faqs.map(faq => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="#"
              className="bg-primary text-white px-8 py-2 rounded-full text-xs font-bold hover:bg-red-700 transition inline-flex items-center"
            >
              一覧を見る{' '}
              <span className="material-icons text-sm ml-1">
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-white dark:bg-background-dark py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-center">
          <h3 className="font-bold text-sm mb-8">
            ご相談されたい方は、お問い合わせフォームからお気軽にお問い合わせください。
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="text-left">
              <div className="text-xs text-gray-500 mb-1 font-bold">TEL.</div>
              <div className="text-4xl font-bold text-primary leading-none mb-2">
                045-263-9715
              </div>
              <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                <span className="border border-gray-400 px-1 mr-2">
                  営業時間
                </span>{' '}
                平日 9:45~17:30土日祝休業
              </div>
            </div>
            <Link
              href="#"
              className="bg-[#2D8CC0] text-white px-12 py-4 rounded font-bold hover:bg-blue-600 transition flex items-center shadow-lg"
            >
              <span className="material-icons mr-2">email</span> お問い合わせ
              <span className="material-icons ml-4 text-sm">
                arrow_forward_ios
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
