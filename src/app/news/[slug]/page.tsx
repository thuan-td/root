/**
 * News Detail Page
 * Dynamic route for individual news articles
 * Optimized for SEO with meta tags and JSON-LD structured data
 */

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NewsDetailContent } from '@/features/news/components';
import { newsArticles } from '@/features/news/data/news.data';
import { ContactCTASection } from '@/components/templates/contact-cta-section';

interface NewsDetailPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all news articles
export async function generateStaticParams() {
  return newsArticles.map(article => ({
    slug: article.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const article = newsArticles.find(a => a.slug === params.slug);

  if (!article) {
    return {
      title: 'お知らせが見つかりません',
    };
  }

  const categoryLabels = {
    OPEN: '新規オープン',
    INFO: 'お知らせ',
    CAMPAIGN: 'キャンペーン',
    MAINTENANCE: 'メンテナンス',
  };

  return {
    title: `${article.title} | お知らせ | ROOT Storage Service`,
    description:
      article.content[0].substring(0, 160) +
      (article.content[0].length > 160 ? '...' : ''),
    keywords: [
      'ROOT',
      'トランクルーム',
      categoryLabels[article.category],
      article.title,
      'お知らせ',
    ],
    openGraph: {
      title: article.title,
      description: article.content[0].substring(0, 160),
      type: 'article',
      publishedTime: article.date,
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.content[0].substring(0, 160),
      images: [article.featuredImage],
    },
  };
}

export default function NewsDetailPage({ params }: NewsDetailPageProps) {
  const article = newsArticles.find(a => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  // JSON-LD structured data for NewsArticle
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    datePublished: article.date,
    image: article.featuredImage,
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
    description: article.content[0],
    articleBody: article.content.join('\n\n'),
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
        name: 'お知らせ',
        item: 'https://rootstorage.jp/news',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.title,
        item: `https://rootstorage.jp/news/${article.slug}`,
      },
    ],
  };

  // Place JSON-LD if location exists
  const placeJsonLd = article.location
    ? {
        '@context': 'https://schema.org',
        '@type': 'Place',
        name: article.location.title,
        description: article.location.description,
        address: article.location.address || '',
        image: article.location.mapImage,
      }
    : null;

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {placeJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(placeJsonLd) }}
        />
      )}

      {/* Main Content */}
      <NewsDetailContent article={article} />

      {/* <div className="mx-auto max-w-4xl mb-12 rounded-lg">
        <LocationMap title="店舗の場所" mapImage="" description="" />
      </div> */}

      {/* Contact CTA */}
      <ContactCTASection />
    </>
  );
}
