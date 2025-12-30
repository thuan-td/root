/**
 * FAQ Wrapper Component
 * Client component that fetches and displays FAQs using React Query
 */

'use client';

import { useFAQs } from '../hooks/useStorageData';
import { FAQSection } from './FAQSection';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export function FAQWrapper() {
  const { data: faqs, isLoading, error } = useFAQs();

  if (isLoading) {
    return (
      <section className="bg-surface-light py-16 dark:bg-surface-dark">
        <div className="flex min-h-[300px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-surface-light py-16 dark:bg-surface-dark">
        <div className="flex min-h-[300px] items-center justify-center">
          <p className="text-red-500">FAQ情報の読み込みに失敗しました。</p>
        </div>
      </section>
    );
  }

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return <FAQSection faqs={faqs} />;
}
