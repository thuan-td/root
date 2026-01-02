/**
 * Services Server Wrapper Component
 * SERVER COMPONENT - Fetches data on server for SEO optimization
 */

import { fetchServices } from '../../services/storageService';
import { ServiceGrid } from '../ServiceGrid';

export async function ServicesServerWrapper() {
  // Fetch data on server (SSR/SSG)
  const services = await fetchServices();

  return <ServiceGrid services={services} />;
}
