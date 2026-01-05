// Contract & Property Types

export type PropertyType = 'storage' | 'parking';

export type ContractStatus = 'active' | 'pending' | 'expired';

export type SortBy =
  | 'contract_date'
  | 'newest'
  | 'area'
  | 'price_asc'
  | 'price_desc';

export interface Property {
  id: string;
  type: PropertyType; // STORAGE or PARKING
  status: ContractStatus; // ご契約中, etc.
  name: string; // 堀切ルートストレージ
  unitType: string; // Sタイプ No.201
  size: string; // 約1.5帖
  address: string; // 124-0006 東京都葛飾区堀切1-35-13
  access: string; // 京成線堀切菖蒲園駅より徒歩15分
  monthlyFee: number; // 7,000
  imageUrl: string;
  contractDate?: string; // ご契約日順 sorting
  area?: number; // For sorting by area
}

export interface ContractFilter {
  sortBy: SortBy;
}

export interface ContractData {
  properties: Property[];
  total: number;
}

export interface ContractSummary {
  total: number;
  active: number;
  pending: number;
  expired: number;
}
