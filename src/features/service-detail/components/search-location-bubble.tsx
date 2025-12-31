/**
 * Search Location Bubble Component
 *
 * Interactive bubble showing prefecture and store count
 * Client Component for hover effects
 */

'use client';

import type { SearchLocation } from '../types';

interface SearchLocationBubbleProps {
  location: SearchLocation;
  position: 'top-left' | 'center' | 'bottom-left' | 'top-right';
}

const POSITION_STYLES = {
  'top-left': 'top-10 left-12',
  center: 'top-28 left-24 z-20',
  'bottom-left': 'bottom-10 left-16',
  'top-right': 'top-24 right-0',
};

const SIZE_STYLES = {
  main: 'w-24 h-24 text-sm',
  normal: 'w-20 h-20 text-xs',
};

export function SearchLocationBubble({
  location,
  position,
}: SearchLocationBubbleProps) {
  const positionClass = POSITION_STYLES[position];
  const sizeClass = location.isMain ? SIZE_STYLES.main : SIZE_STYLES.normal;
  const colorClass = location.isMain
    ? 'bg-primary text-white'
    : 'bg-white border-4 border-primary';

  return (
    <div
      className={`absolute ${positionClass} transform hover:scale-110 transition cursor-pointer`}
    >
      <div
        className={`${sizeClass} rounded-full ${colorClass} flex flex-col items-center justify-center shadow-lg`}
      >
        <span className={`font-bold ${location.isMain ? '' : 'text-xs'}`}>
          {location.prefecture}
        </span>
        <span
          className={`font-black ${location.isMain ? 'text-xl' : 'text-lg'} ${location.isMain ? '' : 'text-primary'}`}
        >
          {location.count}
          <span className={location.isMain ? 'text-sm' : 'text-xs'}>件</span>
        </span>
      </div>
    </div>
  );
}
