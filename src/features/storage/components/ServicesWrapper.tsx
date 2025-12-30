/**
 * Services Wrapper Component
 * Client component that fetches and displays services using React Query
 */

'use client';

import { useServices } from '../hooks/useStorageData';
import { ServiceGrid } from './ServiceGrid';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export function ServicesWrapper() {
  const { data: services, isLoading, error } = useServices();

  if (isLoading) {
    return (
      <section className="bg-surface-light py-16 dark:bg-surface-dark">
        <div className="flex min-h-[400px] items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-surface-light py-16 dark:bg-surface-dark">
        <div className="flex min-h-[400px] items-center justify-center">
          <p className="text-red-500">サービス情報の読み込みに失敗しました。</p>
        </div>
      </section>
    );
  }

  if (!services || services.length === 0) {
    return null;
  }

  return <ServiceGrid services={services} />;
}
