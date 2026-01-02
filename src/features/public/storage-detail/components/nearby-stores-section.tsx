/**
 * Nearby Stores Section Component
 *
 * Displays nearby storage facilities
 */

import { NearbyStore } from '../types';
import { NearbyStoreCard } from './nearby-store-card';

interface NearbyStoresSectionProps {
  stores: NearbyStore[];
}

export function NearbyStoresSection({ stores }: NearbyStoresSectionProps) {
  return (
    <section>
      <h2 className="text-xl font-bold mb-6 border-l-4 border-primary pl-3">
        近隣店舗
      </h2>
      <div className="grid grid-cols-1 gap-6">
        {stores.map(store => (
          <NearbyStoreCard key={store.id} store={store} />
        ))}
      </div>
    </section>
  );
}
