/**
 * Store Search Page
 * Main search page for finding ROOT storage locations
 *
 * SEO optimized with:
 * - Structured data (JSON-LD)
 * - Meta tags for social sharing
 * - Semantic HTML
 * - Server-side rendering
 */

import type { Metadata } from 'next';
import { ContactCTASection } from '@/features/public/home/components';
import { SearchBar } from '@/features/public/store-search/components';
import {
  StoreListWrapper,
  NewStoresWrapper,
  FAQWrapper,
} from '@/features/public/store-search/components/server';
import { storeSearchData } from '@/features/public/store-search/data/store-search.data';

// SEO Metadata
export const metadata: Metadata = {
  title: 'ルートの店舗を探す | 関東350拠点以上のトランクルーム検索 | ROOT',
  description:
    '関東地方で350拠点以上を展開するROOTのトランクルーム・レンタルガレージ・月極駐車場を検索。駅から探す、エリアから探す、マップから探すなど、お好みの方法で最寄りの店舗を見つけられます。24時間365日利用可能、SECOM・ALSOK警備で安心。',
  keywords: [
    '店舗検索',
    'トランクルーム',
    'レンタルガレージ',
    '月極駐車場',
    '関東',
    '東京',
    '神奈川',
    '埼玉',
    '千葉',
    '駅近',
    'ROOT',
    'ルート',
    '店舗一覧',
    'エリア検索',
  ],
  openGraph: {
    title: 'ルートの店舗を探す | 関東350拠点以上のトランクルーム検索',
    description:
      '関東地方で350拠点以上を展開するROOTのトランクルーム検索。駅から探す、エリアから探す、マップから探すなど、お好みの方法で最寄りの店舗を見つけられます。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ROOT Storage Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ルートの店舗を探す | 関東350拠点以上のトランクルーム検索',
    description:
      '関東地方で350拠点以上を展開するROOTのトランクルーム検索。駅から、エリアから、マップから簡単に検索できます。',
  },
  alternates: {
    canonical: '/store-search',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function StoreSearchPage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SearchResultsPage',
            name: 'ルートの店舗を探す',
            description:
              '関東地方のトランクルーム・レンタルガレージ・月極駐車場検索',
            provider: {
              '@type': 'Organization',
              name: 'ROOT株式会社',
              url: 'https://root-storage.jp',
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'ホーム',
                item: 'https://root-storage.jp',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: '店舗を探す',
                item: 'https://root-storage.jp/store-search',
              },
            ],
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: storeSearchData.stores.map((store, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Place',
                name: store.title,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: store.address,
                },
                description: `${store.category} - ${store.price.toLocaleString()}円/月`,
              },
            })),
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: storeSearchData.faqs.map(faq => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      <main className="min-h-screen">
        {/* Search Bar */}
        <SearchBar />

        {/* Store List with Pagination - Server Component for SEO */}
        <StoreListWrapper />

        {/* New Stores Showcase - Server Component for SEO */}
        <NewStoresWrapper />

        {/* FAQ Section - Server Component for SEO */}
        <FAQWrapper />

        {/* Contact CTA */}
        <ContactCTASection />
      </main>
    </>
  );
}
