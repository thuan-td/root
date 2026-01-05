import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FavoritesService } from '../services/favorites.service';
import type {
  FavoritesFilter,
  AddToFavoritesRequest,
  RemoveFromFavoritesRequest,
} from '../types/favorites.types';

const FAVORITES_QUERY_KEY = 'favorites';

/**
 * Hook to fetch favorites with optional filters
 */
export function useFavorites(filter?: FavoritesFilter) {
  return useQuery({
    queryKey: [FAVORITES_QUERY_KEY, filter],
    queryFn: () => FavoritesService.getFavorites(filter),
  });
}

/**
 * Hook to add property to favorites
 */
export function useAddToFavorites() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: AddToFavoritesRequest) =>
      FavoritesService.addToFavorites(request),
    onSuccess: () => {
      // Invalidate all favorites queries to refetch data
      queryClient.invalidateQueries({ queryKey: [FAVORITES_QUERY_KEY] });
    },
  });
}

/**
 * Hook to remove property from favorites
 */
export function useRemoveFromFavorites() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: RemoveFromFavoritesRequest) =>
      FavoritesService.removeFromFavorites(request),
    onSuccess: () => {
      // Invalidate all favorites queries to refetch data
      queryClient.invalidateQueries({ queryKey: [FAVORITES_QUERY_KEY] });
    },
  });
}
