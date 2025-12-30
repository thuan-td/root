/**
 * Reviews Section Component
 * Displays customer reviews and testimonials
 */

import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User } from 'lucide-react';
import type { CustomerReview } from '../types';

interface ReviewsSectionProps {
  reviews: CustomerReview[];
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const renderStars = (rating: number) => {
    return '★'.repeat(rating);
  };

  return (
    <section className="bg-white py-16 dark:bg-background-dark">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold">
          お客さまの<span className="text-primary">声</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {reviews.map(review => (
            <Card
              key={review.id}
              className="border border-gray-200 dark:border-gray-700"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-start gap-4">
                  <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-500">
                    <User className="h-10 w-10" />
                  </div>
                  <div>
                    <div className="mb-1 text-sm text-orange-400">
                      {renderStars(review.rating)}
                    </div>
                    <h4 className="text-sm font-bold">{review.title}</h4>
                  </div>
                </div>
                <div className="mb-4 flex gap-2 text-xs text-gray-500 dark:text-gray-400">
                  <span>{review.name} 様</span> <span>{review.age}</span>{' '}
                  <span>{review.occupation}</span>
                </div>
                <div className="mb-4 flex gap-2 text-[10px]">
                  <Badge variant="secondary" className="rounded px-2 py-1">
                    {review.location}
                  </Badge>
                  <Badge variant="secondary" className="rounded px-2 py-1">
                    {review.serviceType}
                  </Badge>
                </div>
                <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                  {review.comment}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/reviews"
            className="inline-block rounded-full border border-primary px-12 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-white"
          >
            もっと見る
          </Link>
        </div>
      </div>
    </section>
  );
}
