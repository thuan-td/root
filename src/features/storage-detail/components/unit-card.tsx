/**
 * Unit Card Component
 *
 * Displays individual storage unit information
 */

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Unit } from '../types';

interface UnitCardProps {
  unit: Unit;
  showImage?: boolean;
  imageSrc?: string;
}

export function UnitCard({ unit, showImage = false, imageSrc }: UnitCardProps) {
  const { dimensions } = unit;

  const getAvailabilityBadge = () => {
    switch (unit.availability) {
      case 'full':
        return (
          <Badge
            variant="outline"
            className="ml-2 border-red-500 text-red-500 text-[10px] px-1 rounded"
          >
            ✕ 満室
          </Badge>
        );
      case 'waitlist':
        return (
          <Badge
            variant="outline"
            className="ml-2 border-orange-500 text-orange-500 text-[10px] px-1 rounded"
          >
            ▲ 空き待ち
          </Badge>
        );
      default:
        return null;
    }
  };

  const getActionButtons = () => {
    if (unit.availability === 'full') {
      return (
        <Button
          variant="outline"
          size="sm"
          className="border-secondary text-secondary hover:bg-secondary hover:text-white w-full md:w-auto"
        >
          空き待ち登録受付中
        </Button>
      );
    }

    return (
      <div className="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          className="border-secondary text-secondary hover:bg-secondary hover:text-white"
        >
          仮押さえ
        </Button>
        <Button size="sm" className="bg-secondary text-white hover:bg-sky-600">
          すぐ契約
        </Button>
      </div>
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 py-4 border-b border-gray-100 dark:border-gray-700 items-start md:items-center">
      {/* Image (optional, for first unit) */}
      {showImage && imageSrc && (
        <div className="w-full md:w-24 shrink-0">
          <Image
            alt={`Unit ${unit.unitNumber}`}
            src={imageSrc}
            width={96}
            height={96}
            className="w-full aspect-square object-cover rounded"
          />
        </div>
      )}

      {/* Hidden spacer for subsequent units */}
      {!showImage && (
        <div className="w-full md:w-24 shrink-0 hidden md:block" />
      )}

      {/* Unit Details */}
      <div className="flex-grow grid grid-cols-1 md:grid-cols-12 gap-4 w-full items-center">
        {/* Featured & Floor */}
        <div className="md:col-span-1 flex items-center gap-2">
          {unit.isFeatured && (
            <i className="fa-regular fa-star text-orange-400" />
          )}
          <Badge className="bg-gray-800 text-white text-xs px-1 rounded">
            {unit.floor}
          </Badge>
        </div>

        {/* Size */}
        <div className="md:col-span-2">
          <span className="font-bold text-lg">{unit.size}</span>
          {getAvailabilityBadge()}
        </div>

        {/* Dimensions */}
        <div className="md:col-span-3 text-xs text-gray-500">
          {unit.unitNumber !== unit.size && (
            <>
              幅{dimensions.width}m × 奥行{dimensions.depth}m × 高さ
              {dimensions.height}m
            </>
          )}
        </div>

        {/* Price */}
        <div className="md:col-span-3">
          <div className="text-xs text-gray-400 line-through">
            月額(税込) {unit.originalPrice.toLocaleString()}円/月
          </div>
          <div className="text-primary font-bold">
            {unit.campaignPrice.toLocaleString()}円/月〜
          </div>
        </div>

        {/* Actions */}
        <div className="md:col-span-3 flex justify-end">
          {getActionButtons()}
        </div>
      </div>
    </div>
  );
}
