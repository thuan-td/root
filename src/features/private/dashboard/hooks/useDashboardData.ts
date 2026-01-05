import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { DashboardService } from '../services/dashboard.service';
import type { DashboardData } from '../types/dashboard.types';

/**
 * Hook to fetch complete dashboard data
 * Uses React Query for caching and automatic refetching
 */
export function useDashboardData(): UseQueryResult<DashboardData, Error> {
  return useQuery({
    queryKey: ['dashboard'],
    queryFn: () => DashboardService.getDashboardData(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}

/**
 * Hook to fetch dashboard stats only
 */
export function useDashboardStats() {
  return useQuery({
    queryKey: ['dashboard', 'stats'],
    queryFn: () => DashboardService.getStats(),
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook to fetch user contracts
 */
export function useContracts() {
  return useQuery({
    queryKey: ['contracts'],
    queryFn: () => DashboardService.getContracts(),
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook to fetch user favorites
 */
export function useFavorites() {
  return useQuery({
    queryKey: ['favorites'],
    queryFn: () => DashboardService.getFavorites(),
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook to fetch payment history
 */
export function usePayments() {
  return useQuery({
    queryKey: ['payments'],
    queryFn: () => DashboardService.getPayments(),
    staleTime: 5 * 60 * 1000,
  });
}

/**
 * Hook to fetch news
 */
export function useNews(limit?: number) {
  return useQuery({
    queryKey: ['news', limit],
    queryFn: () => DashboardService.getNews(limit),
    staleTime: 10 * 60 * 1000, // 10 minutes for news
  });
}
