/**
 * News Detail Content Component
 * Displays full article with title, date, badge, image, content, and location
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { NewsArticle } from '../data/news.data';
import { categoryConfig } from '../data/news.data';
import { LocationMap } from '@/components/templates/location-map';

interface NewsDetailContentProps {
  article: NewsArticle;
}

export function NewsDetailContent({ article }: NewsDetailContentProps) {
  const categoryStyle = categoryConfig[article.category];

  return (
    <article className="mx-auto px-4 py-8 max-w-4xl">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-primary">
          ホーム
        </Link>
        <span className="mx-2">&gt;</span>
        <Link href="/news" className="hover:text-primary">
          お知らせ
        </Link>
        <span className="mx-2">&gt;</span>
        <span className="text-gray-900 dark:text-white">{article.title}</span>
      </nav>

      {/* Article Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-3">
          <time className="text-sm text-gray-500">{article.date}</time>
          {article.badge && (
            <Badge className={`${categoryStyle.color} font-bold`}>
              {article.badge}
            </Badge>
          )}
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
          {article.title}
        </h1>
      </div>

      {/* Featured Image */}
      <div className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
        <Image
          src={article.featuredImage}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        {article.content.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Location Section (if exists) */}
      {article.location && (
        <LocationMap
          title={article.location.title}
          mapImage={article.location.mapImage}
          description={article.location.description}
          address={article.location.address}
          coordinates={article.location.coordinates}
        />
      )}

      {/* Back Button */}
      <div className="text-center">
        <Link href="/news">
          <Button variant="outline" size="lg" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            一覧へ戻る
          </Button>
        </Link>
      </div>
    </article>
  );
}
