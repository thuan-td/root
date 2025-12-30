/**
 * Units Section Component
 *
 * Displays all unit categories with availability legend
 */

import { UnitCategory } from '../types';
import { UnitCategorySection } from './unit-category-section';

interface UnitsSectionProps {
  categories: UnitCategory[];
}

export function UnitsSection({ categories }: UnitsSectionProps) {
  return (
    <section>
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        <h2 className="text-xl font-bold border-l-4 border-primary pl-3">
          料金一覧
        </h2>
        <div className="text-xs text-gray-500 mt-2 md:mt-0 flex gap-4">
          <div className="flex items-center gap-1">
            <i className="fa-regular fa-circle text-blue-500" /> 空室あり
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-caret-up text-orange-500" /> 空きわずか
          </div>
          <div className="flex items-center gap-1">
            <i className="fa-solid fa-xmark text-red-500" /> 満室
          </div>
        </div>
      </div>

      {/* Campaign Notice */}
      <p className="text-xs text-primary mb-6">
        赤字の表示金額は、キャンペーン価格となっております。
      </p>

      {/* Unit Categories */}
      <div className="space-y-4">
        {categories.map(category => (
          <UnitCategorySection key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
