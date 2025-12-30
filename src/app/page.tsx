import {
  HeroSection,
  SearchSection,
  FeaturedStoresWrapper,
  NewsWrapper,
  ServicesWrapper,
  UseCasesSection,
  UsageBannerSection,
  ColumnSection,
  FAQWrapper,
  ContactCTASection,
} from '@/features/home/components';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title:
    'ROOT ストレージ | 首都圏室内型トランクルーム・ガレージ・駐車場レンタル',
  description:
    '首都圏に約350拠点展開。24時間365日利用可能な室内型トランクルーム、バイクガレージ、月極駐車場をご提供。安心のセキュリティ対策で大切な荷物・車両を保管。初期費用割引キャンペーン実施中。',
  keywords: [
    'トランクルーム',
    'レンタル収納',
    'バイクガレージ',
    '月極駐車場',
    '東京',
    '神奈川',
    '首都圏',
    '24時間',
    'セキュリティ',
    '収納スペース',
    'ROOT',
    'ルート',
  ],
  openGraph: {
    title: 'ROOT ストレージ | 首都圏室内型トランクルーム・ガレージ・駐車場',
    description:
      '首都圏約350拠点。24時間365日利用可能な室内型トランクルーム、バイクガレージ、月極駐車場。安心のセキュリティ対策。',
    locale: 'ja_JP',
    type: 'website',
    siteName: 'ROOT ストレージ',
    url: 'https://root-storage.jp',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ROOT ストレージ | 首都圏室内型トランクルーム',
    description: '首都圏約350拠点。24時間365日利用可能。',
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
  alternates: {
    canonical: 'https://root-storage.jp',
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'ROOT ストレージ',
  description:
    '首都圏に約350拠点を展開する室内型トランクルーム・ガレージ・駐車場レンタルサービス',
  url: 'https://root-storage.jp',
  logo: 'https://root-storage.jp/logo.png',
  image: 'https://root-storage.jp/og-image.png',
  telephone: '+81-3-XXXX-XXXX',
  priceRange: '¥¥',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'JP',
    addressRegion: '東京都',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.6762,
    longitude: 139.6503,
  },
  areaServed: [
    {
      '@type': 'City',
      name: '東京都',
    },
    {
      '@type': 'City',
      name: '神奈川県',
    },
    {
      '@type': 'City',
      name: '埼玉県',
    },
    {
      '@type': 'City',
      name: '千葉県',
    },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
    ],
    opens: '00:00',
    closes: '23:59',
  },
  serviceType: ['トランクルーム', 'バイクガレージ', '月極駐車場'],
};

export default function HomePage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="json-ld-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />

      <main className="min-h-screen">
        <HeroSection />
        <SearchSection />
        <FeaturedStoresWrapper />
        <NewsWrapper />
        <ServicesWrapper />
        <UseCasesSection />
        <UsageBannerSection />
        <ColumnSection />
        <FAQWrapper />
        <ContactCTASection />
      </main>
    </>
  );
}
