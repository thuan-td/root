import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { NotificationService } from '../services/notification.service';
import type {
  NotificationData,
  NotificationPreferences,
  UpdateNotificationPreferencesResponse,
} from '../types/notification.types';

/**
 * Hook to fetch notification preferences
 * Uses React Query for caching and automatic refetching
 */
export function useNotificationPreferences() {
  return useQuery<NotificationData, Error>({
    queryKey: ['notifications', 'preferences'],
    queryFn: () => NotificationService.getNotificationPreferences(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}

/**
 * Hook to update notification preferences
 * Automatically invalidates and refetches preferences on success
 */
export function useUpdateNotificationPreferences() {
  const queryClient = useQueryClient();

  return useMutation<
    UpdateNotificationPreferencesResponse,
    Error,
    Partial<NotificationPreferences>,
    { previousData?: NotificationData }
  >({
    mutationFn: (preferences: Partial<NotificationPreferences>) =>
      NotificationService.updateNotificationPreferences(preferences),

    // Optimistic update
    onMutate: async (newPreferences: Partial<NotificationPreferences>) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({
        queryKey: ['notifications', 'preferences'],
      });

      // Snapshot the previous value
      const previousData = queryClient.getQueryData<NotificationData>([
        'notifications',
        'preferences',
      ]);

      // Optimistically update to the new value
      if (previousData) {
        queryClient.setQueryData<NotificationData>(
          ['notifications', 'preferences'],
          {
            ...previousData,
            preferences: {
              ...previousData.preferences,
              ...newPreferences,
            },
            updatedAt: new Date().toISOString(),
          },
        );
      }

      // Return a context object with the snapshotted value
      return { previousData };
    },

    // If mutation fails, rollback to the previous value
    onError: (err, newPreferences, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          ['notifications', 'preferences'],
          context.previousData,
        );
      }
    },

    // Always refetch after error or success
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ['notifications', 'preferences'],
      });
    },
  });
}
