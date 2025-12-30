/**
 * Usage Examples Wrapper Component
 * Client component that fetches and displays usage examples using React Query
 */

'use client';

import { useUsageExamples } from '../hooks/useStorageData';
import { UsageExamplesSection } from './UsageExamplesSection';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export function UsageExamplesWrapper() {
  const { data: examples, isLoading, error } = useUsageExamples();

  if (isLoading) {
    return (
      <section className="overflow-hidden bg-white py-16 dark:bg-background-dark">
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="overflow-hidden bg-white py-16 dark:bg-background-dark">
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-red-500">使用例の読み込みに失敗しました。</p>
        </div>
      </section>
    );
  }

  if (!examples || examples.length === 0) {
    return null;
  }

  return <UsageExamplesSection examples={examples} />;
}
