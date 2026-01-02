// Application routes

export const ROUTES = {
  // Public routes
  HOME: '/',

  // Auth routes
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  RESET_PASSWORD: '/reset-password',

  // Main routes
  STORAGE: '/storage',
  STORAGE_DETAIL: (id: string) => `/storage/${id}`,
  STORE_SEARCH: '/store-search',
  AREA_SEARCH: '/area-search',
  CURRENT_LOCATION: '/current-location',

  // Service routes
  SERVICES: '/services',
  SERVICE_DETAIL: (id: string) => `/services/${id}`,

  // Use cases
  USE_CASES: '/use-cases',
  USE_CASE_DETAIL: (slug: string) => `/use-cases/${slug}`,

  // News
  NEWS: '/news',
  NEWS_DETAIL: (slug: string) => `/news/${slug}`,

  // User routes (to be implemented)
  PROFILE: '/profile',
  DASHBOARD: '/dashboard',
  BOOKINGS: '/bookings',
  FAVORITES: '/favorites',
} as const;

// API routes
export const API_ROUTES = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  VERIFY_EMAIL: '/auth/verify-email',

  // Storage
  STORAGE_LIST: '/storage',
  STORAGE_DETAIL: (id: string) => `/storage/${id}`,
  FEATURED_STORAGE: '/storage/featured',

  // Search
  SEARCH: '/search',
  SEARCH_BY_LOCATION: '/search/location',
  SEARCH_BY_AREA: '/search/area',

  // User
  USER_PROFILE: '/user/profile',
  USER_BOOKINGS: '/user/bookings',
  USER_FAVORITES: '/user/favorites',

  // Booking
  CREATE_BOOKING: '/bookings',
  BOOKING_DETAIL: (id: string) => `/bookings/${id}`,
} as const;
