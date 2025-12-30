/**
 * Facility Grid Component
 *
 * Displays facility amenities in a grid layout
 */

import { Facility } from '../types';
import { cn } from '@/lib/utils';

interface FacilityGridProps {
  facilities: Facility[];
}

export function FacilityGrid({ facilities }: FacilityGridProps) {
  return (
    <div>
      <h4 className="font-bold text-accent-dark dark:text-teal-400 mb-2 text-sm">
        店舗の設備
      </h4>
      <div className="grid grid-cols-4 gap-2 text-[10px] text-center text-gray-600 dark:text-gray-400">
        {facilities.map(facility => (
          <div
            key={facility.id}
            className={cn(
              'bg-gray-100 dark:bg-gray-800 p-2 rounded flex flex-col items-center gap-1',
              !facility.available && 'opacity-50',
            )}
          >
            <i className={`fa-solid fa-${facility.icon} text-lg`} />
            <span className="whitespace-pre-line">{facility.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
