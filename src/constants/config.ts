// Application configuration constants

export const APP_CONFIG = {
  name: 'ROOT Storage',
  description: 'トランクルーム、ガレージ、駐車場の検索・予約サイト',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  locale: 'ja_JP',
  timezone: 'Asia/Tokyo',
} as const;

export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
} as const;

export const AUTH_CONFIG = {
  tokenKey: 'auth_token',
  refreshTokenKey: 'refresh_token',
  userKey: 'user_data',
} as const;

export const SOCIAL_PROVIDERS = {
  LINE: 'line',
  GOOGLE: 'google',
  TWITTER: 'twitter',
  FACEBOOK: 'facebook',
} as const;

export const STORAGE_TYPES = {
  TRUNK_ROOM: 'trunk_room',
  GARAGE: 'garage',
  PARKING: 'parking',
} as const;

export const FEATURE_FLAGS = {
  enableSocialLogin: true,
  enableDarkMode: true,
  enableNotifications: false,
} as const;
