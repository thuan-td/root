// API Request and Response Types

export interface ApiResponse<T = unknown> {
  success: boolean;
  data: T;
  message?: string;
}

export interface ApiError {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface CreateBookingRequest {
  mobileHomeId: string;
  startDate: string;
  endDate: string;
  guests: number;
  specialRequests?: string;
}

export interface UpdateProfileRequest {
  name?: string;
  phone?: string;
  avatar?: string;
}

export interface CreateReviewRequest {
  mobileHomeId: string;
  rating: number;
  comment: string;
  cleanliness: number;
  accuracy: number;
  communication: number;
  location: number;
  value: number;
}
