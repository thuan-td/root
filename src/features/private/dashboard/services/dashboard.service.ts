import type { DashboardData } from '../types/dashboard.types';
import { fetchMockDashboardData } from '../data/mock-data';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * Dashboard Service
 * Handles all dashboard-related API calls
 */
export class DashboardService {
  /**
   * Fetch dashboard data for the authenticated user
   * @param userId - User ID (optional, can be extracted from auth token)
   * @returns Promise with dashboard data
   */
  static async getDashboardData(): Promise<DashboardData> {
    try {
      // In development, use mock data
      if (process.env.NODE_ENV === 'development') {
        return await fetchMockDashboardData();
      }

      // In production, call actual API
      const response = await fetch(`${API_BASE_URL}/dashboard`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          // Add auth token from cookies or localStorage
          // 'Authorization': `Bearer ${token}`,
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch dashboard data: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      // Fallback to mock data on error
      return await fetchMockDashboardData();
    }
  }

  /**
   * Fetch user statistics
   */
  static async getStats() {
    try {
      const response = await fetch(`${API_BASE_URL}/dashboard/stats`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch stats: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching stats:', error);
      throw error;
    }
  }

  /**
   * Fetch user contracts
   */
  static async getContracts() {
    try {
      const response = await fetch(`${API_BASE_URL}/contracts`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch contracts: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching contracts:', error);
      throw error;
    }
  }

  /**
   * Fetch user favorites
   */
  static async getFavorites() {
    try {
      const response = await fetch(`${API_BASE_URL}/favorites`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch favorites: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching favorites:', error);
      throw error;
    }
  }

  /**
   * Fetch payment history
   */
  static async getPayments() {
    try {
      const response = await fetch(`${API_BASE_URL}/payments`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch payments: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching payments:', error);
      throw error;
    }
  }

  /**
   * Fetch news/notifications
   */
  static async getNews(limit?: number) {
    try {
      const url = new URL(`${API_BASE_URL}/news`);
      if (limit) url.searchParams.set('limit', limit.toString());

      const response = await fetch(url.toString(), {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch news: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  }
}
