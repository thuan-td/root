/**
 * Storage Items Wrapper Component
 * Client component that fetches and displays storage items using React Query
 */

'use client';

import { useStorageItems } from '../hooks/useStorageData';
import { StorageItemsSection } from './StorageItemsSection';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

export function StorageItemsWrapper() {
  const { data: items, isLoading, error } = useStorageItems();

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
          <p className="text-red-500">保管可能品目の読み込みに失敗しました。</p>
        </div>
      </section>
    );
  }

  if (!items || items.length === 0) {
    return null;
  }

  return <StorageItemsSection items={items} />;
}
