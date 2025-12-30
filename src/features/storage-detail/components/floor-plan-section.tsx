/**
 * Floor Plan Section Component
 *
 * Displays the facility floor plan
 */

import Image from 'next/image';
import { FloorPlan } from '../types';

interface FloorPlanSectionProps {
  floorPlan: FloorPlan;
}

export function FloorPlanSection({ floorPlan }: FloorPlanSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-4 border-l-4 border-primary pl-3">
        フロアマップ
      </h2>
      <div className="border border-gray-200 dark:border-gray-700 p-4 rounded-lg bg-white dark:bg-white overflow-x-auto">
        <Image
          alt={floorPlan.title}
          src={floorPlan.imageUrl}
          width={800}
          height={600}
          className="min-w-[800px] h-auto mx-auto opacity-80"
        />
      </div>
    </section>
  );
}
