/**
 * Storage Service
 * Handles API calls for storage feature
 * Supports both real API and dummy data
 */

import { apiClient } from '@/lib/api/client';
import type { StoragePageData } from '../types';
import { storagePageData } from '../data/storage.data';

// Toggle between real API and dummy data
const USE_REAL_API = false;

/**
 * Fetch storage page data
 * @returns Promise<StoragePageData>
 */
export const fetchStorageData = async (): Promise<StoragePageData> => {
  if (USE_REAL_API) {
    try {
      const response = await apiClient.get<StoragePageData>('/storage');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch storage data:', error);
      // Fallback to dummy data on error
      return storagePageData;
    }
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return storagePageData;
};

/**
 * Fetch services data only
 */
export const fetchServices = async () => {
  if (USE_REAL_API) {
    try {
      const response = await apiClient.get('/storage/services');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch services:', error);
      return storagePageData.services;
    }
  }

  await new Promise(resolve => setTimeout(resolve, 300));
  return storagePageData.services;
};

/**
 * Fetch FAQs data only
 */
export const fetchFAQs = async () => {
  if (USE_REAL_API) {
    try {
      const response = await apiClient.get('/storage/faqs');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch FAQs:', error);
      return storagePageData.faqs;
    }
  }

  await new Promise(resolve => setTimeout(resolve, 200));
  return storagePageData.faqs;
};

/**
 * Fetch reviews data only
 */
export const fetchReviews = async () => {
  if (USE_REAL_API) {
    try {
      const response = await apiClient.get('/storage/reviews');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch reviews:', error);
      return storagePageData.reviews;
    }
  }

  await new Promise(resolve => setTimeout(resolve, 400));
  return storagePageData.reviews;
};

/**
 * Fetch usage examples data only
 */
export const fetchUsageExamples = async () => {
  if (USE_REAL_API) {
    try {
      const response = await apiClient.get('/storage/usage-examples');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch usage examples:', error);
      return storagePageData.usageExamples;
    }
  }

  await new Promise(resolve => setTimeout(resolve, 350));
  return storagePageData.usageExamples;
};

/**
 * Fetch why choose reasons data only
 */
export const fetchWhyChooseReasons = async () => {
  if (USE_REAL_API) {
    try {
      const response = await apiClient.get('/storage/why-choose');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch why choose reasons:', error);
      return storagePageData.whyChooseReasons;
    }
  }

  await new Promise(resolve => setTimeout(resolve, 300));
  return storagePageData.whyChooseReasons;
};

/**
 * Fetch storage items data only
 */
export const fetchStorageItems = async () => {
  if (USE_REAL_API) {
    try {
      const response = await apiClient.get('/storage/items');
      return response.data;
    } catch (error) {
      console.error('Failed to fetch storage items:', error);
      return storagePageData.storageItems;
    }
  }

  await new Promise(resolve => setTimeout(resolve, 250));
  return storagePageData.storageItems;
};
