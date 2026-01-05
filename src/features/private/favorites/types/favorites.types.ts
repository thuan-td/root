// Favorites Types
// Re-use Property type from contract feature

import type {
  Property,
  ContractStatus,
} from '../../contract/types/contract.types';

export type ViewMode = 'grid' | 'list';

export type CancelWaitingStatus = 'registered' | 'notified' | 'expired';

// Extended Property type with favorites-specific fields
export interface FavoriteProperty extends Property {
  hasApplications?: boolean;
  cancelWaiting?: CancelWaitingStatus | null;
}

export interface FavoritesFilter {
  // ステータス
  status?: ContractStatus[];
  // 申込み件数
  hasApplications?: boolean | null; // true = あり, false = なし, null = all
  // キャンセル待ち
  cancelWaiting?: CancelWaitingStatus[];
}

export interface FavoritesData {
  properties: FavoriteProperty[];
  total: number;
}

export interface FavoritesQueryParams extends FavoritesFilter {
  sortBy?: string;
  viewMode?: ViewMode;
}

export interface AddToFavoritesRequest {
  propertyId: string;
}

export interface RemoveFromFavoritesRequest {
  propertyId: string;
}

export interface FavoritesResponse {
  success: boolean;
  message: string;
}
