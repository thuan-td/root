/**
 * Store List Card Component
 * Enhanced store card for search results with detailed information
 */

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface StoreListCardProps {
  id: string;
  title: string;
  address: string;
  station: string;
  distance?: string;
  price: number;
  maxPrice?: number;
  imageUrl: string;
  category: 'STORAGE' | 'GARAGE' | 'PARKING';
  available: boolean;
  isNew: boolean;
  features?: string[];
  unitType?: string;
  sizes?: string[];
  campaign?: string;
  showCampaign?: boolean;
}

const categoryColors = {
  STORAGE: {
    bg: 'bg-pink-50',
    border: 'border-pink-500',
    text: 'text-pink-700',
  },
  GARAGE: {
    bg: 'bg-blue-50',
    border: 'border-blue-900',
    text: 'text-blue-900',
  },
  PARKING: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-600',
    text: 'text-yellow-700',
  },
};

const categoryLabels = {
  STORAGE: 'トランクルーム',
  GARAGE: 'ガレージ',
  PARKING: 'パーキング',
};

export function StoreListCard({
  title,
  address,
  station,
  distance,
  price,
  maxPrice,
  imageUrl,
  category,
  available,
  isNew,
  campaign,
  unitType,
  sizes,
  showCampaign = true,
}: StoreListCardProps) {
  const colors = categoryColors[category];

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="grid md:grid-cols-[200px,1fr] gap-0">
        {/* Image */}
        <div className="relative h-48 md:h-auto">
          <Image src={imageUrl} alt={title} fill className="object-cover" />
          {isNew && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-red-600 text-white font-bold">NEW</Badge>
            </div>
          )}
        </div>

        {/* Content */}
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            <Badge
              variant="outline"
              className={`${colors.border} ${colors.text} font-bold`}
            >
              {categoryLabels[category]}
            </Badge>
            {available && (
              <Badge
                variant="outline"
                className="border-green-500 text-green-600"
              >
                【予約受付中】
              </Badge>
            )}
          </div>

          {/* Campaign */}
          {showCampaign && campaign && (
            <div className="mb-3 text-sm text-red-600 font-medium">
              {campaign}
            </div>
          )}

          {/* Title */}
          <h3 className="font-bold text-lg mb-2">{title}</h3>

          {/* Location */}
          <div className="text-sm text-gray-600 mb-3 space-y-1">
            <p>{address}</p>
            <p className="flex items-center gap-2">
              <span>{station}</span>
              {distance && (
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                  {distance}
                </span>
              )}
            </p>
          </div>

          {/* Unit info */}
          {unitType && (
            <div className="text-sm mb-3">
              <span className="text-gray-600">{unitType}</span>
              {sizes && (
                <span className="ml-2 text-gray-500">{sizes.join(' / ')}</span>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 pt-3 border-t">
            <span className="text-sm text-gray-600">月額</span>
            <span className="text-2xl font-bold text-primary">
              {price.toLocaleString()}円
            </span>
            {maxPrice && (
              <>
                <span className="text-sm text-gray-400">〜</span>
                <span className="text-lg font-bold">
                  {maxPrice.toLocaleString()}円
                </span>
              </>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
