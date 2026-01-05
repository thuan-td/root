import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { ProfileService } from '../services/profile.service';
import type {
  ProfileData,
  UpdateProfileRequest,
  UpdateProfileResponse,
} from '../types/profile.types';

/**
 * Hook to fetch user profile data
 * Uses React Query for caching and automatic refetching
 */
export function useProfile() {
  return useQuery<ProfileData, Error>({
    queryKey: ['profile'],
    queryFn: () => ProfileService.getProfile(),
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });
}

/**
 * Hook to update user profile
 * Automatically invalidates and refetches profile data on success
 */
export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation<
    UpdateProfileResponse,
    Error,
    UpdateProfileRequest,
    { previousProfile?: ProfileData }
  >({
    mutationFn: (data: UpdateProfileRequest) =>
      ProfileService.updateProfile(data),

    // Optimistic update
    onMutate: async (newData: UpdateProfileRequest) => {
      // Cancel any outgoing refetches
      await queryClient.cancelQueries({ queryKey: ['profile'] });

      // Snapshot the previous value
      const previousProfile = queryClient.getQueryData<ProfileData>([
        'profile',
      ]);

      // Optimistically update to the new value
      if (previousProfile) {
        const phoneNumber = newData.phoneNumber.replace(/-/g, '');
        queryClient.setQueryData<ProfileData>(['profile'], {
          ...previousProfile,
          lastName: newData.lastName,
          firstName: newData.firstName,
          lastNameKana: newData.lastNameKana,
          firstNameKana: newData.firstNameKana,
          phone1: phoneNumber.slice(0, 3),
          phone2: phoneNumber.slice(3, 7),
          phone3: phoneNumber.slice(7, 11),
          email: newData.email,
          updatedAt: new Date().toISOString(),
        });
      }

      // Return a context object with the snapshotted value
      return { previousProfile };
    },

    // If mutation fails, rollback to the previous value
    onError: (err, newData, context) => {
      if (context?.previousProfile) {
        queryClient.setQueryData(['profile'], context.previousProfile);
      }
    },

    // Always refetch after error or success
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
      // Also update dashboard data if user info is displayed there
      queryClient.invalidateQueries({ queryKey: ['dashboard'] });
    },
  });
}
