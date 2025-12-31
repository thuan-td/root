/**
 * Interactive Map Component
 * Displays store locations on a map with category filtering
 * Matches the design from the HTML mockup
 */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import type { StoreLocation } from '../data/location-search.data';

interface InteractiveMapProps {
  stores: StoreLocation[];
  selectedCategories: ('STORAGE' | 'GARAGE' | 'PARKING')[];
}

// Pin colors matching HTML
const pinColors = {
  STORAGE: '#BE1E2D', // Red
  GARAGE: '#BE1E2D', // Red
  PARKING: '#F47B20', // Orange
};

export function InteractiveMap({
  stores,
  selectedCategories,
}: InteractiveMapProps) {
  const [selectedStore, setSelectedStore] = useState<StoreLocation | null>(
    null,
  );

  // Filter stores based on selected categories
  const filteredStores = stores.filter(store =>
    selectedCategories.includes(store.category),
  );

  // Pin positions matching the HTML layout
  const pinPositions = [
    { top: '33%', left: '25%' },
    { top: '50%', left: '33%' },
    { top: '40%', left: '45%' },
    { top: '60%', left: '48%' },
    { top: '55%', left: '55%' }, // Orange pin (PARKING)
  ];

  return (
    <div className="relative w-full h-full">
      {/* Map Background Image */}
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEUJYBY4wQ_LQ1E6UAbbfxd57GUhoMofHiVIYIIfIkCfRTXtrmc0ba2bp9iJROA4NJwgI-f7NDdGR7ofyBUwawv6zpHLpLsD6Mvfb6WGCEfvHzTUiWO62f3eQWcGUB8WJFtcmNS6atc_E6TxTVyLYIqlIwW5k6QnU69qy9lVV9Cimg2JVIqY5JeIY-6EGK2ZEHqmOb704qT4bt183aAn73SR4mbxgUtZ6skKmCaOBC1wgv_4_7vODS8CofD3QKmiyHyyhKSdKaeOY"
        alt="Map of area"
        fill
        className="object-cover opacity-60 dark:opacity-30 mix-blend-multiply"
      />

      {/* Store Markers (Pins) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="container mx-auto h-full relative">
          {filteredStores.slice(0, 5).map((store, index) => {
            const position = pinPositions[index] || pinPositions[0];
            const pinColor = pinColors[store.category];
            const isLarge = index === 1 || index === 4; // Some pins are larger

            return (
              <div
                key={store.id}
                className="absolute transform -translate-x-1/2 -translate-y-full pin hover:scale-110 transition-transform cursor-pointer pointer-events-auto"
                style={{
                  top: position.top,
                  left: position.left,
                }}
                onClick={() => setSelectedStore(store)}
              >
                {/* SVG Pin matching HTML design */}
                <svg
                  width={isLarge ? '50' : '40'}
                  height={isLarge ? '70' : '56'}
                  viewBox="0 0 40 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-lg"
                >
                  {/* Pin shape */}
                  <path
                    d="M20 56C20 56 40 40 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 40 20 56 20 56Z"
                    fill={pinColor}
                  />
                  {/* White circle */}
                  <circle cx="20" cy="20" r="14" fill="white" />
                  {/* R letter */}
                  <path
                    d="M16 28V12H21.5C23.5 12 25 13 25 15C25 16.5 24 17.5 22.5 17.8V18H25V28H23V19H18V28H16Z"
                    fill={pinColor}
                  />
                </svg>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Store Info Popup (Optional) */}
      {selectedStore && (
        <div className="absolute bottom-20 left-4 right-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm rounded-lg shadow-xl p-4 max-w-md mx-auto pointer-events-auto">
          <button
            onClick={() => setSelectedStore(null)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-xl"
            aria-label="Close"
          >
            ×
          </button>
          <div className="pr-6">
            <span
              className={`inline-block px-2 py-1 text-xs font-bold mb-2 border-b-2 ${
                selectedStore.category === 'STORAGE'
                  ? 'border-pink-500 text-pink-500'
                  : selectedStore.category === 'GARAGE'
                    ? 'border-blue-900 text-blue-900'
                    : 'border-orange-500 text-orange-500'
              }`}
            >
              {selectedStore.category}
            </span>
            <h3 className="font-bold text-lg mb-1 text-gray-900 dark:text-white">
              {selectedStore.name}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
              {selectedStore.address}
            </p>
            {selectedStore.distance && (
              <p className="text-xs text-gray-500">
                現在地から約 {(selectedStore.distance / 1000).toFixed(1)}km
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
