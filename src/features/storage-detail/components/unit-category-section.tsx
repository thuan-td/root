/**
 * Unit Category Section Component
 *
 * Collapsible section for each unit category
 */

'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { UnitCategory } from '../types';
import { UnitCard } from './unit-card';

interface UnitCategorySectionProps {
  category: UnitCategory;
}

export function UnitCategorySection({ category }: UnitCategorySectionProps) {
  const [isExpanded, setIsExpanded] = useState(category.isExpanded || false);

  const getCategoryColor = (type: string) => {
    const colors = {
      S: 'bg-teal-500',
      M: 'bg-teal-400',
      L: 'bg-teal-400',
      XL: 'bg-teal-400',
    };
    return colors[type as keyof typeof colors] || 'bg-teal-400';
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className="w-full bg-accent dark:bg-teal-900 border border-teal-100 dark:border-teal-800 rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-teal-100 dark:hover:bg-teal-800 transition"
      >
        <h3 className="font-bold text-accent-dark dark:text-teal-200">
          <Badge
            className={`${getCategoryColor(
              category.type,
            )} text-white text-xs px-2 py-1 rounded mr-2`}
          >
            {category.type}タイプ
          </Badge>
          {category.name} {category.sizeRange}
        </h3>
        <i className="fa-solid fa-plus text-teal-600 dark:text-teal-400" />
      </button>
    );
  }

  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      {/* Header */}
      <button
        onClick={() => setIsExpanded(false)}
        className="w-full bg-accent dark:bg-teal-900 p-4 flex justify-between items-center cursor-pointer"
      >
        <h3 className="font-bold text-accent-dark dark:text-teal-200">
          <Badge
            className={`${getCategoryColor(
              category.type,
            )} text-white text-xs px-2 py-1 rounded mr-2`}
          >
            {category.type}タイプ
          </Badge>
          {category.name} {category.sizeRange}
        </h3>
        <i className="fa-solid fa-minus text-teal-600 dark:text-teal-400" />
      </button>

      {/* Content */}
      <div className="p-4 bg-white dark:bg-surface-dark">
        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 whitespace-pre-line">
          {category.description}
        </p>

        {/* Units */}
        <div>
          {category.units.map((unit, index) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              showImage={index === 0}
              imageSrc={index === 0 ? category.image : undefined}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
