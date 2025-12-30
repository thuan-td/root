/**
 * Storage Items Server Wrapper Component
 * SERVER COMPONENT - Fetches data on server for SEO optimization
 */

import { fetchStorageItems } from '../../services/storageService';
import { StorageItemsSection } from '../StorageItemsSection';

export async function StorageItemsServerWrapper() {
  const items = await fetchStorageItems();
  return <StorageItemsSection items={items} />;
}
