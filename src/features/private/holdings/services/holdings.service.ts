import type {
  HoldingsData,
  HoldingsFilter,
  AddToHoldingsRequest,
  RemoveFromHoldingsRequest,
  HoldingsResponse,
} from '../types/holdings.types';
import type { Property } from '../../contract/types/contract.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * Holdings Service
 * Handles all holdings-related API calls
 */
export class HoldingsService {
  /**
   * Fetch user holding properties
   * @param filter - Filter options (holding=true for holdings)
   * @returns Promise with holdings data
   */
  static async getHoldings(filter?: HoldingsFilter): Promise<HoldingsData> {
    try {
      // In development, use mock data
      if (process.env.NODE_ENV === 'development') {
        return await this.getMockHoldingsData(filter);
      }

      // In production, call actual API
      const params = new URLSearchParams();
      if (filter?.holding !== undefined) {
        params.set('holding', filter.holding.toString());
      }

      const response = await fetch(
        `${API_BASE_URL}/holdings?${params.toString()}`,
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
        throw new Error(`Failed to fetch holdings: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching holdings:', error);
      // Fallback to mock data on error
      return await this.getMockHoldingsData(filter);
    }
  }

  /**
   * Add property to holdings
   * @param request - Property ID to add
   * @returns Promise with response
   */
  static async addToHoldings(
    request: AddToHoldingsRequest,
  ): Promise<HoldingsResponse> {
    try {
      // In development, simulate API call
      if (process.env.NODE_ENV === 'development') {
        return await this.mockAddToHoldings(request);
      }

      // In production, call actual API
      const response = await fetch(`${API_BASE_URL}/holdings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add auth token from cookies or localStorage
          // 'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || `Failed to add to holdings: ${response.status}`,
        );
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error adding to holdings:', error);
      throw error;
    }
  }

  /**
   * Remove property from holdings
   * @param request - Property ID to remove
   * @returns Promise with response
   */
  static async removeFromHoldings(
    request: RemoveFromHoldingsRequest,
  ): Promise<HoldingsResponse> {
    try {
      // In development, simulate API call
      if (process.env.NODE_ENV === 'development') {
        return await this.mockRemoveFromHoldings(request);
      }

      // In production, call actual API
      const response = await fetch(
        `${API_BASE_URL}/holdings/${request.propertyId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add auth token from cookies or localStorage
            // 'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `Failed to remove from holdings: ${response.status}`,
        );
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error removing from holdings:', error);
      throw error;
    }
  }

  /**
   * Mock holdings data for development
   */
  private static async getMockHoldingsData(
    filter?: HoldingsFilter,
  ): Promise<HoldingsData> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // All holding properties (holding=true)
    const allHoldings: Property[] = [
      {
        id: 'holding-1',
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
        id: 'holding-2',
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
      {
        id: 'holding-3',
        type: 'storage',
        status: 'pending',
        name: '青砥ルートストレージ',
        unitType: 'Lタイプ No.105',
        size: '約2.5帖',
        address: '124-0012 東京都葛飾区青戸3-15-8',
        access: '京成線青砥駅より徒歩8分',
        monthlyFee: 12000,
        imageUrl:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuB9gmiG3xYsGCVClJTnuNqWGkWmb-xW45AuO90L9vjybOJNyBqMdw3Vl9UamIq09SBSd9zJqEQQMjiZrHpQRrJHak5S0A70p7DVJZsaKfbqA0kHiF2xm62TxzYKFeWrt_DIntGIFnn9OEkyxFjcwS-fdV7z-RQH-AT3q2S73I2_qFN191Abvklo4bsYUAtabWAVyTURszu0UriKV17jQyHzRlDrH10VPXWHnGAGagQ9f03L4rNGDBVpIEf3MOHfLtxZMJEJ2y_MrwUz',
        contractDate: '2024-03-10T00:00:00Z',
        area: 2.5,
      },
    ];

    // Filter by holding if specified
    const properties =
      filter?.holding === true
        ? allHoldings
        : filter?.holding === false
          ? []
          : allHoldings;

    return {
      properties,
      total: properties.length,
    };
  }

  /**
   * Mock add to holdings
   */
  private static async mockAddToHoldings(): Promise<HoldingsResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      success: true,
      message: 'お気に入りに追加しました',
    };
  }

  /**
   * Mock remove from holdings
   */
  private static async mockRemoveFromHoldings(): Promise<HoldingsResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      success: true,
      message: 'お気に入りから削除しました',
    };
  }
}
