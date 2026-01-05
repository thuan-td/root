// Holdings Types
// Re-use Property type from contract feature

import type { Property } from '../../contract/types/contract.types';

export interface HoldingsFilter {
  holding?: boolean; // Filter for お気に入り (holdings)
}

export interface HoldingsData {
  properties: Property[];
  total: number;
}

export interface AddToHoldingsRequest {
  propertyId: string;
}

export interface RemoveFromHoldingsRequest {
  propertyId: string;
}

export interface HoldingsResponse {
  success: boolean;
  message: string;
}
