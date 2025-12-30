/**
 * Storage Detail Feature Types
 *
 * Type definitions for the storage detail page feature
 */

/**
 * Storage facility details
 */
export interface StorageDetail {
  id: string;
  name: string;
  address: string;
  area: string;
  prefecture: string;
  city: string;
  postalCode: string;
  access: string;
  images: StorageImage[];
  campaign: Campaign | null;
  facilities: Facility[];
  description: string;
  location: Location;
}

/**
 * Storage image with thumbnail support
 */
export interface StorageImage {
  id: string;
  url: string;
  alt: string;
  isMain?: boolean;
}

/**
 * Campaign/Promotion information
 */
export interface Campaign {
  id: string;
  title: string;
  description: string;
  badge: string;
  discountPercentage: number;
  duration: string;
  conditions: string[];
}

/**
 * Facility amenities and features
 */
export interface Facility {
  id: string;
  name: string;
  icon: string;
  available: boolean;
}

/**
 * Geographic location
 */
export interface Location {
  latitude: number;
  longitude: number;
  mapImageUrl: string;
  accessInstructions: string;
}

/**
 * Unit size category
 */
export interface UnitCategory {
  id: string;
  type: 'S' | 'M' | 'L' | 'XL';
  name: string;
  sizeRange: string;
  priceStart: number;
  description: string;
  image: string;
  units: Unit[];
  isExpanded?: boolean;
}

/**
 * Individual storage unit
 */
export interface Unit {
  id: string;
  unitNumber: string;
  floor: string;
  size: string;
  dimensions: Dimensions;
  originalPrice: number;
  campaignPrice: number;
  availability: 'available' | 'waitlist' | 'full';
  isFeatured?: boolean;
}

/**
 * Unit dimensions
 */
export interface Dimensions {
  width: number;
  depth: number;
  height: number;
  unit: 'm' | 'cm';
}

/**
 * Floor plan information
 */
export interface FloorPlan {
  id: string;
  title: string;
  imageUrl: string;
  floors: string[];
}

/**
 * Contract flow step
 */
export interface ContractStep {
  id: string;
  stepNumber: number;
  title: string;
  icon: string;
  description?: string;
  hasStepLabel: boolean;
}

/**
 * Nearby store
 */
export interface NearbyStore {
  id: string;
  name: string;
  address: string;
  access: string;
  imageUrl: string;
  badge: StoreBadge | null;
  campaign: string | null;
  type: 'STORAGE' | 'PARKING' | 'GARAGE';
  units: {
    types: string;
    sizes: string;
  };
  price: {
    min: number;
    max: number;
  };
  isNew?: boolean;
}

/**
 * Store badge status
 */
export interface StoreBadge {
  text: string;
  variant: 'available' | 'waitlist' | 'low-stock';
}

/**
 * Related area link
 */
export interface RelatedArea {
  id: string;
  name: string;
  count: number;
  href: string;
}

/**
 * Related station link
 */
export interface RelatedStation {
  id: string;
  name: string;
  count: number;
  href: string;
}

/**
 * Complete storage detail page data
 */
export interface StorageDetailPageData {
  storage: StorageDetail;
  unitCategories: UnitCategory[];
  floorPlan: FloorPlan;
  contractSteps: ContractStep[];
  nearbyStores: NearbyStore[];
  relatedStations: RelatedStation[];
  relatedAreas: {
    tokyo: RelatedArea[];
    saitama: RelatedArea[];
    chiba: RelatedArea[];
  };
  relatedPrefectures: RelatedArea[];
}

/**
 * Breadcrumb item for navigation
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
}
