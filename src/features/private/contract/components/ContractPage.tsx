'use client';

import { useState } from 'react';
import DashboardSidebar from '../../dashboard/components/DashboardSidebar';
import { PropertyCard } from '@/components/common/PropertyCard';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import { useContracts } from '../hooks';
import type { SortBy } from '../types/contract.types';

export default function ContractPage() {
  const [sortByDate, setSortByDate] = useState<'contract_date' | 'newest'>(
    'contract_date',
  );
  const [sortByPrice, setSortByPrice] = useState<
    'price_asc' | 'price_desc' | ''
  >('');

  // Determine the active sort
  const activeSortBy: SortBy = sortByPrice || sortByDate;

  const { data, isLoading, isError, error } = useContracts({
    sortBy: activeSortBy,
  });

  const handleDateSort = (value: string) => {
    setSortByDate(value as 'contract_date' | 'newest');
    setSortByPrice(''); // Reset price sort
  };

  const handlePriceSort = (value: string) => {
    if (value === 'price_asc' || value === 'price_desc') {
      setSortByPrice(value);
    } else {
      setSortByPrice('');
    }
  };

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
      <header className="w-full dark:bg-surface-dark py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-center text-2xl font-bold tracking-wide text-black dark:text-white">
          ご契約状況
        </h1>
      </header>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10">
          <div className="container mx-auto max-w-6xl">
            {/* Sort Controls */}
            <div className="bg-white dark:bg-card-dark rounded-xl shadow-card p-4 flex flex-col md:flex-row justify-between items-center gap-4 transition-colors duration-300 mb-8">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <span className="material-icons-outlined">sort</span>
                並び変える
              </h2>

              <div className="flex gap-4 w-full md:w-auto">
                {/* Date Sort */}
                <div className="relative w-full md:w-48">
                  <select
                    value={sortByPrice ? '' : sortByDate}
                    onChange={e => handleDateSort(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white appearance-none cursor-pointer shadow-sm"
                  >
                    <option value="contract_date">ご契約日順</option>
                    <option value="newest">新着順</option>
                    <option value="area">広さ順</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <span className="material-icons-outlined text-sm">
                      expand_more
                    </span>
                  </div>
                </div>

                {/* Price Sort */}
                <div className="relative w-full md:w-48">
                  <select
                    value={sortByPrice}
                    onChange={e => handlePriceSort(e.target.value)}
                    className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white appearance-none cursor-pointer shadow-sm"
                  >
                    <option value="">賃料順</option>
                    <option value="price_asc">安い順</option>
                    <option value="price_desc">高い順</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                    <span className="material-icons-outlined text-sm">
                      expand_more
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Grid */}
            {data?.properties && data.properties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.properties.map(property => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  ご契約中の物件がありません
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
