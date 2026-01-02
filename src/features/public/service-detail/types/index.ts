/**
 * Landing Page Types
 *
 * Type definitions for ROOT Storage landing page
 */

export interface StorageType {
  id: string;
  name: string;
  badge: string;
  size: string;
  title: string;
  imageUrl: string;
  recommendations: string[];
}

export interface SearchLocation {
  prefecture: string;
  count: number;
  isMain?: boolean;
}

export interface CampaignStore {
  id: string;
  name: string;
  address: string;
  nearestStation: string;
  price: number;
  imageUrl: string;
  serviceType: string;
  hasReservation: boolean;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  imageUrl: string;
  badge: string;
}

export interface UseCaseItem {
  id: string;
  caseNumber: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  serviceType: string;
}

export interface Testimonial {
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
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface ContractStep {
  stepNumber: number;
  label: string;
  icon: string;
  isMainStep: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface LandingPageData {
  heroImage: string;
  heroTitle: string;
  heroSubtitle: string;
  features: Feature[];
  storageTypes: StorageType[];
  searchLocations: SearchLocation[];
  campaignStores: CampaignStore[];
  newsItems: NewsItem[];
  useCases: UseCaseItem[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  contractSteps: ContractStep[];
}
