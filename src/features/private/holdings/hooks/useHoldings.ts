import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { HoldingsService } from '../services/holdings.service';
import type {
  HoldingsData,
  HoldingsFilter,
  AddToHoldingsRequest,
  RemoveFromHoldingsRequest,
  HoldingsResponse,
} from '../types/holdings.types';

/**
 * Hook to fetch user holdings
 * Uses React Query for caching and automatic refetching
 */
export function useHoldings(filter?: HoldingsFilter) {
  return useQuery<HoldingsData, Error>({
    queryKey: ['holdings', filter],
    queryFn: () => HoldingsService.getHoldings(filter),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}

/**
 * Hook to add property to holdings
 */
export function useAddToHoldings() {
  const queryClient = useQueryClient();

  return useMutation<HoldingsResponse, Error, AddToHoldingsRequest>({
    mutationFn: (request: AddToHoldingsRequest) =>
      HoldingsService.addToHoldings(request),

    onSuccess: () => {
      // Invalidate holdings queries to refetch
      queryClient.invalidateQueries({ queryKey: ['holdings'] });
      // Also invalidate dashboard to update counts
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });
}

/**
 * Hook to remove property from holdings
 */
export function useRemoveFromHoldings() {
  const queryClient = useQueryClient();

  return useMutation<HoldingsResponse, Error, RemoveFromHoldingsRequest>({
    mutationFn: (request: RemoveFromHoldingsRequest) =>
      HoldingsService.removeFromHoldings(request),

    onSuccess: () => {
      // Invalidate holdings queries to refetch
      queryClient.invalidateQueries({ queryKey: ['holdings'] });
      // Also invalidate dashboard to update counts
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });
}
