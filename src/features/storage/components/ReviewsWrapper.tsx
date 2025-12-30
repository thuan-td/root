/**
 * Reviews Wrapper Component
 * Client component that fetches and displays reviews using React Query
 */

'use client';

import { useReviews } from '../hooks/useStorageData';
import { ReviewsSection } from './ReviewsSection';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export function ReviewsWrapper() {
  const { data: reviews, isLoading, error } = useReviews();

  if (isLoading) {
    return (
      <section className="bg-white py-16 dark:bg-background-dark">
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-white py-16 dark:bg-background-dark">
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-red-500">レビュー情報の読み込みに失敗しました。</p>
        </div>
      </section>
    );
  }

  if (!reviews || reviews.length === 0) {
    return null;
  }

  return <ReviewsSection reviews={reviews} />;
}
