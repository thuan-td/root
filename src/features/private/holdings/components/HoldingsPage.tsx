'use client';

import DashboardSidebar from '../../dashboard/components/DashboardSidebar';
import { PropertyCard } from '@/components/common/PropertyCard';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { useHoldings } from '../hooks';

export default function HoldingsPage() {
  // Fetch holdings with holding=true filter
  const { data, isLoading, isError, error } = useHoldings({ holding: true });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background-admin))] dark:bg-background-dark">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background-admin))] dark:bg-background-dark">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            エラーが発生しました
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {error?.message || 'データの読み込みに失敗しました'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="text-gray-800 bg-[hsl(var(--background-admin))] dark:text-gray-200 min-h-screen flex flex-col font-body">
      {/* Header */}
      <div className="w-full dark:bg-surface-dark py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-center text-2xl font-bold tracking-wide text-black dark:text-white">
          お気に入り物件
        </h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10">
          <div className="container mx-auto max-w-6xl">
            {/* Property Grid - No sort controls for holdings */}
            {data?.properties && data.properties.length > 0 ? (
              <>
                {/* Total Count */}
                <div className="mb-6">
                  <p className="text-gray-600 dark:text-gray-400">
                    全 <span className="font-bold text-lg">{data.total}</span>{' '}
                    件
                  </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {data.properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              </>
            ) : (
              <div className="text-center py-16">
                <div className="mb-6">
                  <span className="material-icons-outlined text-6xl text-gray-300 dark:text-gray-600">
                    favorite_border
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-2">
                  お気に入りの物件がありません
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  気になる物件を見つけたら、ハートマークをクリックしてお気に入りに追加しましょう
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
