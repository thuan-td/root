/**
 * FAQ Server Wrapper Component
 * SERVER COMPONENT - Fetches data on server for SEO optimization
 */

import { fetchFAQs } from '../../services/storageService';
import { FAQSection } from '../FAQSection';

export async function FAQServerWrapper() {
  const faqs = await fetchFAQs();
  return <FAQSection faqs={faqs} />;
}
