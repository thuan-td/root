/**
 * Store Search Service
 * Handles data fetching for store search (simulated async for demo)
 */

import {
  storeSearchData,
  type Store,
  type NewStore,
  type FAQ,
} from '../data/store-search.data';

// Simulate async data fetching
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getStores(): Promise<Store[]> {
  // In production, this would fetch from an API
  await delay(100);
  return storeSearchData.stores;
}

export async function getNewStores(): Promise<NewStore[]> {
  await delay(100);
  return storeSearchData.newStores;
}

export async function getFAQs(): Promise<FAQ[]> {
  await delay(100);
  return storeSearchData.faqs;
}

export async function searchStores(query: string): Promise<Store[]> {
  await delay(200);
  // Simple search implementation
  const lowercaseQuery = query.toLowerCase();
  return storeSearchData.stores.filter(
    store =>
      store.title.toLowerCase().includes(lowercaseQuery) ||
      store.address.toLowerCase().includes(lowercaseQuery) ||
      store.station.toLowerCase().includes(lowercaseQuery),
  );
}

export async function filterStoresByCategory(
  category: 'STORAGE' | 'GARAGE' | 'PARKING',
): Promise<Store[]> {
  await delay(100);
  return storeSearchData.stores.filter(store => store.category === category);
}
