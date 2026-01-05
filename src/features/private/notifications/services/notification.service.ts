import type {
  NotificationData,
  NotificationPreferences,
  NotificationCategoryGroup,
  UpdateNotificationPreferencesResponse,
} from '../types/notification.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';

/**
 * Notification Service
 * Handles all notification preferences API calls
 */
export class NotificationService {
  /**
   * Fetch user notification preferences
   * @returns Promise with notification data
   */
  static async getNotificationPreferences(): Promise<NotificationData> {
    try {
      // In development, use mock data
      if (process.env.NODE_ENV === 'development') {
        return await this.getMockNotificationData();
      }

      // In production, call actual API
      const response = await fetch(
        `${API_BASE_URL}/notifications/preferences`,
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
        throw new Error(
          `Failed to fetch notification preferences: ${response.status}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching notification preferences:', error);
      // Fallback to mock data on error
      return await this.getMockNotificationData();
    }
  }

  /**
   * Update notification preferences
   * @param preferences - Partial preferences to update
   * @returns Promise with update response
   */
  static async updateNotificationPreferences(
    preferences: Partial<NotificationPreferences>,
  ): Promise<UpdateNotificationPreferencesResponse> {
    try {
      // In development, simulate API call
      if (process.env.NODE_ENV === 'development') {
        return await this.mockUpdatePreferences(preferences);
      }

      // In production, call actual API
      const response = await fetch(
        `${API_BASE_URL}/notifications/preferences`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            // Add auth token from cookies or localStorage
            // 'Authorization': `Bearer ${token}`,
          },
          credentials: 'include',
          body: JSON.stringify({ preferences }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message ||
            `Failed to update notification preferences: ${response.status}`,
        );
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error updating notification preferences:', error);
      throw error;
    }
  }

  /**
   * Get notification category groups with settings
   */
  static getNotificationCategories(
    preferences: NotificationPreferences,
  ): NotificationCategoryGroup[] {
    return [
      {
        category: 'account',
        title: 'アカウント / セキュリティ',
        required: true,
        settings: [
          {
            id: 'accountVerification',
            label: '本人確認結果',
            enabled: preferences.accountVerification,
            required: true,
          },
          {
            id: 'passwordChange',
            label: 'パスワード変更',
            enabled: preferences.passwordChange,
            required: true,
          },
          {
            id: 'loginAlert',
            label: 'ログイン警告',
            enabled: preferences.loginAlert,
            required: true,
          },
        ],
      },
      {
        category: 'screening',
        title: '審査・契約',
        required: true,
        settings: [
          {
            id: 'screeningResult',
            label: '審査受付 / 結果',
            enabled: preferences.screeningResult,
            required: true,
          },
          {
            id: 'contractCompletion',
            label: '契約締結 / 差戻し',
            enabled: preferences.contractCompletion,
            required: true,
          },
          {
            id: 'cancellationConfirmation',
            label: 'キャンセル / 解約確定',
            enabled: preferences.cancellationConfirmation,
            required: true,
          },
        ],
      },
      {
        category: 'payment',
        title: '支払い・請求',
        required: true,
        settings: [
          {
            id: 'initialPayment',
            label: '初期費用入金確認',
            enabled: preferences.initialPayment,
            required: true,
          },
          {
            id: 'monthlyInvoice',
            label: '毎月請求書発行',
            enabled: preferences.monthlyInvoice,
            required: true,
          },
          {
            id: 'paymentStatus',
            label: '決済成功 / 失敗',
            enabled: preferences.paymentStatus,
            required: true,
          },
          {
            id: 'storageUpdate',
            label: '貸倉庫ストレージ更新',
            enabled: preferences.storageUpdate,
            required: true,
          },
        ],
      },
      {
        category: 'operation',
        title: '運用連絡',
        required: true,
        settings: [
          {
            id: 'urgentMaintenance',
            label: '緊急メンテナンス',
            enabled: preferences.urgentMaintenance,
            required: true,
          },
          {
            id: 'incidentReport',
            label: '障害報告',
            enabled: preferences.incidentReport,
            required: true,
          },
          {
            id: 'facilityStatus',
            label: '施設利用停止 / 再開',
            enabled: preferences.facilityStatus,
            required: true,
          },
        ],
      },
      {
        category: 'reminder',
        title: 'リマインダー',
        required: false,
        settings: [
          {
            id: 'paymentReminder',
            label: '支払日リマインダー',
            enabled: preferences.paymentReminder,
            required: false,
          },
          {
            id: 'documentReminder',
            label: '各種期限（書類 / 口座登録等）',
            enabled: preferences.documentReminder,
            required: false,
          },
          {
            id: 'paymentDeadline',
            label: '決済成功 / 失敗',
            enabled: preferences.paymentDeadline,
            required: false,
          },
        ],
      },
      {
        category: 'marketing',
        title: 'マーケティング / お知らせ',
        required: false,
        settings: [
          {
            id: 'newOpening',
            label: '新規オープン',
            enabled: preferences.newOpening,
            required: false,
          },
          {
            id: 'campaignNewsletter',
            label: 'キャンペーン / ニュースレター',
            enabled: preferences.campaignNewsletter,
            required: false,
          },
        ],
      },
      {
        category: 'survey',
        title: 'アンケート / 満足度',
        required: false,
        settings: [
          {
            id: 'usageSurvey',
            label: '利用アンケート',
            enabled: preferences.usageSurvey,
            required: false,
          },
          {
            id: 'satisfactionSurvey',
            label: '満足度調査',
            enabled: preferences.satisfactionSurvey,
            required: false,
          },
        ],
      },
    ];
  }

  /**
   * Mock notification data for development
   */
  private static async getMockNotificationData(): Promise<NotificationData> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return {
      preferences: {
        // Account / Security (必須 - all true)
        accountVerification: true,
        passwordChange: true,
        loginAlert: true,

        // Screening / Contract (必須 - all true)
        screeningResult: true,
        contractCompletion: true,
        cancellationConfirmation: true,

        // Payment / Billing (必須 - all true)
        initialPayment: true,
        monthlyInvoice: true,
        paymentStatus: true,
        storageUpdate: true,

        // Operation Contact (必須 - all true)
        urgentMaintenance: true,
        incidentReport: true,
        facilityStatus: true,

        // Reminder (任意 - can be toggled)
        paymentReminder: true,
        documentReminder: false,
        paymentDeadline: false,

        // Marketing / お知らせ (任意 - can be toggled)
        newOpening: true,
        campaignNewsletter: false,

        // Survey / 満足度 (任意 - can be toggled)
        usageSurvey: true,
        satisfactionSurvey: false,
      },
      updatedAt: new Date().toISOString(),
    };
  }

  /**
   * Mock update preferences for development
   */
  private static async mockUpdatePreferences(
    preferences: Partial<NotificationPreferences>,
  ): Promise<UpdateNotificationPreferencesResponse> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    const currentData = await this.getMockNotificationData();

    return {
      success: true,
      message: '通知設定が正常に更新されました',
      data: {
        ...currentData.preferences,
        ...preferences,
      },
    };
  }
}
