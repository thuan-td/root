import { useQuery } from '@tanstack/react-query';
import { ContractService } from '../services/contract.service';
import type { ContractData, ContractFilter } from '../types/contract.types';

/**
 * Hook to fetch user contracts
 * Uses React Query for caching and automatic refetching
 */
export function useContracts(filter?: ContractFilter) {
  return useQuery<ContractData, Error>({
    queryKey: ['contracts', filter],
    queryFn: () => ContractService.getContracts(filter),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}
