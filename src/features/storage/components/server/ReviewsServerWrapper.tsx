/**
 * Reviews Server Wrapper Component
 * SERVER COMPONENT - Fetches data on server for SEO optimization
 */

import { fetchReviews } from '../../services/storageService';
import { ReviewsSection } from '../ReviewsSection';

export async function ReviewsServerWrapper() {
  const reviews = await fetchReviews();
  return <ReviewsSection reviews={reviews} />;
}
