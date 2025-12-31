/**
 * Use Case Detail Page
 * Dynamic route for individual use case pages
 * Optimized for SEO with meta tags and JSON-LD structured data
 */

import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { UseCaseDetailContent } from '@/features/use-case-detail/components';
import {
  useCases,
  relatedArticles,
} from '@/features/use-case-detail/data/use-case.data';
import { ContactCTASection } from '@/components/templates/contact-cta-section';

interface UseCaseDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all use cases
export async function generateStaticParams() {
  return useCases.map(useCase => ({
    slug: useCase.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: UseCaseDetailPageProps): Promise<Metadata> {
  const useCase = useCases.find(u => u.slug === params.slug);

  if (!useCase) {
    return {
      title: '事例が見つかりません',
    };
  }

  return {
    title: `${useCase.title} | 活用事例 | ROOT Storage Service`,
    description:
      useCase.motivation.description.substring(0, 160) +
      (useCase.motivation.description.length > 160 ? '...' : ''),
    keywords: [
      'ROOT',
      'トランクルーム',
      '活用事例',
      ...useCase.tags,
      useCase.customer.service,
    ],
    openGraph: {
      title: `${useCase.caseNumber} ${useCase.title}`,
      description: useCase.motivation.description.substring(0, 160),
      type: 'article',
      images: [
        {
          url: useCase.heroImage,
          width: 1200,
          height: 630,
          alt: useCase.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${useCase.caseNumber} ${useCase.title}`,
      description: useCase.motivation.description.substring(0, 160),
      images: [useCase.heroImage],
    },
  };
}

export default function UseCaseDetailPage({ params }: UseCaseDetailPageProps) {
  const useCase = useCases.find(u => u.slug === params.slug);

  if (!useCase) {
    notFound();
  }

  // Get related use cases (exclude current one)
  const relatedCases = useCases.filter(u => u.id !== useCase.id).slice(0, 3);

  // JSON-LD structured data for Article
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${useCase.caseNumber} ${useCase.title}`,
    image: useCase.heroImage,
    author: {
      '@type': 'Organization',
      name: 'ROOT Storage Service',
    },
    publisher: {
      '@type': 'Organization',
      name: 'ROOT Storage Service',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rootstorage.jp/logo.png',
      },
    },
    description: useCase.motivation.description,
    keywords: useCase.tags.join(', '),
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
        name: '活用事例',
        item: 'https://rootstorage.jp/use-cases',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: useCase.title,
        item: `https://rootstorage.jp/use-cases/${useCase.slug}`,
      },
    ],
  };

  // Review JSON-LD
  const reviewJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'Service',
      name: useCase.customer.service,
    },
    author: {
      '@type': 'Person',
      name: useCase.customer.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: useCase.customerVoice.rating,
      bestRating: 5,
    },
    reviewBody: useCase.customerVoice.comment,
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
          <Link href="/use-cases" className="hover:underline">
            活用事例
          </Link>
          <span className="mx-1">&gt;</span>
          <span className="text-gray-900 dark:text-white">{useCase.title}</span>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />

      {/* Main Content */}
      <UseCaseDetailContent
        useCase={useCase}
        relatedCases={relatedCases}
        relatedArticles={relatedArticles}
      />

      {/* Contact CTA */}
      <ContactCTASection />
    </>
  );
}
