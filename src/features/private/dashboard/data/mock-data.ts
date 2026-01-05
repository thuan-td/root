import type {
  DashboardData,
  User,
  Contract,
  Favorite,
  Payment,
  NewsItem,
  DashboardStats,
} from '../types/dashboard.types';

// Mock User Data
export const mockUser: User = {
  id: 'user-001',
  name: '山田 太郎',
  email: 'yamada.taro@example.com',
  phoneNumber: '090-1234-5678',
  createdAt: '2024-01-15T10:00:00Z',
};

// Mock Contracts
export const mockContracts: Contract[] = [
  {
    id: 'contract-001',
    propertyName: '西梅田ルートストレージ',
    propertyId: 'property-001',
    unitNumber: 'A-101',
    status: 'active',
    startDate: '2025-01-01',
    monthlyFee: 15000,
    imageUrl: '/images/storage-1.jpg',
  },
  {
    id: 'contract-002',
    propertyName: '鹿屋球場ルートストレージ',
    propertyId: 'property-002',
    unitNumber: 'B-205',
    status: 'active',
    startDate: '2024-11-01',
    monthlyFee: 12000,
    imageUrl: '/images/storage-2.jpg',
  },
  {
    id: 'contract-003',
    propertyName: '東京タワールートストレージ',
    propertyId: 'property-003',
    unitNumber: 'C-302',
    status: 'pending',
    startDate: '2025-02-01',
    monthlyFee: 18000,
    imageUrl: '/images/storage-3.jpg',
  },
];

// Mock Favorites
export const mockFavorites: Favorite[] = [
  {
    id: 'fav-001',
    propertyId: 'property-004',
    propertyName: '新宿ルートストレージ',
    address: '東京都新宿区西新宿1-1-1',
    monthlyFee: 20000,
    size: '3畳',
    imageUrl: '/images/storage-4.jpg',
    addedAt: '2025-01-03T14:30:00Z',
  },
  {
    id: 'fav-002',
    propertyId: 'property-005',
    propertyName: '渋谷ルートストレージ',
    address: '東京都渋谷区渋谷2-2-2',
    monthlyFee: 22000,
    size: '4畳',
    imageUrl: '/images/storage-5.jpg',
    addedAt: '2025-01-02T10:00:00Z',
  },
  {
    id: 'fav-003',
    propertyId: 'property-006',
    propertyName: '池袋ルートストレージ',
    address: '東京都豊島区池袋3-3-3',
    monthlyFee: 16000,
    size: '2畳',
    imageUrl: '/images/storage-6.jpg',
    addedAt: '2024-12-28T16:45:00Z',
  },
];

// Mock Payments
export const mockPayments: Payment[] = [
  {
    id: 'payment-001',
    contractId: 'contract-001',
    amount: 15000,
    status: 'paid',
    dueDate: '2025-01-05',
    paidAt: '2025-01-03T09:00:00Z',
    method: 'credit_card',
  },
  {
    id: 'payment-002',
    contractId: 'contract-002',
    amount: 12000,
    status: 'paid',
    dueDate: '2025-01-05',
    paidAt: '2025-01-04T14:30:00Z',
    method: 'bank_transfer',
  },
  {
    id: 'payment-003',
    contractId: 'contract-001',
    amount: 15000,
    status: 'pending',
    dueDate: '2025-02-05',
  },
  {
    id: 'payment-004',
    contractId: 'contract-002',
    amount: 12000,
    status: 'pending',
    dueDate: '2025-02-05',
  },
];

// Mock News
export const mockNews: NewsItem[] = [
  {
    id: 'news-001',
    date: '2025年09月02日',
    title: '2025年9月1日 西梅田ルートストレージ オープンしました!!',
    badge: 'OPEN',
    badgeType: 'open',
    url: '/news/nishi-umeda-opening',
  },
  {
    id: 'news-002',
    date: '2025年09月02日',
    title: '2025年9月1日 西梅田ルートストレージ オープンしました!!',
    badge: 'OPEN',
    badgeType: 'open',
    url: '/news/nishi-umeda-opening-2',
  },
  {
    id: 'news-003',
    date: '2025年05月13日',
    title: ' 2025年11月1日 鹿屋球場ルートストレージ オープン!!',
    badge: 'OPEN',
    badgeType: 'open',
    url: '/news/kanoya-opening',
  },
  {
    id: 'news-004',
    date: '2025年04月01日',
    title:
      '2025年4月1日より、ルートストアハブ株式会社から、ルート株式会社へ会社名が変更となりました。',
    badge: 'NEWS',
    badgeType: 'news',
    url: '/news/company-name-change',
  },
  {
    id: 'news-005',
    date: '2024年07月03日',
    title:
      '2024年7月 タイムズカーシェアとの連携を開始しました 詳細はお問い合わせください',
    badge: 'NEWS',
    badgeType: 'news',
    url: '/news/times-car-share-partnership',
  },
];

// Mock Dashboard Stats
export const mockStats: DashboardStats = {
  totalContracts: 3,
  activeContracts: 2,
  pendingOrders: 1,
  totalFavorites: 3,
  pendingPayments: 2,
  totalPaid: 27000,
};

// Complete Mock Dashboard Data
export const mockDashboardData: DashboardData = {
  user: mockUser,
  stats: mockStats,
  contracts: mockContracts,
  favorites: mockFavorites,
  payments: mockPayments,
  news: mockNews,
};

// Helper function to simulate API delay
export const delay = (ms: number) =>
  new Promise(resolve => setTimeout(resolve, ms));

// Mock API response
export const fetchMockDashboardData = async (): Promise<DashboardData> => {
  await delay(800); // Simulate network delay
  return mockDashboardData;
};
