// Dashboard Types

export interface User {
  id: string;
  name: string;
  email: string;
  phoneNumber?: string;
  createdAt: string;
}

export interface Contract {
  id: string;
  propertyName: string;
  propertyId: string;
  unitNumber: string;
  status: 'active' | 'pending' | 'expired';
  startDate: string;
  endDate?: string;
  monthlyFee: number;
  imageUrl?: string;
}

export interface Favorite {
  id: string;
  propertyId: string;
  propertyName: string;
  address: string;
  monthlyFee: number;
  size: string;
  imageUrl?: string;
  addedAt: string;
}

export interface Payment {
  id: string;
  contractId: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
  paidAt?: string;
  method?: 'credit_card' | 'bank_transfer' | 'cash';
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  badge: string;
  badgeType: 'open' | 'news';
  url?: string;
  content?: string;
}

export interface DashboardStats {
  totalContracts: number;
  activeContracts: number;
  pendingOrders: number;
  totalFavorites: number;
  pendingPayments: number;
  totalPaid: number;
}

export interface DashboardData {
  user: User;
  stats: DashboardStats;
  contracts: Contract[];
  favorites: Favorite[];
  payments: Payment[];
  news: NewsItem[];
}

export interface QuickAccessCard {
  href: string;
  icon: string;
  label: string;
  count?: number;
}
