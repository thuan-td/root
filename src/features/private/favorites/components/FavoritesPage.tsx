'use client';

import { useState } from 'react';
import { useFavorites, useRemoveFromFavorites } from '../hooks';
import FilterPanel from './FilterPanel';
import FavoritePropertyCard from './FavoritePropertyCard';
import type { FavoritesFilter, ViewMode } from '../types/favorites.types';
import { DashboardSidebar } from '../../dashboard';

export default function FavoritesPage() {
  const [filter, setFilter] = useState<FavoritesFilter>({
    status: undefined,
    hasApplications: null,
    cancelWaiting: undefined,
  });
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const { data, isLoading, error } = useFavorites(filter);
  const removeFromFavorites = useRemoveFromFavorites();

  const handleRemoveFavorite = (propertyId: string) => {
    removeFromFavorites.mutate({ propertyId });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-gray-500">読み込み中...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-500">
          エラーが発生しました。もう一度お試しください。
        </div>
      </div>
    );
  }

  const properties = data?.properties || [];
  const total = data?.total || 0;

  return (
    <div className="text-gray-800 bg-[hsl(var(--background-admin))] dark:text-gray-200 min-h-screen flex flex-col font-body">
      <div className="w-full dark:bg-surface-dark py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-center text-2xl font-bold tracking-wide text-black dark:text-white">
          お気に入り物件
        </h1>
      </div>
      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <DashboardSidebar />
        <main className="flex-1 p-6 md:p-10">
          {/* Filter Panel */}
          <FilterPanel filter={filter} onFilterChange={setFilter} />

          {/* Results Info Bar */}
          <div className="bg-card-light dark:bg-card-dark rounded-lg p-3 mb-6 flex flex-col sm:flex-row justify-between items-center text-sm shadow-sm border border-transparent dark:border-gray-800">
            <div className="text-text-sub-light dark:text-text-sub-dark mb-2 sm:mb-0">
              該当件数{' '}
              <span className="text-primary font-bold text-lg mx-1">
                {total}
              </span>{' '}
              件 / 1～10 件を表示
            </div>
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-text-main-light dark:text-text-main-dark rounded px-4 py-1.5 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                  <option>値上がり順</option>
                  <option>新着順</option>
                  <option>価格が高い順</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                  <span className="material-icons-outlined text-sm">
                    expand_more
                  </span>
                </div>
              </div>

              {/* View Toggle */}
              <div className="flex gap-1 border-l border-gray-300 dark:border-gray-600 pl-4">
                <button
                  onClick={() => setViewMode('grid')}
                  className={
                    viewMode === 'grid'
                      ? 'text-primary p-1'
                      : 'text-gray-300 dark:text-gray-600 p-1 hover:text-gray-500'
                  }
                >
                  <span className="material-icons-outlined">grid_view</span>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={
                    viewMode === 'list'
                      ? 'text-primary p-1'
                      : 'text-gray-300 dark:text-gray-600 p-1 hover:text-gray-500'
                  }
                >
                  <span className="material-icons-outlined">view_list</span>
                </button>
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          {properties.length === 0 ? (
            <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
              <div className="flex flex-col items-center">
                <span className="material-icons-outlined text-gray-300 text-6xl mb-4">
                  favorite_border
                </span>
                <p className="text-gray-500 text-lg font-medium mb-2">
                  条件に一致する物件がありません
                </p>
                <p className="text-gray-400 text-sm">
                  絞り込み条件を変更してお試しください
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {properties.map(property => (
                <FavoritePropertyCard
                  key={property.id}
                  property={property}
                  onRemoveFromFavorites={handleRemoveFavorite}
                />
              ))}
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
