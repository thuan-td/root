/**
 * New Stores Server Wrapper
 * Server component that fetches new store data for SEO
 */

import { getNewStores } from '../../services/storeSearchService';
import { NewStoresSection } from '../NewStoresSection';

export async function NewStoresWrapper() {
  const stores = await getNewStores();

  return <NewStoresSection stores={stores} />;
}
