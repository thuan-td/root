// Notification Types

export type NotificationCategory =
  | 'account'
  | 'screening'
  | 'payment'
  | 'operation'
  | 'reminder'
  | 'marketing'
  | 'survey';

export interface NotificationSetting {
  id: string;
  label: string;
  enabled: boolean;
  required: boolean; // 必須通知 (変更不可)
}

export interface NotificationCategoryGroup {
  category: NotificationCategory;
  title: string;
  required: boolean; // Category có badge "必須" hay không
  settings: NotificationSetting[];
}

export interface NotificationPreferences {
  // Account / Security (必須)
  accountVerification: boolean; // 本人確認結果
  passwordChange: boolean; // パスワード変更
  loginAlert: boolean; // ログイン警告

  // Screening / Contract (必須)
  screeningResult: boolean; // 審査受付 / 結果
  contractCompletion: boolean; // 契約締結 / 差戻し
  cancellationConfirmation: boolean; // キャンセル / 解約確定

  // Payment / Billing (必須)
  initialPayment: boolean; // 初期費用入金確認
  monthlyInvoice: boolean; // 毎月請求書発行
  paymentStatus: boolean; // 決済成功 / 失敗
  storageUpdate: boolean; // 貸倉庫ストレージ更新

  // Operation Contact (必須)
  urgentMaintenance: boolean; // 緊急メンテナンス
  incidentReport: boolean; // 障害報告
  facilityStatus: boolean; // 施設利用停止 / 再開

  // Reminder (任意)
  paymentReminder: boolean; // 支払日リマインダー
  documentReminder: boolean; // 各種期限（書類 / 口座登録等）
  paymentDeadline: boolean; // 決済成功 / 失敗

  // Marketing / お知らせ (任意)
  newOpening: boolean; // 新規オープン
  campaignNewsletter: boolean; // キャンペーン / ニュースレター

  // Survey / 満足度 (任意)
  usageSurvey: boolean; // 利用アンケート
  satisfactionSurvey: boolean; // 満足度調査
}

export interface UpdateNotificationPreferencesRequest {
  preferences: Partial<NotificationPreferences>;
}

export interface UpdateNotificationPreferencesResponse {
  success: boolean;
  message: string;
  data?: NotificationPreferences;
}

export interface NotificationData {
  preferences: NotificationPreferences;
  updatedAt: string;
}
