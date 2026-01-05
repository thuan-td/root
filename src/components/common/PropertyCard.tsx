'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Property } from '@/features/private/contract/types/contract.types';
import { ContractService } from '@/features/private/contract/services/contract.service';

interface PropertyCardProps {
  property: Property;
  className?: string;
}

/**
 * Reusable PropertyCard component
 * Displays property information for contracts, favorites, etc.
 */
export function PropertyCard({ property, className }: PropertyCardProps) {
  const typeInfo = ContractService.getPropertyTypeLabel(property.type);

  return (
    <div
      className={cn(
        'bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-card flex flex-col h-full transition-all duration-300 group hover:shadow-lg',
        className,
      )}
    >
      {/* Property Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.imageUrl}
          alt={property.name}
          fill
          className="object-cover transform group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>

      {/* Property Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Status & Type Badge */}
        <div className="flex justify-between items-start mb-4">
          {/* Contract Status */}
          <span className="inline-flex items-center px-3 py-1 rounded border border-primary text-primary bg-white dark:bg-gray-800 text-sm font-medium">
            <span className="w-2 h-2 border border-primary rounded-full mr-1.5"></span>
            {property.status === 'active' && 'ご契約中'}
            {property.status === 'pending' && '審査中'}
            {property.status === 'expired' && '契約終了'}
          </span>

          {/* Property Type */}
          <div className="flex flex-col items-end">
            <span className="font-black text-xl tracking-tighter text-black dark:text-white uppercase leading-none">
              {typeInfo.label}
            </span>
            <span
              className={cn(
                'text-[10px] text-white px-1 font-bold rounded-sm',
                typeInfo.color,
              )}
            >
              {typeInfo.sublabel}
            </span>
          </div>
        </div>

        {/* Property Name */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {property.name}
        </h3>

        {/* Unit Type & Size */}
        <div className="flex gap-2 mb-4">
          <span className="bg-[#4DB6AC] text-white px-3 py-1 rounded text-sm font-bold shadow-sm">
            {property.unitType}
          </span>
          <span className="border border-gray-400 dark:border-gray-500 text-gray-900 dark:text-white px-3 py-1 rounded text-sm font-bold bg-white dark:bg-gray-800">
            {property.size}
          </span>
        </div>

        {/* Address & Access */}
        <div className="space-y-1 mb-6 text-sm text-gray-600 dark:text-gray-400">
          <p>{property.address}</p>
          <p>{property.access}</p>
        </div>

        {/* Price & Action Button */}
        <div className="mt-auto pt-4 border-t border-dashed border-gray-300 dark:border-gray-700">
          {/* Monthly Fee */}
          <div className="flex items-baseline gap-1 mb-6">
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              月額
            </span>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {property.monthlyFee.toLocaleString()}
            </span>
            <span className="text-sm font-bold text-gray-900 dark:text-white">
              円
            </span>
          </div>

          {/* Detail Button */}
          <Link
            href={`/dashboard/contract/${property.id}`}
            className="w-full sm:w-auto mx-auto block px-8 py-2 rounded-full border border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group-hover:bg-primary group-hover:text-white"
          >
            ユニット詳細
            <span className="bg-primary text-white rounded-full p-0.5 material-icons-outlined text-xs group-hover:bg-white group-hover:text-primary transition-colors">
              chevron_right
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
