import type {
  ContractData,
  ContractFilter,
  Property,
} from '../types/contract.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * Contract Service
 * Handles all contract-related API calls
 */
export class ContractService {
  /**
   * Fetch user contracts
   * @param filter - Filter options
   * @returns Promise with contract data
   */
  static async getContracts(filter?: ContractFilter): Promise<ContractData> {
    try {
      // In development, use mock data
      if (process.env.NODE_ENV === 'development') {
        return await this.getMockContractData(filter);
      }

      // In production, call actual API
      const params = new URLSearchParams();
      if (filter?.sortBy) {
        params.set('sortBy', filter.sortBy);
      }

      const response = await fetch(
        `${API_BASE_URL}/contracts?${params.toString()}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            // Add auth token from cookies or localStorage
            // 'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        },
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch contracts: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching contracts:', error);
      // Fallback to mock data on error
      return await this.getMockContractData(filter);
    }
  }

  /**
   * Get property type label
   */
  static getPropertyTypeLabel(type: 'storage' | 'parking'): {
    label: string;
    sublabel: string;
    color: string;
  } {
    if (type === 'storage') {
      return {
        label: 'STORAGE',
        sublabel: 'ストレージ',
        color: 'bg-primary', // Red
      };
    }
    return {
      label: 'PARKING',
      sublabel: 'パーキング',
      color: 'bg-orange-500',
    };
  }

  /**
   * Sort properties based on filter
   */
  static sortProperties(
    properties: Property[],
    sortBy: ContractFilter['sortBy'],
  ): Property[] {
    const sorted = [...properties];

    switch (sortBy) {
      case 'contract_date':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.contractDate || 0).getTime();
          const dateB = new Date(b.contractDate || 0).getTime();
          return dateB - dateA; // Newest first
        });

      case 'newest':
        return sorted.sort((a, b) => {
          const dateA = new Date(a.contractDate || 0).getTime();
          const dateB = new Date(b.contractDate || 0).getTime();
          return dateB - dateA;
        });

      case 'area':
        return sorted.sort((a, b) => (b.area || 0) - (a.area || 0));

      case 'price_asc':
        return sorted.sort((a, b) => a.monthlyFee - b.monthlyFee);

      case 'price_desc':
        return sorted.sort((a, b) => b.monthlyFee - a.monthlyFee);

      default:
        return sorted;
    }
  }

  /**
   * Mock contract data for development
   */
  private static async getMockContractData(
    filter?: ContractFilter,
  ): Promise<ContractData> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const properties: Property[] = [
      {
        id: 'prop-1',
        type: 'storage',
        status: 'active',
        name: '堀切ルートストレージ',
        unitType: 'Sタイプ No.201',
        size: '約1.5帖',
        address: '124-0006 東京都葛飾区堀切1-35-13',
        access: '京成線堀切菖蒲園駅より徒歩15分',
        monthlyFee: 7000,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB9gmiG3xYsGCVClJTnuNqWGkWmb-xW45AuO90L9vjybOJNyBqMdw3Vl9UamIq09SBSd9zJqEQQMjiZrHpQRrJHak5S0A70p7DVJZsaKfbqA0kHiF2xm62TxzYKFeWrt_DIntGIFnn9OEkyxFjcwS-fdV7z-RQH-AT3q2S73I2_qFN191Abvklo4bsYUAtabWAVyTURszu0UriKV17jQyHzRlDrH10VPXWHnGAGagQ9f03L4rNGDBVpIEf3MOHfLtxZMJEJ2y_MrwUz',
        contractDate: '2024-01-15T00:00:00Z',
        area: 1.5,
      },
      {
        id: 'prop-2',
        type: 'parking',
        status: 'active',
        name: '水元ルートパーキング',
        unitType: 'Mタイプ No.201',
        size: '約1.8帖',
        address: '125-0032 東京都葛飾区水元3-2-8',
        access: 'JR常磐線金町駅よりバス徒歩25分',
        monthlyFee: 22000,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAOF8aDGFxpGBJjdmomRHM4NW7GlR7V4Q1QJ5TDzIiF7JLo30abR2wi92cza5AihVtXq3VQP8HSt6SVwMqST4k7qiY0c6fzk43l2Hb6fKHgsQy9UkhIbLxcEJTSRhyYvRnIXhDZrz8F1J21Ayk9A6sCRJmAC4NzphFfTAvEPvblAmGoPjaTWbUZZVPNVw8z1ob7MVsY5sIwNZZTgV_rzo_FNBkVj3rRaNr0K00WpvPU3c1FbLR_CdexgwUtqzRRAIaPeq-4Uc-Nq4j3',
        contractDate: '2024-02-20T00:00:00Z',
        area: 1.8,
      },
    ];

    // Apply sorting if filter exists
    const sortedProperties = filter?.sortBy
      ? this.sortProperties(properties, filter.sortBy)
      : properties;

    return {
      properties: sortedProperties,
      total: properties.length,
    };
  }
}
