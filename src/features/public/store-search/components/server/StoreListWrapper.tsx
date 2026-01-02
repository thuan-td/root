/**
 * Store List Server Wrapper
 * Server component that fetches store data for SEO
 */

import { getStores } from '../../services/storeSearchService';
import { StoreListSection } from '../StoreListSection';

export async function StoreListWrapper() {
  const stores = await getStores();

  return <StoreListSection stores={stores} />;
}
