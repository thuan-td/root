'use client';

import { useState } from 'react';
import DashboardSidebar from '../../dashboard/components/DashboardSidebar';
import { FormCheckbox } from '@/components/common/FormCheckbox';
import { FormButton } from '@/components/common/FormButton';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';
import {
  useNotificationPreferences,
  useUpdateNotificationPreferences,
} from '../hooks';
import { NotificationService } from '../services/notification.service';
import type {
  NotificationPreferences,
  NotificationCategoryGroup,
} from '../types/notification.types';

interface NotificationSectionProps {
  group: NotificationCategoryGroup;
  preferences: NotificationPreferences;
  onToggle: (settingId: string, value: boolean) => void;
}

function NotificationSection({ group, onToggle }: NotificationSectionProps) {
  return (
    <div className="mb-8 border-b border-gray-200 dark:border-gray-700 pb-8 last:border-0 last:pb-0">
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-4">
        <h2 className="font-bold text-lg text-gray-900 dark:text-white">
          {group.title}
        </h2>
        {group.required && (
          <span className="text-xs border border-red-400 text-red-500 px-1.5 py-0.5 rounded">
            必須
          </span>
        )}
      </div>

      {/* Settings List */}
      <div className="space-y-4 ml-2">
        {group.settings.map(setting => (
          <FormCheckbox
            key={setting.id}
            id={setting.id}
            label={setting.label}
            checked={setting.enabled}
            onChange={value => onToggle(setting.id, value)}
            disabled={setting.required}
            required={setting.required}
          />
        ))}
      </div>
    </div>
  );
}

export default function NotificationsPage() {
  const { data, isLoading, isError, error } = useNotificationPreferences();
  const updatePreferences = useUpdateNotificationPreferences();

  const [localPreferences, setLocalPreferences] =
    useState<NotificationPreferences | null>(null);
  const [hasChanges, setHasChanges] = useState(false);

  // Initialize local preferences when data loads
  const preferences = localPreferences || data?.preferences;

  // Initialize local state when data changes
  if (data?.preferences && !localPreferences) {
    setLocalPreferences(data.preferences);
  }

  const handleToggle = (settingId: string, value: boolean) => {
    if (!preferences) return;

    const newPreferences = {
      ...preferences,
      [settingId]: value,
    };

    setLocalPreferences(newPreferences);
    setHasChanges(true);
  };

  const handleSave = async () => {
    if (!localPreferences || !hasChanges) return;

    try {
      await updatePreferences.mutateAsync(localPreferences);
      setHasChanges(false);
      alert('通知設定が正常に更新されました');
    } catch (err) {
      console.error('Failed to update notification preferences:', err);
      alert(
        err instanceof Error
          ? err.message
          : '更新に失敗しました。もう一度お試しください。',
      );
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background-admin))] dark:bg-background-dark">
        <LoadingSpinner />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[hsl(var(--background-admin))] dark:bg-background-dark">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-2">
            エラーが発生しました
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {error?.message || 'データの読み込みに失敗しました'}
          </p>
        </div>
      </div>
    );
  }

  if (!preferences) {
    return null;
  }

  const categories = NotificationService.getNotificationCategories(preferences);

  return (
    <div className="text-gray-800 bg-[hsl(var(--background-admin))] dark:text-gray-200 min-h-screen flex flex-col font-body">
      {/* Header */}
      <header className="w-full dark:bg-surface-dark py-6 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-center text-2xl font-bold tracking-wide text-black dark:text-white">
          通知設定
        </h1>
      </header>

      {/* Main Layout */}
      <div className="flex flex-col md:flex-row flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-10">
          <div className="w-full max-w-4xl mx-auto bg-white dark:bg-surface-dark shadow-sm rounded-xl p-6 md:p-10 border border-gray-100 dark:border-gray-800">
            {/* Introduction Text */}
            <p className="text-sm md:text-base mb-6 leading-relaxed text-gray-700 dark:text-gray-300">
              本サービスでは、より快適にご利用いただくために、各種お知らせやご案内をメール・プッシュ通知などで配信いたします。
              <br />
              配信する情報は、システムメンテナンス、セキュリティ、サービス改善、キャンペーン等に関する内容が含まれます。受信の可否や通知の種類は、下記よりご自身でいつでも変更いただけます。
            </p>

            {/* Required Notice */}
            <div className="border border-red-300 bg-red-50 dark:bg-red-900/10 dark:border-red-800 rounded-lg p-5 mb-10">
              <h3 className="text-red-500 font-bold mb-2 text-sm">
                必須通知について
              </h3>
              <p className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
                必須通知（システム運用・セキュリティ・法律上必要などの案内等）は、本サービスのご利用上、全てのお客様に送信しております。
                <br />
                これらの通知につきましては、配信停止や受信設定の変更を承ることができませんので、ご了承ください。
              </p>
            </div>

            {/* Notification Categories */}
            {categories.map(group => (
              <NotificationSection
                key={group.category}
                group={group}
                preferences={preferences}
                onToggle={handleToggle}
              />
            ))}

            {/* Save Button */}
            <div className="flex justify-center mt-12 pb-6">
              <FormButton
                variant="danger"
                onClick={handleSave}
                loading={updatePreferences.isPending}
                disabled={!hasChanges || updatePreferences.isPending}
                type="button"
                className="relative group"
              >
                <span>変更内容を保存する</span>
                {!updatePreferences.isPending && (
                  <span className="absolute right-4 w-4 h-4 bg-white rounded-full flex items-center justify-center text-button-danger">
                    <span className="material-icons-outlined !text-[15px]">
                      chevron_right
                    </span>
                  </span>
                )}
              </FormButton>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
