/**
 * Storage Data Hooks
 * React Query hooks for fetching storage data
 */

'use client';

import { useQuery } from '@tanstack/react-query';
import {
  fetchStorageData,
  fetchServices,
  fetchFAQs,
  fetchReviews,
  fetchUsageExamples,
  fetchWhyChooseReasons,
  fetchStorageItems,
} from '../services/storageService';

/**
 * Fetch all storage page data
 */
export const useStorageData = () => {
  return useQuery({
    queryKey: ['storage-data'],
    queryFn: fetchStorageData,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

/**
 * Fetch services only
 */
export const useServices = () => {
  return useQuery({
    queryKey: ['storage-services'],
    queryFn: fetchServices,
    staleTime: 1000 * 60 * 5,
  });
};

/**
 * Fetch FAQs only
 */
export const useFAQs = () => {
  return useQuery({
    queryKey: ['storage-faqs'],
    queryFn: fetchFAQs,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};

/**
 * Fetch reviews only
 */
export const useReviews = () => {
  return useQuery({
    queryKey: ['storage-reviews'],
    queryFn: fetchReviews,
    staleTime: 1000 * 60 * 5,
  });
};

/**
 * Fetch usage examples only
 */
export const useUsageExamples = () => {
  return useQuery({
    queryKey: ['storage-usage-examples'],
    queryFn: fetchUsageExamples,
    staleTime: 1000 * 60 * 5,
  });
};

/**
 * Fetch why choose reasons only
 */
export const useWhyChooseReasons = () => {
  return useQuery({
    queryKey: ['storage-why-choose'],
    queryFn: fetchWhyChooseReasons,
    staleTime: 1000 * 60 * 5,
  });
};

/**
 * Fetch storage items only
 */
export const useStorageItems = () => {
  return useQuery({
    queryKey: ['storage-items'],
    queryFn: fetchStorageItems,
    staleTime: 1000 * 60 * 5,
  });
};
