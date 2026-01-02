/**
 * Storage Items Section Component
 * Displays what can be stored (hobby items, memories, vehicles)
 */

import Image from 'next/image';
import type { StorageItem } from '../types';

interface StorageItemsSectionProps {
  items: StorageItem[];
}

export function StorageItemsSection({ items }: StorageItemsSectionProps) {
  return (
    <section className="bg-surface-light py-16 dark:bg-surface-dark">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-bold">
          こんな
          <span className="border-b-2 border-primary text-primary">
            ものまで
          </span>
          保管できます！
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map(item => (
            <div key={item.id} className="text-center">
              <h4 className="mb-4 font-bold">{item.title}</h4>
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full border-4 border-red-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={192}
                  height={192}
                  className="h-full w-full object-cover"
                  sizes="192px"
                />
              </div>
              <p className="px-4 text-left text-xs leading-relaxed text-gray-600 dark:text-gray-300">
                {item.description.split('\n').map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < item.description.split('\n').length - 1 && <br />}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
