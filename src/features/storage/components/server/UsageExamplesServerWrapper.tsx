/**
 * Usage Examples Server Wrapper Component
 * SERVER COMPONENT - Fetches data on server for SEO optimization
 */

import { fetchUsageExamples } from '../../services/storageService';
import { UsageExamplesSection } from '../UsageExamplesSection';

export async function UsageExamplesServerWrapper() {
  const examples = await fetchUsageExamples();
  return <UsageExamplesSection examples={examples} />;
}
