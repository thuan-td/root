/**
 * Location Search Section Component
 * Main container component combining map and filters
 */

'use client';

import { useState } from 'react';
import { InteractiveMap } from './InteractiveMap';
import type { StoreLocation } from '../data/location-search.data';
import { MapPin, ChevronRight } from 'lucide-react';

interface LocationSearchSectionProps {
  stores: StoreLocation[];
}

export function LocationSearchSection({ stores }: LocationSearchSectionProps) {
  const [selectedCategories, setSelectedCategories] = useState<
    ('STORAGE' | 'GARAGE' | 'PARKING')[]
  >(['STORAGE', 'GARAGE', 'PARKING']);

  const handleCategoryToggle = (category: 'STORAGE' | 'GARAGE' | 'PARKING') => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category],
    );
  };

  const handleRefreshLocation = () => {
    // In production, request user's current location
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          console.log('Current position:', position.coords);
          // Update map center and fetch nearby stores
        },
        error => {
          console.error('Error getting location:', error);
        },
      );
    } else {
      alert('位置情報がサポートされていません。');
    }
  };

  // Filter stores based on selected categories
  const filteredStores = stores.filter(store =>
    selectedCategories.includes(store.category),
  );

  return (
    <>
      {/* Page Title */}
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          現在地から探す
        </h1>
      </section>

      {/* Map Section with Filters Overlay */}
      <section className="w-full relative overflow-hidden h-[500px]">
        <InteractiveMap
          stores={stores}
          selectedCategories={selectedCategories}
        />
        {/* Filter Checkboxes Overlay (Bottom) */}
        <div className="absolute bottom-0 left-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 pointer-events-auto flex justify-center gap-4">
          {/* STORAGE Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div
              className={`w-5 h-5 border-2 border-primary flex items-center justify-center rounded-sm ${
                selectedCategories.includes('STORAGE')
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-primary'
              }`}
              onClick={() => handleCategoryToggle('STORAGE')}
            >
              {selectedCategories.includes('STORAGE') && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="font-bold text-gray-800 dark:text-white uppercase tracking-wider text-sm border-b-2 border-primary pb-0.5">
              STORAGE
            </span>
            <span className="text-[10px] text-gray-500 font-bold ml-[-4px] mt-2">
              ストレージ
            </span>
          </label>

          {/* GARAGE Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div
              className={`w-5 h-5 border-2 border-primary flex items-center justify-center rounded-sm ${
                selectedCategories.includes('GARAGE')
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-primary'
              }`}
              onClick={() => handleCategoryToggle('GARAGE')}
            >
              {selectedCategories.includes('GARAGE') && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="font-bold text-gray-800 dark:text-white uppercase tracking-wider text-sm border-b-2 border-primary pb-0.5">
              GARAGE
            </span>
            <span className="text-[10px] text-gray-500 font-bold ml-[-4px] mt-2">
              ガレージ
            </span>
          </label>

          {/* PARKING Checkbox */}
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <div
              className={`w-5 h-5 border-2 border-primary flex items-center justify-center rounded-sm ${
                selectedCategories.includes('PARKING')
                  ? 'bg-primary text-white'
                  : 'bg-white dark:bg-gray-800 text-primary'
              }`}
              onClick={() => handleCategoryToggle('PARKING')}
            >
              {selectedCategories.includes('PARKING') && (
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
            <span className="font-bold text-gray-800 dark:text-white uppercase tracking-wider text-sm border-b-2 border-primary pb-0.5">
              PARKING
            </span>
            <span className="text-[10px] text-gray-500 font-bold ml-[-4px] mt-2">
              パーキング
            </span>
          </label>
        </div>
      </section>

      {/* Location Refresh Button Section */}
      <section className="container mx-auto px-4 py-8 text-center">
        <p className="mb-4 text-sm md:text-base text-gray-700 dark:text-gray-300">
          現在地を再取得し、地図上にピンを立て周辺の物件を検索。
        </p>
        <button
          onClick={handleRefreshLocation}
          className="bg-black hover:bg-gray-800 text-white rounded-full px-8 py-3 font-bold flex items-center gap-2 mx-auto transition-colors"
        >
          <MapPin className="w-5 h-5" />
          現在地を再取得する
        </button>
        <p className="text-[10px] text-gray-400 mt-2">
          ※お使いの端末の設定やネットワーク設定によってはご利用いただけない場合がございます。
        </p>
      </section>

      {/* Store Count and View Results Section */}
      <section className="w-full bg-[#FFF0F0] dark:bg-pink-bar-dark border-y border-red-100 dark:border-red-900 mb-0">
        <div className="container mx-auto px-4 py-3 flex justify-center items-center gap-4">
          <span className="text-gray-700 dark:text-gray-200 text-lg">
            該当件数:{' '}
            <span className="text-3xl font-bold font-sans">
              {filteredStores.length}
            </span>{' '}
            件
          </span>
          <button className="bg-primary hover:bg-red-700 text-white text-xs font-bold py-2 px-6 rounded-full flex items-center gap-1 transition-colors">
            一覧を表示する
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </>
  );
}
