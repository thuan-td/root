// Models for Mobile Home Rental Application

export interface MobileHome {
  id: string;
  title: string;
  description: string;
  price: number;
  priceUnit: 'day' | 'week' | 'month';
  images: string[];
  location: Location;
  features: HomeFeatures;
  specifications: HomeSpecifications;
  availability: Availability;
  owner: Owner;
  rating: Rating;
  createdAt: string;
  updatedAt: string;
}

export interface Location {
  prefecture: string; // 都道府県
  city: string; // 市区町村
  address: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  nearbyStations?: NearbyStation[];
}

export interface NearbyStation {
  name: string;
  line: string;
  distance: number; // in meters
  walkingTime: number; // in minutes
}

export interface HomeFeatures {
  bedrooms: number;
  bathrooms: number;
  maxOccupancy: number;
  parkingAvailable: boolean;
  petFriendly: boolean;
  wifi: boolean;
  airConditioning: boolean;
  heating: boolean;
  kitchen: boolean;
  amenities: string[];
}

export interface HomeSpecifications {
  manufacturer: string;
  model: string;
  year: number;
  size: number; // in square meters
  length: number; // in meters
  width: number;
  weight: number; // in kg
  fuelType?: 'gasoline' | 'diesel' | 'hybrid' | 'electric';
  transmission?: 'automatic' | 'manual';
}

export interface Availability {
  status: 'available' | 'booked' | 'maintenance';
  bookedDates: DateRange[];
  minimumRentalDays: number;
}

export interface DateRange {
  startDate: string;
  endDate: string;
}

export interface Owner {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  reviewCount: number;
  verifiedOwner: boolean;
  memberSince: string;
}

export interface Rating {
  overall: number;
  cleanliness: number;
  accuracy: number;
  communication: number;
  location: number;
  value: number;
  totalReviews: number;
}

export interface Review {
  id: string;
  mobileHomeId: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  rating: number;
  comment: string;
  createdAt: string;
  helpful: number;
}

export interface Booking {
  id: string;
  mobileHomeId: string;
  mobileHome: MobileHome;
  userId: string;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  guests: number;
  specialRequests?: string;
  createdAt: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  phone?: string;
  verifiedEmail: boolean;
  verifiedPhone: boolean;
  createdAt: string;
}

export interface SearchFilters {
  prefecture?: string;
  city?: string;
  priceMin?: number;
  priceMax?: number;
  startDate?: string;
  endDate?: string;
  guests?: number;
  bedrooms?: number;
  amenities?: string[];
  petFriendly?: boolean;
  sortBy?: 'price_asc' | 'price_desc' | 'rating' | 'newest';
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
