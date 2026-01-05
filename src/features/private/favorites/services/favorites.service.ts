import type {
  FavoritesData,
  FavoritesFilter,
  FavoritesResponse,
  FavoriteProperty,
} from '../types/favorites.types';

// Mock data for favorites with various statuses
const mockFavoritesData: FavoriteProperty[] = [
  {
    id: '1',
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
    area: 1.5,
    hasApplications: true,
    cancelWaiting: 'registered',
  },
  {
    id: '2',
    type: 'parking',
    status: 'pending',
    name: '新宿駐車場',
    unitType: 'A区画 No.5',
    size: '普通車',
    address: '160-0022 東京都新宿区新宿3-1-1',
    access: 'JR新宿駅より徒歩5分',
    monthlyFee: 25000,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9gmiG3xYsGCVClJTnuNqWGkWmb-xW45AuO90L9vjybOJNyBqMdw3Vl9UamIq09SBSd9zJqEQQMjiZrHpQRrJHak5S0A70p7DVJZsaKfbqA0kHiF2xm62TxzYKFeWrt_DIntGIFnn9OEkyxFjcwS-fdV7z-RQH-AT3q2S73I2_qFN191Abvklo4bsYUAtabWAVyTURszu0UriKV17jQyHzRlDrH10VPXWHnGAGagQ9f03L4rNGDBVpIEf3MOHfLtxZMJEJ2y_MrwUz',
    area: 12.0,
    hasApplications: false,
    cancelWaiting: null,
  },
  {
    id: '3',
    type: 'storage',
    status: 'expired',
    name: '池袋トランクルーム',
    unitType: 'Mタイプ No.105',
    size: '約3.0帖',
    address: '171-0022 東京都豊島区池袋2-3-4',
    access: 'JR池袋駅より徒歩10分',
    monthlyFee: 12000,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB9gmiG3xYsGCVClJTnuNqWGkWmb-xW45AuO90L9vjybOJNyBqMdw3Vl9UamIq09SBSd9zJqEQQMjiZrHpQRrJHak5S0A70p7DVJZsaKfbqA0kHiF2xm62TxzYKFeWrt_DIntGIFnn9OEkyxFjcwS-fdV7z-RQH-AT3q2S73I2_qFN191Abvklo4bsYUAtabWAVyTURszu0UriKV17jQyHzRlDrH10VPXWHnGAGagQ9f03L4rNGDBVpIEf3MOHfLtxZMJEJ2y_MrwUz',
    area: 3.0,
    hasApplications: true,
    cancelWaiting: 'notified',
  },
  {
    id: '4',
    type: 'parking',
    status: 'active',
    name: '六本木パーキング',
    unitType: 'B区画 No.12',
    size: '大型車可',
    address: '106-0032 東京都港区六本木3-2-1',
    access: '東京メトロ六本木駅より徒歩3分',
    monthlyFee: 30000,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOF8aDGFxpGBJjdmomRHM4NW7GlR7V4Q1QJ5TDzIiF7JLo30abR2wi92cza5AihVtXq3VQP8HSt6SVwMqST4k7qiY0c6fzk43l2Hb6fKHgsQy9UkhIbLxcEJTSRhyYvRnIXhDZrz8F1J21Ayk9A6sCRJmAC4NzphFfTAvEPvblAmGoPjaTWbUZZVPNVw8z1ob7MVsY5sIwNZZTgV_rzo_FNBkVj3rRaNr0K00WpvPU3c1FbLR_CdexgwUtqzRRAIaPeq-4Uc-Nq4j3',
    area: 15.0,
    hasApplications: false,
    cancelWaiting: null,
  },
  {
    id: '5',
    type: 'storage',
    status: 'pending',
    name: '品川ストレージ',
    unitType: 'Lタイプ No.301',
    size: '約4.5帖',
    address: '140-0001 東京都品川区品川1-1-1',
    access: 'JR品川駅より徒歩8分',
    monthlyFee: 18000,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOF8aDGFxpGBJjdmomRHM4NW7GlR7V4Q1QJ5TDzIiF7JLo30abR2wi92cza5AihVtXq3VQP8HSt6SVwMqST4k7qiY0c6fzk43l2Hb6fKHgsQy9UkhIbLxcEJTSRhyYvRnIXhDZrz8F1J21Ayk9A6sCRJmAC4NzphFfTAvEPvblAmGoPjaTWbUZZVPNVw8z1ob7MVsY5sIwNZZTgV_rzo_FNBkVj3rRaNr0K00WpvPU3c1FbLR_CdexgwUtqzRRAIaPeq-4Uc-Nq4j3',
    area: 4.5,
    hasApplications: true,
    cancelWaiting: 'expired',
  },
  {
    id: '6',
    type: 'storage',
    status: 'active',
    name: '目黒トランクルーム',
    unitType: 'Sタイプ No.202',
    size: '約2.0帖',
    address: '153-0063 東京都目黒区目黒2-2-2',
    access: 'JR目黒駅より徒歩12分',
    monthlyFee: 14000,
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAOF8aDGFxpGBJjdmomRHM4NW7GlR7V4Q1QJ5TDzIiF7JLo30abR2wi92cza5AihVtXq3VQP8HSt6SVwMqST4k7qiY0c6fzk43l2Hb6fKHgsQy9UkhIbLxcEJTSRhyYvRnIXhDZrz8F1J21Ayk9A6sCRJmAC4NzphFfTAvEPvblAmGoPjaTWbUZZVPNVw8z1ob7MVsY5sIwNZZTgV_rzo_FNBkVj3rRaNr0K00WpvPU3c1FbLR_CdexgwUtqzRRAIaPeq-4Uc-Nq4j3',
    area: 2.0,
    hasApplications: false,
    cancelWaiting: null,
  },
];

export class FavoritesService {
  /**
   * Get favorites with optional filters
   */
  static async getFavorites(filter?: FavoritesFilter): Promise<FavoritesData> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    let filteredProperties = [...mockFavoritesData];

    if (filter) {
      // Filter by status
      if (filter.status && filter.status.length > 0) {
        filteredProperties = filteredProperties.filter(property =>
          filter.status!.includes(property.status),
        );
      }

      // Filter by applications
      if (
        filter.hasApplications !== undefined &&
        filter.hasApplications !== null
      ) {
        filteredProperties = filteredProperties.filter(
          property => property.hasApplications === filter.hasApplications,
        );
      }

      // Filter by cancel waiting status
      if (filter.cancelWaiting && filter.cancelWaiting.length > 0) {
        filteredProperties = filteredProperties.filter(
          property =>
            property.cancelWaiting &&
            filter.cancelWaiting!.includes(property.cancelWaiting),
        );
      }
    }

    return {
      properties: filteredProperties,
      total: filteredProperties.length,
    };
  }

  /**
   * Add property to favorites
   */
  static async addToFavorites(): Promise<FavoritesResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Mock success response
    return {
      success: true,
      message: 'お気に入りに追加しました',
    };
  }

  /**
   * Remove property from favorites
   */
  static async removeFromFavorites(): Promise<FavoritesResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    // Mock success response
    return {
      success: true,
      message: 'お気に入りから削除しました',
    };
  }
}
