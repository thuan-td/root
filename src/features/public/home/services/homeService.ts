// Server-side data fetching service
import {
  featuredStoresData,
  newsItemsData,
  servicesData,
  useCasesData,
  columnsData,
  faqsData,
} from '../data/dummy';
import type {
  FeaturedStore,
  NewsItem,
  Service,
  UseCase,
  Column,
  FAQ,
} from '../types';

// Base API URL - change this when you have real API
const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
const USE_REAL_API = false; // Set to true when API is ready

// Featured Stores
export async function getFeaturedStores(): Promise<FeaturedStore[]> {
  if (USE_REAL_API) {
    const res = await fetch(`${API_URL}/api/featured-stores`, {
      next: { revalidate: 300 }, // Revalidate every 5 minutes
    });
    if (!res.ok) throw new Error('Failed to fetch featured stores');
    return res.json();
  }

  // Return dummy data for now
  return featuredStoresData;
}

// News Items
export async function getNewsItems(): Promise<NewsItem[]> {
  if (USE_REAL_API) {
    const res = await fetch(`${API_URL}/api/news`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error('Failed to fetch news');
    return res.json();
  }

  return newsItemsData;
}

// Services
export async function getServices(): Promise<Service[]> {
  if (USE_REAL_API) {
    const res = await fetch(`${API_URL}/api/services`, {
      next: { revalidate: 3600 }, // Services rarely change, revalidate every hour
    });
    if (!res.ok) throw new Error('Failed to fetch services');
    return res.json();
  }

  return servicesData;
}

// Use Cases
export async function getUseCases(): Promise<UseCase[]> {
  if (USE_REAL_API) {
    const res = await fetch(`${API_URL}/api/use-cases`, {
      next: { revalidate: 600 },
    });
    if (!res.ok) throw new Error('Failed to fetch use cases');
    return res.json();
  }

  return useCasesData;
}

// Columns
export async function getColumns(): Promise<Column[]> {
  if (USE_REAL_API) {
    const res = await fetch(`${API_URL}/api/columns`, {
      next: { revalidate: 300 },
    });
    if (!res.ok) throw new Error('Failed to fetch columns');
    return res.json();
  }

  return columnsData;
}

// FAQs
export async function getFaqs(): Promise<FAQ[]> {
  if (USE_REAL_API) {
    const res = await fetch(`${API_URL}/api/faqs`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) throw new Error('Failed to fetch FAQs');
    return res.json();
  }

  return faqsData;
}
