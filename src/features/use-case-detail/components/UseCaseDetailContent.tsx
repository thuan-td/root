/**
 * Use Case Detail Content Component
 * Main content component for use case detail page
 */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { UseCase, RelatedArticle } from '../data/use-case.data';

interface UseCaseDetailContentProps {
  useCase: UseCase;
  relatedCases: UseCase[];
  relatedArticles: RelatedArticle[];
}

export function UseCaseDetailContent({
  useCase,
  relatedCases,
  relatedArticles,
}: UseCaseDetailContentProps) {
  return (
    <div className="w-full pb-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-12 pb-16 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-start relative z-10">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0 pt-8">
            <p className="text-gray-700 dark:text-gray-300 font-bold mb-2">
              {useCase.caseNumber}
            </p>
            <h1 className="text-3xl lg:text-4xl font-bold mb-6 leading-tight">
              {useCase.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-8">
              {useCase.tags.map((tag, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="rounded-full px-4 py-1"
                >
                  <span className="w-2 h-2 rounded-full bg-red-400 inline-block mr-1"></span>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-3/5 lg:absolute lg:right-0 lg:top-0 h-64 lg:h-80">
            <Image
              src={useCase.heroImage}
              alt={useCase.title}
              fill
              className="object-cover rounded-tl-[80px] shadow-md"
              priority
            />
          </div>
          <div className="hidden lg:block w-full h-64"></div>
        </div>
      </section>

      {/* Customer Info Table */}
      <section className="container mx-auto px-4 mb-20">
        <div className="border rounded bg-white dark:bg-gray-800 grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x text-sm">
          <div className="p-4 flex items-center">
            <span className="font-bold w-16">仮名：</span>
            <span className="text-gray-600 dark:text-gray-400">
              {useCase.customer.name}
            </span>
          </div>
          <div className="p-4 flex items-center">
            <span className="font-bold w-16">年代：</span>
            <span className="text-gray-600 dark:text-gray-400">
              {useCase.customer.age}
            </span>
          </div>
          <div className="p-4 flex items-center">
            <span className="font-bold w-16">職業：</span>
            <span className="text-gray-600 dark:text-gray-400">
              {useCase.customer.occupation}
            </span>
          </div>
          <div className="p-4 flex items-center">
            <span className="font-bold w-20">サービス：</span>
            <span className="text-gray-600 dark:text-gray-400">
              {useCase.customer.service}
            </span>
          </div>
        </div>
      </section>

      {/* Motivation Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">
          ご利用のきっかけ
        </h2>
        <div className="border rounded-lg p-6 lg:p-10 flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-800">
          <div className="w-full md:w-1/3">
            <Image
              src={useCase.motivation.image}
              alt="Motivation"
              width={400}
              height={300}
              className="w-full h-48 object-cover rounded"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              {useCase.motivation.description}
            </p>
          </div>
        </div>
      </section>

      {/* Usage Details Table */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">ご利用内容</h2>
        <div className="border rounded bg-white dark:bg-gray-800 overflow-hidden text-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 border-b">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 font-bold flex items-center border-b md:border-b-0 md:border-r">
              ご利用サイズ
            </div>
            <div className="p-4 flex items-center md:col-span-1 border-b md:border-b-0">
              {useCase.usage.size}
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 font-bold flex items-center border-b md:border-b-0 md:border-r md:border-l">
              エリア
            </div>
            <div className="p-4 flex items-center md:col-span-1">
              {useCase.usage.area}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="bg-gray-50 dark:bg-gray-900 p-4 font-bold flex items-center border-b md:border-b-0 md:border-r">
              使い方
            </div>
            <div className="p-4 flex items-center md:col-span-1 border-b md:border-b-0">
              {useCase.usage.purpose}
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 p-4 font-bold flex items-center border-b md:border-b-0 md:border-r md:border-l">
              利用頻度
            </div>
            <div className="p-4 flex items-center md:col-span-1">
              {useCase.usage.frequency}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold text-center mb-12">ご利用後の変化</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Before */}
          <div className="flex flex-col">
            <h3 className="text-center text-orange-500 text-lg font-medium mb-4">
              Before
            </h3>
            <Image
              src={useCase.beforeAfter.before.image}
              alt="Before"
              width={600}
              height={400}
              className="w-full h-56 object-cover rounded mb-4"
            />
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
              {useCase.beforeAfter.before.description}
            </p>
          </div>

          {/* After */}
          <div className="flex flex-col">
            <h3 className="text-center text-green-600 text-lg font-medium mb-4">
              After
            </h3>
            <Image
              src={useCase.beforeAfter.after.image}
              alt="After"
              width={600}
              height={400}
              className="w-full h-56 object-cover rounded mb-4"
            />
            {useCase.beforeAfter.after.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 mb-4"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Voice */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold text-center mb-12">お客さまの声</h2>
        <div className="border rounded-lg p-8 flex flex-col md:flex-row items-start gap-6 bg-white dark:bg-gray-800">
          <div className="flex-shrink-0 flex flex-col items-center space-y-2">
            <div className="w-20 h-20 rounded-full bg-gray-100 dark:bg-gray-700 overflow-hidden border flex items-center justify-center">
              <Image
                src={useCase.customerVoice.avatar}
                alt="Customer"
                width={64}
                height={64}
                className="w-16 h-16"
              />
            </div>
          </div>
          <div className="flex-grow">
            <div className="border border-red-200 bg-red-50 dark:bg-red-900/20 dark:border-red-800 rounded p-3 mb-4 inline-block relative">
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className={`text-sm ${i < useCase.customerVoice.rating ? 'text-red-400' : 'text-gray-300'}`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <p className="text-sm font-bold">{useCase.customerVoice.title}</p>
              <div className="absolute top-1/2 -left-2 transform -translate-y-1/2 w-3 h-3 bg-red-50 dark:bg-red-900/20 border-l border-b border-red-200 dark:border-red-800 rotate-45"></div>
            </div>
            <div className="mt-2">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {useCase.customerVoice.comment}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storage Promotion (if exists) */}
      {useCase.storagePromotion && (
        <section className="bg-gray-50 dark:bg-gray-800 py-12 mb-20">
          <div className="container mx-auto px-4">
            <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-sm flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <Image
                  src={useCase.storagePromotion.image}
                  alt="Storage"
                  width={400}
                  height={300}
                  className="w-full h-40 object-cover rounded"
                />
              </div>
              <div className="flex-grow">
                <p className="font-bold text-lg mb-1">
                  {useCase.storagePromotion.title}
                </p>
                <h3 className="font-bold text-xl mb-6">
                  {useCase.storagePromotion.subtitle}
                </h3>
                <div className="flex justify-between items-end border-t pt-4">
                  <div className="font-bold text-xl tracking-tighter">
                    <span className="text-primary">STORAGE</span>
                  </div>
                  <Link href="/storage">
                    <Button className="rounded-full">
                      トランクルームを探す →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Similar Use Cases */}
      <section className="container mx-auto px-4 mb-20">
        <h2 className="text-2xl font-bold text-center mb-10">
          同じような使い方をしている他の方の事例
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedCases.map(relatedCase => (
            <Link
              key={relatedCase.id}
              href={`/use-cases/${relatedCase.slug}`}
              className="border rounded p-4 bg-white dark:bg-gray-800 hover:shadow-lg transition cursor-pointer"
            >
              <p className="font-bold text-lg mb-2">{relatedCase.caseNumber}</p>
              <Image
                src={relatedCase.heroImage}
                alt={relatedCase.title}
                width={400}
                height={300}
                className="w-full h-40 object-cover rounded mb-4"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                {relatedCase.motivation.description}
              </p>
              <div className="flex flex-wrap gap-2 text-[10px]">
                {relatedCase.tags.map((tag, index) => (
                  <span key={index} className="border rounded px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-right mt-2 text-primary text-xs">›</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Articles */}
      <section className="container mx-auto px-4 mb-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold mb-1">関連ページ</h2>
          <div className="w-0.5 h-4 bg-primary mx-auto mb-1"></div>
          <p className="text-sm text-gray-500 italic">Related Pages</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {relatedArticles.map(article => (
            <div
              key={article.id}
              className="flex flex-col group cursor-pointer"
            >
              <div className="overflow-hidden rounded mb-3">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <p className="text-[10px] text-gray-500 mb-1">{article.date}</p>
              <h4 className="font-bold text-sm mb-2 leading-tight group-hover:text-primary transition">
                {article.title}
              </h4>
              <div className="flex flex-wrap gap-1 text-[10px] mt-auto">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 dark:bg-gray-800 rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
