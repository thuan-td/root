/**
 * Location Section Component
 *
 * Displays map and location information
 */

import Image from 'next/image';
import { Location } from '../types';

interface LocationSectionProps {
  location: Location;
}

export function LocationSection({ location }: LocationSectionProps) {
  return (
    <section id="location">
      <h2 className="text-xl font-bold mb-4 border-l-4 border-primary pl-3">
        店舗の場所
      </h2>
      <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden relative">
        <Image
          alt="Map Location"
          src={location.mapImageUrl}
          fill
          className="object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-white dark:bg-gray-800 p-2 rounded shadow text-xs">
          {location.accessInstructions}
        </div>
      </div>
    </section>
  );
}
