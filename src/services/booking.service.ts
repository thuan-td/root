import { apiClient } from '@/lib/api/client';
import type { Booking } from '@/types/models.types';
import type { ApiResponse, CreateBookingRequest } from '@/types/api.types';

export async function createBooking(
  data: CreateBookingRequest,
): Promise<Booking> {
  const response = await apiClient.post<ApiResponse<Booking>>(
    '/bookings',
    data,
  );
  return response.data.data;
}

export async function getMyBookings(): Promise<Booking[]> {
  const response = await apiClient.get<ApiResponse<Booking[]>>(
    '/bookings/my-bookings',
  );
  return response.data.data;
}

export async function getBookingById(id: string): Promise<Booking> {
  const response = await apiClient.get<ApiResponse<Booking>>(`/bookings/${id}`);
  return response.data.data;
}

export async function cancelBooking(id: string): Promise<Booking> {
  const response = await apiClient.post<ApiResponse<Booking>>(
    `/bookings/${id}/cancel`,
  );
  return response.data.data;
}
