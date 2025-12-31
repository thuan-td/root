/**
 * FAQ Server Wrapper
 * Server component that fetches FAQ data for SEO
 */

import { getFAQs } from '../../services/storeSearchService';
import { FAQSection } from '../FAQSection';

export async function FAQWrapper() {
  const faqs = await getFAQs();

  return <FAQSection faqs={faqs} />;
}
