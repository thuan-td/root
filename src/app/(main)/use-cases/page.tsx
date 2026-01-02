/**
 * Use Cases Page
 *
 * Displays customer use cases and testimonials
 * Optimized for SEO with metadata
 */

import { Metadata } from 'next';
import Image from 'next/image';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
import {
  UseCaseCard,
  UseCasesFilters,
  CustomerReviewCard,
} from '@/features/public/use-cases/components';
import { USE_CASES_PAGE_DATA } from '@/features/public/use-cases/data/dummy';

/**
 * Generate metadata for SEO
 */
export const metadata: Metadata = {
  title: 'ルートの活用事例 - ROOT STORAGE',
  description:
    'ROOT STORAGEの活用事例をご紹介。お客様の様々なご利用いただく大切な思い出があります。トランクルーム、ガレージ、パーキングの実際の使用例をご覧ください。',
  keywords: [
    'ルート',
    '活用事例',
    'トランクルーム',
    'レンタル収納',
    'ガレージ',
    'パーキング',
    '使用例',
    '事例紹介',
  ],
  openGraph: {
    title: 'ルートの活用事例 - ROOT STORAGE',
    description:
      'ROOT STORAGEの活用事例。お客様の実際の使用例とレビューをご紹介します。',
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
        name: '活用事例',
      },
    ],
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema),
      }}
    />
  );
}

/**
 * Use Cases Page Component
 */
export default function UseCasesPage() {
  const data = USE_CASES_PAGE_DATA;

  return (
    <>
      {/* Structured Data */}
      {generateStructuredData()}

      {/* Breadcrumb */}
      <div className="bg-surface-light dark:bg-gray-800 py-2 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 text-xs text-gray-500 dark:text-gray-400">
          <a className="hover:underline" href="/">
            ホーム
          </a>
          <span className="mx-2">&gt;</span>
          <span className="text-gray-800 dark:text-gray-200">活用事例</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">
          ルートの活用事例
        </h1>
        <div className="w-full relative rounded-lg overflow-hidden shadow-lg h-[300px] md:h-[400px]">
          <Image
            alt="Root staff holding boxes"
            src={data.heroImage}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Customer Message Banner */}
      <div className="bg-primary text-white py-8 text-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold relative inline-block pb-2 border-b-2 border-white/50">
            お客様の数々な
            <br className="md:hidden" />
            ご利用いただく大切な思いがあります。
          </h2>
        </div>
        <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-primary rotate-45" />
      </div>

      {/* Filters Section */}
      <section className="container mx-auto px-4 py-12">
        <UseCasesFilters />
      </section>

      {/* Use Cases Grid */}
      <section className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.useCases.map(useCase => (
            <UseCaseCard key={useCase.id} useCase={useCase} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary dark:text-red-400 dark:border-red-400 px-12 py-3 rounded-full hover:bg-primary hover:text-white transition duration-300"
          >
            もっと見る
          </Button>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-surface-light dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold inline-block border-b-4 border-primary pb-2 dark:text-white">
              お客様の声
            </h2>
            <p className="text-gray-500 mt-2 font-serif italic">User Voice</p>
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {data.reviews.map(review => (
              <CustomerReviewCard key={review.id} review={review} />
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary dark:text-red-400 dark:border-red-400 px-12 py-3 rounded-full hover:bg-primary hover:text-white transition duration-300"
            >
              もっと見る
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
