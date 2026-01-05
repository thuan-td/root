'use client';

import { useState } from 'react';
import type {
  FavoritesFilter,
  CancelWaitingStatus,
} from '../types/favorites.types';
import type { ContractStatus } from '../../contract/types/contract.types';

interface FilterPanelProps {
  filter: FavoritesFilter;
  onFilterChange: (filter: FavoritesFilter) => void;
  onApplyFilter?: () => void;
}

export default function FilterPanel({
  filter,
  onFilterChange,
  onApplyFilter,
}: FilterPanelProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const statusOptions: { value: ContractStatus; label: string }[] = [
    { value: 'active', label: '空室' },
    { value: 'pending', label: '申込みあり' },
    { value: 'expired', label: '契約済' },
  ];

  const cancelWaitingOptions: { value: CancelWaitingStatus; label: string }[] =
    [
      { value: 'registered', label: '登録中' },
      { value: 'notified', label: '通知済' },
      { value: 'expired', label: '失効' },
    ];

  const handleStatusChange = (status: ContractStatus, checked: boolean) => {
    const currentStatuses = filter.status || [];
    const newStatuses = checked
      ? [...currentStatuses, status]
      : currentStatuses.filter(s => s !== status);

    onFilterChange({
      ...filter,
      status: newStatuses.length > 0 ? newStatuses : undefined,
    });
  };

  const handleApplicationsChange = (value: boolean | null) => {
    onFilterChange({
      ...filter,
      hasApplications: value,
    });
  };

  const handleCancelWaitingChange = (
    status: CancelWaitingStatus,
    checked: boolean,
  ) => {
    const currentStatuses = filter.cancelWaiting || [];
    const newStatuses = checked
      ? [...currentStatuses, status]
      : currentStatuses.filter(s => s !== status);

    onFilterChange({
      ...filter,
      cancelWaiting: newStatuses.length > 0 ? newStatuses : undefined,
    });
  };

  const handleReset = () => {
    onFilterChange({
      status: undefined,
      hasApplications: null,
      cancelWaiting: undefined,
    });
  };

  return (
    <section className="bg-card-light dark:bg-card-dark rounded-lg shadow-sm mb-6 border border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">条件で絞り込む</h2>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-red-700"
          >
            <span className="material-icons-outlined">
              {isExpanded ? 'remove_circle_outline' : 'add_circle_outline'}
            </span>
          </button>
        </div>

        {/* Filter Content */}
        {isExpanded && (
          <div className="space-y-4">
            {/* Status Filter */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="w-32 text-sm font-bold text-text-main-light dark:text-text-main-dark">
                ステータス
              </span>
              <div className="flex flex-wrap gap-3">
                {statusOptions.map(option => {
                  const isChecked =
                    filter.status?.includes(option.value) || false;
                  return (
                    <label key={option.value} className="cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={e =>
                          handleStatusChange(option.value, e.target.checked)
                        }
                        className="peer sr-only"
                      />
                      <div
                        className={`px-3 py-1.5 border rounded flex items-center gap-2 bg-white dark:bg-gray-800 text-sm transition-colors ${
                          isChecked
                            ? 'border-primary text-primary'
                            : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <span className="material-icons-outlined text-lg">
                          {isChecked ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <span>{option.label}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Applications Filter */}
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <span className="w-32 text-sm font-bold text-text-main-light dark:text-text-main-dark">
                申込み件数
              </span>
              <div className="flex flex-wrap gap-3">
                {[
                  { value: true, label: 'あり' },
                  { value: false, label: 'なし' },
                ].map(option => {
                  const isChecked = filter.hasApplications === option.value;
                  return (
                    <label
                      key={String(option.value)}
                      className="cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() =>
                          handleApplicationsChange(
                            isChecked ? null : option.value,
                          )
                        }
                        className="peer sr-only"
                      />
                      <div
                        className={`px-3 py-1.5 border rounded flex items-center gap-2 bg-white dark:bg-gray-800 text-sm transition-colors ${
                          isChecked
                            ? 'border-primary text-primary'
                            : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <span className="material-icons-outlined text-lg">
                          {isChecked ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <span>{option.label}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Cancel Waiting Filter */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 border-b border-gray-100 dark:border-gray-700 pb-6">
              <span className="w-32 text-sm font-bold text-text-main-light dark:text-text-main-dark">
                キャンセル待ち
              </span>
              <div className="flex flex-wrap gap-3">
                {cancelWaitingOptions.map(option => {
                  const isChecked =
                    filter.cancelWaiting?.includes(option.value) || false;
                  return (
                    <label key={option.value} className="cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={e =>
                          handleCancelWaitingChange(
                            option.value,
                            e.target.checked,
                          )
                        }
                        className="peer sr-only"
                      />
                      <div
                        className={`px-3 py-1.5 border rounded flex items-center gap-2 bg-white dark:bg-gray-800 text-sm transition-colors ${
                          isChecked
                            ? 'border-primary text-primary'
                            : 'border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                      >
                        <span className="material-icons-outlined text-lg">
                          {isChecked ? 'check_box' : 'check_box_outline_blank'}
                        </span>
                        <span>{option.label}</span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center items-center gap-6 mt-6">
              <button
                onClick={handleReset}
                className="text-blue-500 hover:text-blue-600 underline text-sm dark:text-blue-400"
              >
                条件をクリア
              </button>
              <button
                onClick={onApplyFilter}
                className="bg-primary hover:bg-red-700 text-white px-8 py-2 rounded text-sm font-bold shadow-sm transition-colors"
              >
                絞り込む
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
