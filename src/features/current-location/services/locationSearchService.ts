/**
 * Location Search Service
 * Handles data fetching for location search
 */

import {
  storeLocations,
  type StoreLocation,
} from '../data/location-search.data';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export async function getStoreLocations(): Promise<StoreLocation[]> {
  await delay(100);
  return storeLocations;
}

export async function getNearbyStores(
  lat: number,
  lng: number,
  radiusKm: number = 5,
): Promise<StoreLocation[]> {
  await delay(200);
  // Simple distance calculation (in production, use proper geo distance)
  return storeLocations.filter(store => {
    const distance = Math.sqrt(
      Math.pow(store.lat - lat, 2) + Math.pow(store.lng - lng, 2),
    );
    return distance < radiusKm / 100; // Rough approximation
  });
}
