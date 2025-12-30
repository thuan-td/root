/**
 * Why Choose Wrapper Component
 * Client component that fetches and displays why choose reasons using React Query
 */

'use client';

import { useWhyChooseReasons } from '../hooks/useStorageData';
import { WhyChooseSection } from './WhyChooseSection';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export function WhyChooseWrapper() {
  const { data: reasons, isLoading, error } = useWhyChooseReasons();

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
          <p className="text-red-500">選ばれる理由の読み込みに失敗しました。</p>
        </div>
      </section>
    );
  }

  if (!reasons || reasons.length === 0) {
    return null;
  }

  return <WhyChooseSection reasons={reasons} />;
}
