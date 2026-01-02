/**
 * Storage Service Types
 * Defines all TypeScript interfaces for the storage service feature
 */

export interface StorageService {
  id: string;
  type: 'storage' | 'garage' | 'parking';
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  badge: string;
  color: string;
  link: string;
}

export interface StorageFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface UsageExample {
  id: string;
  title: string;
  highlightedWord: string;
  description: string[];
  image: string;
  imageShape: 'circle' | 'rectangle';
  imagePosition: 'left' | 'right';
}

export interface WhyChooseReason {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface StorageItem {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  age: string;
  occupation: string;
  location: string;
  serviceType: string;
  rating: number;
  title: string;
  comment: string;
  avatar?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StoragePageData {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    stats: {
      hours: string;
      days: string;
    };
  };
  introduction: {
    title: string;
    description: string[];
  };
  services: StorageService[];
  usageExamples: UsageExample[];
  storageItems: StorageItem[];
  whyChooseReasons: WhyChooseReason[];
  reviews: CustomerReview[];
  faqs: FAQItem[];
}

export interface BreadcrumbItem {
  label: string;
  href: string;
}
