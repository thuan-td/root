/**
 * Nearby Store Card Component
 *
 * Reusable card component for displaying nearby stores
 */

import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { NearbyStore } from '../types';

interface NearbyStoreCardProps {
  store: NearbyStore;
}

export function NearbyStoreCard({ store }: NearbyStoreCardProps) {
  const getStoreTypeBadge = (type: string) => {
    const labels = {
      STORAGE: 'STORAGE',
      PARKING: 'PARKING',
      GARAGE: 'GARAGE',
    };
    return labels[type as keyof typeof labels] || type;
  };

  const getBadgeVariant = (variant: string) => {
    switch (variant) {
      case 'available':
        return 'border-green-400 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30';
      case 'waitlist':
        return 'border-orange-400 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/30';
      default:
        return 'border-gray-400 text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/30';
    }
  };

  return (
    <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg p-4 flex flex-col md:flex-row gap-4 shadow-sm hover:shadow-md transition">
      {/* Image */}
      <div className="relative w-full md:w-48 shrink-0">
        <Image
          alt={store.name}
          src={store.imageUrl}
          width={192}
          height={128}
          className="w-full h-32 object-cover rounded"
        />
        {store.isNew && (
          <Badge className="absolute top-2 left-2 bg-red-600 text-white text-[10px] px-2 py-0.5 rounded font-bold">
            New
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="flex-grow">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          {store.badge && (
            <Badge
              variant="outline"
              className={`text-[10px] px-2 py-0.5 rounded ${getBadgeVariant(
                store.badge.variant,
              )}`}
            >
              {store.badge.text}
            </Badge>
          )}
          <h3 className="font-bold text-lg">{store.name}</h3>
        </div>

        {/* Campaign */}
        {store.campaign && (
          <p className="text-xs text-primary font-bold mb-1">
            {store.campaign}
          </p>
        )}

        {/* Address */}
        <p className="text-xs text-gray-500 mb-2">
          {store.address}
          <br />
          {store.access}
        </p>

        {/* Type Badge */}
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-black text-white text-[10px] px-1 font-bold">
            {getStoreTypeBadge(store.type)}
          </Badge>
        </div>

        {/* Footer with units and price */}
        <div className="flex flex-col sm:flex-row justify-between items-end border-t border-gray-100 dark:border-gray-700 pt-2">
          <div className="text-xs text-gray-600 dark:text-gray-400">
            <span className="font-bold">ユニットタイプ</span>{' '}
            {store.units.types}
            <br />
            <span className="font-bold">広さ</span> {store.units.sizes}
          </div>
          <div className="text-right">
            <span className="text-xs text-gray-500">月額</span>
            <span className="text-xl font-bold text-black dark:text-white">
              {store.price.min.toLocaleString()}
            </span>
            <span className="text-xs">円〜</span>
            <span className="text-xl font-bold text-black dark:text-white">
              {store.price.max.toLocaleString()}
            </span>
            <span className="text-xs">円</span>
          </div>
        </div>
      </div>
    </div>
  );
}
