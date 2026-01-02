/**
 * Why Choose Server Wrapper Component
 * SERVER COMPONENT - Fetches data on server for SEO optimization
 */

import { fetchWhyChooseReasons } from '../../services/storageService';
import { WhyChooseSection } from '../WhyChooseSection';

export async function WhyChooseServerWrapper() {
  const reasons = await fetchWhyChooseReasons();
  return <WhyChooseSection reasons={reasons} />;
}
