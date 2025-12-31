/**
 * Use Cases Filters Component
 *
 * Filter buttons for service and usage types
 * Client Component for interactivity
 */

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ServiceType, UsageType, FilterOption } from '../types';

const SERVICE_FILTERS: FilterOption[] = [
  { value: 'all', label: '全て' },
  { value: 'storage', label: 'ルートストレージ' },
  { value: 'hobby', label: 'ルートホビー' },
  { value: 'garage', label: 'ルートガレージ' },
  { value: 'parking', label: 'ルートパーキング' },
];

const USAGE_FILTERS: FilterOption[] = [
  { value: 'all', label: '全て' },
  { value: 'childcare', label: '子育て' },
  { value: 'moving', label: '引っ越し' },
  { value: 'office', label: 'オフィス' },
  { value: 'hobby', label: '趣味' },
  { value: 'vehicle', label: 'バイク・車' },
  { value: 'sports', label: 'スポーツ用品' },
  { value: 'parking', label: 'パーキング' },
];

interface UseCasesFiltersProps {
  onServiceFilter?: (type: ServiceType) => void;
  onUsageFilter?: (type: UsageType) => void;
}

export function UseCasesFilters({
  onServiceFilter,
  onUsageFilter,
}: UseCasesFiltersProps = {}) {
  const [selectedService, setSelectedService] = useState<ServiceType>('all');
  const [selectedUsage, setSelectedUsage] = useState<UsageType>('all');

  const handleServiceClick = (value: string) => {
    const serviceType = value as ServiceType;
    setSelectedService(serviceType);
    onServiceFilter?.(serviceType);
  };

  const handleUsageClick = (value: string) => {
    const usageType = value as UsageType;
    setSelectedUsage(usageType);
    onUsageFilter?.(usageType);
  };

  return (
    <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 rounded-lg p-6 md:p-8 shadow-sm">
      {/* Service Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center mb-6 border-b border-dashed border-gray-200 dark:border-gray-600 pb-6 md:pb-0 md:border-none">
        <span className="font-bold text-sm w-32 shrink-0 mb-3 md:mb-0 dark:text-gray-200">
          サービスで絞り込み
        </span>
        <div className="flex flex-wrap gap-2">
          {SERVICE_FILTERS.map(filter => (
            <Button
              key={filter.value}
              onClick={() => handleServiceClick(filter.value)}
              variant={selectedService === filter.value ? 'default' : 'outline'}
              size="sm"
              className={
                selectedService === filter.value
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-surface-light dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Usage Filters */}
      <div className="flex flex-col md:flex-row items-start md:items-center">
        <span className="font-bold text-sm w-32 shrink-0 mb-3 md:mb-0 dark:text-gray-200">
          用途で絞り込み
        </span>
        <div className="flex flex-wrap gap-2">
          {USAGE_FILTERS.map(filter => (
            <Button
              key={filter.value}
              onClick={() => handleUsageClick(filter.value)}
              variant={selectedUsage === filter.value ? 'default' : 'outline'}
              size="sm"
              className={
                selectedUsage === filter.value
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-surface-light dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
              }
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
