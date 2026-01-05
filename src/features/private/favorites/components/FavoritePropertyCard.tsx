'use client';

import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { FavoriteProperty } from '../types/favorites.types';
import { ContractService } from '@/features/private/contract/services/contract.service';

interface FavoritePropertyCardProps {
  property: FavoriteProperty;
  onRemoveFromFavorites?: (propertyId: string) => void;
  className?: string;
}

export default function FavoritePropertyCard({
  property,
  onRemoveFromFavorites,
  className,
}: FavoritePropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(true);
  const typeInfo = ContractService.getPropertyTypeLabel(property.type);

  const handleToggleFavorite = () => {
    if (isFavorite && onRemoveFromFavorites) {
      onRemoveFromFavorites(property.id);
    }
    setIsFavorite(!isFavorite);
  };

  // Status badge mapping
  const getStatusBadge = () => {
    if (property.cancelWaiting === 'registered') {
      return (
        <button className="text-primary border border-primary text-xs font-bold px-2 py-1 rounded-sm bg-white">
          空待ち登録
        </button>
      );
    }
    if (property.cancelWaiting === 'notified') {
      return (
        <button className="text-primary border border-primary text-xs font-bold px-2 py-1 rounded-sm bg-white">
          キャンセル待ち通知済
        </button>
      );
    }
    return null;
  };

  // Applications badge
  const getApplicationsBadge = () => {
    if (property.hasApplications) {
      return (
        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded">
          申込み({property.hasApplications ? '3件' : '0件'})
        </span>
      );
    }
    if (property.cancelWaiting) {
      return (
        <span className="bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded">
          空待ち(3件)
        </span>
      );
    }
    return null;
  };

  return (
    <article
      className={cn(
        'bg-card-light dark:bg-card-dark rounded-lg shadow-sm overflow-hidden flex flex-col border border-transparent dark:border-gray-800 hover:shadow-md transition-shadow',
        className,
      )}
    >
      {/* Top Actions */}
      <div className="px-4 pt-4 pb-2 flex justify-between items-center">
        {getStatusBadge()}
        <button
          onClick={handleToggleFavorite}
          className={cn(
            'text-xs font-bold px-2 py-1 rounded-sm flex items-center gap-1 transition-colors',
            isFavorite
              ? 'text-secondary border border-secondary hover:bg-secondary hover:text-white'
              : 'bg-secondary text-white hover:bg-teal-600',
          )}
        >
          <span className="material-icons-outlined text-sm">
            {isFavorite ? 'favorite' : 'favorite_border'}
          </span>
          {isFavorite ? '保存解除' : 'お気に戻す'}
        </button>
      </div>

      {/* Property Image */}
      <div className="relative w-full h-48 bg-gray-200">
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Property Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Type & Applications Badge */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-col">
            <span
              className={cn(
                'font-black text-sm tracking-wide w-max mb-1 text-black dark:text-white border-b-2',
                property.type === 'storage'
                  ? 'border-primary'
                  : 'border-orange-500',
              )}
            >
              {typeInfo.label}
            </span>
          </div>
          {getApplicationsBadge()}
        </div>

        {/* Property Name */}
        <h3 className="text-lg font-bold mb-2">{property.name}</h3>

        {/* Campaign Info (placeholder) */}
        <p className="text-primary text-xs font-bold mb-3 leading-relaxed">
          【店舗限定特別キャンペーン】
          <br />
          2ヶ月間の賃料が無料
        </p>

        {/* Unit Type & Size */}
        <div className="flex gap-2 mb-3 text-xs">
          <span className="bg-secondary text-white px-2 py-1 rounded-sm">
            {property.unitType}
          </span>
          <span className="border border-gray-300 dark:border-gray-600 px-2 py-1 rounded-sm text-gray-600 dark:text-gray-300">
            {property.size}
          </span>
        </div>

        {/* Address & Access */}
        <div className="text-xs text-text-sub-light dark:text-text-sub-dark mb-4 leading-relaxed">
          {property.address}
          <br />
          {property.access}
        </div>

        {/* Price */}
        <div className="text-sm font-bold mb-4">
          月額{' '}
          <span className="text-2xl text-black dark:text-white">
            {property.monthlyFee.toLocaleString()}
          </span>{' '}
          円
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          {property.status === 'active' ? (
            <>
              <button className="border border-secondary text-secondary text-xs font-bold py-2 rounded hover:bg-secondary hover:text-white transition-colors">
                空室待ち
              </button>
              <button className="border border-primary text-primary text-xs font-bold py-2 rounded flex justify-center items-center gap-1 hover:bg-primary hover:text-white transition-colors">
                お問い合せ
                <span className="material-icons-outlined text-sm">
                  arrow_circle_right
                </span>
              </button>
            </>
          ) : property.status === 'pending' ? (
            <>
              <button className="bg-primary text-white text-xs font-bold py-2 rounded flex justify-center items-center gap-1 hover:bg-red-700 transition-colors shadow-md shadow-red-200 dark:shadow-none">
                申し込む
                <span className="material-icons-outlined text-sm">
                  arrow_circle_right
                </span>
              </button>
              <button className="border border-primary text-primary text-xs font-bold py-2 rounded flex justify-center items-center gap-1 hover:bg-primary hover:text-white transition-colors">
                お問い合せ
                <span className="material-icons-outlined text-sm">
                  arrow_circle_right
                </span>
              </button>
            </>
          ) : (
            <button className="col-span-2 border border-primary text-primary text-xs font-bold py-2 rounded flex justify-center items-center gap-1 hover:bg-primary hover:text-white transition-colors">
              お問い合せ
              <span className="material-icons-outlined text-sm">
                arrow_circle_right
              </span>
            </button>
          )}
        </div>

        {/* Memo Section */}
        <div className="border-t border-dotted border-gray-300 dark:border-gray-700 pt-3 flex justify-between items-center mt-auto">
          <span className="text-xs text-text-sub-light dark:text-text-sub-dark font-bold">
            メモ
          </span>
          <button className="border border-gray-300 dark:border-gray-600 text-text-sub-light dark:text-text-sub-dark text-xs px-4 py-0.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
            編集
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-50 dark:bg-gray-800/50 px-5 py-2 text-xs text-text-sub-light dark:text-text-sub-dark">
        近隣倉庫
      </div>
    </article>
  );
}
