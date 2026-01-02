/**
 * Current Location Search Page
 * Search stores by current GPS location with interactive map
 *
 * SEO optimized with:
 * - Structured data (JSON-LD)
 * - Meta tags
 * - Server-side rendering
 */

import type { Metadata } from 'next';
import { ContactCTASection } from '@/features/public/home/components';
import { storeLocations } from '@/features/public/current-location/data/location-search.data';
import { SearchFeature } from '@/components/templates/search-feature';
import { LocationSearchSection } from '@/features/public/current-location/components/LocationSearchSection';

// Breadcrumb component (reusable)
function Breadcrumb() {
  return (
    <div className="bg-gray-50 border-b">
      <div className="container py-3">
        <nav className="flex items-center gap-2 text-sm text-gray-600">
          <a href="/" className="hover:text-primary">
            ホーム
          </a>
          <span>›</span>
          <a href="/store-search" className="hover:text-primary">
            店舗を探す
          </a>
          <span>›</span>
          <span className="text-gray-900 font-medium">現在地から探す</span>
        </nav>
      </div>
    </div>
  );
}

// SEO Metadata
export const metadata: Metadata = {
  title: '現在地から探す | 近くのトランクルーム・ガレージ・駐車場 | ROOT',
  description:
    '現在地からROOTのトランクルーム・レンタルガレージ・月極駐車場を検索。GPSで最寄りの店舗を簡単に見つけられます。マップ上で距離や空き状況を確認できます。',
  keywords: [
    '現在地検索',
    'GPS検索',
    '近くのトランクルーム',
    '最寄り店舗',
    'ROOT',
    'レンタルガレージ',
    '月極駐車場',
    '地図検索',
    '位置情報',
  ],
  openGraph: {
    title: '現在地から探す | 近くのトランクルーム・ガレージ・駐車場',
    description:
      '現在地からROOTのトランクルーム・レンタルガレージ・月極駐車場を検索。GPS機能で最寄りの店舗を簡単に見つけられます。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ROOT Storage Service',
  },
  twitter: {
    card: 'summary_large_image',
    title: '現在地から探す | 近くのトランクルーム',
    description: 'GPS機能で最寄りのROOT店舗を簡単検索。',
  },
  alternates: {
    canonical: '/current-location',
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

const prefectures = ['東京', '神奈川', '埼玉', '千葉'];
const usagePurposes = ['荷物を保管する', '書類保管', '季節用品', '資材保管'];

export default function CurrentLocationPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: '現在地から探す',
            description:
              'GPS機能で最寄りのトランクルーム・ガレージ・駐車場を検索',
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
              {
                '@type': 'ListItem',
                position: 3,
                name: '現在地から探す',
                item: 'https://root-storage.jp/current-location',
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
            name: 'Nearby Stores',
            numberOfItems: storeLocations.length,
            itemListElement: storeLocations.map((store, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'Place',
                name: store.name,
                address: store.address,
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: store.lat,
                  longitude: store.lng,
                },
              },
            })),
          }),
        }}
      />

      {/* Breadcrumb */}
      <Breadcrumb />

      <main className="min-h-screen">
        {/* Map Search Section */}
        <LocationSearchSection stores={storeLocations} />

        {/* Search Feature Section */}
        <SearchFeature
          prefectures={prefectures}
          usagePurposes={usagePurposes}
        />

        {/* Contact CTA */}
        <ContactCTASection />
      </main>
    </>
  );
}
