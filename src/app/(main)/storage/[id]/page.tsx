/**
 * Storage Detail Page
 *
 * Dynamic page for individual storage facility details
 * Optimized for SEO with metadata and structured data
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Script from 'next/script';
import {
  StorageBreadcrumb,
  StorageHeroSection,
  LocationSection,
  UnitsSection,
  FloorPlanSection,
  ContractFlowSection,
  NearbyStoresSection,
  RelatedAreasSection,
} from '@/features/public/storage-detail/components';
import { STORAGE_DETAIL_PAGE_DATA } from '@/features/public/storage-detail/data/dummy';
import { BreadcrumbItem } from '@/features/public/storage-detail/types';
import { ContactCTASection } from '@/components/templates/contact-cta-section';

interface PageProps {
  params: {
    id: string;
  };
}

/**
 * Generate metadata for SEO
 */
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  // In a real app, fetch data based on params.id
  // const storage = await getStorageData(params.id);
  const storage = STORAGE_DETAIL_PAGE_DATA.storage;

  const title = `${storage.name} (${storage.area}) - ROOT STORAGE`;
  const description = `${storage.name}は${storage.access}。${storage.description.slice(0, 150)}...`;

  return {
    title,
    description,
    keywords: [
      storage.name,
      storage.area,
      storage.prefecture,
      storage.city,
      'トランクルーム',
      'レンタル収納',
      'ストレージ',
      'ROOT STORAGE',
    ],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'ja_JP',
      siteName: 'ROOT STORAGE',
      images: [
        {
          url: storage.images[0].url,
          width: 1200,
          height: 630,
          alt: storage.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [storage.images[0].url],
    },
    alternates: {
      canonical: `/storage-detail/${params.id}`,
    },
  };
}

/**
 * Generate structured data for SEO
 */
function generateStructuredData() {
  const storage = STORAGE_DETAIL_PAGE_DATA.storage;
  const units = STORAGE_DETAIL_PAGE_DATA.unitCategories;

  // Local Business Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'SelfStorage',
    name: storage.name,
    image: storage.images.map(img => img.url),
    address: {
      '@type': 'PostalAddress',
      streetAddress: storage.address,
      addressLocality: storage.city,
      addressRegion: storage.prefecture,
      postalCode: storage.postalCode,
      addressCountry: 'JP',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: storage.location.latitude,
      longitude: storage.location.longitude,
    },
    url: `/storage-detail/${storage.id}`,
    description: storage.description,
    priceRange: '¥¥',
  };

  // Breadcrumb Schema
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
        name: '店舗を探す',
        item: '/search',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'エリアから探す',
        item: '/search/area',
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: storage.prefecture,
        item: `/search/area/${storage.prefecture}`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: `${storage.prefecture}${storage.city}の店舗一覧`,
        item: `/search/area/${storage.prefecture}/${storage.city}`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: storage.name,
      },
    ],
  };

  // Product/Offer Schema for storage units
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${storage.name} - ストレージユニット`,
    description: storage.description,
    brand: {
      '@type': 'Brand',
      name: 'ROOT STORAGE',
    },
    offers: units
      .filter(cat => cat.units.length > 0)
      .flatMap(cat =>
        cat.units.map(unit => ({
          '@type': 'Offer',
          name: `${cat.type}タイプ - ${unit.size}`,
          price: unit.campaignPrice,
          priceCurrency: 'JPY',
          availability:
            unit.availability === 'available'
              ? 'https://schema.org/InStock'
              : 'https://schema.org/OutOfStock',
          priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
            .toISOString()
            .split('T')[0],
        })),
      ),
  };

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
    </>
  );
}

/**
 * Storage Detail Page Component
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function StorageDetailPage({ params }: PageProps) {
  // In a real app, fetch data based on params.id
  // const data = await getStorageDetailData(params.id);
  const data = STORAGE_DETAIL_PAGE_DATA;

  // If storage not found, show 404
  if (!data) {
    notFound();
  }

  // Breadcrumb items
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'ホーム', href: '/' },
    { label: '店舗を探す', href: '/search' },
    { label: 'エリアから探す', href: '/search/area' },
    {
      label: data.storage.prefecture,
      href: `/search/area/${data.storage.prefecture}`,
    },
    {
      label: `${data.storage.prefecture}${data.storage.city}の店舗一覧`,
      href: `/search/area/${data.storage.prefecture}/${data.storage.city}`,
    },
    { label: `${data.storage.name}(${data.storage.area})` },
  ];

  return (
    <>
      {/* Structured Data for SEO */}
      {generateStructuredData()}

      {/* Breadcrumb */}
      <StorageBreadcrumb items={breadcrumbItems} />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
        {/* Hero Section with Images and Info */}
        <StorageHeroSection storage={data.storage} />

        {/* Location Map */}
        <LocationSection location={data.storage.location} />

        {/* Units and Pricing */}
        <UnitsSection categories={data.unitCategories} />

        {/* Floor Plan */}
        <FloorPlanSection floorPlan={data.floorPlan} />

        {/* Contract Flow */}
        <ContractFlowSection steps={data.contractSteps} />

        {/* Nearby Stores */}
        <NearbyStoresSection stores={data.nearbyStores} />

        {/* Related Areas */}
        <RelatedAreasSection
          stations={data.relatedStations}
          areas={data.relatedAreas}
          prefectures={data.relatedPrefectures}
          storageName={data.storage.name}
        />
      </main>

      {/* Contact CTA */}
      <ContactCTASection />
    </>
  );
}
