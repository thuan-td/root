/**
 * Campaign Store Card Component
 *
 * Displays a store with campaign information
 */

import Image from 'next/image';
import type { CampaignStore } from '../types';

interface CampaignStoreCardProps {
  store: CampaignStore;
}

export function CampaignStoreCard({ store }: CampaignStoreCardProps) {
  return (
    <div className="bg-white dark:bg-background-dark rounded-lg overflow-hidden shadow-sm">
      <div className="relative h-48">
        <Image
          alt={store.name}
          src={store.imageUrl}
          fill
          className="object-cover"
        />
        {store.hasReservation && (
          <div className="absolute top-2 left-2 bg-white text-secondary px-2 py-1 text-xs font-bold rounded shadow-sm border border-teal-100 flex items-center">
            <span className="material-icons text-xs mr-1">check_circle</span>{' '}
            予約受付中
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{store.name}</h3>
        <p className="text-xs text-gray-500 mb-2 whitespace-pre-line">
          {store.address}
          <br />
          {store.nearestStation}
        </p>
        <p className="font-bold text-sm mb-4">
          月額 <span className="text-lg">{store.price.toLocaleString()}</span>
          円~
        </p>
        <div className="border-t pt-3">
          <span className="text-primary font-black tracking-tighter text-sm">
            {store.serviceType}
          </span>
        </div>
      </div>
    </div>
  );
}
