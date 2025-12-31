/**
 * New Stores Section Component
 * Showcases newly opened stores
 */

import { NewStoreCard } from './NewStoreCard';
import { CardLink } from '@/components/common/card-link';
import type { NewStore } from '../data/store-search.data';

interface NewStoresSectionProps {
  stores: NewStore[];
}

export function NewStoresSection({ stores }: NewStoresSectionProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
          新店舗紹介
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stores.map(store => (
            <CardLink key={store.id} id={store.id} url="/storage">
              <NewStoreCard {...store} />
            </CardLink>
          ))}
        </div>

        {/* Pagination indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[1, 2, 3, 4].map(dot => (
            <div
              key={dot}
              className={`w-2 h-2 rounded-full ${
                dot === 1 ? 'bg-gray-800' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
