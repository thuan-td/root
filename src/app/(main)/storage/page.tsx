/**
 * Storage Service Page
 * Main page for ROOT storage service with SEO optimization
 */

import type { Metadata } from 'next';
import { ContactCTASection } from '@/features/public/home/components';
import {
  Breadcrumb,
  StorageHero,
  IntroductionSection,
  ServicesServerWrapper,
  UsageExamplesServerWrapper,
  StorageItemsServerWrapper,
  WhyChooseServerWrapper,
  ReviewsServerWrapper,
  SearchSection,
  FAQServerWrapper,
} from '@/features/public/storage/components';
import { storagePageData } from '@/features/public/storage/data/storage.data';

// SEO Metadata
export const metadata: Metadata = {
  title:
    'ルートストレージサービス | 24時間365日利用可能なトランクルーム | ROOT',
  description:
    'ルートは関東地方で350拠点以上を展開する屋内型トランクルーム・レンタルガレージ・月極駐車場サービスです。24時間365日いつでも自由に出し入れ可能。季節用品、引越し荷物、趣味のグッズ、車やバイクまで安心して保管できます。SECOMまたはALSOKによる24時間機械警備で安全性も万全。',
  keywords: [
    'トランクルーム',
    'レンタルガレージ',
    '月極駐車場',
    '収納スペース',
    'ルート',
    'ROOT',
    '24時間',
    '屋内型',
    'セキュリティ',
    '関東',
    '引っ越し',
    '季節用品',
    '保管サービス',
  ],
  openGraph: {
    title: 'ルートストレージサービス | 24時間365日利用可能なトランクルーム',
    description:
      '関東地方で350拠点以上を展開する屋内型トランクルーム。24時間365日いつでも自由に出し入れ可能。SECOM・ALSOK警備で安心安全。',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'ROOT Storage Service',
    images: [
      {
        url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
        width: 1200,
        height: 630,
        alt: 'ROOT Storage Service - トランクルーム',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ルートストレージサービス | 24時間365日利用可能なトランクルーム',
    description:
      '関東地方で350拠点以上を展開する屋内型トランクルーム。24時間365日いつでも自由に出し入れ可能。',
  },
  alternates: {
    canonical: '/storage',
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

// Breadcrumb items
const breadcrumbItems = [
  { label: 'ホーム', href: '/' },
  { label: 'ルートとは', href: '/storage' },
];

export default function StoragePage() {
  return (
    <>
      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'ROOT Storage Service',
            description:
              '24時間365日利用可能な屋内型トランクルーム・レンタルガレージ・月極駐車場サービス',
            image:
              'https://lh3.googleusercontent.com/aida-public/AB6AXuD6J1wpkEQ38Ce3mlXnov42tRw3BwvuzuaXc5pOrG6Xb3haz73BVNy_-t2HYDDDzG6AS5xghHzvB0t0yJ7FIvWX-xkTEzmeN5KrNIdgWtx7sxsOL7iQdZQsKKsXDXhuaqUYECcMGWZONxe7PIr18r1VGgVTMhsHvSoEueojFRyUAT_SHDtE2-UBxFkk6IO4xvPGsFbUg2wJX8b2xZ-Ze2hulBAbHiX6j45y1sJW3EsDUa-lVxj-i90pKeXQskUdu4dJRsNHIPJupbI',
            telephone: '0120-161-857',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '神田佐久間町2-2-11 新東ビル2階',
              addressLocality: '千代田区',
              addressRegion: '東京都',
              postalCode: '101-0048',
              addressCountry: 'JP',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 35.6938,
              longitude: 139.7752,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '09:45',
                closes: '17:30',
              },
            ],
            priceRange: '$$',
            areaServed: {
              '@type': 'Place',
              name: '関東地方',
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
            itemListElement: breadcrumbItems.map((item, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: item.label,
              item: `https://root-storage.jp${item.href}`,
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
            mainEntity: storagePageData.faqs.map(faq => ({
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Storage Service',
            provider: {
              '@type': 'Organization',
              name: 'ROOT株式会社',
            },
            areaServed: {
              '@type': 'Place',
              name: '関東地方',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Storage Services',
              itemListElement: storagePageData.services.map(service => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: service.title,
                  description: service.description,
                },
              })),
            },
            availableChannel: {
              '@type': 'ServiceChannel',
              serviceUrl: 'https://root-storage.jp/storage',
              availableLanguage: {
                '@type': 'Language',
                name: 'Japanese',
              },
            },
          }),
        }}
      />
      <Breadcrumb items={breadcrumbItems} />

      <main className="min-h-screen">
        {/* Hero Section */}
        <StorageHero
          title={storagePageData.hero.title}
          subtitle={storagePageData.hero.subtitle}
          image={storagePageData.hero.image}
          stats={storagePageData.hero.stats}
        />

        {/* Introduction Section */}
        <IntroductionSection
          title={storagePageData.introduction.title}
          description={storagePageData.introduction.description}
        />

        {/* Services Grid - Server Component for SEO */}
        <ServicesServerWrapper />

        {/* Usage Examples - Server Component for SEO */}
        <UsageExamplesServerWrapper />

        {/* Storage Items - Server Component for SEO */}
        <StorageItemsServerWrapper />

        {/* Why Choose ROOT - Server Component for SEO */}
        <WhyChooseServerWrapper />

        {/* Customer Reviews - Server Component for SEO */}
        <ReviewsServerWrapper />

        {/* Search Section */}
        <SearchSection />

        {/* FAQ Section - Server Component for SEO */}
        <FAQServerWrapper />

        {/* Contact CTA */}
        <ContactCTASection />
      </main>
    </>
  );
}
