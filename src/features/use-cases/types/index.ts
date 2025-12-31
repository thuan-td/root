/**
 * Use Cases Feature Types
 *
 * Type definitions for the use cases page
 */

/**
 * Use case category/filter
 */
export type ServiceType = 'all' | 'storage' | 'hobby' | 'garage' | 'parking';
export type UsageType =
  | 'all'
  | 'childcare'
  | 'moving'
  | 'office'
  | 'hobby'
  | 'vehicle'
  | 'sports'
  | 'parking';

/**
 * Individual use case
 */
export interface UseCase {
  id: string;
  caseNumber: number;
  title: string;
  description: string;
  imageUrl: string;
  serviceType: ServiceType;
  usageType: UsageType;
  tags: string[];
}

/**
 * Customer review/testimonial
 */
export interface CustomerReview {
  id: string;
  name: string;
  age: string;
  occupation: string;
  prefecture: string;
  serviceType: string;
  rating: number;
  title: string;
  content: string;
  avatarUrl: string;
  avatarColor: 'blue' | 'red' | 'orange' | 'teal';
}

/**
 * Related article
 */
export interface RelatedArticle {
  id: string;
  title: string;
  date: string;
  imageUrl: string;
  tags: string[];
  badge?: {
    text: string;
    color: string;
  };
}

/**
 * Complete use cases page data
 */
export interface UseCasesPageData {
  heroImage: string;
  useCases: UseCase[];
  reviews: CustomerReview[];
  relatedArticles: RelatedArticle[];
}

/**
 * Filter options
 */
export interface FilterOption {
  value: ServiceType | UsageType;
  label: string;
}
