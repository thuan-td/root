'use client';

import { useQuery } from '@tanstack/react-query';
import {
  featuredStoresData,
  newsItemsData,
  servicesData,
  useCasesData,
  columnsData,
  faqsData,
} from '../data/dummy';

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Featured Stores Hook
export function useFeaturedStores() {
  return useQuery({
    queryKey: ['featured-stores'],
    queryFn: async () => {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/featured-stores');
      // return response.json();
      await delay(300);
      return featuredStoresData;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
}

// News Items Hook
export function useNewsItems() {
  return useQuery({
    queryKey: ['news-items'],
    queryFn: async () => {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/news');
      // return response.json();
      await delay(300);
      return newsItemsData;
    },
    staleTime: 5 * 60 * 1000,
  });
}

// Services Hook
export function useServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/services');
      // return response.json();
      await delay(300);
      return servicesData;
    },
    staleTime: 5 * 60 * 1000,
  });
}

// Use Cases Hook
export function useUseCases() {
  return useQuery({
    queryKey: ['use-cases'],
    queryFn: async () => {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/use-cases');
      // return response.json();
      await delay(300);
      return useCasesData;
    },
    staleTime: 5 * 60 * 1000,
  });
}

// Columns Hook
export function useColumns() {
  return useQuery({
    queryKey: ['columns'],
    queryFn: async () => {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/columns');
      // return response.json();
      await delay(300);
      return columnsData;
    },
    staleTime: 5 * 60 * 1000,
  });
}

// FAQs Hook
export function useFaqs() {
  return useQuery({
    queryKey: ['faqs'],
    queryFn: async () => {
      // TODO: Replace with actual API call
      // const response = await fetch('/api/faqs');
      // return response.json();
      await delay(300);
      return faqsData;
    },
    staleTime: 5 * 60 * 1000,
  });
}
