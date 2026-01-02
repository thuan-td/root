/**
 * Area Search Page
 * Search for storage locations by area/prefecture
 * Optimized for SEO with meta tags and JSON-LD structured data
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { AreaSearchContent } from '@/features/area-search/components';
import {
  prefectures,
  searchPrefectures,
  usagePurposes,
} from '@/features/area-search/data/area-search.data';
import { SearchFeature } from '@/components/templates/search-feature';
import { ContactCTASection } from '@/components/templates/contact-cta-section';

// Generate metadata for SEO
export const metadata: Metadata = {
  title: 'エリアから探す | 店舗を探す | ROOT Storage Service',
  description:
    'ROOT Storage Serviceの店舗をエリアから検索できます。東京都、神奈川県、千葉県、埼玉県、愛知県など、全国のトランクルーム店舗をエリア別にご覧いただけます。',
  keywords: [
    'ROOT',
    'トランクルーム',
    'エリア検索',
    '店舗検索',
    '東京',
    '神奈川',
    '千葉',
    '埼玉',
    '愛知',
    '地域別',
  ],
  openGraph: {
    title: 'エリアから探す | ROOT Storage Service',
    description:
      'お近くのROOT Storage店舗をエリアから検索。東京都、神奈川県、千葉県、埼玉県、愛知県など全国のトランクルームをご案内。',
    type: 'website',
    url: 'https://rootstorage.jp/area-search',
  },
  twitter: {
    card: 'summary',
    title: 'エリアから探す | ROOT Storage Service',
    description:
      'お近くのROOT Storage店舗をエリアから検索。東京都、神奈川県、千葉県、埼玉県、愛知県など全国のトランクルームをご案内。',
  },
};

export default function AreaSearchPage() {
  // Calculate total stores across all prefectures
  const totalStores = prefectures.reduce(
    (sum, prefecture) => sum + prefecture.count,
    0,
  );

  // JSON-LD structured data for ItemList
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'ROOT Storage Service - エリア別店舗一覧',
    description:
      'ROOT Storage Serviceのトランクルーム店舗をエリア別に検索できます',
    numberOfItems: totalStores,
    itemListElement: prefectures.map((prefecture, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Place',
        name: prefecture.name,
        url: `https://rootstorage.jp/area-search#${prefecture.slug}`,
        description: `${prefecture.name}のトランクルーム店舗 (${prefecture.count}件)`,
      },
    })),
  };

  // Breadcrumb JSON-LD
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'ホーム',
        item: 'https://rootstorage.jp',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: '店舗を探す',
        item: 'https://rootstorage.jp/storage',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'エリアから探す',
        item: 'https://rootstorage.jp/area-search',
      },
    ],
  };

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="bg-white dark:bg-gray-900 border-b">
        <div className="container mx-auto px-4 py-3 text-xs text-gray-500">
          <Link href="/" className="hover:underline">
            ホーム
          </Link>
          <span className="mx-1">&gt;</span>
          <Link href="/storage" className="hover:underline">
            店舗を探す
          </Link>
          <span className="mx-1">&gt;</span>
          <span className="text-gray-900 dark:text-white">エリアから探す</span>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            エリアから探す
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            お近くのROOT Storage店舗をエリアから検索できます。
            <br />
            東京都、神奈川県、千葉県、埼玉県、愛知県など全国{totalStores}
            店舗からお選びいただけます。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <AreaSearchContent prefectures={prefectures} />

      {/* Search Feature Section */}
      <SearchFeature
        prefectures={searchPrefectures}
        usagePurposes={usagePurposes}
      />

      {/* Contact CTA */}
      <ContactCTASection />
    </>
  );
}
